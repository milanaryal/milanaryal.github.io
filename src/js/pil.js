/*
 * Pil v0.1.0
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2015 Dev7studios
 * MIT License
 */

var Pil = (function(){
	"use strict";

	function _addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	var ProgressiveImageLoading = {

		init: function() {
			var elements = document.querySelectorAll('.pil img');
			Array.prototype.forEach.call(elements, function(el, i) {
				var src = el.src;
				el.setAttribute('data-src', src);
				el.src = '';

				var fullWidth  = el.getAttribute('data-full-width'),
					fullHeight = el.getAttribute('data-full-height'),
					newHeight = (fullHeight / fullWidth) * 100;

				var thumbnailDiv = document.createElement('div'),
					thumbnailImg = document.createElement('img'),
					extension = src.split('.').pop();
				_addClass(thumbnailDiv, 'pil-thumb');
				thumbnailDiv.style.paddingBottom = newHeight + '%';
				thumbnailImg.width = fullWidth;
				thumbnailImg.height = fullHeight;
				thumbnailDiv.appendChild(thumbnailImg);
				el.parentNode.appendChild(thumbnailDiv);

				var thumbSrc = el.getAttribute('data-pil-thumb-url');
				if (!thumbSrc) {
					thumbSrc = src.replace('.' + extension, '-thumb.' + extension);
				}

				var thumbImg = new Image;
				thumbImg.src = thumbSrc;
				thumbImg.onload = function() {
					thumbnailImg.src = this.src;
					setTimeout(function(){
						_addClass(thumbnailDiv, 'pil-thumb-loaded');
					}, 10);
				}

				var img = new Image;
				img.src = src;
				img.onload = function() {
					el.src = this.src;
					thumbnailDiv.style.paddingBottom = '0%';
					setTimeout(function(){
						_addClass(el.parentNode, 'pil-loaded');
					}, 10);
				}
			});
		}

	};

	return {
		init: ProgressiveImageLoading.init
	}

})();