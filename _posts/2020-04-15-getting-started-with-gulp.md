---
title: "Getting started with Gulp [v4.x.x]"
date: 2020-04-15T09:00:00+05:45
excerpt: "Explore how to use Gulp and what it can do in a project to speed up and change the way you develop websites."
---

Here, we'll explore how to use [Gulp](https://gulpjs.com/){: rel="nofollow" } (the streaming build system) and what it can do in a project to speed up and change the way you develop websites.

Mostly everything in these posts are coming directly from the documentation itself. So hopefully some of these you immediately recognize and others you'll wonder how you missed that.

### What is Gulp?

> Gulp is an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming build system (similar to a more package-focussed Make) in front-end web development.
>
> --- [Wikipedia](https://en.wikipedia.org/wiki/Gulp.js){: rel="nofollow" }

Built on top of Node.js, Gulp is a task-based command-line tool that speeds up workflows by reducing the effort required to prepare assets for production. It does this by wrapping up jobs into tasks that are compiled automatically as you go along. Basically, you can use Gulp on most tasks that you consider to be gulp work and would normally have to manually configure and run yourself.

### What kind of tasks Gulp can do?

Well, the list is exhaustive. Suffice it to say, Gulp can handle most things you throw at it, from minifying to concatenating JavaScript. It can also be used for a range of tasks unrelated to JavaScript, such as compiling CSS from LESS and Sass. Even, optimizing your images to reduce their file size without affecting quality.

### Setting up Gulp from scratch

The first thing to do in order to use Gulp is to set up [Node.js](https://nodejs.org/){: rel="nofollow" } on your system. When you install Node.js, you also get [npm](https://www.npmjs.com/){: rel="nofollow" }, a package manager for JavaScript, and is the default for Node.js.

Once Node.js is installed, just run this command in the terminal:

```bash
$ npm install -g gulp-cli
```

Lets break that down:

* `npm` tells terminal/cmd what program we're commanding.
* `install` is the command.
* `-g` is an argument (a kind of optional bit of info) for the command short way of saying `--global` This means we're installing Gulp globally on our system. This is a good thing. You want to be able to use it everywhere.
* `gulp-cli` is another argument. This time telling npm what you want to install. In this instance the Gulp Command Line Interface.

You should close and reopen the terminal as well. That's a generic good practice to make sure things are working right. Kinda like restarting your computer after you install a new application was in the olden days.

To make sure Gulp has been properly installed, you can run the following one-liner command again:

```bash
$ gulp --version
```

The next step is to create a `package.json` file and a `gulpfile.js` in the root directory of your project.

### Creating the `package.json` file

The `package.json` file belongs in the root directory of your project, next to the `gulpfile.js`, and should be committed with your project source.

There are a few ways to create a `package.json` file for your project:

* The [`npm init`](https://docs.npmjs.com/cli/init){: rel="nofollow" } command will create a basic `package.json` file.
* Start with the example below, and expand as needed, following this [specification](https://docs.npmjs.com/files/package.json){: rel="nofollow" }.

```json
{
  "name": "my-project-name",
  "version": "0.1.0",
  "private": "true",
  "devDependencies": {
    "gulp": "^4.0.2"
  }
}
```

Feel free to change the name of the project and the version, but the `devDependencies` thing needs to be in there just like that.

This is how Node does dependencies. Node has a package manager called npm (node packaged modules) for managing Node dependencies (like a gem for Ruby if you're familiar with that). You could even think of it a bit like a plug-in for WordPress.

Once that `package.json` file is in place, go to the terminal and navigate to the root directory of your project folder using following command:

```bash
$ cd ~/path/to/project
```

Then run the following command:

```bash
$ npm install
```

This tells `npm` which dependencies to install and places them in a `node_modules` folder.

#### Updating Gulp `devDependencies`

In your `package.json` you can tag each dependency with a range of versions to install then type `npm install` to install all the listed dependencies at the given versions:

**Only install `2.6.1`:**

```json
{
  "devDependencies": {
    "gulp-concat": "2.6.1"
  }
}
```

**Prefix with `~` to install the latest patch version `2.6.x`:**

As `2.6.1`, `2.6.2`, `2.6.3`, etc versions are released, `npm install` will install the latest version of those. If `2.7.0` is release, it will not install that version (generally a good strategy as it may contain breaking changes).

```json
{
  "devDependencies": {
    "gulp-concat": "~2.6.1"
  }
}
```

**Prefix with `^` to install the latest patch version `2.x.x`:**

It will update you to the most recent major version (the first number). `^2.6.1` will match any `2.x.x` release including `2.7.0`, but will hold off on `3.0.0`.

```json
{
  "devDependencies": {
    "gulp-concat": "^2.6.1"
  }
}
```

**Explicitly set the range:**

You can use `>`, `<`, `<=`, `>=` to explicitly set the version range. Another good option for custom ranges or if you would like to be explicit with your version ranges. The follow will install every version greater or equal than `2.6.1` but less than `7.0.0`:

```json
{
  "devDependencies": {
    "gulp-concat": ">= 2.6.1 < 7.0.0"
  }
}
```

**Always install the latest with `*`:**

Or if you just always want the latest version use `*`:

```json
{
  "devDependencies": {
    "gulp-concat": "*"
  }
}
```

See more about version ranges in the [npm docs](https://docs.npmjs.com/misc/semver){: rel="nofollow" } or npm's [semantic versioning parser](https://github.com/npm/node-semver){: rel="nofollow" }.

**`npm outdated`**

If you would like to see which of your dependencies are out of date, use `npm outdated`: see [npm docs](https://docs.npmjs.com/cli/outdated){: rel="nofollow" } for more info.

**`npm update`**

Use `npm update` to update all your dependencies to the latest versions. Or `npm update packagename anotherpackage` to update specific packages to the latest version.

### Creating the `gulpfile.js`

The `gulpfile.js` or `gulpfile.coffee` file is a valid JavaScript or CoffeeScript file that belongs in the root directory of your project, next to the `package.json` file, and should be committed with your project source.

A `gulpfile.js` is comprised of the following parts:

* Loading gulp plugins
* The "wrapper" function
* Project and task configuration
* Custom public tasks

```js
/*!
 * Gulpfile
 * Basic sample file
 */

// load the plugin(s)
var gulp = require('gulp');

// define tasks here (default task)
exports.default = function () {

  // gulp pipe (task config)

}
```

<br>

#### An example

Following is an example to understanding the Gulp process to concat and uglify our Javascript files plus compiling our Sass to CSS and minify our stylesheets from our source folder `src/` to destination folder `assets/`.

<br>

**First step** to install necessary `devDependencies` on our `package.json` file:

```json
{
  "devDependencies": {
    "del": "^5.1.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-concat": "^2.6.1",
    "gulp-csso": "^4.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-uglify-es": "^2.0.0",
    "node-sass": "^4.13.1"
  }
}
```

You can simply install and save required `devDependencies` with the following command:

```bash
$ npm install --save-dev del gulp gulp-autoprefixer gulp-concat gulp-csso gulp-rename gulp-sass gulp-uglify-es node-sass
```

<br>

**Second step** to setup `gulpfile.js`:

```js
// plugins for basic needs
const { src, dest, series, parallel, watch } = require('gulp');
const del = require('del');
const rename = require('gulp-rename');;

// plugins for js
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

// plugins for css
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-csso');
```

```js
// private task function

// remove pre-existing content from the folders

function clean () {
  return del(['assets/js', 'assets/css']);
}
```

```js
// private task function

// concatenate js files and uglify
function js () {
  return src('src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(dest('assets/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify({ output: { comments: false } }))
    .pipe(dest('assets/js'));
}
```

```js
// private task function

// compile scss to css and minify
function css () {
  return src('src/scss/styles.scss')
    .pipe(sass.sync({ precision: 6, outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(prefix())
    .pipe(dest('assets/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({ comments: false }))
    .pipe(dest('assets/css'));
}
```

```js
// private task function

// watch changes
function watch () {
  // Watch .js files
  watch('src/js/**/*.js', js;
  // Watch .scss files
  watch('src/scss/**/*.scss', css;
}
```

```js
// exporting public working task(s)

// default task (to build our assets)
exports.default = series(clean, parallel(js, css));

// watch task
exports.watch = watch;
```

<br>

Now, ***third step** or **final step** --- our **default task** (to clean/delete the existing old destination files and process, compile and, minify our Javascript and Sass files from source folder `src/` to our destination folder `assets/`) will be **run by default**, when the **following command line** is run at the root of your project file:

```bash
$ gulp
```

<br>

An incredibly active community of developers is building front-end plugins, you can explore them at [Gulp plugins library](https://gulpjs.com/plugins/){: rel="nofollow "}.

---

#### Further reading

This is the basic foundation for learning Gulp, you can learn and explore more by the following links:

* The [getting started](https://gulpjs.com/docs/en/getting-started/quick-start/){: rel="nofollow" } with official Gulp guide
* The [creating tasks](https://gulpjs.com/docs/en/getting-started/creating-tasks){: rel="nofollow" } guide
* The [using plugins](https://gulpjs.com/docs/en/getting-started/using-plugins){: rel="nofollow" } guide
* The [concepts](https://gulpjs.com/docs/en/api/concepts){: rel="nofollow" } to understanding the API docs.
