---
title: "Adding a sticky 'scroll back to top' button to your website"
description: "This elevator button allows users to smoothly scroll back to the top of the page."
date: 2015-08-11T22:55:01+05:45
last_modified_at: 2015-08-15T17:21:49+05:45
---

This resource is suitable for website with lots of page content. When a user scrolls past a certain point on the website, this helpful button appears, enabling users to easily return to the top of a page.

#### Creating the structure

Insert the `.elevator-wrapper` at the bottom of your content, before the closing tag.

```html
<body>
  <!-- all your content here -->

  <div class="elevator-wrapper"></div>

  <!-- link to scripts here -->
</body>
```

**Note:** To enable elevator button on your page you should have **jQuery** and **Font Awesome** library installed.

#### Adding style

Add the following style for the elevator button or you can further change according to your needs.

```css
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
  background: rgba(0, 0, 0, 0.7);
  background-image: none;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transition: all 0.3s ease;
}

.elevator.elevator-is-visible {
  z-index: 999;

  /* the button becomes visible */
  visibility: visible;
  opacity: 1;
}

.elevator .fa {
  position: relative;
  top: 12.5px;
  left: 14.5px;
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: white;
  transition: all 0.3s ease;
}

.elevator:hover {
  background: rgba(0, 0, 0, 0.8);
}

.elevator:hover .fa {
  top: 5px;
  color: white;
}

@media (max-width: 768px) {
  .elevator {
    /* only show elevator on desktop screen */
    display: none;
  }
}
```

#### Events handling

Then add the following jQuery snippet on your script file. This script helps to add or remove CSS classes and also helps to smooth scrolling back to the top of the page.

```js
(function ($) {
  "use strict";

  // Elevator - Scroll back to top utility JS
  // ========================================

  // append necessary class
  // should have already contain wrapper on a page.
  // <div class="elevator-wrapper"></div>
  $(".elevator-wrapper").append(
    '<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>'
  );

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    // duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    // grab the "back to top" link
    $back_to_top = $(".elevator");

  // hide or show the "back to top" link
  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass("elevator-is-visible")
      : $back_to_top.removeClass("elevator-is-visible");
  });

  // smooth scroll to top
  $back_to_top.on("click", function (event) {
    event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      scroll_top_duration
    );
  });
})(jQuery);
```

#### Demo

Here's a nice demo on CodePen:

{% include embed.html src="codepen" id="gpEdYM" user="MilanAryal" %}

Following are the code snippets link of this article:

- [View demo](https://codepen.io/MilanAryal/full/gpEdYM)
- [HTML](https://codepen.io/MilanAryal/pen/gpEdYM.html)
- [CSS](https://codepen.io/MilanAryal/pen/gpEdYM.css)
- [Less](https://codepen.io/MilanAryal/pen/gpEdYM.less)
- [Script](https://codepen.io/MilanAryal/pen/gpEdYM.js)
