---
title: "Self-hosting Google web fonts"
date: 2015-11-07T12:36:32+05:45
last_modified_at: 2020-05-18T18:00:00+05:45
excerpt: "Self-hosting Google Fonts on your own server and taking control over the font files."
---

Using web fonts from [Google Fonts](http://www.google.com/fonts){:rel="nofollow"}, generally makes sense to take advantages of the files hosted on Google's CDN. However a lot of web developers prefer to host web fonts on their own servers, so that they have more control over the actual font files.

First lets check out the pros and cons of self-hosting Google web fonts ---

#### Pros of self-hosting Google web fonts

- Less HTTP request, which helps to load your site a little faster.
- You don't have to worry about the downtime of Google's CDN.
- Control over the font files.

> Sleep better at night, especially if you're a web developer.

#### Cons of self-hosting Google web fonts

- You have to regularly check for the updates.

---

You have to work a little hard to self-host Google web fonts because Google does not provide any direct links to download all the popular font formats `.eot`, `.woff`, `.woff2`, `.ttf` and `.svg` files and a customized CSS for self-hosting them.

So to fix this problem following web tools will help you to host Google web fonts on your own server:

#### [Google web fonts helper](http://google-webfonts-helper.herokuapp.com/fonts){:rel="nofollow"}

Google web fonts helper is a free tool created by [Mario Ranftl](http://ranf.tl/2014/12/23/self-hosting-google-web-fonts/){:rel="nofollow"} which uses the Google Fonts API that does all the hard work for us to self-host Google web fonts in few easy steps. It also allows you to select more than one font variant, which saves a lot of time.

All you need is to choose your font, choose browser support, copy the CSS and download the font files.

#### [Font Squirrel web font generator](http://www.fontsquirrel.com/tools/webfont-generator){:rel="nofollow"}

If you need to convert a font for which you have the rights, there's Font Squirrel web font generator. This tool can convert a font to all the popular formats.

To generate the web fonts you have to download the `.ttf` (Google Fonts does provide direct link to download only `.ttf`) font files, upload to Font Squirrel web font generator, choose the browser support, copy the CSS and download the font files.

---

### Download Google web fonts using `npm`

#### [Typefaces](https://github.com/KyleAMathews/typefaces){:rel="nofollow"}

> NPM packages for Open Source typefaces --- making it easier to self-host webfonts.

With typefaces as NPM packages, you could do something like `npm install --save typeface-open-sans` which would install a package containing both the font-face css and font files and then in your project's entry file add `require('typeface-open-sans')` and... you're done.

#### [Openfonts](https://github.com/bedlaj/openfonts){:rel="nofollow"}

> NPM packages for all graduated Google Fonts typefaces including non-english subsets.

This project is fork of awesome project [typefaces](https://github.com/KyleAMathews/typefaces){:rel="nofollow"}, allowing to use different character subsets.

Each typeface package ships with all the necessary font files and css to self-host an open source typeface. All Google Fonts have been added as well.

To add Open Sans, you could do something like `npm install --save @openfonts/open-sans_latin` then in your app or site's entry file `require('@openfonts/open-sans_latin')`. And that's it! You're now self-hosting Open Sans!

It should take < 5 minutes to swap out Google Fonts.
