/* ========================================================================
 * These scripts helps to wrap/add/remove necessary CSS class
 * when DOM is ready.
 * ======================================================================== */


+function ($) {
  'use strict';

  // Tooltip init
  // ============

  $('[data-toggle="tooltip"]').tooltip()

  // Responsive stuffs
  // =================

    // make all images responsive
	$('img').addClass('img-responsive');

    // responsive table
	$('table').wrap('<div class="table-responsive"></div>');
	    $('table').addClass('table table-hover');

    // responsive embed video
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
	$('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	    $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');


 // Navigation Scripts to Show Header on Scroll-Up
 // ===============================================

    var MQL = 1170;

    // primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.header-navbar').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                // check if user is scrolling up
                if (currentTop < this.previousTop) {
                    // if scrolling up...
                    if (currentTop > 0 && $('.header-navbar').hasClass('is-fixed')) {
                        $('.header-navbar').addClass('is-visible');
                    } else {
                        $('.header-navbar').removeClass('is-visible is-fixed');
                    }
                } else {
                    // if scrolling down...
                    $('.header-navbar').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.header-navbar').hasClass('is-fixed')) $('.header-navbar').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

}(jQuery);
