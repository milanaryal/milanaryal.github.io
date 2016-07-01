// Compile SCSS with [Ruby Sass][1] using [grunt-contrib-sass][2]
// [1]: https://github.com/sass/sass
// [2]: https://github.com/gruntjs/grunt-contrib-sass
module.exports = function configureRubySass(grunt) {
  var options = {
    loadPath: ['scss'],
    precision: 6,
    sourcemap: 'none',
    style: 'expanded',
    trace: true,
    bundleExec: true
  };
  grunt.config.merge({
    sass: {
      core: {
        files: {
          'assets/css/styles.css': 'src/scss/styles.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
