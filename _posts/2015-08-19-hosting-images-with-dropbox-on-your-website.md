---
title: "Hosting images with Dropbox on your website"
date: 2015-08-19T12:24:31+05:45
last_modified_at: 2016-04-02T16:33:41+05:45
redirect_from: "/2015/hosting-images-with-dropbox-on-your-website/"
---

Dropbox is a great way to post an image quickly on a forum or as free hosting for your low traffic website, but there are a few things to know.

Whether to reduce your website bandwidth or for some other reasons, you may want to host your website assets with CDN. So here, Dropbox will also works for you as a CDN and the only thing you need to do is some simple tweaks.

> **Invitation to Dropbox!**
>
> Haven't join Dropbox yet? Sign up now with [https://db.tt/vocH7o0j](https://db.tt/vocH7o0j) link and install Dropbox on your desktop computer, you'll get extra 500MB of bonus space.

Following are some few simple steps within which you will learn to host images or website assets with Dropbox on your webpages:

### Step 1: Get a share link to an image file

There're various way of [getting share link](http://www.dropbox.com/help/167){:rel="nofollow"} to a file in a Dropbox, follow one of them as your comfort.

#### First option: Share link on Desktop

* Install the [Dropbox desktop application](http://www.dropbox.com/downloading){:rel="nofollow"} on your computer (if you haven't already).
* Right-click on the file to open its contextual menu and select **Share Dropbox link**. The link will be copied and you can immediately paste it anywhere.

<figure>
  <a href="//dl.dropboxusercontent.com/s/dem4lq19tmcgp1u/20150819-dropbox-share-link-on-desktop.png">
    <img src="//dl.dropboxusercontent.com/s/dem4lq19tmcgp1u/20150819-dropbox-share-link-on-desktop.png" alt="Share link from the Dropbox contextual menu" title="Share link from the Dropbox contextual menu">
  </a>
  <figcaption><strong>Share link</strong> from the Dropbox contextual menu.</figcaption>
</figure>

#### Second option: Share link using the website

* [Sign in](http://www.dropbox.com/login){:rel="nofollow"} to the Dropbox website and find the file or folder you'd like to link to.
* Hover the cursor over the file or folder and click the blue **Share** button that appears.

<figure>
  <a href="//dl.dropboxusercontent.com/s/e1n60amfrty1gt0/20150819-dropbox-bamboo-sharing-button-share-link-on-web.png">
    <img src="//dl.dropboxusercontent.com/s/e1n60amfrty1gt0/20150819-dropbox-bamboo-sharing-button-share-link-on-web.png" alt="Share link using the Dropbox website" title="Share link using the Dropbox website">
  </a>
</figure>

* A pop-up window will appear with the link. Copy the link to file and you can immediately paste it anywhere.

When you get copied of Dropbox shared link, you will see the file link in the following format:

```text
www.dropbox.com/s/HOST_ID/filename.extension
```

### Step 2: Change an image file shared link path

After getting a public shared link path to a image file, if you try to visit it you will get preview on Dropbox site and image hosting doesn't work by pasting this link.

So to fix this, all you need is to change the shared link path domain name with new one. Just replace `www.dropbox.com` with `dl.dropboxusercontent.com` and this will serve actual file instead of getting previewed in a site.

Example of default Dropbox public shared link path:

```text
https://www.dropbox.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png?dl=0
```

Replaced with a actual file path:

```text
https://dl.dropboxusercontent.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png
```

**Tip:** To get direct download link to a file uploaded on Dropbox you can use `?dl=1` as a query parameter in your URL. And to just bypass the preview page on Dropbox you can use use `?raw=1`.

### Step 3: Now what?

Now an HTML markup like

```html
<figure>
  <a href="//dl.dropboxusercontent.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png">
    <img src="//dl.dropboxusercontent.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png" alt="Copyright Dropbox logo type blue">
  </a>
  <figcaption>Dropbox, the Dropbox logo are trademarks of Dropbox Inc., registered in the U.S. and other countries.</figcaption>
</figure>
```

will output as following:

<figure>
  <a href="//dl.dropboxusercontent.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png">
    <img src="//dl.dropboxusercontent.com/s/kwyt8v55bhbj3vv/20150819-dropbox-logotype-blue.png" alt="Copyright Dropbox logo type blue">
  </a>
  <figcaption>Dropbox, the Dropbox logo are trademarks of Dropbox Inc., registered in the U.S. and other countries.</figcaption>
</figure>

#### Host webpages for free within Dropbox API

There're many free static HTML host powered by the Dropbox API. Some of them are:

* [UpDog](http://updog.co/){:rel="nofollow"}
* [Pancake](http://pancake.io/){:rel="nofollow"}
* [DropPages](http://droppages.com/){:rel="nofollow"}
* [KISSr](http://www.kissr.com/){:rel="nofollow"}.

### Is there a bandwidth limit for Dropbox public links?

"There is a hard limit of 20GB/day for Basic (free) accounts and 200GB/day for paid accounts to all of your links together, after which they're temporarily disabled, and those who try to access them will see an error page instead of your files," [Dropbox explains](http://www.dropbox.com/help/4204){:rel="nofollow"}.

Lets compare, you have images hosted on Dropbox which is around 250KB. That means images all together should have less than 80K impressions in a day for you to stay within the Dropbox traffic limits. And if another site hotlink to your static images, it may use up your "free bandwidth" quota even sooner.

Note that this is for share links, not for access via the API.

---

#### References

* [Using Dropbox to Host Images on your Website](http://ryanmo.co/2013/11/03/dropboxsharedlinks/){:rel="nofollow"} --- Ryan
