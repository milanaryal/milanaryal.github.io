/*!
 * Milan Aryal
 * Jekyll build for milanaryal.com
 * http://milanaryal.com
 * MIT licensed.
 */

/*! Social */
var Social={init:function(){this.fetch()},getScript:function(e,t){var n=document.getElementsByTagName("head")[0],r=false,i=document.createElement("script");i.src=e;i.onload=i.onreadystatechange=function(){if(!r&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){r=true;if(t&&typeof "callback"==="function"){t()}i.onload=i.onreadystatechange=null}};n.appendChild(i);return undefined},fetch:function(){var e=this;if(typeof twttr!=="undefined"){twttr.widgets.load()}else{e.getScript("//platform.twitter.com/widgets.js")}if(typeof FB!=="undefined"){FB.init({status:true,cookie:true,xfbml:true,oauth:true})}else{e.getScript("//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0",function(){FB.init({status:true,cookie:true,xfbml:true,oauth:true})})}if(typeof gapi!=="undefined"){var t=document.body.querySelectorAll(".g-plusone"),n=0,r=t.length;while(n+=1<r){gapi.plusone.go()}}else{e.getScript("//apis.google.com/js/plusone.js")}if(typeof IN!=="undefined"){IN.parse()}else{e.getScript("//platform.linkedin.com/in.js")}}};Social.init();

/*! AnchorJS - v0.1.0 - 2014-08-17 | https://github.com/bryanbraun/anchorjs | Copyright (c) 2014 Bryan Braun; Licensed MIT */
function addAnchors(e){e=e||"h1, h2, h3, h4, h5, h6";var t=document.querySelectorAll(e);for(var n=0;n<t.length;n++){var r;if(t[n].hasAttribute("id")){r=t[n].getAttribute("id")}else{var i=document.body.textContent?"textContent":"innerText";var s=t[n][i];tidyText=s.replace(/\s+/g,"-").toLowerCase();t[n].setAttribute("id",tidyText);r=tidyText}var o='<a class="header-link" href="#'+r+'"><span class="fa fa-link"></span></a>';t[n].innerHTML=t[n].innerHTML+o}};

/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});

