/* ========================================================================
 *  Social share - Helps to pop-up a window on click
 * ======================================================================== */

 +function ($) {
  'use strict';

  $('.social-share').click(function(event) {
    var width  = 670, // last update: 575
        height = 420, // last update: 400
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, '', opts);

    return false;
  });

}(jQuery);
