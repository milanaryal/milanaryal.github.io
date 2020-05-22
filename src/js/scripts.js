/*!
 * --------------------------------------------------------------------------
 * Milan Aryal (https://milanaryal.com.np): scripts.js
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

  function generateRandomPosts () {
    fetch('/randomi.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {

        var element = $('#random-posts');
        var contents = '';
        var numberOfPosts = 5;

        console.log('Loaded [randomi.json] for random posts.');

        for (var count = 0; count < numberOfPosts; ++count) {
            // Generate an random index
            var index = Math.floor(Math.random() * json.length);
            // Get the post
            var post = json[index];
            // Random post metadata
            var url = post.u;
            var title = post.t;
            var excerpt = post.e;
            var readTime = post.r;
            var date = post.d;
            // Template
            var link = '<div class="random-posts-item clearfix">' +
                          '<a href="' + url + '">' +
                            '<h3 class="random-posts-item-title">' + title + '</h3>' +
                            '<p class="random-posts-item-excerpt">' + excerpt + '</p>' +
                          '</a>' +
                          '<div class="random-posts-item-meta">' + readTime + ' &middot; Posted ' + date + '</div>' +
                        '</div>';
            contents = contents + link;
            json.splice(index, 1);
        }
        element.html(contents);
      }).catch(function(error) {
        console.error(error);
      });
  }


  // Only run once the page Document Object Model (DOM)
  // is ready for JavaScript code to execute.
  // $(document).ready(function() { ... });
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

    // footnotes header
    var footnotesAnchor = '<a class="anchor" href="#footnotes" aria-hidden="true"><svg class="icon icon-link" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>';

    $('.footnotes').prepend('<hr>' + '<h4 id="footnotes">' + '<span class="post-content-title">' + footnotesAnchor + 'Footnotes' + '</span>' + '</h4>');


    /**
     * ------------------------------------------------------------------------
     * Markdown body header anchor link
     * ------------------------------------------------------------------------
     */

    var postHeader = '.markdown-body>h3,.markdown-body>h4,.archive-body .archive-year';

    $(postHeader).filter('[id]').each(function () {
      var header      = $(this),
          headerID    = header.attr('id'),
          anchorClass = 'anchor',
          anchorIcon = '<svg class="icon icon-link" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'

      if (headerID) {
        header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerID, 'aria-hidden': 'true' }).html(anchorIcon));
      }

      return this;
    });

    $(postHeader).wrapInner('<span class="post-content-title"></span>');


    /**
     * ------------------------------------------------------------------------
     * Random posts init
     * ------------------------------------------------------------------------
     */

    $('.random-posts').removeAttr('hidden');

    // init
    generateRandomPosts();


    /**
     * ------------------------------------------------------------------------
     * Elevator - Scroll back to top button
     * ------------------------------------------------------------------------
     */

    var iconChevronUp = '<svg class="icon icon-chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>';
    var divElevator = '<div class="elevator" aria-hidden="true">' + iconChevronUp + '</div>';
    var $elevatorWrapper = $('.elevator-wrapper');

    $elevatorWrapper.removeAttr('hidden').append(divElevator);

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
      // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
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
    $back_to_top.on('click', function (event) {
      event.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
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
