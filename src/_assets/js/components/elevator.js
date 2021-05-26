/**
 * ------------------------------------------------------------------------
 * Elevator - Scroll back to top button
 * ------------------------------------------------------------------------
 */

export default function elevator() {
  $('.elevator').removeAttr('hidden')

  // browser window scroll (in pixels) after which the "back to top" link is shown
  const OFFSET = 300
  // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  const OFFSET_OPACITY = 1200
  // grab the "back to top" link
  const $BACK_TO_TOP = $('.elevator-button')

  // hide or show the "back to top" link
  $(window).on('scroll', function () {
    $(this).scrollTop() > OFFSET
      ? $BACK_TO_TOP.addClass('elevator-is-visible')
      : $BACK_TO_TOP.removeClass('elevator-is-visible elevator-fade-out')
    if ($(this).scrollTop() > OFFSET_OPACITY) {
      $BACK_TO_TOP.addClass('elevator-fade-out')
    }
  })

  // smooth scroll to top
  $BACK_TO_TOP.on('click', function (event) {
    event.preventDefault()
    window.scroll({
      top: 0,
      left: 0,
      // included css native - html { scroll-behavior: smooth; }
      // behavior: 'smooth'
    })
  })
}
