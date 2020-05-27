const { gulp, src, dest, series, parallel, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const cp = require('child_process');

// Build assets
function buildAssets (done) {
  browserSync.notify('Compiling ASSETS, please wait!');
  return cp.spawn('npm', [ 'run', 'build' ], { stdio: 'inherit' })
    .on('close', done);
}

// Build Jekyll site
function buildSite (done) {
  browserSync.notify('Compiling SITE, please wait!');
  return cp.spawn('npm', [ 'run', 'site' ], { stdio: 'inherit' })
    .on('close', done);
}

// Compile CSS with node-sass
function buildCSS (done) {
  browserSync.notify('Compiling CSS, please wait!');
  return cp.spawn('npm', [ 'run', 'css' ], { stdio: 'inherit' })
    .on('close', done);
}

// Copy compiled CSS to _site
function copyCSS (done) {
  browserSync.notify('Copying CSS files, please wait!');
  return cp.spawn('npm', [ 'run', 'copy-css' ], { stdio: 'inherit' })
    .on('close', done);
}

// Bundle JS with Webpack
function buildJS (done) {
  browserSync.notify('Bundling JS, please wait!');
  return cp.spawn('npm', [ 'run', 'js' ], { stdio: 'inherit' })
    .on('close', done);
}

// Copy bundled JS to _site
function copyJS (done) {
  browserSync.notify('Copying JS files, please wait!');
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
      baseDir: './_site'
    },
    open: false
  }, done);
}

// BrowserSync Reload (callback)
function browserSyncReload (done) {
  browserSync.reload();
  done();
}

function watchFiles () {
  // Watch .scss files and do page reload
  watch('src/**/*.scss', series(buildCSS, copyCSS, browserSyncReload));
  // Watch .js files and do page reload
  watch('src/**/*.js', series(buildJS, copyJS, browserSyncReload));
  // Watch Jekyll uncompiled files and do page reload
  watch(
    [
      '_includes/**/*.html',
      '_layouts/**/*.html',
      '_pages/**',
      '_posts/**',
      'writings/index.html'
    ], series(buildSite, browserSyncReload));
}

const build = buildAssets;
const site = buildSite;
const server = browserSyncServer;
const serve = series(build, site, server);

// Watch task
exports.watch = parallel(serve, watchFiles);

// Default task
exports.default = build;
