/**
 * --------------------------------------------------------------------------
 * Milan Aryal (https://milanaryal.com): scripts.js
 * Licensed under MIT (https://github.com/MilanAryal/milanaryal.github.io/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

;(function ($, window, document, undefined) {
  'use strict';

  /**
   * ------------------------------------------------------------------------
   * Support SVG external content for older browsers - svg4everybody.js
   * ------------------------------------------------------------------------
   */

  svg4everybody();


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

  // Progress percentage
  // NProgress.set(0.4);

  // Increase randomly
  var interval = setInterval(function() { NProgress.inc(); }, 1000);

  // Trigger finish when page fully loaded
  $(window).on('load', function () {
    clearInterval(interval);
    NProgress.done();

    // show hero page after page is fully loaded
    $('.hero-container,.hero-profile').removeClass('is-loading');
  });


  /**
   * ------------------------------------------------------------------------
   * Generate ramdom posts
   * ------------------------------------------------------------------------
   */

   function generateRandomPosts() {
     $.getJSON('/posts.json', function(data) {
       console.log('Loaded [posts.json] for random posts.');

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
           var postExcerpt = posts[randomIndex].summary;

           divRandomPosts.append('<div class="random-posts-item"><a href="' + postURL + '"><div class="clearfix"><h3 class="random-posts-item-title">' + postTitle + '</h3><p class="random-posts-item-excerpt">' + postExcerpt + '</p></div></a><div class="random-posts-item-meta">Posted on ' + postDate + '</div></div>');

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
     *  Header navbar scrolling behavior - headroom.js
     * ------------------------------------------------------------------------
     */

     $('.headroom').headroom();


    /**
     * ------------------------------------------------------------------------
     * Tooltip init - tooltip.js
     * ------------------------------------------------------------------------
     */

     $('[data-toggle="tooltip"]').tooltip();


    /**
     * ------------------------------------------------------------------------
     * Add or wrap necessary classes to the elements
     * ------------------------------------------------------------------------
     */

    // make all images responsive
    $('.markdown-body img').addClass('img-fluid');

    // responsive table
    $('.markdown-body table').addClass('table table-responsive table-hover');

    // responsive embed video
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

    $('iframe[src*="slideshare.net"]').addClass('embed-responsive-item');
    $('iframe[src*="slideshare.net"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');

    // default button
    $('.markdown-body a[role="button"]').addClass('btn btn-outline-default');

    // footnotes header
    var footnotesAnchor = '<a class="js-anchor-link" href="#footnotes" aria-hidden="true"><svg class="icon icon-link"><use xlink:href="/assets/svg/sprite.svg#icon-link"></use></svg></a>';

    $('.footnotes').prepend('<hr><h4 id="footnotes">' + footnotesAnchor + 'Footnotes</h4>');


    /**
     * ------------------------------------------------------------------------
     * Markdown body header link
     * ------------------------------------------------------------------------
     */

    var postHeader = '.markdown-body>h3,.markdown-body>h4,.archive-body .archive-year';

    $(postHeader).filter('[id]').each(function () {
      var header      = $(this),
          headerID    = header.attr('id'),
          anchorClass = 'js-anchor-link',
          anchorIcon  = '<svg class="icon icon-link"><use xlink:href="/assets/svg/sprite.svg#icon-link"></use></svg>';

      if (headerID) {
        header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
      }

      return this;
    });


    /**
     * ------------------------------------------------------------------------
     * Random posts init
     * ------------------------------------------------------------------------
     */

    $('.random-posts').removeAttr('hidden');

    generateRandomPosts();

    // random posts section footer
    $('.random-posts').append('<div class="random-posts-footer"><a class="btn btn-outline-default btn--random" href="/archives/" role="button">More writings</a></div>');


    /**
     * ------------------------------------------------------------------------
     * Elevator - Scroll back to top button
     * ------------------------------------------------------------------------
     */

    $('.elevator-wrapper').removeAttr('hidden');

    $('.elevator-wrapper').append('<div class="elevator" aria-hidden="true"><svg class="icon icon-chevron-up"><use xlink:href="/assets/svg/sprite.svg#icon-chevron-up"></use></svg></span></div>');

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

    $('.btn--social-share-popup').on('click', function () {
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
