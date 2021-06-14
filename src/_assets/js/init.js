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
  // ** BEGIN document ready function ** //

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

  // footnotes header
  $('.footnotes').prepend('<hr /><h4>Footnotes</h4>')

  // ** END document ready function ** //
})
