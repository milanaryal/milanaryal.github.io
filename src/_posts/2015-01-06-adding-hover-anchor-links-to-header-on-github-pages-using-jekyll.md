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
  auto_ids: true
```

Something like this Jekyll auto add ID's to your post content headers when the site is compiled.

```html
...

<h2 id="title2">Title2</h2>

<h3 id="title3">Title3</h3>

<h4 id="title4">Title4</h2>

...
```

### Vanilla Javascript to add anchor links to Jekyll Markdown posts header

Here's the AnchorJS which is written by _Bryan Braun_, which is lighter in code and doesn't require the hefty jQuery library.

If you use bundler like Webpack or Parcel, you can easily import it to your project.

First download AnchorJS using npm:

```bash
npm install anchor-js
```

...and then include it into your project:

```js
import AnchorJS from "anchor-js";

const anchors = new AnchorJS();
anchors.add();
```

_You can find updated usage instructions and examples here: [bryanbraun.github.io/anchorjs](http://bryanbraun.github.io/anchorjs/){:rel="nofollow"}._

### jQuery snippet to add anchor links to Jekyll Markdown posts header

If you're using jQuery for your site and love coding less then here's the simple jQuery snippet to add anchor in your Markdown posts header.

```js
/**
 * jQuery snippet to add anchor links to Markdown posts header
 */

$(document).ready(function () {

  /* selector */
  var postHeader = '.markdown-body > h3, .markdown-body > h4';

  $(postHeader).filter('[id]').each(function () {
    var header      = $(this),
        headerID    = header.attr('id'),
        anchorClass = 'anchor',
        /* Octicons v9.6.0 link.svg */
        anchorIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon icon-link" viewBox="0 0 16 16" aria-hidden="true" role="img"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>';

    if (headerID !== null) {
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
  visibility: hidden;
  opacity: 0;
}

.anchor .icon-link {
  font-size: 66%;
  vertical-align: 0.125em;
}

*:hover > .anchor {
  visibility: visible;
  opacity: 0.75;
  transition: all 0.16s linear;
}

*:hover > .anchor:hover,
*:hover > .anchor:focus {
  opacity: 1;
}

/* Offsetting an html anchor to adjust for fixed header */
h1[id],
h2[id],
h3[id],
h4[id],
h5[id],
h6[id] {
  scroll-margin-top: 2.75em;
}
```
