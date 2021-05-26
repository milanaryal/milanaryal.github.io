/* eslint no-console: off  */

// custom console

console.log('Hello world!')

const asciiArtM = `%c
...............          ...............
l0000000000000d.        .o00000O0000000l
kMMMMMMMMMMMMMNl        cNMMMMMMMMMMMMMk
.cxNMMMMMMMMMMMO.      .OMMMMMMMMMMMNxc.
  .OMMMMXXWMMMMWo      lWMMWKNMMMMMMO.
  .OMMMMOoKMMMMM0.    .0MMMOoKMMMMMMO.
  .OMMMMk.dMMMMMWo.  .oWMMWl:KMMMMMMO.
  .OMMMMO.:KMMMMMK.  .KMMMO..KMMMMMMO.
  .OMMMMO..dWMMMMWd..dWMMNc .KMMMMMMO.
  .OMMMMO. .0MMMMMKxxKMMMk. .KMMMMMMO.
  .OMMMMO. .oWMMMMMWWMMMX:  .KMMMMMMO.
  .OMMMMO.  .0MMMMMMMMMWx.  .KMMMMMMO.
  .OMMMMO.   lNMMMMMMMMK:   .KMMMMMMO.
  .0MMMMO.   .OMMMMMMMWd.   :KMMMMMM0.
lOXWMMMMN0Ol. cNMMMMMM0. .dOKWMMMMMMWXOl
kMMMMMMMMMMk. .kMMMMMWl  .0MMMMMMMMMMMMk
lOOOOOOOOOOl.  :kOOOOd.  .dOOOOOOOOOOOOl
.............   ......   ...............\n\n`

const siteURL = window.location.protocol + '//' + window.location.host
const logMSG = 'You are visiting URL:\n'
const currentURL =
  window.location.protocol +
  '//' +
  window.location.host +
  window.location.pathname

console.log(asciiArtM + siteURL, 'font-family:monospace')
console.log(logMSG + currentURL)
