---
title: "Getting started with Grunt"
date: 2015-06-06T11:14:15+05:45
redirect_from: "/2015/getting-started-with-grunt/"
---

Here, we'll explore how to use [Grunt](http://gruntjs.com/){:rel="nofollow"} and what it can do in a project to speed up and change the way you develop websites.

Mostly everything in these posts are coming directly from the documentation itself. So hopefully some of these you immediately recognize and others you'll wonder how you missed that.

### What is Grunt?

Built on top of Node.js, Grunt is a task-based command-line tool that speeds up workflows by reducing the effort required to prepare assets for production. It does this by wrapping up jobs into tasks that are compiled automatically as you go along. Basically, you can use Grunt on most tasks that you consider to be grunt work and would normally have to manually configure and run yourself.

### What kind of tasks Grunt can do?

Well, the list is exhaustive. Suffice it to say, Grunt can handle most things you throw at it, from minifying to concatenating JavaScript. It can also be used for a range of tasks unrelated to JavaScript, such as compiling CSS from LESS and Sass. Even, optimizing your images to reduce their file size without affecting quality.

### Setting up Grunt from scratch

The first thing to do in order to use Grunt is to set up [Node.js](http://nodejs.org/){:rel="nofollow"} on your system. When you install Node.js, you also get [npm](http://www.npmjs.com/){:rel="nofollow"}, a package manager for JavaScript, and is the default for Node.js.

Once Node.js is installed, just run this command in the terminal:

```bash
$ npm install -g grunt-cli
```

Lets break that down:

* `npm` tells terminal/cmd what program we're commanding.
* `install` is the command.
* `-g` is an argument (a kind of optional bit of info) for the command short way of saying `--global` This means we're installing Grunt globally on our system. This is a good thing. You want to be able to use it everywhere.
* `grunt-cli` is another argument. This time telling npm what you want to install. In this instance the Grunt Command Line Interface.

You should close and reopen the terminal as well. That's a generic good practice to make sure things are working right. Kinda like restarting your computer after you install a new application was in the olden days.

To make sure Grunt has been properly installed, you can run the following one-liner command again:

```bash
$ grunt --version
```

The next step is to create a `package.json` file and a `Gruntfile` in the root directory of your project.

### Creating the package.json file

The `package.json` file belongs in the root directory of your project, next to the Gruntfile, and should be committed with your project source.

There are a few ways to create a `package.json` file for your project:

* Most [grunt-init](http://gruntjs.com/project-scaffolding){:rel="nofollow"} templates will automatically create a project-specific `package.json` file.
* The [npm init](http://docs.npmjs.com/cli/init){:rel="nofollow"} command will create a basic `package.json` file.
* Start with the example below, and expand as needed, following this [specification](http://docs.npmjs.com/files/package.json){:rel="nofollow"}.

```json
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5"
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

This tells npm which dependencies to install and places them in a `node_modules` folder.

#### Updating grunt devDependencies

In your `package.json` you can tag each dependency with a range of versions to install then type `npm install` to install all the listed dependencies at the given versions:

**Only install `0.6.0`:**

```json
{
  "devDependencies": {
    "grunt-contrib-watch": "0.6.0"
  }
}
```

**Prefix with `~` to install the latest patch version `0.6.x`:**

As `0.6.1`, `0.6.2`, `0.6.3`, etc versions are released, `npm install` will install the latest version of those. If `0.7.0` is release, it will not install that version (generally a good strategy as it may contain breaking changes).

```json
{
  "devDependencies": {
    "grunt-contrib-watch": "~0.6.0"
  }
}
```

**Prefix with `^` to install the latest patch version `0.x.x`:**

It will update you to the most recent major version (the first number). `^0.6.0` will match any `0.x.x` release including `0.7.0`, but will hold off on `1.0.0`.

```json
{
  "devDependencies": {
    "grunt-contrib-watch": "^0.6.0"
  }
}
```

**Explicitly set the range:**

You can use `>`, `<`, `<=`, `>=` to explicitly set the version range. Another good option for custom ranges or if you would like to be explicit with your version ranges. The follow will install every version greater or equal than `0.6.0` but less than `1.0.0`:

```json
{
  "devDependencies": {
    "grunt-contrib-watch": ">= 0.6.0 < 1.0.0"
  }
}
```

**Always install the latest with `*`:**

Or if you just always want the latest version use `*`:

```json
{
  "devDependencies": {
    "grunt-contrib-watch": "*"
  }
}
```

See more about version ranges in the [npm docs](http://docs.npmjs.com/misc/semver){:rel="nofollow"} or npm's [semantic versioning parser](http://github.com/isaacs/node-semver){:rel="nofollow"}.

**`npm outdated`**

If you would like to see which of your dependencies are out of date, use `npm outdated`: see [npm docs](http://www.npmjs.org/doc/cli/npm-outdated.html){:rel="nofollow"} for more info.

**`npm update`**

Use `npm update` to update all your dependencies to the latest versions. Or `npm update packagename anotherpackage` to update specific packages to the latest version.

### Creating the Gruntfile

The `Gruntfile.js` or `Gruntfile.coffee` file is a valid JavaScript or CoffeeScript file that belongs in the root directory of your project, next to the `package.json` file, and should be committed with your project source.

A `Gruntfile` is comprised of the following parts:

* The "wrapper" function
* Project and task configuration
* Loading Grunt plugins and tasks
* Custom tasks

```js
/*!
 * Gruntfile
 * Basic sample file
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task(s) configuration.
    grunt-task-name: {
      // your task options here
    }

  });

  // Load the plugin(s).
  grunt.loadNpmTasks('grunt-plugin-name');

  // Default task(s).
  grunt.registerTask('default', ['grunt-task-name']);

};
```

#### An example Gruntfile

In the following `Gruntfile`, project metadata is imported into the Grunt config from the project's `package.json` file and the [grunt-contrib-uglify](http://github.com/gruntjs/grunt-contrib-uglify){:rel="nofollow"} plugin's `uglify` task is configured to minify a source file and generate a banner comment dynamically using that metadata.

You can run this command from the terminal (it will henceforth go without saying that you need to run the given commands from your project's root folder):

```bash
npm install grunt-contrib-uglify --save-dev
```

A neat thing about doing it this way: your `package.json` file will automatically be updated to include this new dependency. Open it up and check it out. You'll see a new line:

```text
"grunt-contrib-uglify": "^0.9.1"
```

Now we're ready to use it. To use it we need to start configuring Grunt and telling it what to do.

```js
/*!
 * Gruntfile
 * Minify JavaScript using Uglify
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    // Task(s) configuration.
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

The `uglify` task will be run by default, when the following command line is run at the root of your project file:

```bash
$ grunt
```

An incredibly active community of developers is building front-end plugins, you can explore them at [Grunt plugins library](http://gruntjs.com/plugins/){:rel="nofollow"}.

### Further reading

This is the basic foundation for learning Grunt, you can learn more by the following links:

* The [getting started](http://gruntjs.com/getting-started/){:rel="nofollow"} with grunt guide
* The [installing grunt](http://gruntjs.com/installing-grunt/){:rel="nofollow"} guide
* The [configuring tasks](http://gruntjs.com/configuring-tasks/){:rel="nofollow"} guide
* The [creating tasks](http://gruntjs.com/creating-tasks/){:rel="nofollow"} guide
