/**
 * --------------------------------------------------------------------------
 * Milan Aryal (http://milanaryal.com): scripts.js
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

!function ($) {
  'use strict';

  /**
   * ------------------------------------------------------------------------
   * Navigation Scripts to Show Header on Scroll-Up
   * ------------------------------------------------------------------------
   */

  var MQL = 1170;

  // primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-top').height();
    $(window).on('scroll', {
      previousTop: 0
    },
    function () {
      var currentTop = $(window).scrollTop();
      // check if user is scrolling up
      if (currentTop < this.previousTop) {
        // if scrolling up...
        if (currentTop > 0 && $('.navbar-top').hasClass('is-fixed')) {
          $('.navbar-top').addClass('is-visible');
        } else {
          $('.navbar-top').removeClass('is-visible is-fixed');
        }
      } else {
        // if scrolling down...
        $('.navbar-top').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-top').hasClass('is-fixed')) $('.navbar-top').addClass('is-fixed');
      }
      this.previousTop = currentTop;
    });
  }


  /**
   * ------------------------------------------------------------------------
   * Tooltip init
   * ------------------------------------------------------------------------
   */

   $('[data-toggle="tooltip"]').tooltip()


  /**
   * ------------------------------------------------------------------------
   * Responsive stuffs
   * ------------------------------------------------------------------------
   */

  // make all images responsive
  $('img').addClass('img-responsive');

  // responsive table
  $('table').addClass('table table-responsive table-hover');

  // responsive embed video
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');

  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');

  $('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');


  /**
   * ------------------------------------------------------------------------
   * Social share - Helps to pop-up a window on click
   * ------------------------------------------------------------------------
   */

  $('.social-share').on('click', function () {
    var width  = 670; // last update: 575
    var height = 420; // last update: 400
    var top    = ($(window).height() - height) / 2;
    var left   = ($(window).width()  - width)  / 2;
    var url    = this.href;
    var opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, '', opts);
    return false;
  });


  /**
   * ------------------------------------------------------------------------
   * Footnotes - bigfootJS
   * ------------------------------------------------------------------------
   */

  var bigfoot = $.bigfoot(
    {
      deleteOnUnhover: false,
      preventPageScroll: false
    }
  );


}(jQuery);


/**
 * ------------------------------------------------------------------------
 * AnchorJS options and selector
 * ------------------------------------------------------------------------
 */

(function () {
  'use strict';

  anchors.options.placement = 'left';
  anchors.add('.markdown-body>h2,.markdown-body>h3,.markdown-body>h4,.markdown-body>h5,.markdown-body>h6,.archive>h3');

})();
