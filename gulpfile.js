const { gulp, src, dest, series, parallel, watch } = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const header = require('gulp-header');
const pkg = require('./package.json');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const discardComments = require('postcss-discard-comments');
const browserSync = require('browser-sync').create();
const cp = require('child_process');

const paths = {
  styles: {
    src: 'src/scss/main.scss',
    dest: 'assets/css/',
    include: '_includes/css/',
  },
  jekyll: {
    src: [
      '_includes/**/*.html',
      '_layouts/**/*.html',
      '_pages/**',
      '_posts/**',
      'writings/index.html'
    ],
    dest: '_site/',
    css: '_site/assets/css/',
    js: '_site/assets/js/'
  }
};

const banner = ['/*!',
  ' * <%= pkg.title %> (<%= pkg.url %>)',
  ' * Copyright ' + new Date().getFullYear() + ' <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %> (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)',
  ' */',
  ''].join('\n');

// Build the Jekyll site
function jekyllBuild (done) {
  browserSync.notify('Compiling Jekyll, please wait!');
  return cp.spawn('npm', [ 'run', 'jekyll-build' ], { stdio: 'inherit' })
    .on('close', done);
}

// Copy compiled CSS to the Jekyll site
function copyCSS (done) {
  browserSync.notify('Compiling CSS, please wait!');
  return cp.spawn('npm', [ 'run', 'copy-css' ], { stdio: 'inherit' })
    .on('close', done);
}

// Bundle JS with Webpack
function js (done) {
  browserSync.notify('Bundling JS with Webpack, please wait!');
  return cp.spawn('npm', [ 'run', 'js' ], { stdio: 'inherit' })
    .on('close', done);
}

// Copy compiled JS to the Jekyll site
function copyJS (done) {
  browserSync.notify('Compiling JS, please wait!');
  return cp.spawn('npm', [ 'run', 'copy-js' ], { stdio: 'inherit' })
    .on('close', done);
}

// Wait for Jekyll build, then launch the server
// BrowserSync (callback)
function browserSyncServer (done) {
  browserSync.init({
    port: 4000,
    ui: {
      port: 4001
    },
    server: {
      baseDir: paths.jekyll.dest
    },
    open: false
  }, done);
}

// BrowserSync Reload (callback)
function browserSyncReload (done) {
  browserSync.reload();
  done();
}

/**
 * Cleaning task(s)
 */

// Remove pre-existing content from the assets folders
function clean () {
  return del([ paths.styles.dest, paths.styles.include ]);
}

// Remove pre-existing Jekyll compiled site folder
function cleanSite () {
  return del([ paths.jekyll.dest ]);
}

/**
 * Compiling & bundling task(s)
 */

// Process and minify styles
function css () {
  return src(paths.styles.src)
    .pipe(sass.sync({ precision: 6, outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ cascade: false }) ]))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest(paths.styles.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([ cssnano(), discardComments({ removeAll: true }) ]))
    .pipe(dest(paths.styles.include))
    .pipe(header(banner, { pkg : pkg }))
    .pipe(dest(paths.styles.dest));
}

/**
 * Watching task for changes in src files
 */

function watchFiles () {
  // Watch .scss files and do page reload
  watch('src/**/*.scss', series(css, copyCSS, browserSyncReload));
  // Watch .js files and do page reload
  watch('src/**/*.js', series(js, copyJS, browserSyncReload));
  // Watch Jekyll uncompiled files and do page reload
  watch(paths.jekyll.src, series(jekyllBuild, browserSyncReload));
}

/**
 * Export task(s)
 */

const build = series(clean, parallel(css, js));
const buildSite = series (build, parallel(cleanSite, jekyllBuild));
const serveSite = series(buildSite, browserSyncServer);

// Public working task(s)
exports.site = buildSite;
exports.serve = serveSite;
exports.watch = parallel(watchFiles, serveSite);

// Default task
exports.default = build;
