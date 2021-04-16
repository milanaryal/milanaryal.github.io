/**
 * ------------------------------------------------------------------------
 * Elevator - Scroll back to top button
 * ------------------------------------------------------------------------
 */

export default function elevator() {
  $('.elevator').removeAttr('hidden')

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    // grab the "back to top" link
    $back_to_top = $('.elevator-button')

  // hide or show the "back to top" link
  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $back_to_top.addClass('elevator-is-visible')
      : $back_to_top.removeClass('elevator-is-visible elevator-fade-out')
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('elevator-fade-out')
    }
  })

  // smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault()
    window.scroll({
      top: 0,
      left: 0,
      // included css native - html { scroll-behavior: smooth; }
      // behavior: 'smooth'
    })
  })
}
