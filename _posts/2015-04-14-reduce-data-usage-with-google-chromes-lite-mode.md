---
redirect_from: "/reduce-data-usage-with-google-chromes-data-saver/"
title: "Reduce data usage with Google Chrome's Lite mode"
date: 2015-04-14T10:48:02+05:45
last_modified_at: 2019-08-29T07:00:00+05:45
excerpt: "Google Chrome's data compression tool can help you save your bandwidth, says Google."
---

If you've ever been frustrated by exceeding your data plan on a monthly basis, popular web browser Google Chrome may just have a solution for you.

---

### How Lite mode works

When you use Lite mode, some of your web traffic may go through Google servers before being downloaded to your device. If the page is loading slowly, Google servers may simplify it so that less data gets downloaded to your device. Most of the time, your pages will look and work the same.

If you're using Lite mode, keep in mind that:

* If you browse in private, Lite mode won't work.
* Some websites might have trouble finding your location.
* You might not be able to use pages on a local network, like an internal company site.
* You might have trouble with premium data services provided by your carrier. You also might not be able to sign in to your mobile carrier's website.

> Currently Google's Lite mode (formerly Chrome's Data Saver) is only available for Android devices.

### Enable Chrome's Lite mode on Android

1. On your Android phone or tablet, open the Chrome app Chrome.
2. At the top right, tap More More and then **Settings**.
3. Under "Advanced," tap **Lite mode**.
4. Turn on **Lite mode**.

If you're on a page that was simplified, you can go back to the original page without changing your settings. To see the original page, at the top, tap **Lite and then Load original page**.

#### See how much data you've saved

1. On your Android phone or tablet, open the Chrome app Chrome.
2. Tap More More and then **Settings**.
3. Tap **Lite mode**. At the bottom, you'll see a list of the sites you've visited and how much data you've saved.

---

The feature is certainly much more useful on mobile: It can save you money if you're on a tight data plan, in addition to speeding up page loads and beefing up security. Chances are that browsing on the desktop is already quite speedy for most people, and Google's Safe Browsing feature is already built into Chrome for Windows, Mac, and Linux.

{% comment %}
### Chrome's Data Saver extension on desktop

Google <del>recently</del> launched (on March 23, 2015) an extension for Chrome desktop browser named [Data Saver](http://chrome.google.com/webstore/detail/data-saver/pfmgfdlgomnbgkofeojodiodmgpgmkac){:rel="nofollow"} <del>(currently in beta at the time of writing this post)</del> that reduces your data usage significantly .[^1]

Google's data compression proxy service not only save the user bandwidth, but also load pages faster, and increase security (since sites go through Google's servers, the company checks for malicious webpages) on your phone, tablet and desktop computer.

Google describes the Data Saver extension as,

> Reduces data usage by using Google servers to optimize pages you visit. Browse more for less!
>
> When this extension is enabled, Chrome will use Google servers to compress pages you visit before downloading them. SSL and incognito pages will not be included.

Thus, the extension uses Google's data compression proxy service to optimize pages before serving them to your browser. **It doesn't work with SSL and incognito pages at present**, and you'll need Chrome 41 or newer to use it.

The extension gets to work as soon as you install it.[^2] You can click the extension button on your browser toolbar to see how much data it has saved you and turn it off if necessary.

If you're eager to see what is happening behind the scenes, then check out the internal Chrome page `chrome:net-internals#bandwidth`. It contains Data Reduction Proxy settings such as primary and secondary URLs and recent events so that you can debug by yourself proxy issues you may have.

Google began testing its data compression service for browsers back in March 2013. <del>The rollout of this beta extension could point to the feature being baked into future versions of Chrome on the desktop.</del>

### Chrome's Data Saver on mobile

Chrome's Data Saver feature is also available in the latest [Chrome browser for Android](http://play.google.com/store/apps/details?id=com.android.chrome&hl=en){:rel="nofollow"} and [Chrome browser for iOS](http://itunes.apple.com/in/app/chrome-web-browser-by-google/id535886823?mt=8){:rel="nofollow"} which has been shown to **reduce the size of web pages by 50%**. To enable it, hop into Settings, tap Data Saver and turn it on.

The feature is certainly much more useful on mobile: It can save you money if you're on a tight data plan, in addition to speeding up page loads and beefing up security. Chances are that browsing on the desktop is already quite speedy for most people, and Google's Safe Browsing feature is already built into Chrome for Windows, Mac, and Linux.

[^1]: For more information about Google Chrome's Data Saver please visit the [Google support page](http://support.google.com/chrome/answer/2392284){:rel="nofollow"}.
[^2]: Custom downloaded images may not worked if you've enabled the data compression tool. Thus, turn off the Chrome's Data Saver or simply download the images in Chrome's incognito window.
{% endcomment %}
