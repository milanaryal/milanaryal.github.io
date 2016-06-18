---
title: "Adding hover anchor links to header on GitHub Pages using Jekyll"
date: 2015-01-06T15:19:18+05:45
last_modified_at: 2015-06-27T10:49:50+05:45
excerpt: "Learn how to add deep anchor links to your docs using AnchorJS in Jekyll."
---

I really like how a markdown file on GitHub hovering over a heading produces a visible, clickable anchor link. Deep links are useful for linking to specific places in online books and documentation.

When you send someone one of the resulting anchor URLs, which includes the name of the linked heading, upon clicking the link, the user will automatically scroll to the desired part of the page, and thus be directed to the exact content you want them to see.

So here's the AnchorJS which is written by Bryan Braun, alternative to do it which is lighter in code and doesn't require the hefty jQuery library.

### Enable markdown auto-generated ID's for headings in Jekyll

To add anchor link on headings first enable markdown auto-generated ID's in Jekyll `_config.yml` file.

For `Redcarpet` markdown enable the `with_toc_data` extension:

```rb
# Conversion
markdown: redcarpet
redcarpet:
  # Enable auto ID's for Redcarpet
  extensions: ["with_toc_data"]
```

For `Kramdown` markdown, it auto generate the header ID's as default. Though you can mention the `auto_ids` in your `_config.yml` file:

```rb
kramdown:
  auto_ids: true # Auto-generate ID's for headings
```

Then markdown in Jekyll will auto generate ID's to the heading like the following example, where `header-link-3` ID is added to `h3` header:

```html
<h3 id="header-link-3">Header link 3</h3>
```

You don't have to worry if you don't enable markdown auto-generated ID's, AnchorJS will also auto generate ID's on headers.

AnchorJS do not add 'table of contents' but if you want to utilize this feature with markdown then just place `{% raw %}{:toc}{% endraw %}` somewhere above all the headings and place {% raw %}`{:.no_toc}`{% endraw %} where you want to disable the auto ID's to the desire headings.

You can see the following example:

```text
{% raw %}
### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}
{% endraw %}
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
<script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/1.1.1/anchor.min.js"></script>
```

### Using AnchorJS

AnchorJS provides the different options for adding anchors to the page. This method accepts a selector as a parameter in the form of a string. The selector can be used to target specific elements that you want to add anchors to. Here's an example.

#### Placing the AnchorJS icon to the left position

This will place the default AnchorJS icon to the left and only add the link to your desire headers.

```js
/**
 * AnchorJS v1.1.1 options and selector
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
 * AnchorJS v1.1.1 options and selector
 */

(function () {
  'use strict';

  anchors.options.placement = 'right';

  anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');

})();
```

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
  /* do not display AnchorJS icon on less than 768px view point */
  .anchorjs-link {
    display: none;
  }
}

*:hover > .anchorjs-link {
  opacity: .75;
  /* To fade links as they appear, change transition-property from 'color' to 'all' */
  transition: color .16s linear;
}

*:hover > .anchorjs-link:hover,
.anchorjs-link:focus {
  text-decoration: none !important; /* do not underline */
  opacity: 1;
}
```

*You can find updated usage instructions and examples here: [bryanbraun.github.io/anchorjs](http://bryanbraun.github.io/anchorjs/){:rel="nofollow"}.*
