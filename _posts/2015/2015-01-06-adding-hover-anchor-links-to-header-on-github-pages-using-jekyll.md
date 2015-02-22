---
layout: post
title: "Adding hover anchor links to header on GitHub Pages using Jekyll"
date: 2015-01-06T15:19:18+05:45
redirect_from: "/2015/01/adding-hover-anchor-links-to-header-on-github-pages-using-jekyll/"
---

I really like how a markdown file on GitHub hovering over a heading produces a visible, clickable anchor link. Deep links are useful for linking to specific places in online books and documentation.

When you send someone one of the resulting anchor URLs, which includes the name of the linked heading, upon clicking the link, the user will automatically scroll to the desired part of the page, and thus be directed to the exact content you want them to see.

So here's the AnchorJS alternative to do it which is lighter in code and doesn't require the hefty jQuery library:

### Enabling header id on Jekyll with Markdown

To use this feature you should enable header id on Jekyll blog.

Like the following example, where `header-link-3` id is added to `h3` header:

{% highlight html %}
<h3 id="header-link-3">Header link 3</h3>
{% endhighlight %}

(By **manually adding ids like the above example** you can add hover anchor links for your site, if you're **not using Jekyll for your site or you don't want to enable** the following markdown extension on Jekyll.)

For `Redcarpet` markdown **enable the `with_toc_data` extension**:

{% highlight ruby %}
# Conversion
markdown:        redcarpet
redcarpet:
  extensions:    ["with_toc_data"]
{% endhighlight %}

For `Kramdown` markdown, it auto generate the header ids.

Only **make sure you have not disable the `auto_ids`**, like the following example:

{% highlight ruby %}
kramdown:
  # Disable auto-generated ID's for headings
  auto_ids: false
{% endhighlight %}

### AnchorJS

[Download AnchorJS](//github.com/bryanbraun/anchorjs/archive/gh-pages.zip) which is written by Bryan Braun.

<p><a class="btn btn-primary" href="//bryanbraun.github.io/anchorjs/" onClick="ga('send', 'event', 'Click', 'Direct link', 'AnchorJS');">Direct link</a></p>

### Including AnchorJS

Include the `anchor.js` file (or alternatively minified version `anchor.min.js`) in your webpage.

#### The JavaScript

{% highlight html %}
<script src="anchor.js"></script>
{% endhighlight %}

{% highlight javascript %}
/*!
 * AnchorJS - v0.1.0 - 2014-08-17
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */

function addAnchors(selector) {
  'use strict';

  // Sensible default selector, if none is provided.
  if (!selector) {
    selector = 'h1, h2, h3, h4, h5, h6';
  } else if (typeof selector !== 'string') {
    throw new Error('AnchorJS accepts only strings; you used a ' + typeof selector);
  }

  // Select any elements that match the provided selector.
  var elements = document.querySelectorAll(selector);

  // Loop through the selected elements.
  for (var i = 0; i < elements.length; i++) {
    var elementID;

    if (elements[i].hasAttribute('id')) {
      elementID = elements[i].getAttribute('id');
    } else {
      // We need to create an ID on our element. First, we find which text selection method is available to the browser.
      var textMethod = document.body.textContent ? 'textContent' : 'innerText';

      // Get the text inside our element
      var roughText = elements[i][textMethod];

      // Refine it so it makes a good ID. Makes all lowercase and hyphen separated.
      // Ex. Hello World > hello-world
      var tidyText = roughText.replace(/\s+/g, '-').toLowerCase();

      // Assign it to our element.
      // Currently the setAttribute element is only supported in IE9 and above.
      elements[i].setAttribute('id', tidyText);

      // Grab it for use in our anchor.
      elementID = tidyText;
    }
    var anchor = '<a class="anchorjs-link" href="#' + elementID + '"><span class="anchorjs-icon"></span></a>';

    elements[i].innerHTML += anchor;
  }
}

{% endhighlight %}

#### The CSS

For the default anchor link styling (demonstrated in the [demo](http://bryanbraun.github.io/anchorjs/)) you should also include `anchor.css`.

{% highlight html %}
<link rel="stylesheet" href="anchor.css">
{% endhighlight %}

{% highlight css %}
/**
 * Store the link icon as a base64 embedded icon font.
 */
@font-face {
  font-family: 'anchorjs-icons';
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg6v8yoAAAC8AAAAYGNtYXDL8RqdAAABHAAAADxnYXNwAAAAEAAAAVgAAAAIZ2x5Zkm2oNUAAAFgAAABWGhlYWQAHd4cAAACuAAAADZoaGVhB3sECwAAAvAAAAAkaG10eAYAAEcAAAMUAAAADGxvY2EACgCsAAADIAAAAAhtYXhwAAYAcAAAAygAAAAgbmFtZUQXtNYAAANIAAABOXBvc3QAAwAAAAAEhAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACDmAAPA/8D/wAPAAEAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACgAAAAGAAQAAQACACDmAP//AAAAIOYA////4RoCAAEAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAIARwAHA7kDeQA2AG0AAAEnLgEiBg8BDgEUFh8BHgMXNy4DLwEuATQ2PwE+ATIWHwEeARQGDwEeAxU3PgE0JicBLgMnBx4DHwEeARQGDwEOASImLwEuATQ2PwEuAzUHDgEUFh8BHgEyNj8BPgE0Ji8BA7kEI1ldWiPaIyQkIwQDBgYGBFAEBwYHAwQTExMT2xMwMjETBBMTExNjBwkGA5gkIyMk/r4DBgYGBFAEBwYHAwQTExMT2xMwMjETBBMTExNjBwkGA5gkIyMkBCNZXVoj2iMkJCMEA3UEJCMjJNojWV1aIwQDBgUFA1ACBQUFAwQUMDIxE9oTExMTBBMxMjATYxAhISIRmSNaXVkj/sYDBgUFA1ACBQUFAwQUMDIxE9oTExMTBBMxMjATYxAhISIRmSNaXVkjBCQjIyTaI1ldWiMEAAEAAAABAABR/4xQXw889QALBAAAAAAAzqNM0wAAAADOo0zTAAAAAAO5A3kAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAABHA7kAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAgAAAAQAAEcAAAAAAAoArAABAAAAAwBuAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoAKABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoAKABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADAALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype'),
       url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATwAAsAAAAABKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDq/zKmNtYXAAAAFoAAAAPAAAADzL8RqdZ2FzcAAAAaQAAAAIAAAACAAAABBnbHlmAAABrAAAAVgAAAFYSbag1WhlYWQAAAMEAAAANgAAADYAHd4caGhlYQAAAzwAAAAkAAAAJAd7BAtobXR4AAADYAAAAAwAAAAMBgAAR2xvY2EAAANsAAAACAAAAAgACgCsbWF4cAAAA3QAAAAgAAAAIAAGAHBuYW1lAAADlAAAATkAAAE5RBe01nBvc3QAAATQAAAAIAAAACAAAwAAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAg5gADwP/A/8ADwABAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAoAAAABgAEAAEAAgAg5gD//wAAACDmAP///+EaAgABAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAACAEcABwO5A3kANgBtAAABJy4BIgYPAQ4BFBYfAR4DFzcuAy8BLgE0Nj8BPgEyFh8BHgEUBg8BHgMVNz4BNCYnAS4DJwceAx8BHgEUBg8BDgEiJi8BLgE0Nj8BLgM1Bw4BFBYfAR4BMjY/AT4BNCYvAQO5BCNZXVoj2iMkJCMEAwYGBgRQBAcGBwMEExMTE9sTMDIxEwQTExMTYwcJBgOYJCMjJP6+AwYGBgRQBAcGBwMEExMTE9sTMDIxEwQTExMTYwcJBgOYJCMjJAQjWV1aI9ojJCQjBAN1BCQjIyTaI1ldWiMEAwYFBQNQAgUFBQMEFDAyMRPaExMTEwQTMTIwE2MQISEiEZkjWl1ZI/7GAwYFBQNQAgUFBQMEFDAyMRPaExMTEwQTMTIwE2MQISEiEZkjWl1ZIwQkIyMk2iNZXVojBAABAAAAAQAAUf+MUF8PPPUACwQAAAAAAM6jTNMAAAAAzqNM0wAAAAADuQN5AAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAARwO5AAEAAAAAAAAAAAAAAAAAAAADAAAAAAIAAAAEAABHAAAAAAAKAKwAAQAAAAMAbgACAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAA4AAAABAAAAAAACAA4ARwABAAAAAAADAA4AJAABAAAAAAAEAA4AVQABAAAAAAAFABYADgABAAAAAAAGAAcAMgABAAAAAAAKACgAYwADAAEECQABAA4AAAADAAEECQACAA4ARwADAAEECQADAA4AJAADAAEECQAEAA4AVQADAAEECQAFABYADgADAAEECQAGAA4AOQADAAEECQAKACgAYwBpAGMAbwBtAG8AbwBuAFYAZQByAHMAaQBvAG4AIAAwAC4AMABpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuAFIAZQBnAHUAbABhAHIAaQBjAG8AbQBvAG8AbgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4AAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
  font-style: normal;
  font-weight: normal;
}
.anchorjs-icon {
  font-family: 'anchorjs-icons';
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  speak: none;
  text-transform: none;

  /* Better Icon Rendering */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/**
 * Link placement and hover behavior.
 */
.anchorjs-link {
  opacity: 0;
  text-decoration: none;
}
*:hover > .anchorjs-link,
.anchorjs-link:focus  {
  /* To fade links as they appear, change transition-property from 'color' to 'all' */
  opacity: 1;
  -webkit-transition: color .16s linear;
  -moz-transition: color .16s linear;
  -o-transition: color .16s linear;
  transition: color .16s linear;
}

/**
 * Reasonable default styles.
 * Feel free to override or replace these with your own.
 */
.anchorjs-link:link    { color: #DFD487; }
.anchorjs-link:visited { color: #DFD487; }
.anchorjs-link:hover   { color: #EC7963; }
.anchorjs-link:active  { color: #EC7963; }

.anchorjs-icon {
  font-size: 90%;
  padding-left: 6px;
}

.anchorjs-icon:before {
  content: '\e600';
  /* alternative icons -- uncomment to use */
  /*
  content: '#';
  content: '¶';
  content: '❡';
  content: '§';
  */
}
{% endhighlight %}

### Using AnchorJS

AnchorJS provides the addAnchors() method for adding anchors to the page. This method accepts a selector as a parameter in the form of a string. The selector can be used to target specific elements that you want to add anchors to. Here's an example.

{% highlight javascript %}
/**
* Example 1
* Add anchors to all h1's on the page
*/
addAnchors('h1');

/**
* Example 2
* Adds anchors to elements that have been assigned the class '.anchored'
*/
addAnchors('.anchored');

/**
* Example 3
* Adds anchors to all h1, h2, & h3's inside a container with an ID of '#post'
*/
addAnchors('#post h1, #post h2, #post h3');

/**
* Example 4
* If no selector is provided, it falls back to a default selector of 'h1, h2, h3, h4, h5, h6'
* which adds anchors to all headings.
*/
addAnchors();
{% endhighlight %}

That's it you're done. :smile:

---

### Customizing AnchorJS

Here's my own little customization which works with Font Awesome:

You can download [Font Awesome](http://fortawesome.github.io/Font-Awesome/) or simply include the following style sheet before the `</head>` tag to activate Font Awesome.

{% highlight html %}
<!-- BootstrapCDN for Font Awesome - http://bootstrapcdn.com/#fontawesome_tab -->

<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
{% endhighlight %}

Now add the following script before the `</body>` tag or where you might think it is suitable:

{% highlight javascript %}
/*!
 * AnchorJS - v0.1.0 - 2014-08-17
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2014 Bryan Braun; Licensed MIT
 */

// Header link wrapping script
function addAnchors(selector) {
  'use strict';
  if (!selector) {
    selector = 'h1, h2, h3, h4, h5, h6';
  } else if (typeof selector !== 'string') {
    throw new Error('AnchorJS accepts only strings; you used a ' + typeof selector);
  }
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    var elementID;
    if (elements[i].hasAttribute('id')) {
      elementID = elements[i].getAttribute('id');
    } else {
      var textMethod = document.body.textContent ? 'textContent' : 'innerText';
      var roughText = elements[i][textMethod];
      var tidyText = roughText.replace(/\s+/g, '-').toLowerCase();
      elements[i].setAttribute('id', tidyText);
      elementID = tidyText;
    }
    var anchor = '<a class="header-link" href="#' + elementID + '"><span class="fa fa-link"></span></a>';
    elements[i].innerHTML += anchor;
  }
};

// Header link selector - Override or replace these with your own.
addAnchors('.post-body h2, .post-body h3, .post-body h4');
{% endhighlight %}

{% comment %}
<!-- OLD CUSTOMIZATION <script>
/*! AnchorJS - v0.1.0 - 2014-08-17 */
function addAnchors(t){"use strict";if(t){if("string"!=typeof t)throw new Error("AnchorJS accepts only strings; you used a "+typeof t)}else t="h1, h2, h3, h4, h5, h6";for(var e=document.querySelectorAll(t),r=0;r<e.length;r++){var n;if(e[r].hasAttribute("id"))n=e[r].getAttribute("id");else{var s=document.body.textContent?"textContent":"innerText",o=e[r][s],a=o.replace(/\s+/g,"-").toLowerCase();e[r].setAttribute("id",a),n=a}var i='<a class="header-link" href="#'+n+'"><span class="fa fa-link"></span></a>';e[r].innerHTML+=i}}
// Header link minified script
function addAnchors(e){e=e||"h1, h2, h3, h4, h5, h6";var t=document.querySelectorAll(e);for(var n=0;n<t.length;n++){var r;if(t[n].hasAttribute("id")){r=t[n].getAttribute("id")}else{var i=document.body.textContent?"textContent":"innerText";var s=t[n][i];tidyText=s.replace(/\s+/g,"-").toLowerCase();t[n].setAttribute("id",tidyText);r=tidyText}var o='<a class="header-link" href="#'+r+'"><span class="fa fa-link"></span></a>';t[n].innerHTML=t[n].innerHTML+o}};
// Header link selector
var selector = '.post-body h2, .post-body h3, .post-body h4';
addAnchors(selector);
</script> -->
{% endcomment %}

Note that I have edited wrapping class as `header-link` and `fa fa-link` to activate Font Awesome icon link in `// Header link script` and added class in `// Header link selector` as `.post-body h2, .post-body h3, .post-body h4` to activate header link only in between post body (change according to your usage).

After that add the following style:

#### Floating anchor icon left side

{% highlight css %}
/**
 * Link placement and hover behavior.
 */
.header-link {
  position: absolute;
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
  left: -0.5em;
}
*:hover > .header-link,
.header-link:focus  {
  /* To fade links as they appear, change transition-property from 'color' to 'all' */
  opacity: 1;
  -webkit-transition: color .16s linear;
  -moz-transition: color .16s linear;
  -o-transition: color .16s linear;
  transition: color .16s linear;
}

/**
 * Reasonable default styles.
 * Feel free to override or replace these with your own.
 */
.header-link:link    { color: #DFD487; }
.header-link:visited { color: #DFD487; }
.header-link:hover   { color: #EC7963; }
.header-link:active  { color: #EC7963; }
{% endhighlight %}

{% comment %}
// OLD CUSTOMIZATION
/**
* Header Link placement and hover behavior.
*/
.header-link {
  display: inline-block;
  position: absolute;
  left: -1.2em;
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
}
*:hover > .header-link,
.header-link:focus  {
  opacity: 1;
  -webkit-transition: color .16s linear;
  -moz-transition: color .16s linear;
  -o-transition: color .16s linear;
  transition: color .16s linear;
}

a.header-link {
  text-decoration: none;
  color: #313131;
}
a.header-link :hover {
  text-decoration: none;
  color: #268bd2;
{% endcomment %}

#### Floating anchor icon right side

{% highlight css %}
/**
 * Link placement and hover behavior.
 */
.header-link {
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
  padding-left: 0.5em;
}
*:hover > .header-link,
.header-link:focus  {
  /* To fade links as they appear, change transition-property from 'color' to 'all' */
  opacity: 1;
  -webkit-transition: color .16s linear;
  -moz-transition: color .16s linear;
  -o-transition: color .16s linear;
  transition: color .16s linear;
}

/**
 * Reasonable default styles.
 * Feel free to override or replace these with your own.
 */
.header-link:link    { color: #DFD487; }
.header-link:visited { color: #DFD487; }
.header-link:hover   { color: #EC7963; }
.header-link:active  { color: #EC7963; }
{% endhighlight %}

Now it's all done. :wink:

---

### Further references

* Bryan Braun - [AnchorJS](//bryanbraun.github.io/anchorjs/)
* Ben Balter - [Header hover anchor links on GitHub Pages using Jekyll](http://ben.balter.com/2014/03/13/pages-anchor-links/)
* Parker Moore - Header Anchor Links in Vanilla JavaScript for GitHub Pages and Jekyll - [Blog 1](http://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/), [Blog 2](https://byparker.com/blog/2014/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/)
