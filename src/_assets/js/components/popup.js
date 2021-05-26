/**
 * ------------------------------------------------------------------------
 * Social share - Helps to pop-up a window on click
 * ------------------------------------------------------------------------
 */

export default function socialSharePopup() {
  $('.btn--social-share-popup').on('click', function () {
    const width = 670
    const height = 420
    const left = ($(window).width() - width) / 2
    const top = ($(window).height() - height) / 2
    const url = this.href
    // prettier-ignore
    const opts = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left

    window.open(url, '', opts)

    return false
  })
}
