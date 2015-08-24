---
title: "Delete your oldest tweets using Twitter Archive Eraser"
date: 2014-10-29T22:34:25+05:45
excerpt: "A simple application that helps you delete the oldest tweets from your timeline, or erase the whole archive too if you would like so."
redirect_from:
  - "/2014/10/twitter-archive-eraser.html"
  - "/2014/10/delete-your-oldest-tweets-using-twitter-archive-eraser/"
---

Looking for the awesome Twitter Archive Eraser?

[Twitter Archive Eraser](//martani.github.io/Twitter-Archive-Eraser) allows you to automatically delete tweets in bulk from your timeline, or erase your whole twitter archive if you would like so.

Several tools exist to help you delete your old tweets but, most of them do not work properly, if at all, due to Twitter API's limitations. Twitter imposes a limit of 3200 tweets ([the more recent ones that is](//dev.twitter.com/overview/general/things-every-developer-should-know)) that an application can access.

Twitter enabled the option for users to download their whole archive of tweets, which contains among other things the IDs of all the tweets of a user: the exact piece of information that can be used to erase tweet.

Thus, a simple application called "[Twitter Archive Eraser](//martani.github.io/Twitter-Archive-Eraser)" developed by [Martani Fakhrou](//twitter.com/martani_net) that helps you delete the oldest tweets from your timeline, or erase the whole archive too if you would like so.

Download and setup the Twitter Archive Eraser app by visiting the link given below:

<p><a class="btn btn-default" href="//martani.github.io/Twitter-Archive-Eraser" onClick="ga('send', 'event', 'Click', 'Direct link', 'Twitter Archive Eraser');">Direct link →</a></p>

There is two kinds of download app available:

1. Standalone (portable) version: This version requires no installation and can be run directly.
2. Installer version: The installer takes care of downloading the required libraries (.NET framework etc.), and installs the application to the start menu.

### How to use Twitter Archive Eraser

The application is the simplest possible, it works in 3 steps: authenticate Twitter; select which tweets you want to delete; erase them.

#### Step 1

In this step, you give Twitter Archive Eraser access to your twitter account so that it can delete the tweets you select. This works by providing a PIN number that twitter provides after the authentication.

Note: You need to accept sharing several statistics to use Twitter Archive Eraser.

<figure>
  <a href="//dl.dropboxusercontent.com/s/gvgkag10py1o3x7/20141029-twitter-archive-eraser-screenshot-step1.png">
    <img src="//dl.dropboxusercontent.com/s/gvgkag10py1o3x7/20141029-twitter-archive-eraser-screenshot-step1.png" alt="Step 1">
  </a>
  <figcaption>Step 1</figcaption>
</figure>

#### Step 2

After you download your Twitter archive (from  [twitter.com/settings/account](//twitter.com/settings/account) and you can load it directly as a zip file into Twitter Archive Eraser.

You can select which period of time you want to delete tweets from (grouped by month).

<figure>
  <a href="//dl.dropboxusercontent.com/s/i4knrf5fw4obltc/20141029-twitter-archive-eraser-screenshot-step2.png">
    <img src="//dl.dropboxusercontent.com/s/i4knrf5fw4obltc/20141029-twitter-archive-eraser-screenshot-step2.png" alt="Step 2">
  </a>
  <figcaption>Step 2</figcaption>
</figure>

#### Step 3

Once you have selected the months, you are now presented with all the tweets in this period of time. By default, all the tweets are marked for deletion, if you want to keep any specific tweets, just uncheck them as shown in the following picture.

You can use regular expressions to filter specific tweets to check/uncheck them (you can click the "Erase?" checkbox on top to check uncheck all the filtered tweets).

You can also choose the degree of parallelism you want: that is how many tweets Twitter Archive Eraser deletes at a time: the more the better. Notice however that this parameter is limited by your network speed.

You can pause/resume the deletion process and check/uncheck tweets in between.

<figure>
  <a href="//dl.dropboxusercontent.com/s/jqjy2dvum412g0s/20141029-twitter-archive-eraser-screenshot-step3.png">
    <img src="//dl.dropboxusercontent.com/s/jqjy2dvum412g0s/20141029-twitter-archive-eraser-screenshot-step3.png" alt="Step 3">
  </a>
  <figcaption>Step 3</figcaption>
</figure>

### Common filtering expressions

Use the following filtering expressions to search for:

* Retweets: `^RT`
* Replies: `^@\w+`
* Reply to user martani\_net: `^@martani_net`
* Mentions: `@\w+`
* Mentions of user martnai\_net: `@martani_net`
  *This will possibly return Retweets also*
* Tweets containing a number with 4 digits or more: `\d{4}`
* Tweets containing the word 'hello': `hello`

You can find the code of the application on github: [github.com/martani/Twitter-Archive-Eraser](//github.com/martani/Twitter-Archive-Eraser). Developer mentions that all the Twitter logic is done using the excellent [LinqToTwitter](http://linqtotwitter.codeplex.com) library.

Sadly, this app works only with Windows OS and yet developer is not further planning to develop this app for any other OS like Mac or linux. But don't worry you can use apps like VMware or VirtualBox to switch to Windows and use the Windows apps.

### Video explaining how to use Twitter Archive Eraser

<figure>
  <iframe width="560" height="315" src="http://www.youtube.com/embed/a01T_WPkQuU?rel=0&amp;theme=light" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video: Martani Fakhrou</figcaption>
</figure>
