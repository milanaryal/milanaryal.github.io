/**
 * ------------------------------------------------------------------------
 * Social share - Helps to pop-up a window on click
 * ------------------------------------------------------------------------
 */

export default function socialSharePopup() {
  $('.btn--social-share-popup').on('click', function () {
    // prettier-ignore
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

    window.open(url, '', opts)

    return false
  })
}
