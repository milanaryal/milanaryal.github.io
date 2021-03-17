import anchor from './components/anchor'
import elevator from './components/elevator'
import socialSharePopup from './components/popup'
import generateRandomPosts from './components/randomize'

/**
 * ------------------------------------------------------------------------
 * Init stuffs when DOM is ready (document loaded)
 * ------------------------------------------------------------------------
 */

// Only run once the page Document Object Model (DOM)
// is ready for JavaScript code to execute.
// Shorthand for $(document).ready(function() { ... });
$(function () {
  // BEGIN document ready function

  // init - anchor header links
  anchor()

  // show our random posts after document is fully loaded
  $('.random-posts').removeAttr('hidden')

  // init - back to top button
  elevator()

  // init - social popup button
  socialSharePopup()

  // init - random posts
  generateRandomPosts()

  // add anchor links to footnotes header
  var footnotesAnchor =
    '<a class="anchor" href="#footnotes" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon icon-link" viewBox="0 0 16 16" aria-hidden="true" role="img"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>'

  $('.footnotes').prepend(
    '<hr>' + '<h4 id="footnotes">' + footnotesAnchor + 'Footnotes' + '</h4>'
  )
}) // END document ready function
