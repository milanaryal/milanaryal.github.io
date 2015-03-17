---
title: "Making fluid and responsive embedded videos"
date: 2014-11-22T19:32:39+05:45
excerpt: "This tutorial helps you to have fluid width embedded videos in your responsive web design."
redirect_from:
  - "/2014/11/fluid-and-responsive-embedded-videos.html"
  - "/2014/11/making-fluid-and-responsive-embedded-videos/"
---

A few HTML elements don't play nice with responsive layouts. One of these is the good ol' iframe, which you may need to use when embedding content from external sources such as YouTube and Vimeo videos.

iFrames, contain external content which cannot really be measured from the parent page. The width and height settings are necessary to define the size of the iframe, as the content inside will not help shape it (like an image would). But setting a static width and height on an element poses a problem for any type of fluid/flexible design. If the parent area shrinks in width to be narrower than the video, the video will break out, not shrink to fit.

In this post, I'll show you making embedded video responsive using CSS, so that content such as YouTube or Vimeo video resize with the browser's viewport. For those occasions when non-coders will be embedding video on your website and you don't want to rely on them adding extra markup, we'll also look at a solution that uses JavaScript instead of CSS.

### The markup for embedded video

Services such as YouTube provide code that you can copy and paste into your own website to embed content. When you embed content from an external source, the code will include an iframe:

{% highlight html %}
<!-- Copy & Pasted from YouTube -->
<iframe width="560" height="315" src="//www.youtube.com/embed/Y1xs_xPb46M" frameborder="0" allowfullscreen></iframe>
{% endhighlight %}

This iframe enables external content to be displayed on your website, because it includes a URL that points to the source of the streamed content.

However, you'll notice that our iframe includes width and height attributes. Remove these and the iframe will disappear because it would have no dimensions. And you can't fix this in your style sheet, unfortunately.
The width attribute means that, on a screen narrower than 560 pixels, the embedded content will protrude outside of its containing element, breaking the layout.

Fortunately there are a couple of possible solutions here.

### Responsive video with CSS

With [Thierry Koblenz's excellent technique](http://alistapart.com/article/creating-intrinsic-ratios-for-video), you wrap the video in another element which has an intrinsic aspect ratio, then absolute position the video within that. That gives us fluid width with a reasonable height we can count on.

{% highlight html %}
<div class="video-wrapper">
  <!-- Copy & Pasted from YouTube -->
  <iframe width="560" height="315" src="//www.youtube.com/embed/Y1xs_xPb46M" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}

{% highlight css %}
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
{% endhighlight %}

<figure>
  <!-- Copy & Pasted from YouTube -->
  <iframe width="560" height="315" src="//www.youtube.com/embed/Y1xs_xPb46M?rel=0&amp;hd=1&amp;theme=light" frameborder="0" allowfullscreen></iframe>
  <figcaption>Whatever YouTube iframe embed code you paste within the <code>.video-wrapper</code>, you'll see it presented in a fluid 16:9 box.</figcaption>
</figure>

We can again look to Thierry's solution for adding additional CSS and imposing aspect ratio.

{% highlight css %}
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.video-wrapper object,
.video-wrapper embed,  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
{% endhighlight %}

### Responsive video with JavaScript

The above technique is awesome, but it has several possible limitations:

1. It requires wrapper element, so just straight up copy-and-pasting code from YouTube is out. Users will need to be a bit more saavy.
2. If you have legacy content and are redesigning to be fluid, all old videos need HTML adjustments.
3. All videos need to be the same aspect ratio. Otherwise they'll be forced into a different aspect ratio and you'll get the "bars". Or, you'll need a toolbox of class names you can apply to adjust it which is an additional complication.

If either of these limitations apply to you, you might consider a JavaScript solution. Imagine this: when the page loads all videos are looked at and their aspect ratio is saved. Once right away, and whenever the window is resized, all the videos are resized to fill the available width and maintain their aspect ratio.

#### FitVids.js

Until recently, most solutions were plugins, which are OK to an extent but can have performance issues. A popular plugin is [FitVids.js](http://fitvidsjs.com), developed by Chris Coyier and Paravel.

#### FluidVids.js

A more current solution is to use just a script -- such as [FluidVids.js](http://toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/), developed by Todd Motto. FluidVids.js is simple to use and load faster:

1. [Download the script](http://github.com/toddmotto/fluidvids/archive/master.zip) (ZIP) from GitHub and upload it to your server with the same folder structure that the downloaded files come in. This will place the script itself in a folder named `dist`.
2. Ensure you place the script before the closing `<body>` tag.

{% highlight html %}
<body>
  <!-- html above -->
  <script src="dist/fluidvids.js"></script>
  <script>
  // fluidvids module available
  </script>
</body>
{% endhighlight %}

Pass in your configuration:

{% highlight html %}
// fluidvids module available
<script>
  fluidvids.init({
    selector: ['iframe', 'object'], // runs querySelectorAll()
    players: ['www.youtube.com', 'player.vimeo.com'] // players to support
  });
</script>
{% endhighlight %}

To add other services like SlideShare to FluidVids:

{% highlight javascript %}
players: ['www.youtube.com', 'player.vimeo.com', 'www.slideshare.net'] // players to support
{% endhighlight %}

That's all you need to do to make videos resize on all devices that support JavaScript. It works not only for YouTube, but for Vimeo and even SlideShare too. The problem, however, is that if you users don't have JavaScript support or the JavaScript hasn't loaded yet or JavaScript hasn't loaded correctly, the only fallback you can use is to add the following to your style sheet:

{% highlight css %}
iframe {
    max-width: 100%;
}
{% endhighlight %}

This will ensure that video resizes to the width of the browser's window. But it won't resize the video's height; unfortunately, iframe just doesn't work this way. So, the video won't break your layout, but it won't look very good either. This is not really a good option, so **if you can avoid using JavaScript for videos, it's a good idea to do so**.

### Other alternative EmbedResponsively.com

If you're developing a responsive website using a content management system, then one or more of the website's editors will probably have to embed video at some point. You can point your editors to [EmbedResponsively.com](http://embedresponsively.com) which **generates responsive `<embed>` codes** for embedding rich third-party media with one click, with CSS alone. Alternatively, you could use a JavaScript solution, to relieve nervous editors from having to add extra CSS and markup. However, as long as you can avoid this path, the better, of course.

We can just use [EmbedResponsively](http://embedresponsively.com) to generate the copy-paste-code with one click.

{% highlight css %}
.embed-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
{% endhighlight %}

{% highlight html %}
<div class="embed-container"> <!-- Your iframe content here --> </div>
{% endhighlight %}

### Putting it all together

With the help of this tutorial not only YouTube or Vimeo iframe videos but you can even make other embed iframe content like SlideShare or Google Maps responsive. So let's say we are in the position where we have lots of legacy content, which includes videos of all makes and models, and we're redesigning our site to be fluid. The most efficient route is going to be combine everything we've learned in this article and put it together and use the most appropriate method.
