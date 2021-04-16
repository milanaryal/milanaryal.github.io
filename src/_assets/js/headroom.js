import Headroom from 'headroom.js'

const selector = document.querySelector('.headroom')

if (selector !== null) {
  const headroom = new Headroom(selector)

  headroom.init()
}
