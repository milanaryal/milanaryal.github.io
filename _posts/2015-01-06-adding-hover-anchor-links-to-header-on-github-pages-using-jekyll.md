---
title: "Adding hover anchor links to header on GitHub Pages using Jekyll"
date: 2015-01-06T15:19:18+05:45
last_modified_at: 2020-05-27T20:00:00+05:45
excerpt: "Learn how to add deep anchor links to your documents using AnchorJS in Jekyll."
---

I like how a Markdown readme file on GitHub hovering over a heading produces a visible, clickable anchor link. Deep links are useful for linking to specific places in online books and documentation.

When you send someone one of the resulting anchor URLs, which includes the name of the linked heading, upon clicking the link, the user will automatically scroll to the desired part of the page, and thus be directed to the exact content you want them to see.

#### Jekyll default Kramdown Markdown auto produces header ID's

Starting with version 3, Jekyll runs with the following configuration options by default which done our job to add ID's to your post headers (H2, H3, H4, ..).

```yml
# Jekyll Default Configuration
# https://jekyllrb.com/docs/configuration/default/

kramdown:
  auto_ids          : true
```

Something like this Jekyll auto add ID's to your post content headers when the site is compiled.

```html
<h2 id="title2">Title2</h2>

<h3 id="title3">Title3</h3>

<h4 id="title4">Title4</h2>

.
.
```

### Vanilla Javascript to add anchor links to Jekyll Markdown posts header

Here's the AnchorJS which is written by *Bryan Braun*, which is lighter in code and doesn't require the hefty jQuery library.

If you use bundler like Webpack or Parcel, you can easily import it to your project.

First download AnchorJS using npm:

```bash
npm install anchor-js
```

...and then include it into your project:

```js
import AnchorJS from 'anchor-js';

const anchors = new AnchorJS();
anchors.add();
```

*You can find updated usage instructions and examples here: [bryanbraun.github.io/anchorjs](http://bryanbraun.github.io/anchorjs/){:rel="nofollow"}.*

### jQuery snippet to add anchor links to Jekyll Markdown posts header

If you're using jQuery for your site and love coding less then here's the simple jQuery snippet to add anchor in your Markdown posts header.

```js
/**
 * jQuery snippet to add anchor links to Markdown posts header
 */

$(document).ready(function () {

  /* selector */
  var postHeader = '.markdown-body>h3,.markdown-body>h4,.archive-body .archive-year';

  $(postHeader).filter('[id]').each(function () {
    var header      = $(this),
        headerID    = header.attr('id'),
        anchorClass = 'anchor',
        /* Octicons link SVG icon*/
        anchorIcon = '<svg class="icon icon-link" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'

    if (headerID) {
      header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
    }

    return this;
  });

)};
```

```css
/**
 * Header anchor link placement and hover behavior
 */

.anchor {
  position: absolute;
  padding-right: 0.575em; /* margin-left value divide by 2 */
  margin-left: -1.15em;
  color: inherit;
  opacity: 0;
}

.anchor .icon-link {
  font-size: 66%;
  vertical-align: 0.125em;
}

*:hover > .anchor {
  opacity: 0.75;
  transition: all 0.16s linear;
}

*:hover > .anchor:hover,
*:hover > .anchor:focus {
  opacity: 1;
}

/* Offsetting an html anchor to adjust for fixed header */
h1[id]
h2[id],
h3[id],
h4[id],
h5[id] {
  scroll-margin-top: 2.75em;
}
```

{% comment -%}<!-- ################################ OLD DATA ###################################### -->
### Enable markdown auto-generated ID's for headings in Jekyll
{:.no_toc}

To add anchor link on headings first make sure you have enable markdown auto-generated ID's. Kramdown markdown on GitHub Pages, it auto generate the header ID's as default. Though you can mention the `auto_ids` extension for Kramdown in your `_config.yml` file as follows:

```rb
kramdown:
  auto_ids: true # Auto-generate ID's for headings
```

Then markdown in Jekyll will auto generate ID's to the heading like the following example, where `header-link-3` ID is added to `h3` header:

```html
<h3 id="header-link-3">Header link 3</h3>
```

### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}

AnchorJS do not add 'table of contents' but if you want to have then if the markdown `auto_ids` options is set, just place `{:toc}` somewhere above all the headings and place `{:.no_toc}` to a header to exclude it from the table of contents. Now all headers (except the `{:.no_toc}` heading) will appear in the table of contents as they all will have an ID.

You can see the following example:

```text
### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}
```

### Download AnchorJS

Download AnchorJS using npm:

```bash
$ npm install anchor-js
```

or bower:

```bash
$ bower install anchor-js --save-dev
```

or just [download it from GitHub](http://github.com/bryanbraun/anchorjs/releases){:rel="nofollow"}.

### Including AnchorJS

Just include the `anchor.js` file (or alternatively minified version `anchor.min.js`) in your webpage.

```html
<script src="/path/to/anchor.js"></script>
```

Or, even not downloading you can include various open source CDN library link:

```html
<!-- make sure you include the latest version -->
<script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/3.2.0/anchor.min.js"></script>
```

### Using AnchorJS

AnchorJS provides the different options for adding anchors to the page. This method accepts a selector as a parameter in the form of a string. The selector can be used to target specific elements that you want to add anchors to. Here's an example:

#### Placing the AnchorJS icon to the left position

This will place the default AnchorJS icon to the left and only add the link to your desire headers.

```js
/**
 * AnchorJS v3.2.0 options and selector
 */

(function () {
  'use strict';

  anchors.options.placement = 'left';

  anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');

})();
```

#### Placing the AnchorJS icon to the right position

This will place the default AnchorJS icon to the right and of course only add the link to your desire headers.

```js
/**
 * AnchorJS v3.2.0 options and selector
 */

(function () {
  'use strict';

  anchors.options.placement = 'right';

  anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');

})();
```

**Note:** AnchorJS will auto generate ID's on headers (when DOM is ready) for missing headers ID's in the page and show icon on hover.

#### Styling the AnchorJS icon

You can style the AnchorJS icon according to your need.

```css
/**
 * Link placement and hover behavior.
 */

.anchorjs-link {
  color: inherit !important;
  text-decoration: none !important; /* do not underline */
}

@media (max-width: 768px) {
  /* Do not display AnchorJS icon on less than 768px view point */
  .anchorjs-link {
    display: none;
  }
}

*:hover > .anchorjs-link {
  opacity: .75;
  /* To fade links as they appear, change transition-property from 'color' to 'all' */
  -webkit-transition: color .16s linear;
  transition: color .16s linear;
}

*:hover > .anchorjs-link:hover,
.anchorjs-link:focus {
  text-decoration: none !important; /* do not underline */
  opacity: 1;
}
```

*You can find updated usage instructions and examples here: [bryanbraun.github.io/anchorjs](http://bryanbraun.github.io/anchorjs/){:rel="nofollow"}.*

---

### jQuery and Font Awesome alternative

If you're using jQuery and Font awesome in your site and love coding less then here's the simple jQuery snippet to add anchor in your Markdown posts header.

```js
/**
 * jQuery snippet to add anchor links to Markdown posts header
 */

$(function () {
  'use strict';

  /* selector */
  var postHeader = '.markdown-body > h3, .markdown-body > h4';

  $(postHeader).filter('[id]').each(function () {
    var header      = $(this),
        headerID    = header.attr('id'),
        anchorClass = 'header-link',
        anchorIcon  = '<i class="fa fa-link" aria-hidden="true"></i>';

    if (headerID) {
      header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
    }

    return this;
  });
});
```

And, here's the CSS to position the header link icon:

```css
/*
 * Header link placement and hover behavior
 */

.header-link {
  position: absolute;
  padding-right: .5em;
  margin-left: -1em;
  color: inherit !important;
  text-decoration: none !important;
  opacity: 0;
}

.header-link .fa {
  font-size: 66%;
  vertical-align: .1em;
}

/* do not display in less than 768px screen */
@media (max-width: 767px) {
  .header-link {
    display: none !important;
  }
}

*:hover > .header-link {
  opacity: .75;
  /* to fade links as they appear, change transition-property from 'color' to 'all' */
  -webkit-transition: color .16s linear;
  transition: color .16s linear;
}

*:hover > .header-link:hover,
*:hover > .header-link:focus {
  opacity: 1;
}
```
<!-- ########################### END OF OLD DATA ################################ -->{%- endcomment -%}
