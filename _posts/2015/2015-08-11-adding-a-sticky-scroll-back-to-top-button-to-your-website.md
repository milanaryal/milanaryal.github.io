---
title: "Adding a sticky 'scroll back to top' button to your website"
subtitle: "This elevator button allows users to smoothly scroll back to the top of the page."
date: 2015-08-11T22:55:01+05:45
last_modified_at: 2015:08:15T17:21:49+05:45
---

This resource is suitable for website with lots of page content. When a user scrolls past a certain point on the website, this helpful button appears, enabling users to easily return to the top of a page.

#### Creating the structure

Insert the `.elevator-wrapper` at the bottom of your content, before the closing tag.

{% highlight html %}
<body>
  <!-- all your content here -->

  <div class="elevator-wrapper"></div>

  <!-- link to scripts here -->
</body>
{% endhighlight %}

<div class="alert alert-info">
  <strong>Note:</strong> To enable elevator button on your page you should have jQuery and Font Awesome library installed.
</div>

#### Adding style

Add the following style for the elevator button or you can further change according to your needs.

{% highlight css %}
/**
 * Elevator - Scroll back to top utility CSS
 */
.elevator {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: inline-block;
  width: 48px;
  height: 48px;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  visibility: hidden;
  background: rgba(0, 0, 0, .7);
  background-image: none;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .05);
          box-shadow: 0 0 10px rgba(0, 0, 0, .05);
  opacity: 0;
  -webkit-transition: all .3s ease;
       -o-transition: all .3s ease;
          transition: all .3s ease;
}
.elevator.elevator-is-visible {
  /* the button becomes visible */
  visibility: visible;
  opacity: 1;
  z-index: 999;
}
.elevator .fa {
  position: relative;
  top: 12.5px;
  left: 14.5px;
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: white;
  -webkit-transition: all .3s ease;
       -o-transition: all .3s ease;
          transition: all .3s ease;
}
.elevator:hover {
  background: rgba(0, 0, 0, .8);
}
.elevator:hover .fa {
  top: 5px;
  color: white;
}
@media (max-width: 768px) {
  .elevator {
    /* only show elevator on desktop screen */
    display: none !important;
  }
}
{% endhighlight %}

#### Events handling

Then add the following jQuery snippet on your script file. This script helps to add or remove CSS classes and also helps to smooth scrolling back to the top of the page.

{% highlight javascript %}
(function ($) {
  'use strict';

  // Elevator - Scroll back to top utility JS
  // ========================================

  // append necessary class
  // should have already contain wrapper on a page.
  // <div class="elevator-wrapper"></div>
  $('.elevator-wrapper').append('<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>');

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    // duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    // grab the "back to top" link
    $back_to_top = $('.elevator');

  // hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible') : $back_to_top.removeClass('elevator-is-visible');
  });

  // smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
      }, scroll_top_duration
    );
  });

})(jQuery);
{% endhighlight %}

#### Demo

Here's a nice demo on CodePen:

<figure>
  <p data-height="268" data-theme-id="0" data-slug-hash="gpEdYM" data-default-tab="result" data-user="MilanAryal" class='codepen'>See the Pen <a href='http://codepen.io/MilanAryal/pen/gpEdYM/'>Elevator - Scroll back to top utility</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal'>@MilanAryal</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

  <figcaption><a href="http://codepen.io/MilanAryal/full/gpEdYM/">View on full mode</a></figcaption>
</figure>

Following are the resources links of this article:

<p>
  <a class="btn btn-default" href="http://codepen.io/MilanAryal/full/gpEdYM">Demo</a>
  <a class="btn btn-default" href="http://codepen.io/MilanAryal/pen/gpEdYM.html">HTML</a>
  <a class="btn btn-default" href="http://codepen.io/MilanAryal/pen/gpEdYM.css">CSS</a>
  <a class="btn btn-default" href="http://codepen.io/MilanAryal/pen/gpEdYM.less">Less</a>
  <a class="btn btn-default" href="http://codepen.io/MilanAryal/pen/gpEdYM.js">Script</a>
</p>

<!-- CodePen JS -->
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
