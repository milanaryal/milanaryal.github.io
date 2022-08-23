---
title: "Ping your sitemap to the major search engines"
description: "Inform Google Bot and Bing Bot about changes to your websites by submitting your XML sitemap URL."
date: 2020-04-18T07:15:00+05:45
---

_What the heck is Ping?_ Pinging (in SEO) refers to sending auto-generated notifications (XML sitemap) to search engine spiders telling them that the page has been updated and needs to be re-crawled.

After changes (or adding new post) to your site, change the 'last modified date' of updated pages in your sitemap. If you are using CMS platform like WordPress, you can use sitemap plugins to do this automatically.

Then, resubmit (first time? you need to sign up & then submit) the sitemap in Webmaster Tools --- both [Google Webmasters](https://www.google.com/webmasters/){:rel="nofollow"}, and [Bing Webmasters](https://www.bing.com/toolbox/webmaster){:rel="nofollow"}.

---

### Pinging your sitemap using a HTTP request

Alternatively, try the following method to tell search engines that you have updated your website.

### Ping Google Bot

Type following URL in address bar of your browser

```text
http://www.google.com/ping?sitemap=[URL/of/file]
```

For example:

```text
http://www.google.com/ping?sitemap=http://www.example.com/sitemap.xml
```

### Ping Bing Bot

Type following URL in address bar of your browser

```text
http://www.bing.com/ping?sitemap=[URL/of/file]
```

For example:

```text
http://www.bing.com/ping?sitemap=http://www.exmaple.com/sitemap.xml
```

Please note that if you have sign-up for Webmaster Tools then Webmasters Bot automatically figures out frequency of your updates. If you update your site more often then search engines bot will check it more often. It's good to avoid pinging the same URL over and over within a short period of time.

---

#### References

- [Submit URLs to Google](https://developers.google.com/search/docs/guides/submit-URLs){:rel="nofollow"}
- [Pinging using a HTTP request to Bing](https://www.bing.com/webmaster/help/sitemaps-3b5cf6ed){:rel="nofollow"}
