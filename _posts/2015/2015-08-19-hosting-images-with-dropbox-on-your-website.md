---
title: "Hosting images with Dropbox on your website"
date: 2015-08-19T12:24:31+05:45
---

<p class="lead">Dropbox is a great way to post an image quickly on a forum or as free hosting for your low traffic website, but there are a few things to know.</p>

Within these few simple steps you will learn to host images with Dropbox on your website:

### Step 1: Get a share link to a image file

There're various way of [getting share link](https://www.dropbox.com/help/167) to a file in a Dropbox, follow one of them as your comfort.

#### First option: Share link on Desktop

* Install the [Dropbox desktop application](https://www.dropbox.com/downloading) on your computer (if you haven't already).
* Right-click on the file to open its contextual menu and select **Share Dropbox link**. The link will be copied and you can immediately paste it anywhere.

<figure>
  <a href="//dl.dropboxusercontent.com/s/p9tbol9ln3pitet/20150819-dropbox-share-link-on-desktop.png">
    <img src="//dl.dropboxusercontent.com/s/p9tbol9ln3pitet/20150819-dropbox-share-link-on-desktop.png" alt="Share link from the Dropbox contextual menu" title="Share link from the Dropbox contextual menu">
  </a>
  <figcaption><strong>Share link</strong> from the Dropbox contextual menu.</figcaption>
</figure>

#### Second option: Share link using the website

* [Sign in](https://www.dropbox.com/login) to the Dropbox website and find the file or folder you'd like to link to.
* Hover the cursor over the file or folder and click the blue **Share** button that appears.

<figure>
  <a href="//dl.dropboxusercontent.com/s/q7gxq68yu5ujw7n/20150819-dropbox-bamboo-sharing-button-share-link-on-web.png">
    <img src="//dl.dropboxusercontent.com/s/q7gxq68yu5ujw7n/20150819-dropbox-bamboo-sharing-button-share-link-on-web.png" alt="Share link using the Dropbox website" title="Share link using the Dropbox website">
  </a>
</figure>

* A pop-up window will appear with the link. Copy the link to file and you can immediately paste it anywhere.

When you get copied of Dropbox shared link, you will see the file link in the following format:

{% highlight text %}
www.dropbox.com/u/<number>/<name of file>
{% endhighlight %}

### Step 2: Change a image file shared link to a hostable link

After getting a shared link to a image file, if you visit it you get preview on Dropbox site and simple file hosting doesn't work by pasting in the link.

To solve this, you just need to change the actual shared link with the link to the file itself. To do this, you just need to replace `www.dropbox.com` with `dl.dropboxusercontent.com`. This will serve the true file instead of the file wrapped in a preview.

Example of default Dropbox shared link wrapped in a preview:

{% highlight text %}
https://www.dropbox.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png?dl=0
{% endhighlight %}

Replaced with a true file path:

{% highlight text %}
https://dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png
{% endhighlight %}

<div class="alert alert-info">
  <strong>Tip:</strong> If you replace `?dl=0` to `?dl=1`, then you will get direct download link to a file uploaded on Dropbox. For example <a href="//dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png?dl=1" class="alert-link">click this link</a> to direct download a image file from Dropbox.
</div>

### Step 3: Hosting a image file to your website

Now an HTML markup like

{% highlight html %}
<figure>
  <a href="//dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png">
    <img src="//dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png" alt="Copyright Dropbox logo type blue">
  </a>
  <figcaption>Dropbox, the Dropbox logo are trademarks of Dropbox Inc., registered in the U.S. and other countries.</figcaption>
</figure>
{% endhighlight %}

turns into this:

<figure>
  <a href="//dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png">
    <img src="//dl.dropboxusercontent.com/s/chuuhnslrea6to3/20150819-dropbox-logotype-blue.png" alt="Copyright Dropbox logo type blue">
  </a>
  <figcaption>Dropbox, the Dropbox logo are trademarks of Dropbox Inc., registered in the U.S. and other countries.</figcaption>
</figure>

### Is there a bandwidth limit for Dropbox public links?

"There is a hard limit of 10GB/day for Basic (free) accounts and 250GB/day for paid accounts per link, after which they are automatically suspended and your account is flagged," [Dropbox explains](https://www.dropbox.com/help/45).

For comparison, let's say you have a image file hosted on Dropbox, weight around 400KB. That means a image file should have less than 25K impressions in a day for you to stay within the Dropbox limit.

And if another site decides to hotlink to your static images, it may exhaust your "free bandwidth" quota even sooner.

---

<div class="alert alert-info">
  <h4>Invitation</h4>
  Want to join Dropbox? Sign in now with <a href="https://db.tt/vocH7o0j" class="alert-link">https://db.tt/vocH7o0j</a> link and setup Dropbox to your desktop or mobile device you’ll get extra 500MB of bonus space.
</div>
