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

[Download AnchorJS](https://github.com/bryanbraun/anchorjs/archive/gh-pages.zip) which is written by Bryan Braun.

### Including AnchorJS

Include the `anchor.js` file (or alternatively minified version `anchor.min.js`) in your webpage.

{% highlight html %}
<script src="anchor.js"></script>
{% endhighlight %}

For the default anchor link styling (demonstrated in the [demo](http://bryanbraun.github.io/anchorjs/)) you should also include `anchor.css`.

{% highlight html %}
<link rel="stylesheet" href="anchor.css">
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

Here's my own little custumization which works with Font Awesome:

You can download [Font Awesome](http://fortawesome.github.io/Font-Awesome/) or simply include the following style sheet before the `</head>` tag to activate Font Awesome.

{% highlight html %}
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
{% endhighlight %}

Now add the following script before the `</body>` tag or where you might think it is suitable:

{% highlight html %}
<script>

// Header link minified script
function addAnchors(e){e=e||"h1, h2, h3, h4, h5, h6";var t=document.querySelectorAll(e);for(var n=0;n<t.length;n++){var r;if(t[n].hasAttribute("id")){r=t[n].getAttribute("id")}else{var i=document.body.textContent?"textContent":"innerText";var s=t[n][i];tidyText=s.replace(/\s+/g,"-").toLowerCase();t[n].setAttribute("id",tidyText);r=tidyText}var o='<a class="header-link" href="#'+r+'"><span class="fa fa-link"></span></a>';t[n].innerHTML=t[n].innerHTML+o}};

// Header link selector
var selector = '.post-body h2, .post-body h3, .post-body h4';
addAnchors(selector);

</script>
{% endhighlight %}

Note that I have edited calling class as `header-link` and `fa fa-link` to activate Font Awesome icon link in `// Header link script` and added class in `// Header link selector` as `.post-body h2, .post-body h3, .post-body h4` to activate header link only in between post body.

After that add the following styles:

#### Floating anchor icon left side

{% highlight css %}
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
{% endhighlight %}

#### Floating anchor icon right side

{% highlight css %}
/**
 * Link placement and hover behavior.
 */
.header-link {
  opacity: 0;
  text-decoration: none;
  font-size: 90%;
  padding-left: 6px;
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

* Ben Balter - [Header hover anchor links on GitHub Pages using Jekyll](http://ben.balter.com/2014/03/13/pages-anchor-links/)
* Parker Moore - Header Anchor Links in Vanilla JavaScript for GitHub Pages and Jekyll - [Blog 1](http://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/), [Blog 2](https://byparker.com/blog/2014/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/)
* Bryan Braun - [AnchorJS](http://bryanbraun.github.io/anchorjs/)
