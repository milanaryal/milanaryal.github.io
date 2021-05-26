/* eslint no-console: off  */

// custom console
console.log('Hello world!')

const asciiArtM = `%c
........           ........
@MMMMMMM.         .MMMMMM@
  MMMMMMM.       .MMMMMM.
  @MMMMMMM.     .MMMMMMM.
  @M @MMMMM.   .M.@MMMMM.
  @M  @MMMMM@ .M. @MMMMM.
  @M   @MMMMM@M@  @MMMMM.
  @M    .MMMMM@   @MMMMM.
 .MM@    .MMM@    @MMMMM.
.@MMMMM@   .M@   .@MMMMMMM@
........    .    ..........\n`
const logMSG = "You're visiting: "
const currentURL =
  window.location.protocol +
  '//' +
  window.location.host +
  window.location.pathname

console.log(asciiArtM, 'font-family:monospace')
console.log(logMSG + currentURL)
