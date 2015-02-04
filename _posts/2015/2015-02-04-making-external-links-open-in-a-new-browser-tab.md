---
layout: post
title: Making external links open in a new browser tab
date: 2015-02-04T19:25:52+05:45
---

Take note that according to most usability experts, opening links in a new browser tab is considered bad practice.

If you would still like to open external links in a new window, follow these instructions:

## Open link in a new window

### HTML attribute (valid in HTML5 now):

{% highlight html %}
<a href="http://milanaryal.com" target="_blank">This link will open in new window/tab</a>
{% endhighlight %}

### Inline JavaScript way:

{% highlight html %}
<a href="http://milanaryal.com" onclick="window.open(this.href); return false;" onkeypress="window.open(this.href); return false;">This link will open in new window/tab</a>
{% endhighlight %}

### Using jQuery to open external links in a new browser tab

If you want to use jQuery to auto do the same above work for the external links then you can use following technique.

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
jQuery('a[href^="http"]').not('a[href^="ADD_YOUR_SITE_URL_HERE"]').attr('target', '_blank');
{% endhighlight %}

#### Technique 3

{% highlight javascript %}
jQuery('a').each(function() {
    // Let's make external links open in a new window or tab.
    var href = jQuery(this).attr('href');

    if (typeof href != 'undefined' && href != "" && (href.indexOf('http://') != -1 || href.indexOf('https://') != -1) && href.indexOf(window.location.hostname) == -1) {
        jQuery(this).attr("target", "_blank");
    }
});
{% endhighlight %}

---

#### Technique 4

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

#### Technique 5

{% highlight javascript %}
$('a').filter(function() {
   return this.hostname && this.hostname !== location.hostname;
}).addClass("external");
{% endhighlight %}

#### Technique 6

{% highlight javascript %}
$.expr[':'].external = function(obj) {
    return !obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname);
};
$('a:external').addClass('external');
{% endhighlight %}

#### Technique 7

{% highlight javascript %}
$('a:not([href^="http://your-website.com"]):not([href^="#"]):not([href^="/"])').addClass('external');
{% endhighlight %}

#### Technique 8

{% highlight javascript %}
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if (!a.test(this.href)) {
       // This is an external link
   }
});
{% endhighlight %}

---

### Using jQuery to open all links in a new browser tab

In case if you like to make open all the links (including external and internal) in a new tab/window:

#### Technique I

{% highlight javascript %}
$(document).ready(function() {
  $( 'a[href^="http://"]' ).attr( 'target','_blank' );
});
{% endhighlight %}

#### Technique II

{% highlight javascript %}
$('a').click(function() {
  $(this).attr('target', '_blank');
});
{% endhighlight %}

#### Technique III

The example below only targets links in a `#content` area. Scoping down like that might be a good idea in case your menus are dynamic and create full URLs.

{% highlight javascript %}
$("#content a[href^='http://']").attr("target","_blank");
{% endhighlight %}
