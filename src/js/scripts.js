/**
 * --------------------------------------------------------------------------
 * Milan Aryal (http://milanaryal.com): scripts.js
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

;(function ($, window, document, undefined) {
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

    // finish home page loading effect
    $('.hero-container').removeClass('is-loading');
  });


  /**
   * ------------------------------------------------------------------------
   * Navigation scripts to Show header on scroll-up - headroom.js
   * ------------------------------------------------------------------------
   */

  // grab an element
  var myElement = document.querySelector('.headroom');
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();


  /**
   * ------------------------------------------------------------------------
   * Footnotes - bigfoot.js
   * ------------------------------------------------------------------------
   */

  var bigfoot = $.bigfoot({
    deleteOnUnhover: false,
    preventPageScroll: false
  });


  /**
   * ------------------------------------------------------------------------
   * AnchorJS options and selector - anchor.js
   * ------------------------------------------------------------------------
   */

  anchors.options.placement = 'left';
  anchors.add('.markdown-body>h2,.markdown-body>h3,.markdown-body>h4,.markdown-body>h5,.markdown-body>h6,.archive>h3');


  /**
   * ------------------------------------------------------------------------
   * Generate ramdom posts
   * ------------------------------------------------------------------------
   */

   function generateRandomPosts() {
     $.getJSON('/posts.json', function(data) {
       console.log('[posts.json loaded for random posts]');

       var postsCount = data.length;
       var posts = data;
       var randomIndexUsed = [];
       var counter = 0;
       var numberOfPosts = 5;
       var divRandomPosts = $('#random-posts');

       divRandomPosts.append('<h3 class="random-posts-heading">Other writings</h3>');

       while (counter < numberOfPosts) {
         var randomIndex = Math.floor(Math.random() * postsCount);

         if (randomIndexUsed.indexOf(randomIndex) == '-1') {
           var postTitle = posts[randomIndex].title;
           var postURL = posts[randomIndex].url;
           var postDate = posts[randomIndex].date;
           var postExcerpt = posts[randomIndex].excerpt;

           divRandomPosts.append('<div class="random-post"><a href="' + postURL + '"><div class="clearfix"><h3 class="random-post-title">' + postTitle + '</h3><p class="random-post-excerpt">' + postExcerpt + '</p></div></a><div class="random-post-meta">Posted on ' + postDate + '</div></div>');

           randomIndexUsed.push(randomIndex);
           counter++;
         }
       }
     });
   }


  // Only run once the page Document Object Model (DOM)
  // is ready for JavaScript code to execute.
  $(function () { // BEGIN document ready function

    /**
     * ------------------------------------------------------------------------
     * Random posts init
     * ------------------------------------------------------------------------
     */

    generateRandomPosts();

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
    $('.markdown-body img').addClass('img-responsive');

    // responsive table
    $('.markdown-body>table').addClass('table table-hover');
    $('.markdown-body>table').wrap('<div class="table-responsive"></div>');

    // responsive embed video
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

    $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');
    $('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');


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

    $('.share-popup').on('click', function () {
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


})(jQuery, window, document);
