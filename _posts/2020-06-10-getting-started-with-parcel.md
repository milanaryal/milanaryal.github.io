---
title: "Getting started with Parcel bundler"
date: 2020-06-10T10:30:00+05:45
---

Parcel is a super fast and easy to use bundler for your javascript web application projects. If you're coming from Webpack and are frustrated with some of the setup that's required, you might find that Parcel is easier to work with.

#### Installation

npm:

```bash
npm install -g parcel-bundler
```

Yarn:

```bash
yarn global add parcel-bundler
```

Create a package.json file in your project directory using:

npm:

```bash
npm init -y
```

Yarn:

```bash
yarn init -y
```

> See also: [Managing Node.js dependencies version in the package.json file](/managing-dependencies-in-the-package-json-file/)

#### Structure

```text
parcel-demo
 |- package.json
+ |- index.html
+ |- /src
+   |- index.js
+ |- dist/
```

Running a command `npx parcel build src/index.js`, do our job bundling our assets in `dist/` folder and if you check out the newly created bundle.js, you will see that Parcel has created some wrapper around our own code.

#### Usage

The beauty of Parcel is that you don't need to install or config any plugins --- Parcel (itself advertise as a zero configuration bundler) recognise and install dependencies according to its need; and automatically compile, minify, bundle,.. your assets.

So, if you add these tasks scripts to your project, by modifying your package.json:

```json
{
  "scripts": {
    "dev": "parcel <your entry file>",
    "build": "parcel build <your entry file>"
  }
}
```

Then, you will be able to run it:

```text
# To run in development mode

npm run dev

# To run in production mode

npm run build
```

or, on Yarn:

```text
# To run in development mode

yarn dev

# To run in production mode

yarn build
```

#### Additional resources

* [Parcel examples](https://github.com/parcel-bundler/examples){: rel="nofollow" }: Parcel examples using various tools and frameworks.
* [Awesome Parcel](https://github.com/parcel-bundler/awesome-parcel){: rel="nofollow" }: A curated list of awesome Parcel resources, libraries, tools and boilerplates.
* [Getting Started](https://parceljs.org/getting_started.html){: rel="nofollow" }: Parcel Official documentation
* [Parcel CLI](https://parceljs.org/cli.html){: rel="nofollow" }: Parcel Official documentation using CLI
* [The Parcel Bundler](https://youtu.be/OK6akGZCC88){: rel="nofollow" }: Tutorial on YouTube by Gary Simon
