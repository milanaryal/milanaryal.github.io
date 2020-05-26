import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/tooltip'


$(function () { // BEGIN document ready function

  /**
   * ------------------------------------------------------------------------
   * Tooltip init - tooltip.js
   * ------------------------------------------------------------------------
   */

  $('[data-toggle="tooltip"]').tooltip()


  /**
   * ------------------------------------------------------------------------
   * Add or wrap necessary Bootstrap classes to the elements
   * ------------------------------------------------------------------------
   */

  // make all images responsive
  $('.markdown-body img').addClass('img-fluid');

  // responsive table
  $('.markdown-body>table').addClass('table table-responsive table-hover');

  // responsive embed video
  var $youtubeIframe = $('iframe[src*="youtube.com"]');
  $youtubeIframe.addClass('embed-responsive-item');
  $youtubeIframe.wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

  var $vimeoIframe = $('iframe[src*="vimeo.com"]');
  $vimeoIframe.addClass('embed-responsive-item');
  $vimeoIframe.wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

  var $slideshareIframe = $('iframe[src*="slideshare.net"]');
  $slideshareIframe.addClass('embed-responsive-item');
  $slideshareIframe.wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

  // default button
  $('.markdown-body a[role="button"]').addClass('btn btn-outline-default');


}) // ** END document ready function ** //
