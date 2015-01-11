/*!
 * Milan Aryal
 * Jekyll build for milanaryal.com
 * http://milanaryal.com
 * MIT licensed.
 */

/*! Social */
!function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs");

/*! AnchorJS - v0.1.0 - 2014-08-17 | https://github.com/bryanbraun/anchorjs | Copyright (c) 2014 Bryan Braun; Licensed MIT */
function addAnchors(t){"use strict";if(t){if("string"!=typeof t)throw new Error("AnchorJS accepts only strings; you used a "+typeof t)}else t="h1, h2, h3, h4, h5, h6";for(var e=document.querySelectorAll(t),r=0;r<e.length;r++){var n;if(e[r].hasAttribute("id"))n=e[r].getAttribute("id");else{var s=document.body.textContent?"textContent":"innerText",o=e[r][s],a=o.replace(/\s+/g,"-").toLowerCase();e[r].setAttribute("id",a),n=a}var i='<a class="anchorjs-link" href="#'+n+'"><span class="anchorjs-icon"></span></a>';e[r].innerHTML+=i}};

/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});

