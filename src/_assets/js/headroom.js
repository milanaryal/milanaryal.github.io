import Headroom from 'headroom.js'

document.addEventListener('DOMContentLoaded', (event) => {
  const selector = document.querySelector('.headroom')

  if (selector !== null) {
    const headroom = new Headroom(selector)

    headroom.init()
  }
})
