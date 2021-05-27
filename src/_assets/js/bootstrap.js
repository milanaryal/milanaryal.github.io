import 'bootstrap/js/dist/collapse'
import Tooltip from 'bootstrap/js/dist/tooltip'

/**
 * ------------------------------------------------------------------------
 * Tooltip init - tooltip.js
 * ------------------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', (event) => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  )
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
  })
})

/**
 * ------------------------------------------------------------------------
 * Add or wrap necessary Bootstrap classes to the elements
 * ------------------------------------------------------------------------
 */

$(function () {
  // ** BEGIN document ready function ** //

  // make all images responsive
  $('.markdown-body img').addClass('img-fluid')

  // responsive table
  const table = $('.markdown-body table')
  table.addClass('table table-striped')
  table.wrap('<div class="table-responsive" />')

  // responsive embed video
  $('iframe[src*="youtube.com"]').wrap('<div class="ratio ratio-16x9" />')
  $('iframe[src*="vimeo.com"]').wrap('<div class="ratio ratio-16x9" />')
  $('iframe[src*="slideshare.net"]').wrap('<div class="ratio ratio-16x9" />')

  // default button
  $('.markdown-body a[role="button"]').addClass('btn btn-outline-default')

  // ** END document ready function ** //
})
