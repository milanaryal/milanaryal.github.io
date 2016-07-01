// Compile SCSS with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: false,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          'assets/css/styles.css': 'src/scss/styles.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
