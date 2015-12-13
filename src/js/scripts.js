/**
 * --------------------------------------------------------------------------
 * Milan Aryal (http://milanaryal.com): scripts.js
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

// jQuery and initialization
!function ($) {
  'use strict';

  /**
   * ------------------------------------------------------------------------
   * Loading bar - nprogress.js
   * ------------------------------------------------------------------------
   */

  NProgress.configure({
    showSpinner: false,
    template: '<div class="bar" role="bar"><div class="peg"></div></div>'
  });

  // Show the progress bar
  NProgress.start();

  // Increase randomly
  var interval = setInterval(function() { NProgress.inc(); }, 1000);

  // Trigger finish when page fully loaded
  $(window).on('load', function () {
    clearInterval(interval);
    NProgress.done();
  });


  /**
   * ------------------------------------------------------------------------
   * Footnotes - bigfoot.js
   * ------------------------------------------------------------------------
   */

  var bigfoot = $.bigfoot({
    deleteOnUnhover: false,
    preventPageScroll: false
  });


  // Only run once the page Document Object Model (DOM)
  // is ready for JavaScript code to execute.
  $(function () { // BEGIN document ready function

    /**
     * ------------------------------------------------------------------------
     * Navigation Scripts to Show Header on Scroll-Up
     * ------------------------------------------------------------------------
     */

    var MQL = 992;

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
     * Tooltip init - tooltip.js
     * ------------------------------------------------------------------------
     */

     $('[data-toggle="tooltip"]').tooltip();


    /**
     * ------------------------------------------------------------------------
     * Responsive stuffs
     * ------------------------------------------------------------------------
     */

    // make all images responsive
    $('img').addClass('img-responsive');

    // responsive table
    $('.markdown-body>table').addClass('table table-responsive table-hover');

    // responsive embed video
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');

    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');

    $('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');


    /**
     * ------------------------------------------------------------------------
     * Elevator - Scroll back to top button
     * ------------------------------------------------------------------------
     */

    $('.elevator-wrapper').append('<div class="elevator"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-chevron-up fa-stack-1x fa-inverse" aria-hidden="true"></i></span></div>');

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
      // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      // duration of the top scrolling animation (in ms)
      scroll_top_duration = 700,
      // grab the "back to top" link
      $back_to_top = $('.elevator');

    // hide or show the "back to top" link
    $(window).scroll(function () {
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('elevator-is-visible') : $back_to_top.removeClass('elevator-is-visible elevator-fade-out');
      if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('elevator-fade-out');
      }
    });

    // smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0
        }, scroll_top_duration
      );
    });


    /**
     * ------------------------------------------------------------------------
     * Social share - Helps to pop-up a window on click
     * ------------------------------------------------------------------------
     */

    $('.social-share').on('click', function () {
      var width  = 670,
          height = 420,
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


  }); // END document ready function


}(jQuery);


// Vanilla JS and initialization
(function () {
  'use strict';

  /**
   * ------------------------------------------------------------------------
   * AnchorJS options and selector - anchor.js
   * ------------------------------------------------------------------------
   */

  anchors.options.placement = 'left';
  anchors.add('.markdown-body>h2,.markdown-body>h3,.markdown-body>h4,.markdown-body>h5,.markdown-body>h6,.archive>h3');


  /**
   * ------------------------------------------------------------------------
   * Google Maps Scripts
   * ------------------------------------------------------------------------
   */

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 13,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(27.7090319, 85.2910273), // Kathmandu, Nepal

          // Disables the default Google Maps UI components
          disableDefaultUI: true,
          scrollwheel: false,
          draggable: false,

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]

      };

      // Get the HTML DOM element that will contain your map
      // We are using a div with id="map-canvas" seen below in the <body>
      var mapElement = document.getElementById('map-canvas');

      // Create the Google Map using out element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(27.6857792, 85.2603007), // Tinthana, Kathmandu, Nepal
        map: map,
        title: 'Residence!'
      });
  }


})();
