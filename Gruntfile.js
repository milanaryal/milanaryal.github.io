/*!
 * Milan Aryal Gruntfile (https://milanaryal.com)
 * Copyright 2015 Milan Aryal
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 */

// Getting started with Grunt:
//
// 1. Install Node.js
// 2. $ npm install -g grunt-cli
// 3. $ cd ./milanaryal.github.io
// 4. $ npm install
// 5. $ grunt
//
//
// Grunt task(s):
//
// - Default task (test JS and SCSS)
//   $ grunt
//
// - Only test JS
//   $ grunt test-js
//
// - Only test SCSS
//   $ grunt test-scss
//
// - Only distribute JS
//   $ grunt dist-js
//
// - Only distribute JS
//   $ grunt dist-css
//
// - Full distribution of JS, CSS, and Fonts
//  $ grunt dist

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * <%= pkg.title %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)\n' +
            ' */\n',

    // Task(s) configuration.
    clean: {
      css: [
        'assets/css'
      ],
      js: [
        'assets/js'
      ],
      fonts: [
        'assets/fonts'
      ]
    },

    // JS build configuration.
    jshint: {
      options: {
        jshintrc: 'src/js/.jshintrc'
      },
      core: {
        src: ['src/js/**/*.js', '!src/js/jquery.js', '!src/js/bootstrap/*.js']
      }
    },

    jscs: {
      options: {
        config: 'src/js/.jscsrc',
        options: {
         requireCamelCaseOrUpperCaseIdentifiers: null
       }
      },
      core: {
        src: ['src/js/**/*.js', '!src/js/jquery.js', '!src/js/bootstrap/*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>\n',
        stripBanners: false
      },
      core: {
        src: [
          'src/js/jquery.js',
          'src/js/bootstrap/transition.js',
          // 'src/js/bootstrap/alert.js',
          // 'src/js/bootstrap/button.js',
          // 'src/js/bootstrap/carousel.js',
          'src/js/bootstrap/collapse.js',
          // 'src/js/bootstrap/dropdown.js',
          // 'src/js/bootstrap/modal.js',
          'src/js/bootstrap/tooltip.js',
          // 'src/js/bootstrap/popover.js',
          // 'src/js/bootstrap/scrollspy.js',
          // 'src/js/bootstrap/tab.js',
          // 'src/js/bootstrap/affix.js',
          'src/js/nprogress.js',
          'src/js/pil.js',
          'src/js/scripts.js'
        ],
        dest: 'assets/js/scripts.js'
      }
    },

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: false
      },
      core: {
        src: '<%= concat.core.dest %>',
        dest: 'assets/js/scripts.min.js'
      }
    },

    // CSS build configuration.
    scsslint: {
      options: {
        bundleExec: false,
        config: 'src/scss/.scss-lint.yml',
        reporterOutput: null
      },
      src: ['src/scss/**/*.scss', '!src/scss/bootstrap/**/*.scss', '!src/scss/font-awesome/**/*.scss']
    },

    exec: {
      postcss: {
        command: 'npm run postcss'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie9',
        keepSpecialComments: false,
        sourceMap: false,
        advanced: true
      },
      core: {
        src: 'assets/css/styles.css',
        dest: 'assets/css/styles.min.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: 'src/fonts/',
        src: [
          '**/*'
        ],
        dest: 'assets/fonts/'
      }
    },

    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['dist-js'],
         options: {
          spawn: false
        }
      },
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['dist-css'],
        options: {
          spawn: false
        }
      }
    }

  });


  // Load necessary grunt tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies',
    // Exclude Sass compilers. We choose the one to load later on.
    pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass'] });

  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);

  // Test JS.
  grunt.registerTask('test-js', ['jshint', 'jscs']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // Test SCSS.
  grunt.registerTask('test-scss', ['scsslint']);

  // CSS distribution task.
  // Supported Compilers: sass (Ruby) and libsass.
  (function (sassCompilerName) {
    require('./src/grunt/sass-compile/' + sassCompilerName + '.js')(grunt);
  })(process.env.SASS_COMPILER || 'libsass');
  grunt.registerTask('sass-compile', ['sass']);

  grunt.registerTask('dist-css', ['sass-compile', 'exec:postcss', 'cssmin']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'copy', 'dist-js', 'dist-css']);

  // Default task(s).
  grunt.registerTask('default', ['test-js', 'test-scss']);

};
