/**
 * ------------------------------------------------------------------------
 * Init stuffs when document is fully loaded
 * ------------------------------------------------------------------------
 */

// conditions when page fully loaded
$(window).on('load', function () {

  // show hero page after page is fully loaded
  $('.hero-container,.hero-profile').removeClass('is-loading');

});
