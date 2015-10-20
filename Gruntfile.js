/*!
 * Milan Aryal Gruntfile (http://milanaryal.com)
 * Copyright 2015 Milan Aryal
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    project: {
      src: 'src',
      app: '',
      assets: 'assets',
      banner: '/*!\n' +
              ' * <%= pkg.title %> (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)\n' +
              ' */\n',
      css: [
        '<%= project.src %>/scss/styles.scss'
      ],
      js: [
        '<%= project.src %>/js/jquery.js',
        '<%= project.src %>/js/bootstrap/transition.js',
        // '<%= project.src %>/js/bootstrap/alert.js',
        // '<%= project.src %>/js/bootstrap/button.js',
        // '<%= project.src %>/js/bootstrap/carousel.js',
        '<%= project.src %>/js/bootstrap/collapse.js',
        // '<%= project.src %>/js/bootstrap/dropdown.js',
        // '<%= project.src %>/js/bootstrap/modal.js',
        '<%= project.src %>/js/bootstrap/tooltip.js',
        // '<%= project.src %>/js/bootstrap/popover.js',
        // '<%= project.src %>/js/bootstrap/scrollspy.js',
        // '<%= project.src %>/js/bootstrap/tab.js',
        // '<%= project.src %>/js/bootstrap/affix.js',
        '<%= project.src %>/js/anchor.js',
        '<%= project.src %>/js/bigfoot.js',
        '<%= project.src %>/js/scripts.js'
      ]
    },

    // Task(s) configuration.
    clean: {
      css: [
        '<%= project.assets %>/css/styles.css',
        '<%= project.assets %>/css/styles.css.map',
        '<%= project.assets %>/css/styles.min.css',
        '<%= project.assets %>/css/styles.min.css.map'
      ],
      js: [
        '<%= project.assets %>/js/scripts.js',
        '<%= project.assets %>/js/scripts.min.js'
      ],
      fonts: [
        '<%= project.assets %>/fonts',
      ]
    },

    // JS build configuration
    jshint: {
      options: {
        jshintrc: '<%= project.src %>/js/bootstrap/.jshintrc'
      },
      core: {
        src: ['<%= project.js %>', '!<%= project.src %>/js/jquery.js']
      }
    },

    jscs: {
      options: {
        config: '<%= project.src %>/js/bootstrap/.jscsrc'
      },
      core: {
        src: ['<%= project.js %>', '!<%= project.src %>/js/jquery.js']
      }
    },

    concat: {
      options: {
        banner: '<%= project.banner %>\n',
        stripBanners: false
      },
      core: {
        src: '<%= project.js %>',
        dest: '<%= project.assets %>/js/scripts.js'
      }
    },

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: '0'
      },
      core: {
        src: '<%= project.js %>',
        dest: '<%= project.assets %>/js/scripts.min.js'
      }
    },

    // CSS build configuration
    scsslint: {
      options: {
        config: '<%= project.src %>/scss/bootstrap/.scss-lint.yml',
        reporterOutput: null
      },
      src: ['<%= project.src %>/scss/*.scss', '!<%= project.src %>/scss/bootstrap/_normalize.scss']
    },

    sass: {
      options: {
        includePaths: ['scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          '<%= project.assets %>/css/styles.css': '<%= project.css %>'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 35',
          'Firefox >= 31',
          'Explorer >= 9',
          'iOS >= 7',
          'Opera >= 12',
          'Safari >= 7.1'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: '<%= project.assets %>/css/styles.css'
      }
    },

    csscomb: {
      options: {
        config: '<%= project.src %>/scss/bootstrap/.csscomb.json'
      },
      core: {
        src: '<%= project.assets %>/css/styles.css',
        dest: '<%= project.assets %>/css/styles.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie9',
        keepSpecialComments: '0',
        // sourceMap: true,
        noAdvanced: true
      },
      core: {
        src: '<%= project.assets %>/css/styles.css',
        dest: '<%= project.assets %>/css/styles.min.css'
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: '<%= project.src %>/fonts/',
        src: [
          '**/*'
        ],
        dest: '<%= project.assets %>/fonts/'
      }
    },

    watch: {
      scripts: {
        files: ['<%= project.js %>'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ['<%= project.css %>'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }

  });

  // Load multiple grunt tasks using globbing patterns.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // Default task(s).
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'jscs',
    'concat',
    'uglify',
    'scsslint',
    'sass',
    'autoprefixer',
    'csscomb',
    'cssmin',
    'copy'
  ]);

};
