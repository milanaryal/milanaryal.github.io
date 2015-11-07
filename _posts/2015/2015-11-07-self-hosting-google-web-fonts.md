---
title: "Self-hosting Google web fonts"
date: 2015-11-07T12:36:32+05:45
excerpt: "Self-hosting Google Fonts on own server and taking control over the font files."
---

Using web fonts from [Google Fonts](https://www.google.com/fonts), generally makes sense to take advantages of the files hosted on Google's CDN. However a lot of web developers prefer to host web fonts on their own servers, so that they have more control over the actual font files.

First lets check out the pros and cons of self-hosting Google web fonts ---

#### Pros of self-hosting Google web fonts

> Sleep better at night, especially if you're a web developer.

* Less HTTP request, which helps to load your site a little faster.
* You don't have to worry about the downtime of Google's CDN.
* Control over the font files.

#### Cons of self-hosting Google web fonts

* You have to regularly check for the updates.

---

You have to work a little hard to self-host Google web fonts because Google does not provide any direct links to download all the popular font formats `.eot`, `.woff`, `.woff2`, `.ttf` and `.svg` files and a customized CSS for self-hosting them.

So to fix this problem following web tools will help you to host Google web fonts on your own server:

#### [Google web fonts helper](http://google-webfonts-helper.herokuapp.com/fonts)

Google web fonts helper is a free tool created by [Mario Ranftl](http://ranf.tl/2014/12/23/self-hosting-google-web-fonts/) which uses the Google Fonts API that does all the hard work for us to self-host Google web fonts in few easy steps. It also allows you to select more than one font variant, which saves a lot of time.

All you need is to choose your font, choose browser support, copy the CSS and download the font files.

#### [Localfont.com](http://www.localfont.com/)

This is a similar and alternative to Google web fonts helper. A little disadvantage about this web tool is that it does not provide to select more than one font variant at a time.

#### [Font Squirrel web font generator](http://www.fontsquirrel.com/tools/webfont-generator)

If you need to convert a font for which you have the rights, there's Font Squirrel web font generator. This tool can convert a font to all the popular formats.

To generate the web fonts you have to download the `.ttf` (Google Fonts does provide direct link to download only `.ttf`) font files, upload to Font Squirrel web font generator, choose the browser support, copy the CSS and download the font files.
