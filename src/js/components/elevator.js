/**
 * ------------------------------------------------------------------------
 * Elevator - Scroll back to top button
 * ------------------------------------------------------------------------
 */

export default function elevator () {

  var iconArrowUp = '<svg class="icon icon-arrow-up" width="1em" height="1em" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/></svg>';
  var divElevator = '<div class="elevator" aria-hidden="true">' + iconArrowUp + '</div>';
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
      left: 0 // , // included css native - html { scroll-behavior: smooth; }
      // behavior: 'smooth'
    });
  });

}
