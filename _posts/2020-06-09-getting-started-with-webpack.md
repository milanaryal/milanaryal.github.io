---
title: "Getting started with Webpack"
date: 2020-06-09T09:00:00+05:45
---

Webpack is an awesome bundler for javascript and friends. Developing web apps, Webpack makes it easy by doing all the task like compiling, and bundling our assets.

If you have used task runner like Gulp or Grunt, you may feel Webpack a little confusing but with time and practice you will explore it even powerful and awesome.

Webpack bundle our all assets like javascript, stylesheet, images, etc. but here as a starter I will only cover javascript part. After you learn using Webpack plugins you can easily and config any plugins to bundler your other assets for your web project. 

#### Installing Webpack

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```

> See also: [Managing Node.js dependencies version in the package.json file](/managing-dependencies-in-the-package-json-file/)

#### Basic project structure

```text
webpack-demo
 |- package.json
+ |- index.html
+ |- /src
+   |- index.js
+ |- dist/
```

Running a command `npx webpack src/index.js dist/bundle.js`, do our job bundling our assets in `dist/` folder and if you check out the newly created bundle.js, you will see that webpack has created some wrapper around our own code.

#### Defining a config file

From Webpack 4, it is zero configuration but for the complex settings we need a configuration file. Webpack basic `webpack.config.js` template for bundling JavaScript:

```js
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    // ...
  },
  module: {
    rules: [
      // ...
    ]
  },
  plugins: [
    // ...
  ]
};
```

**Entry**

There are multiple ways to define the entry property in your webpack configuration.

Single Entry (Shorthand) Syntax:

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

The single entry syntax for the entry property is a shorthand for:

```js
module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```

**Output**

Configuring the output configuration options tells webpack how to write the compiled files to disk. Note that, while there can be multiple entry points, only one output configuration is specified

**Loader**

A loader is just a JavaScript module that exports a function. The loader runner calls this function and passes the result of the previous loader or the resource file into it.

**Plugins**

The plugins option is used to customize the webpack build process in a variety of ways. webpack comes with a variety built-in plugins available under webpack.[plugin-name].

Example configuration for Terser Webpack plugin, Clean distribute path plugin, and Webpack native Progress plugin:

```js
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: /*...*/,
  output: /*...*/,
  module: /*...*/,
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
}
```

#### Webpack Integration with jQuery

It is very easy to include jQuery plugin in our project, you just need to install it with the single npm install cli:

```bash
npm install --save jquery
```

and import it on our index.js file:

```js
import $ from 'jquery';
```

**Alternatively, use `webpack.ProvidePlugin`**

To ensure jQuery accessible globally in our project:

```js
module.exports = {
  // ...
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  // ...
};
```

**Using jQuery slim version in Webpack**

If you want to use slim version of jQuery you can enforce it in our project with the following config and plus make sure you have included above `webpack.ProvidePlugin` rules:

```js
module.exports = {
  // ...
  resolve: {
    extensions: ['.js'],
    alias: {
      'jquery': 'jquery/dist/jquery.slim.js',
    }
  },
  // ...
};
```

### An example for Webpack configuration to bundle our ES6 scripts

To cover up all following is the simple example to bundle our ES6 scripts for our development environment presets with `.browserslistrc`.

Install your devDependencies:

```js
npm install --save webpack webpack-cli @babel/core @babel/preset-env babel-loader clean-webpack-plugin terser-webpack-plugin
```

Import your scripts in your `src/index.js` file something like:

```js
// ...
@import script1 from './js/script1.js';
@import script2 from './js/script2.js';
@import script3 from './js/script3.js';
// ...
```

Simple `webpack.config.js` file in your project root folder to bundle our scripts in folder `dist/`:

```js
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(
      {
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      'jquery': 'jquery/dist/jquery.slim.js',
    }
  },
};
```

Now, simply you can run webpack using `npx webpack`.

Or,

You can use npm scripts with the following setup:

```json
{
  "scripts": {
    "build": "webpack --mode=production --config webpack.config.js",
    "dev": "webpack --mode=development --config webpack.config.js",
  }
}
```

And, `npm run build`. And you are done!

#### Further resources

* [Getting started with WebPack official guides](https://webpack.js.org/guides/getting-started/){: rel="nofollow" }
* [Essential Webpack plugins list](https://webpack.js.org/plugins/){: rel="nofollow" }
* [Third party Webpack plugins list](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins){: rel="nofollow" }
* [Webpack 4 Tutorial - Getting Started for Beginners](https://youtu.be/TzdEpgONurw){: rel="nofollow" }, on YouTube by DesignCourse
* [Learn Webpack Course](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8){: rel="nofollow" }, on YouTube by Colt Steele
