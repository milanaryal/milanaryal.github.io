/*!
 * Milan Aryal Gruntfile (http://milanaryal.com)
 * Copyright 2015 Milan Aryal
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    project: {
      src: 'src',
      app: '',
      assets: 'assets',
      license_type: 'MIT',
      license_url: 'https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE',
      date: '<%= grunt.template.date("isoDateTime")%>\+05\:45',
      banner: '/*!\n' +
              ' * <%= pkg.title %> (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= project.license_type %> (<%= project.license_url %>)\n' +
              ' *\n' +
              ' * Date: <%= project.date %>\n' +
              ' */\n',
      css: [
        '<%= project.src %>/less/styles.less'
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
        stripBanners: false,
      },
      core: {
        src: '<%= project.js %>',
        dest: '<%= project.assets %>/js/scripts.js'
      }
    },

    uglify: {
      core: {
        src: '<%= project.js %>',
        dest: '<%= project.assets %>/js/scripts.min.js'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'styles.css.map',
          sourceMapFilename: '<%= project.assets %>/css/styles.css.map'
        },
        src: '<%= project.css %>',
        dest: '<%= project.assets %>/css/styles.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24',
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: '<%= project.assets %>/css/styles.css'
      }
    },

    csslint: {
      options: {
        csslintrc: '<%= project.src %>/less/bootstrap/.csslintrc'
      },
      dist: [
        '<%= project.assets %>/css/styles.css',
      ]
    },

    csscomb: {
      options: {
        config: '<%= project.src %>/less/bootstrap/.csscomb.json'
      },
      core: {
        src: '<%= project.assets %>/css/styles.css',
        dest: '<%= project.assets %>/css/styles.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '0',
        // sourceMap: true,
        advanced: false
      },
      minifyCore: {
        src: '<%= project.assets %>/css/styles.css',
        dest: '<%= project.assets %>/css/styles.min.css'
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= project.banner %>'
        },
        files: {
          src: [
            '<%= project.assets %>/css/styles.css',
            '<%= project.assets %>/css/styles.min.css',
            '<%= project.assets %>/js/scripts.min.js'
            ]
        }
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
      less: {
        files: ['<%= project.css %>'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }

  });

  // Load the plugin(s).
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jshint', 'jscs', 'concat', 'uglify', 'less', 'autoprefixer', 'csslint', 'csscomb', 'cssmin', 'usebanner', 'copy']);

};
