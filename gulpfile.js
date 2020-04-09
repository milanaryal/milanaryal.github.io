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
const uglify = require('gulp-uglify-es').default;
const scssLint = require('gulp-scss-lint');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const discardComments = require('postcss-discard-comments');
const svgstore = require('gulp-svgstore');
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


/**
 * Cleaning tasks
 */

// Remove pre-existing content from the folders
function clean () {
  return del(['assets/js', 'assets/css', 'assets/fonts', 'assets/svg']);
}

function cleanJS () {
  return del(['assets/js']);
}

function cleanCSS () {
  return del(['assets/css']);
}

function cleanFonts () {
  return del(['assets/fonts']);
}

function cleanSVG () {
  return del(['assets/svg']);
}


/**
 * Testing tasks
 */

// Test scripts
function testJS () {
  return src(['src/js/**/*.js', '!src/js/**/jquery.js', '!src/js/bootstrap/**'])
    .pipe(eslint('.eslintrc.json'))
    .pipe(eslint.format());
}

// Test styles
function testSCSS () {
  return src(['src/scss/**/*.scss', '!src/scss/bootstrap/**'])
    .pipe(scssLint({ 'config': '.scss-lint.yml' }));
}


/**
 * Compiling & bundling tasks
 */

// Concatenate and minify scripts
function js () {
  return src(SCRIPTS_SRC)
    .pipe(concat('scripts.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ output: { comments: false } }))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/js'));
}

// Process and minify styles
function css () {
  return src('src/scss/styles.scss')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(sass.sync({ precision: 6, outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([ cssnano(), discardComments({ removeAll: true }) ]))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('assets/css'));
}

// Process and minify SVG icons
function svg () {
  return src('src/svg/**/*.svg', { base: 'src/sprite' })
    .pipe(svgmin())
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(dest('assets/svg'));
}

// Copy fonts
function copyFonts () {
  return src('src/fonts/**')
    .pipe(flatten())
    .pipe(dest('assets/fonts'));
}


/**
 * Jekyll tasks
 */

// Remove script files in Jekyll site
function jekyllCleanJS () {
  return del(['./_site/assets/js']);
}

// Remove style files in Jekyll site
function jekyllCleanCSS () {
  return del(['./_site/assets/css']);
}

// Remove existing Jekyll build site contents
function jekyllCleanSite () {
  return del(['./_site']);
}

// Build the Jekyll site
function jekyllBuild (done) {
  browserSync.notify('Compiling Jekyll, please wait!');
  return cp.spawn('npm', ['run', 'jekyll-build'], { stdio: 'inherit' })
    .on('close', done);
}

// Wait for Jekyll build, then launch the server
function jekyllServe () {
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

// Rebuild JS on Jekyll site and do page reload
function jekyllJS () {
    // JS
  return src(SCRIPTS_SRC)
    .pipe(concat('scripts.js'))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('./_site/assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ output: { comments: false } }))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest('./_site/assets/js'))
    // Browser reload
    .pipe(browserSync.reload({ stream: true }));
}

// Rebuild CSS on Jekyll site and do page reload
function jekyllCSS () {
  // CSS
  return src('src/scss/styles.scss')
  .pipe(header(banner, { pkg : pkg }))
  .pipe(sass.sync({ precision: 6, outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(postcss([ autoprefixer() ]))
  .pipe(dest('./_site/assets/css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(postcss([ cssnano(), discardComments({ removeAll: true }) ]))
  .pipe(header(banner, { pkg : pkg }))
  .pipe(dest('./_site/assets/css'))
  // Browser reload
  .pipe(browserSync.reload({ stream: true }));
}


/**
 * Watching task for changes in src files
 */

// Watch changes
function watchFiles () {
  // Watch .js files
  watch('src/js/**/*.js', series(jekyllCleanJS, jekyllJS));
  // Watch .scss files
  watch('src/scss/**/*.scss', series(jekyllCleanCSS, jekyllCSS));
  // Watch Jekyll uncompiled files and do page reload
  watch(JEKYLL_SRC, series(jekyllCleanSite, jekyllBuild)).on('change', browserSync.reload);
}


/**
 * Export tasks
 */

var build = series(clean, parallel(js, css, svg, copyFonts));
var jekyllBuild = series (jekyllCleanSite, jekyllBuild);
var jekyllServe = series(jekyllBuild, jekyllServe);

// Public working tasks
exports.default = build;
exports.jekyllBuild = series(build, jekyllBuild);
exports.jekyllServe = jekyllServe;
exports.watch = series(jekyllServe, watchFiles);
