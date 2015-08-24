---
title: "Adding hover anchor links to header on GitHub Pages using Jekyll"
date: 2015-01-06T15:19:18+05:45
last_modified_at: "2015-06-27T10:49:50+05:45"
excerpt: "Learn how to add deep anchor links to your docs using AnchorJS in Jekyll."
redirect_from: "/2015/01/adding-hover-anchor-links-to-header-on-github-pages-using-jekyll/"
---

I really like how a markdown file on GitHub hovering over a heading produces a visible, clickable anchor link. Deep links are useful for linking to specific places in online books and documentation.

When you send someone one of the resulting anchor URLs, which includes the name of the linked heading, upon clicking the link, the user will automatically scroll to the desired part of the page, and thus be directed to the exact content you want them to see.

So here's the AnchorJS which is written by Bryan Braun, alternative to do it which is lighter in code and doesn't require the hefty jQuery library.

### Enable markdown auto-generated ID's for headings in Jekyll

To add anchor link on headings first enable markdown auto-generated ID's in Jekyll `_config.yml` file.

For `Redcarpet` markdown enable the `with_toc_data` extension:

{% highlight ruby %}
# Conversion
markdown:        redcarpet
redcarpet:
  # enable auto ids for redcarpet
  extensions:    ["with_toc_data"]
{% endhighlight %}

For `Kramdown` markdown, it auto generate the header ID's.

Only make sure you have not disable the `auto_ids`, like the following example:

{% highlight ruby %}
kramdown:
  # Disable auto-generated ID's for headings
  auto_ids: false
{% endhighlight %}

Then markdown in Jekyll will auto generate ID's to the heading like the following example, where `header-link-3` ID is added to `h3` header:

{% highlight html %}
<h3 id="header-link-3">Header link 3</h3>
{% endhighlight %}

You don't have to worry if you don't enable markdown auto-generated ID's, AnchorJS will also auto generate ID's on headers.

AnchorJS do not add 'table of contents' but if you want to utilize this feature with markdown then just place `{% raw %}{:toc}{% endraw %}` somewhere above all the headings and place {% raw %}`{:.no_toc}`{% endraw %} where you want to disable the auto ID's to the desire headings.

You can see the following example:

{% highlight text %}
{% raw %}
### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}
{% endraw %}
{% endhighlight %}

### Download AnchorJS

Download AnchorJS using npm:

{% highlight bash %}
$ npm install anchor-js
{% endhighlight %}

or bower:

{% highlight bash %}
$ bower install anchor-js --save-dev
{% endhighlight %}

or just download it from GitHub:

<p>
  <a class="btn btn-default" href="https://github.com/bryanbraun/anchorjs/releases" onClick="ga('send', 'event', 'Click', 'Direct link', 'AnchorJS');">Direct link</a>
</p>

### Including AnchorJS

Just include the `anchor.js` file (or alternatively minified version `anchor.min.js`) in your webpage.

{% highlight html %}
<script src="/path/to/anchor.js"></script>
{% endhighlight %}

Or, even not downloading you can include various open source CDN library link:

{% highlight html %}
<!-- make sure you include the latest version -->
<script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/1.1.1/anchor.min.js"></script>
{% endhighlight %}

### Using AnchorJS

AnchorJS provides the different options for adding anchors to the page. This method accepts a selector as a parameter in the form of a string. The selector can be used to target specific elements that you want to add anchors to. Here's an example.

#### Placing the AnchorJS icon to the left position

This will place the default AnchorJS icon to the left and only add the link to your desire headers.

{% highlight javascript %}
/**
 * AnchorJS v1.1.1 options and selector
 */

(function () {
  'use strict';

  anchors.options.placement = 'left';

  anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');

})();
{% endhighlight %}

#### Placing the AnchorJS icon to the right position

This will place the default AnchorJS icon to the right and of course only add the link to your desire headers.

{% highlight javascript %}
/**
 * AnchorJS v1.1.1 options and selector
 */

(function () {
  'use strict';

  anchors.options.placement = 'right';

  anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');

})();
{% endhighlight %}

#### Styling the AnchorJS icon

You can style the AnchorJS icon according to your need.

{% highlight css %}
/**
 * Link placement and hover behavior.
 */

.anchorjs-link {
  color: inherit !important;
  text-decoration: none !important; // do not underline
}

@media (max-width: 768px) {
  // do not display AnchorJS icon on less than 768px view point
  .anchorjs-link {
    display: none;
  }
}

*:hover > .anchorjs-link {
  opacity: .75;
  // To fade links as they appear, change transition-property from 'color' to 'all'
  transition: color .16s linear;
}

*:hover > .anchorjs-link:hover,
.anchorjs-link:focus {
  text-decoration: none !important; // do not underline
  opacity: 1;
}
{% endhighlight %}

<div class="alert alert-info" role="alert">
  <p>You can find updated usage instructions and examples here: <a class="alert-link" href="http://bryanbraun.github.io/anchorjs/" onClick="ga('send', 'event', 'Click', 'Direct link', 'AnchorJS');">bryanbraun.github.io/anchorjs</a>.</p>
</div>

---

### AnchorJS with Font Awesome

Here I'm using AnchorJS v0.4.0 with little customization which works with Font Awesome.

You can download [Font Awesome](http://fortawesome.github.io/Font-Awesome/) or simply include the following style sheet before the `</head>` tag to activate Font Awesome.

{% highlight html %}
<!-- The recommended CDN for Font Awesome - http://bootstrapcdn.com/#fontawesome_tab

     make sure you include the latest version -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
{% endhighlight %}

Now add the following script before the `</body>` tag or where you might think it is suitable, but make sure you change the selector varibles where you want to put anchor links.

{% highlight javascript %}
/*!
 * AnchorJS - v0.4.0 - 2015-04-20
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */

(function () {
  'use strict';

  // AnchorJS selector - Define/change like the following eg where you want to use anchor links.
  var selector = '.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6';

  // Select any elements that match the provided selector.
  var elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    // Selector was valid but no elements were found.
    return false;
  }

  // Produce a list of existing IDs so we don't generate a duplicate.
  var elsWithIds = document.querySelectorAll('[id]');
  var idList = [].map.call(elsWithIds, function assign(el) {
    return el.id;
  });

  // Loop through the selected elements.
  for (var i = 0; i < elements.length; i++) {
    var elementID;

    if (elements[i].hasAttribute('id')) {
      elementID = elements[i].getAttribute('id');
    } else {
      // We need to create an ID on our element. First, we find which text
      // selection method is available to the browser.
      var textMethod = document.body.textContent ? 'textContent' : 'innerText';

      // Get the text inside our element
      var roughText = elements[i][textMethod];

      // Refine it so it makes a good ID. Strip out non-safe characters, replace
      // spaces with hyphens, truncate to 32 characters, and make toLowerCase.
      //
      // Example string:                                 // "⚡⚡⚡ Unicode icons are cool--but don't belong in a URL."
      var tidyText = roughText.replace(/[^\w\s-]/gi, '') // " Unicode icons are cool--but dont belong in a URL"
                              .replace(/\s+/g, '-')      // "-Unicode-icons-are-cool--but-dont-belong-in-a-URL"
                              .replace(/-{2,}/g, '-')    // "-Unicode-icons-are-cool-but-dont-belong-in-a-URL"
                              .substring(0, 32)          // "-Unicode-icons-are-cool-but-dont"
                              .replace(/^-+|-+$/gm, '')  // "Unicode-icons-are-cool-but-dont"
                              .toLowerCase();            // "unicode-icons-are-cool-but-dont"

      // Compare our generated ID to existing IDs (and increment it if needed)
      // before we add it to the page.
      var index,
          count = 0,
          newTidyText = tidyText;
      do {
        if (index !== undefined) {
          newTidyText = tidyText + '-' + count;
        }
        // .indexOf is supported in IE9+.
        index = idList.indexOf(newTidyText);
        count += 1;
      } while (index !== -1);
      index = undefined;
      idList.push(newTidyText);

      // Assign it to our element.
      // Currently the setAttribute element is only supported in IE9 and above.
      elements[i].setAttribute('id', newTidyText);

      // Grab it for use in our anchor.
      elementID = newTidyText;
    }

    // Add the necessary default class enabling Font Awesome link icon
    var readableID = elementID.replace(/-/g, ' ');
    var anchor = '<a class="anchorjs-link" href="#' + elementID + '">' +
                    '<span class="anchorjs-description">Anchor link for: ' + readableID + '</span>' +
                    '<span class="fa fa-link" aria-hidden="true"></span>' +
                 '</a>';

    elements[i].innerHTML += anchor;
  }

})();
{% endhighlight %}

After that add the following style:

#### Floating anchor icon to left side

{% highlight css %}
/**
 * Link placement and hover behavior.
 */
.anchorjs-link {
  position: absolute;
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
  left: -0.5em;
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
 * Make screen-reader friendly description text visually hidden.
 */
.anchorjs-description {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/**
 * Reasonable default styles.
 * Feel free to override or replace these with your own.
 */
.anchorjs-link:link    { color: #DFD487; }
.anchorjs-link:visited { color: #DFD487; }
.anchorjs-link:hover   { color: #EC7963; }
.anchorjs-link:active  { color: #EC7963; }
{% endhighlight %}

#### Floating anchor icon to right side

{% highlight css %}
/**
 * Link placement and hover behavior.
 */
.anchorjs-link {
  position: relative;
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
  padding-left: -0.5em;
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
 * Make screen-reader friendly description text visually hidden.
 */
.anchorjs-description {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/**
 * Reasonable default styles.
 * Feel free to override or replace these with your own.
 */
.anchorjs-link:link    { color: #DFD487; }
.anchorjs-link:visited { color: #DFD487; }
.anchorjs-link:hover   { color: #EC7963; }
.anchorjs-link:active  { color: #EC7963; }
{% endhighlight %}

---

### Other alternatives

* [Header hover anchor links on GitHub Pages using Jekyll](http://ben.balter.com/2014/03/13/pages-anchor-links/) - Ben Balter
* Header Anchor Links in Vanilla JavaScript for GitHub Pages and Jekyll: ([Blog 1](http://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/), [Blog 2](https://byparker.com/blog/2014/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/)) - Parker Moore
