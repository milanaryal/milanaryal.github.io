---
title: "Implementing responsive images, videos and tables with Bootstrap"
date: 2015-02-02T05:52:33+05:45
excerpt: "Making responsive images, videos and tables for your fluid layout using Bootstrap CSS."
---

If you're using [Bootstrap](http://getbootstrap.com/) to develop your site (and if you're not, try it, it's great) you can have almost every stuffs responsive on your site. But for now here we're only going to talk about responsive images, responsive videos (also embed videos) and responsive tables using Bootstrap (should have install Bootstrap 3 and above).

Mostly everything in these posts are coming directly from the documentation itself. So hopefully some of these you immediately recognize and others you'll wonder how you missed that.

### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}

### Responsive images with Bootstrap

Working with larger images may be a problem for smaller devices. Bootstrap uses a class of `.img-responsive` to make any image responsive:

{% highlight css %}
.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}
{% endhighlight %}

This combination of `max-width: 100%` and `height: auto` will ensure the images scale down proportionally in smaller devices, while staying within the parent element's constraints on larger devices.

{% highlight html %}
<img src="..." class="img-responsive" alt="Responsive image">
{% endhighlight %}

#### Responsive images with Bootstrap using jQuery

Let suppose on your blog you have already posted 600+ posts and what if you want to add `.img-responsive` class in your every posts `img`, its very awful to open and add in your every posts that's why here we are using some jQuery code to add `.img-responsive` class in every old or new posts:

{% highlight javascript %}
$(document).ready(function () {
  $('img').addClass('img-responsive');
});
{% endhighlight %}

### Responsive videos with Bootstrap

If you're hosting video yourself that means using `<video>` then adding `.img-responsive` class can make any video responsive:

{% highlight html %}
<video src="..." class="img-responsive" controls></video>
{% endhighlight %}

#### Responsive embed videos with Bootstrap

Last year I wrote about "[Making fluid and responsive embedded videos]({% post_url /2014/2014-11-22-making-fluid-and-responsive-embedded-videos %})" with different methods but now Bootstrap can do that with even easy methods.

Allow browsers to determine video or slideshow dimensions based on the width of their containing block by creating an intrinsic ratio that will properly scale on any device.

Here's the Bootstrap CSS:

{% highlight css %}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
  padding-bottom: 75%;
}
{% endhighlight %}

Rules are directly applied to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements; optionally use an explicit descendant class `.embed-responsive-item` when you want to match the styling for other attributes.

#### Responsive video embeds that maintain aspect ratio

When Bootstrap 3.2 came out, it came out with an additional helper class to make it easier to make `iframes` (like YouTube embeds) responsive while maintaining a certain aspect ratio. It's extremely easy to use these, just add the following code to your markup:

{% highlight html %}
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
</div>
{% endhighlight %}

Notice how the `iframe` doesn't include `frameborder="0"`. This is because Bootstrap will actually normalize any ugly outlines for you with this helper class.

<figure>
  <iframe height='350' scrolling='no' src='//codepen.io/MilanAryal/embed/myByRw/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MilanAryal/pen/myByRw/'>myByRw</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal'>@MilanAryal</a>) on <a href='http://codepen.io'>CodePen</a>.
  </iframe>
    <figcaption>Responsive video embeds that maintain aspect ratio</figcaption>
</figure>

This method also works to have responsive `iframe` object for like SlideShare.

#### Responsive embed videos with Bootstrap using jQuery

Here we're using jQuery method to add the necessary Bootstrap classes to have responsive embed YouTube and Vimeo videos.

Following jQuery snippet will help you to find YouTube or Vimeo videos and also SlideShare slides and wrap/add the necessary Bootstrap CSS to have the responsive items:

{% highlight javascript %}
$(document).ready(function () {

  // For embed YouTube videos
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');

  // For embed Vimeo videos
  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');

  // For SlideShare slides
  $('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');

});
{% endhighlight %}

### Responsive tables with Bootstrap

Tables, used for displaying tabular data, are also responsive in Bootstrap.

To use Bootstrap's table styles, we use the class `.table`, which has the following CSS:

{% highlight css %}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
{% endhighlight %}

Bootstrap forces tables to fit the width of the parent element by applying a width of 100%. But this has an issue. A multi-column table will get squeezed on smaller devices and may not be readable.

Bootstrap has another class to remedy this: `.table-responsive`. Here's the CSS:

{% highlight css %}
.table-responsive {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  border: 1px solid #ddd;
}
{% endhighlight %}

These styles cause the table to become scrollable on the horizontal axis on smaller devices.

#### Responsive tables with Bootstrap using jQuery

Here we're using jQuery method to add the necessary Bootstrap classes to have responsive tables:

{% highlight javascript %}
$(document).ready(function () {
  $('table').wrap('<div class="table-responsive"></div>');
  $('table').addClass('table');
});
{% endhighlight %}

---

Hope that helps someone!
