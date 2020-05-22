---
title: "Async social sharing buttons"
date: 2015-01-28T23:01:59+05:45
excerpt: "Asynchronously loading social sharing buttons JavaScript to improve page speed of your site."
---

Social sharing button are great easy resource to share the content of the site. Different social sites use different scripts to load the sharing button. If you go and copying every social sharing button scripts then it will be bunch of and may slow down your site. Thus, here's the simple asynchronously (async) loading JavaScript of every social media.

[Demo](//dl.dropboxusercontent.com/s/6stjb9x82f0ucoo/index.html){:role="button"} [Download](//dl.dropboxusercontent.com/s/mdwt8uvfinhk0gr/async-social-sharing-buttons.zip?dl=1){:role="button"}

### Asynchronously loading social JavaScript

Asynchronously, this means that the JavaScript will load and run but will not effect the rest of the page from loading. This means that your page will only slow down a little bit because of the social media buttons, but they still need to make HTTP requests and use up bandwidth on your page.

To load in a JavaScript file asynchronously you can use the following code.

Some of these services already (smartly) provide their scripts in an async fashion, this just combines them into more efficient, organized, and understandable code.

```js
(function(doc, script) {
  var js,
  fjs = doc.getElementsByTagName(script)[0],
  frag = doc.createDocumentFragment(),
  add = function(url, id) {
    if (doc.getElementById(id)) {return;}
    js = doc.createElement(script);
    js.src = url;
    id && (js.id = id);
    frag.appendChild( js );
  };

  // Google+ button
  add('//apis.google.com/js/plusone.js');
  // Facebook SDK
  add('//connect.facebook.net/en_US/sdk.js#xfbml=1', 'facebook-jssdk');
  // Twitter SDK
  add('//platform.twitter.com/widgets.js');

  fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));
```

This will create a new script tag, add in the social media JavaScript in the src attribute and add the tag inside the head of the document.

### Asynchronously loading social JavaScript using jQuery

If you prefer to use jQuery when working with JavaScript, because it just makes things so much easier. [jQuery has a handy method called getScript()](http://api.jquery.com/jQuery.getScript/){:rel="nofollow"} which does the above but with fewer lines of code.

First make sure you have [load recent jQuery library](http://developers.google.com/speed/libraries/devguide#jquery){:rel="nofollow"}.

Just simple following code before `</body>` to load jQuery library:

```html
<!-- make sure you include the latest version -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
```

After the jQuery library script paste the following code (inside another tag `<script> // your code here </script>`):

```js
$(document).ready(function() {
  $.getScript('//apis.google.com/js/plusone.js');
  $.getScript('//platform.twitter.com/widgets.js');
  $.getScript("//connect.facebook.net/en_US/sdk.js#xfbml=1", function () {
    FB.init({ status: true, cookie: true, xfbml: true });
  });
});
```

### HTML tags to load social sharing buttons

You'll need the HTML in place for the scripts to put their stuff:

```html
<!-- For Twitter -->
<a href="https://twitter.com/share" class="twitter-share-button" data-count="horizontal">Tweet</a>

<!-- For Facebook -->
<div id="fb-root"></div>
<div class="fb-like" data-send="false" data-layout="button_count" data-width="1" data-show-faces="false" data-action="recommend"></div>

<!-- For Google+ -->
<div class="g-plusone" data-size="medium" data-count="true"></div>
```

[Demo](//dl.dropboxusercontent.com/s/6stjb9x82f0ucoo/index.html){:role="button"} [Download](//dl.dropboxusercontent.com/s/mdwt8uvfinhk0gr/async-social-sharing-buttons.zip?dl=1){:role="button"}
