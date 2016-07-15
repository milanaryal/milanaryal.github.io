/*!
 * Milan Aryal Gulpfile (https://milanaryal.com)
 * Copyright 2016 Milan Aryal
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 */

'use strict';

// Load plugins
var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var header = require('gulp-header');
var pkg = require('./package.json');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var scsslint = require('gulp-scss-lint');
var scss = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');

// Browsers compability
var COMPATIBILITY = [
  'Chrome >= 35',
  'Firefox >= 38',
  'Edge >= 12',
  'Explorer >= 9',
  'iOS >= 8',
  'Safari >= 8',
  'Android 2.3',
  'Android >= 4',
  'Opera >= 12'
];

// Scripts source paths
var SCRIPTS_SRC = [
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
];

// Banner template for files header
var banner = ['/*!',
  ' * <%= pkg.title %> (<%= pkg.url %>)',
  ' * Copyright ' + new Date().getFullYear() + ' <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)',
  ' */',
  '\n'
].join('\n');

 // Remove pre-existing content from the folders
 gulp.task('clean', function () {
   return del(['assets/js', 'assets/css', 'assets/fonts']);
 });

 gulp.task('clean:scripts', function () {
   return del(['assets/js']);
 });

 gulp.task('clean:styles', function () {
   return del(['assets/css']);
 });

 gulp.task('clean:fonts', function () {
   return del(['assets/fonts']);
 });

// Test scripts
gulp.task('test:scripts', function () {
  return gulp.src(['src/js/**/*.js', '!src/js/**/jquery.js', '!src/js/bootstrap/**'])
    .pipe(jshint('src/js/.jshintrc'))
    .pipe(jshint.reporter('default'));
});

// Test styles
gulp.task('test:styles', function () {
  return gulp.src(['src/scss/**/*.scss', '!src/scss/bootstrap/**', '!src/scss/font-awesome/**'])
    .pipe(scsslint({ 'config': 'src/scss/.scss-lint.yml' }));
});

// Concatenate and minify scripts
gulp.task('build:scripts', function () {
  return gulp.src(SCRIPTS_SRC)
    .pipe(concat('scripts.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Process and minify styles
gulp.task('build:styles', function () {
  return gulp.src('src/scss/styles.scss')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(scss({ precision: 6, outputStyle: 'expanded' }))
    .pipe(prefix({ browsers: COMPATIBILITY }))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({ discardComments: { removeAll: true } }))
    .pipe(gulp.dest('assets/css'));
  });

// Copy fonts
gulp.task('copy:fonts', function () {
  return gulp.src('src/fonts/**')
    .pipe(flatten())
    .pipe(gulp.dest('assets/fonts'));
});

// Watch changes
gulp.task('watch', function () {
  // Watch .js files
  gulp.watch('src/js/**/*.js', ['build:scripts']);
  // Watch .scss files
  gulp.watch('src/scss/**/*.scss', ['build:styles']);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('build:scripts', 'build:styles', 'copy:fonts');
});
