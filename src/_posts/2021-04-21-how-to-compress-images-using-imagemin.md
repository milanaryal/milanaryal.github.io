---
title: "How to compress images using Imagemin"
description: "Learn how to compress JPEG and PNG image files using NPM package Imagemin in easy steps."
date: 2021-04-23 23:00:00 +0545
---

In this post, we will learn to compress popular images format like JPEG, PNG,... in _Node.js_ development environment.

We are using NPM package called [Imagemin](https://www.npmjs.com/package/imagemin){:rel="nofollow"} and it's supportive plugins to compress images for our project.

Imagemin is available in:

- [npm module](https://www.npmjs.com/package/imagemin){:rel="nofollow"}
- [CLI](https://www.npmjs.com/package/imagemin-cli){:rel="nofollow"}
- [Webpack](https://www.npmjs.com/package/imagemin-webpack-plugin){:rel="nofollow"}
- [Gulp](https://www.npmjs.com/package/gulp-imagemin){:rel="nofollow"}
- [Grunt](https://www.npmjs.com/package/grunt-contrib-imagemin){:rel="nofollow"}

### Imagemin plugins to use

Imagemin has two types of plugins lossy and lossless. Lossy plugins offers option to customise image compression levels to meet your needs which significantly reduce image file size (losing image quality). Most of web developers use lossy plugins to have greater file size savings to speedup loading browser time and saving bandwidth.

Lossless plugins compress images without losing any image data. To keep quality of images some uses lossless plugins, but do not reduces size of image file compare to lossless plugins.

| Image Format | Lossy Plugin(s)                                                                       | Lossless Plugin(s)                                                                    |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| JPEG         | [imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg){:rel="nofollow"}   | [imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran){:rel="nofollow"} |
| PNG          | [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant){:rel="nofollow"} | [imagemin-optipng](https://www.npmjs.com/package/imagemin-optipng){:rel="nofollow"}   |
| GIF          | [imagemin-giflossy](https://www.npmjs.com/package/imagemin-giflossy){:rel="nofollow"} | [imagemin-gifsicle](https://www.npmjs.com/package/imagemin-gifsicle){:rel="nofollow"} |
| SVG          | [imagemin-svgo](https://www.npmjs.com/package/imagemin-svgo){:rel="nofollow"}         | -                                                                                     |
| WebP         | [imagemin-webp](https://www.npmjs.com/package/imagemin-webp){:rel="nofollow"}         | -                                                                                     |

A list of possible Imagemin plugins can be found [here](https://www.npmjs.com/browse/keyword/imageminplugin){:rel="nofollow"}.

### Imagemin npm module

Here, we use the npm module which offers more configuration options, but you can try the CLI as a decent alternative if you want to try Imagemin without touching any code.

First make sure we have [Node.js](https://nodejs.org/en/){:rel="nofollow"} working development environment in our system.

#### Lossy plugin(s)

Install necessary dependencies:

```bash
npm install imagemin imagemin-mozjpeg imagemin-pngquant --save
```

Create a script file say `imagemin-lossy.js`:

```js
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  const files = await imagemin(["./input/*.{jpeg,jpg,png}"], {
    destination: "./output/",
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
    ],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
```

Put images inside input folder and run script with following command:

```bash
node imagemin-lossy.js
```

It will output our compressed images in output folder.

#### Lossless plugin(s)

Install necessary dependencies:

```bash
npm install imagemin imagemin-jpegtran imagemin-optipng --save
```

Create a script file say `imagemin-lossless.js`:

```js
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");

(async () => {
  const files = await imagemin(["./input/*.{jpeg,jpg,png}"], {
    destination: "./output/",
    plugins: [imageminJpegtran({ progressive: true }), imageminOptipng()],
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
```

Put images inside input folder and run script with following command:

```bash
node imagemin-lossless.js
```

It will output our compressed images in output folder.

### Further resources

[Imagemin template](https://github.com/milanaryal/imagemin-template) on GitHub.
