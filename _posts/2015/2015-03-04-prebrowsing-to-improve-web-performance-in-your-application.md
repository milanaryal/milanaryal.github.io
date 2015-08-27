---
title: "Prebrowsing to improve web performance in your application"
date: 2015-03-04T18:50:13+05:45
excerpt: "Optimistically loading web resources ahead of time for better performance."
redirect_from: "/2015/prefetching-to-improve-web-performance-in-your-application/"
---

"Prebrowsing" (short for "predictive browsing" --- a word made by Steve Souders) is simply loading a file before browser needs it, to provide a fast and instant user experience. You can decide on which content to prefetch by analysing your users behaviour, and try to predict which resources they will need ahead of time.

### Browser cache isn't enough

One might argue that "we already have browser cache!, we don't need prefetch!". But Steve Souders points out in one of his [prebrowsing article](http://www.stevesouders.com/blog/2013/11/07/prebrowsing/), browser cache offers no help in many situations:

> **first visit** --- The cache only comes into play on subsequent visits to a site. The first time you visit a site it hasn't had time to cache any resources.
>
> **cleared** --- The cache gets cleared more than you think. In addition to occasional clearing by the user, the cache can also be cleared by anti-virus software and browser bugs. ([19% of Chrome](//plus.google.com/103382935642834907366/posts/hsfVHq6wKxG) users have their cache cleared at least once a week due to a bug.)
>
> **purged** --- Since the cache is shared by every website the user visits, it's possible for one website's resources to get purged from the cache to make room for another's.
>
> **expired** --- [69% of resources don't have any caching headers or are cacheable for less than one day](http://httparchive.org/interesting.php#caching). If the user revisits these pages and the browser determines the resource is expired, an HTTP request is needed to check for updates. Even if the response indicates the cached resource is still valid, these network delays still make pages load more slowly, especially on mobile.
>
> **revved** --- Even if the website's resources are in the cache from a previous visit, the website might have changed and uses different resources.

### The three big techniques

Browsers can analyze patterns to predict where users are going to go next, and start DNS resolution and TCP handshakes as soon as users hover over links. But to get the most out of these improvements, we can enable prebrowsing on our web pages, with three techniques at our disposal:

* DNS prefetching
* Link/resource prefetching
* Prerendering

### DNS prefetching

DNS is the protocol that converts human readable domains `http://www.google.com` into computer readable IPs `http://173.194.113.18`, `http://64.233.167.99` and/or `http://www.smashingmagazine.com` to `http://80.72.139.101`. DNS prefetching is an attempt to resolve domain names before a user tries to follow a link.

To improve the speed of redirects, content authors can add the following tag to their page:

{% highlight html %}
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">
{% endhighlight %}

For example:

{% highlight html %}
<html>
  <head>
    <link rel="dns-prefetch" href="//www.domain1.com">
    <link rel="dns-prefetch" href="//www.domain2.com">
  </head>
  <body>
    <img src="www.domain1.com/image1.jpeg">
    <script src="www.domain2.com/script1.js">
  </body>
</html>
{% endhighlight %}

### Link prefetching

Link prefetching is a browser mechanism, which utilizes browser idle time to download or prefetch documents that the user might visit in the near future. A web page provides a set of prefetching hints to the browser, and after the browser is finished loading the page, it begins silently prefetching specified documents and stores them in its cache. When the user visits one of the prefetched documents, it can be served up quickly out of the browser's cache.

Standard link prefetching (executed by most modern browsers):

{% highlight html %}
<link rel="prefetch" href="/css/style.css">
<link rel="prefetch" href="/js/scripts.js">
<link rel="prefetch" href="/img/big.jpeg">
{% endhighlight %}

### Prerendering

Prerendering extends the concept of prefetching. Instead of just downloading the top-level resource, it does all of the work necessary to show the page to the user—without actually showing it until the user clicks. Prerendering behaves similarly to if a user middle-clicked on a link on a page (opening it in a background tab) and then later switched to that tab. However, in prerendering, that "background tab" is totally hidden from the user, and when the user clicks, its contents are seamlessly swapped into the same tab the user was viewing. From the user’s perspective, the page simply loads much faster than before.

You can trigger prerendering by inserting a link element with a rel of "prerender", for example:

{% highlight html %}
<link rel="prerender" href="http://example.org/index.html">
{% endhighlight %}

Situations in which prerendering is aborted:

* The URL initiates a download
* HTMLAudio or Video in the page
* POST, PUT, and DELETE XMLHTTPRequests
* HTTP Authentication
* HTTPS pages
* Pages that trigger the malware warning
* Popup/window creation
* Detection of high resource utilization
* Developer Tools is open

### Inject prefetch hints at runtime

You can trigger the prefetch hints when you predict that a user action will require the download of additional content:

{% highlight javascript %}
var hint =document.createElement("link")
hint.setAttribute("rel","prerender")
hint.setAttribute("href","next-page.html")
document.getElementsByTagName("head")[0].appendChild(hint)
{% endhighlight %}

### Browser support

| Browser | dns-prefetch | subresource | prefetch | prerender |
|---------|--------------|-------------|----------|-----------|
| Firefox | 3.5+         | n/a         | 3.5+     | n/a       |
| Chrome  | 1.0+         | 1.0+        | 1.0+     | 13+       |
| Safari  | 5.01+        | n/a         | n/a      | n/a       |
| IE      | 9+(prefetch) | n/a         | 10+      | 11+       |

*Internet Explorer 9 supports DNS pre-fetching, but calls it prefetch. In Internet Explorer 10+, dns-prefetch and prefetch are equivalent, resulting in a DNS pre-fetch in both cases.*

---

### Preconnect, prefetch, prerender

<figure>
  <iframe src="//www.slideshare.net/slideshow/embed_code/45418162" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

  <figcaption>Slides: SlideShare, <a href="//docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.p19">Preconnect, prefetch, prerender...</a> from <a href="//twitter.com/igrigorik">Ilya Grigorik</a>.</figcaption>
</figure>

### Pre-browsing

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Msqs1jIzgo4?rel=0" frameborder="0" allowfullscreen></iframe>

  <figcaption>Video: YouTube, Prebrowsing by Steve Souders at Velocity NY 2013</figcaption>
</figure>

<figure>
  <iframe src="//www.slideshare.net/slideshow/embed_code/27665184" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

 <figcaption>Slides: SlideShare, <a href="//www.slideshare.net/souders/prebrowsing-velocity-ny-2013">Prebrowsing - Velocity NY 2013</a> from <a href="//twitter.com/souders">Steve Souders</a>.</figcaption>
</figure>

{% comment %}
<!--- ### Steve Souders | Pre-browsing | Fronteers 2013</a>

<figure>
  <iframe src="https://player.vimeo.com/video/77176315" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

  <figcaption><a href="https://vimeo.com/77176315">Steve Souders | Pre-browsing | Fronteers 2013</a>.</figcaption>
</figure> --->
{% endcomment %}

---

### Further resources

* [Prebrowsing](http://www.stevesouders.com/blog/2013/11/07/prebrowsing/) - Steve Souders
* [Link prefetching](http://en.wikipedia.org/wiki/Link_prefetching) - Wikipedia
* [DNS Prefetching](http://www.chromium.org/developers/design-documents/dns-prefetching) - The Chromium Projects
* [Pre-Resolve DNS](https://developers.google.com/speed/pagespeed/service/PreResolveDns) - Google Developers
* [Web Developer's Guide to Prerendering in Chrome](https://developers.google.com/chrome/whitepapers/prerender) - Google Developers
* [Link prefetching FAQ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) - Mozilla Developer Network
* [Controlling DNS prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching) - Mozilla Developer Network
* [One Step Ahead: Improving Performance with Prebrowsing](http://alistapart.com/article/one-step-ahead-improving-performance-with-prebrowsing) - A List Apart
* [Resource hints](http://w3c.github.io/resource-hints/) - W3C
