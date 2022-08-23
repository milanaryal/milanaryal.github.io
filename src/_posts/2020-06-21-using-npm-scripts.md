---
title: "Using npm scripts as a build tool"
description: "Learn how to use npm scrips to compile assets for your web projects with spending less time on setting up the configurations."
date: 2020-06-21T08:00:00+05:45
---

I have used build tools like Grunt, and Gulp --- which eased my work for compiling assets for my web projects. Over the time using such build tools I spent more time on configuring the build tool rather than in my web projects. So, to overcome this issue I started using npm scripts as a build tool and this time I can focus more time on my work.

Other task manager needs different plugins to work and over the time some plugins get outdated and not updated by the plugin manager. But, using npm scripts we don't need to worry because npm scripts use the native package CLI and gets updated over the time.

> Related post: [Managing Node.js dependencies version in the package.json file](/managing-dependencies-in-the-package-json-file/)

### Writing npm scripts

Using packages CLI is easy to work with and proper documentation can be found on the respective packages homepage. Popular framework like Bootstrap... are using npm scripts and recommends to use it. Following, I have setup some of the examples as a demo for regular different types of task in the web projects:

#### Formatting prettier code style

```bash
npm install prettier --save-dev
```

```json
{
  "scripts": {
    "format": "prettier src/{scss/*.scss,js/*.js} --write"
  },
  "devDependencies": {
    "prettier": "^2.0.5"
  }
}
```

```bash
npm run format
```

#### Linting stylesheet files

```bash
npm install stylelint stylelint-config-twbs-bootstrap --save-dev
```

```json
{
  "scripts": {
    "lint-css": "stylelint \"**/*.{css,scss}\" --cache --cache-location .cache/.stylelintcache"
  },
  "devDependencies": {
    "stylelint": "^13.6.0",
    "stylelint-config-twbs-bootstrap": "^2.0.3"
  }
}
```

```bash
npm run lint-css
```

#### Compiling SCSS

```bash
npm install node-sass --save-dev
```

```json
{
  "scripts": {
    "css-compile": "node-sass --include-path node_modules src/scss/main.scss -o dist/css/"
  },
  "devDependencies": {
    "node-sass": "^4.14.1"
  }
}
```

```bash
npm run css-compile
```

#### Prefixing CSS

```bash
npm install postcss-cli autoprefixer --save-dev
```

```json
{
  "scripts": {
    "css-compile": "node-sass --include-path node_modules src/scss/main.scss -o dist/css/",
    "css-prefix": "postcss --replace dist/css/main.css --use autoprefixer"
  },
  "devDependencies": {
    "autoprefixer": "^9.8.0",
    "node-sass": "^4.14.1",
    "postcss-cli": "^7.1.1"
  }
}
```

```bash
npm run css-compile && npm run css-prefix
```

### Grouping tasks

```json
{
  "scripts": {
    "css": "npm run css-compile && npm run css-prefix",
    "css-compile": "node-sass --include-path node_modules src/scss/main.scss -o dist/css/",
    "css-prefix": "postcss --replace dist/css/main.css --use autoprefixer"
  },
  "devDependencies": {
    "autoprefixer": "^9.8.0",
    "node-sass": "^4.14.1",
    "postcss-cli": "^7.1.1"
  }
}
```

```bash
npm run css
```

Or,

```bash
install install npm-run-all --save-dev
```

```json
{
  "scripts": {
    "css": "npm-run-all css-*",
    "css-compile": "node-sass --include-path node_modules src/scss/main.scss -o dist/css/",
    "css-prefix": "postcss --replace dist/css/main.css --use autoprefixer"
  },
  "devDependencies": {
    "autoprefixer": "^9.8.0",
    "node-sass": "^4.14.1",
    "npm-run-all": "^4.1.5",
    "postcss-cli": "^7.1.1"
  }
}
```

```bash
npm run css
```

Hope, it helps!

#### Additional resources

- [Bootstrap npm starter template](https://github.com/twbs/bootstrap-npm-starter){:rel="nofollow"}: Starter template for new Bootstrap-powered npm projects.
- [npm build boilerplate](https://github.com/damonbauer/npm-build-boilerplate){:rel="nofollow"}: A collection of packages that build a website using npm scripts.

#### External articles and blog posts about using npm scripts

- [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/){:rel="nofollow"}: By Damon Bauer on CSS-Tricks
- [Using Npm Scripts as a Build Tool](https://deliciousbrains.com/npm-build-script/){:rel="nofollow"}: By Gilbert Pellegrom on Delicious Brains
- [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/){:rel="nofollow"}: By Keith Cirkel
