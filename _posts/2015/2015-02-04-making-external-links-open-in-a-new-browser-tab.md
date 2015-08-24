---
title: "Making external links open in a new browser tab"
date: 2015-02-04T19:25:52+05:45
excerpt: "Learn about best web practices and how to open new links in a new window."
---

Take note that according to most usability experts, opening links in a new browser tab is considered bad practice.

> Avoid spawning multiple browser windows if at all possible --- taking the "Back" button away from users can make their experience so painful that it usually far outweighs whatever benefit you're trying to provide. One common theory in favor of spawning the second window is that it keeps users from leaving your site, but ironically it may have just the opposite effect by preventing them from returning when they want to.
>
> <footer><a rel="nofollow" href="http://www.snyderconsulting.net/article_7tricks.htm#7">Second browser windows</a>, <cite title="Seven tricks that Web users don't know">Seven tricks that Web users don't know</cite></footer>

If you would still like to open external links in a new browser tab/window, follow these instructions.

### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}

---

### Open link in a new browser tab

We can manually add following atrribute in a anchor tag to open all external links in a new browser tab:

#### HTML attribute (valid in HTML5 now)

{% highlight html %}
<a href="http://milanaryal.com" target="_blank">This link will open in new a tab/window</a>
{% endhighlight %}

#### Inline JavaScript way

{% highlight html %}
<a href="http://milanaryal.com" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">This link will open in new tab/window</a>
{% endhighlight %}

---

### Open link in a new browser tab using jQuery

If you want to use jQuery to auto do the same above work for the external links then you can use following technique.

#### Using jQuery to open external links in a new browser tab

There are a wide variety of different ways to only target external links:

#### Technique 1

{% highlight javascript %}
$(document).ready(function() {
   $('a').each(function() {
      var a = new RegExp('/' + window.location.host + '/');
      if (!a.test(this.href)) {
      $(this).attr("target","_blank");
      }
   });
});
{% endhighlight %}

#### Technique 2

{% highlight javascript %}
jQuery('a[href^="http"]').not('a[href^="http://your-website.com"]').attr('target', '_blank');
{% endhighlight %}

#### Technique 3

{% highlight javascript %}
jQuery('a').each(function() {
    // Let's make external links open in a new tab or window.
    var href = jQuery(this).attr('href');

    if (typeof href != 'undefined' && href != "" && (href.indexOf('http://') != -1 || href.indexOf('https://') != -1) && href.indexOf(window.location.hostname) == -1) {
        jQuery(this).attr("target", "_blank");
    }
});
{% endhighlight %}

#### Technique 4

{% highlight javascript %}
$("a:not([href*=yourdomain.com])")
.not("[href^=#]")
.not("[href^=mailto]")
.attr('target', '_blank');
{% endhighlight %}

#### Technique 5

{% highlight javascript %}
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});
{% endhighlight %}

#### Technique 6

A slightly different version if you only want to target specific URLs (if you use the rel tag "external"):

{% highlight javascript %}
$('A[rel="external"]')
.click( function() {
window.open( $(this).attr('href') );
return false;
});
{% endhighlight %}

---

### Target only external links

Target all the external link and add `.external` class so that you can add extra CSS styles to them.

#### Targetting only external links using jQuery

#### Technique I

{% highlight javascript %}
$.expr[':'].external = function(obj) {
    return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
};
$('a:external').addClass('external');
{% endhighlight %}

#### Technique II

{% highlight javascript %}
$('a:not([href^="http://your-website.com"]):not([href^="#"]):not([href^="/"])').addClass('external');
{% endhighlight %}

#### Technique III

{% highlight javascript %}
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if (!a.test(this.href)) {
       // This is an external link
   }
});
{% endhighlight %}

#### Technique IV

{% highlight javascript %}
$('a').filter(function() {
   return this.hostname && this.hostname !== location.hostname;
}).addClass("external");
{% endhighlight %}

---

### Add external link indicator

Indicating external links with different styles is good practice. This lets user to know the links will open in a new tab.

#### Adding external link indicator using CSS

#### Technique A

The following CSS code will add simple text indication.

{% highlight css %}
a[target="_blank"]:after {
    content: " (external)";
}
{% endhighlight %}

#### Technique B

If you want an image to show after then use the following, replace `IMAGEURL` with the actual image URL.

{% highlight css %}
a[target="_blank"]:after {
    content: url(IMAGEURL);
}
{% endhighlight %}

#### Technique C

If you have install Font Awesome use the following:

{% highlight css %}
a[target="_blank"]:after {
    font-family: 'FontAwesome';
    content: " \f08e";
}
{% endhighlight %}

#### Technique D

The previous selector relies on the target tag. This selector will find all links to domains other than your own and the Font Awesome external link `.fa-external-link` <i class="fa fa-external-link"></i> indicator.

{% highlight css %}
a:not( [href*='yourdomain.com'] ):not( [href^='#'] ):not( [href^='/'] ):not( [href^=mailto] ):not( [href^=tel] ):not( [href^=callto]:not( [href^=skype] ):after {
    font-family: 'FontAwesome';
    content: " \f08e";
}
{% endhighlight %}

<figure>
  <iframe height='350' scrolling='no' src='//codepen.io/MilanAryal/embed/WbZPrm/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MilanAryal/pen/WbZPrm/'>External link indicator using Font Awesome</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal'>@MilanAryal</a>) on <a href='http://codepen.io'>CodePen</a>.
  </iframe>
    <figcaption>External link indicator using Font Awesome</figcaption>
</figure>

#### Technique E

With pure CSS you can achieve this by setting all links to have the external treatment and using the cascade w/ attribute selectors to target and unset your exclusions. This technique probably won’t work on all browsers (*ahem* oldIE), but it's handy when you don’t have complete control over how your markup is created—like in a CMS with inconsistant modules/plugins that write markup—where you have a mix of absolute and relative links and no way to apply an `class="external"`, `rel="external"`, `target="_blank"`, etc. and you don’t want to rely on JavaScript.

{% highlight css %}
/* target all anchors with an href attribute */
a[href] {
	display: inline-block;
}

/* do something special to indicate an external link */
a[href]:after {
	content: ">";
}

/* target what you consider to be "internal" links and undo styles */
a[href*="your.domain.com"],
a[href^="/"],
a[href^="#"],
a[href^="mailto:"],
a[href^="javascript:"] {
	display: inline;
}

/* undo */
a[href*="your.domain.com"]:after,
a[href^="/"]:after,
a[href^="#"]:after,
a[href^="mailto:"]:after,
a[href^="javascript:"]:after {
	content: none;
}
{% endhighlight %}

---

### Open all links in a new browser tab

If you want open you all links in a new browser tab/window then use these procedure.

#### Using jQuery to open all links in a new browser tab

In case if you like to make open all the links (including external and internal) in a new tab/window:

#### Technique A1

{% highlight javascript %}
$(document).ready(function() {
  $( 'a[href^="http://"]' ).attr( 'target','_blank' );
});
{% endhighlight %}

#### Technique B2

{% highlight javascript %}
$('a').click(function() {
  $(this).attr('target', '_blank');
});
{% endhighlight %}

#### Technique C3

The example below only targets links in a `#content` area. Scoping down like that might be a good idea in case your menus are dynamic and create full URLs.

{% highlight javascript %}
$("#content a[href^='http://']").attr("target","_blank");
{% endhighlight %}
