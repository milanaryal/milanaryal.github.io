/*!
 * Milan Aryal Gulpfile (https://milanaryal.com.np)
 * Copyright 2020 Milan Aryal
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 */

'use strict';

// Load plugins
const { src, dest, series, parallel, watch } = require('gulp');
const del = require('del');
const flatten = require('gulp-flatten');
const rename = require('gulp-rename');
const header = require('gulp-header');
const pkg = require('./package.json');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const scssLint = require('gulp-scss-lint');
const scss = require('gulp-sass');
scss.compiler = require('node-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-cssnano');
const svgSprite = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const browserSync = require('browser-sync').create();
const cp = require('child_process');

// Scripts source paths
var SCRIPTS_SRC = [
  'src/js/jquery.js',
  'src/js/popper.js',
  'src/js/bootstrap/util.js',
  // 'src/js/bootstrap/alert.js',
  // 'src/js/bootstrap/button.js',
  // 'src/js/bootstrap/carousel.js',
  'src/js/bootstrap/collapse.js',
  // 'src/js/bootstrap/dropdown.js',
  // 'src/js/bootstrap/modal.js',
  // 'src/js/bootstrap/scrollspy.js',
  // 'src/js/bootstrap/tab.js',
  'src/js/bootstrap/tooltip.js',
  // 'src/js/bootstrap/popover.js',
  'src/js/svg4everybody.js',
  'src/js/nprogress.js',
  'src/js/headroom.js',
  'src/js/jQuery.headroom.js',
  'src/js/scripts.js'
];

// Jekyll uncompiled files
var JEKYLL_SRC = [
  '_includes/**',
  '_layouts/**',
  '_pages/**',
  '_posts/**',
  'writings/**'
];

// Banner template for files header
var banner = ['/*!',
  ' * <%= pkg.title %> (<%= pkg.url %>)',
  ' * Copyright ' + new Date().getFullYear() + ' <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)',
  ' */',
  ''].join('\n');

// Remove pre-existing content from the folders
function clean () {
  return del(['assets/js', 'assets/css', 'assets/fonts', 'assets/svg']);
}

function cleanScripts () {
  return del(['assets/js']);
}

function cleanStyles () {
  return del(['assets/css']);
}

function cleanFonts () {
  return del(['assets/fonts']);
}

function cleanIcons () {
  return del(['assets/svg']);
}

// Test scripts
function testScripts () {
  return src(['src/js/**/*.js', '!src/js/**/jquery.js', '!src/js/bootstrap/**'])
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format());
}

// Test styles
function testStyles () {
  return src(['src/scss/**/*.scss', '!src/scss/bootstrap/**', '!src/scss/font-awesome/**'])
    .pipe(scssLint({ 'config': '.scss-lint.yml' }));
}

// Concatenate and minify scripts
function buildScripts () {
  return src(SCRIPTS_SRC)
    .pipe(concat('scripts.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/js'));
}

// Process and minify styles
function buildStyles () {
  return src('src/scss/styles.scss')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(scss({ precision: 6, outputStyle: 'expanded' }))
    .pipe(prefix())
    .pipe(dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({ discardComments: { removeAll: true } }))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/css'));
}

// Process and minify SVG icons
function buildIcons () {
  return src('src/svg/**/*.svg', { base: 'src/sprite' })
    .pipe(svgmin())
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgSprite({ inlineSvg: true }))
    .pipe(dest('assets/svg'));
}

// Copy fonts
function copyFonts () {
  return src('src/fonts/**')
    .pipe(flatten())
    .pipe(dest('assets/fonts'));
}

// Remove pre-existing Jekyll build site content
function cleanJekyll () {
  return del(['./_site']);
}

// Build the Jekyll site
function buildJekyll (done) {
  browserSync.notify('Compiling Jekyll, please wait!');
  return cp.spawn('npm', ['run', 'jekyll-build'], { stdio: 'inherit' })
    .on('close', done);
}

// Wait for Jekyll build, then launch the server
function syncJekyll () {
  browserSync({
    port: 4000,
    ui: {
      port: 4001
    },
    server: {
      baseDir: './_site'
    },
  });
}

// Rebuild scripts on Jekyll site and do page reload
function reBuildScripts () {
  return src(SCRIPTS_SRC)
    .pipe(concat('scripts.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('./_site/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('./_site/assets/js'))
    .pipe(browserSync.reload({ stream: true }));
}

// Rebuild styles on Jekyll site and do page reload
function reBuildStyles () {
  return src('src/scss/styles.scss')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(scss({ precision: 6, outputStyle: 'expanded' }))
    .pipe(prefix())
    .pipe(dest('./_site/assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({ discardComments: { removeAll: true } }))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('./_site/assets/css'))
    .pipe(browserSync.reload({ stream: true }));
}

// Watch changes
function watchFiles () {
  // Watch .js files
  watch('src/js/**/*.js', series(cleanStyles, reBuildStyles));
  // Watch .scss files
  watch('src/scss/**/*.scss', series(cleanScripts, reBuildScripts));
  // Watch Jekyll uncompiled files and do page reload
  watch(JEKYLL_SRC, series(cleanJekyll, buildJekyll)).on('change', browserSync.reload);
}

// Export tasks
var build = series(clean, parallel(buildScripts, buildStyles, buildIcons, copyFonts));
var buildJekyll = series (cleanJekyll, buildJekyll);
var serveJekyll = series(buildJekyll, syncJekyll);

exports.default = build;
exports.buildJekyll = series(build, buildJekyll);
exports.serveJekyll = serveJekyll;
exports.watch = series(serveJekyll, watchFiles);
