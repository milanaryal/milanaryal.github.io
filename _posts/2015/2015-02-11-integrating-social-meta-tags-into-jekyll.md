---
layout: post
title: "Integrating social meta tags into Jekyll"
date: 2015-02-11T13:04:19+05:45
excerpt: "A guide to adding social meta tags into Jekyll."
---

Social media meta tags allows us to optimize for sharing Twitter, Facebook, Google+ and Pinerest by defining exactly how titles, descriptions, images and more appear in social streams. There're various ways but following social meta tags is the best method to integrating into Jekyll.

A lot of these will even cross-share the tags. For example, Google+ will actually use Facebook's Open Graph tags if their available. All in all, the following code is a great start.

## Integrating Open Graph into Jekyll

{% highlight html %}
{% raw %}
<meta property="og:locale" content="{{ site.locale }}">
<meta property="og:type" content="{% if page.date %}article{% else %}website{% endif %}">
<meta property="og:title" content="{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}">
<meta property="og:description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:url" content="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
<meta property="og:site_name" content="{{ site.title }}">
<meta property="og:image" content="{% if page.image %}{{ page.image | prepend: site.baseurl | prepend: site.url }}{% else %}{{ site.icon | prepend: site.baseurl | prepend: site.url }}{% endif %}">

{% if page.date %}
  <meta property="article:published_time" content="{{ page.date | date_to_xmlschema }}">
  <meta property="article:author" content="{{ site.url }}/about/">
{% endif %}

{% if page.categories %}
  {% for category in page.categories limit:1 %}
  <meta content="{{ category }}" property="article:section">
  {% endfor %}
{% endif %}

{% if page.tags %}
  {% for tag in page.tags %}
  <meta content="{{ tag }}" property="article:tag">
  {% endfor %}
{% endif %}

<meta property="fb:admins" content="{{ site.author.fb_id }}">
<meta property="fb:app_id" content="{{ site.author.app_id }}">
{% endraw %}
{% endhighlight %}

## Integrating Twitter cards into Jekyll

{% highlight html %}
{% raw %}
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@{{ site.author.twitter }}">
<meta name="twitter:creator" content="@{{ site.author.twitter }}">
<meta name="twitter:title" content="{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}">
<meta name="twitter:description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
<meta name="twitter:image" content="{% if page.image %}{{ page.image | prepend: site.baseurl | prepend: site.url }}{% else %}{{ site.icon | prepend: site.baseurl | prepend: site.url }}{% endif %}">
<meta name="twitter:url" content="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
<meta property="og:site_name" content="{{ site.title }}">">
{% endraw %}
{% endhighlight %}

## Optimizing for search engine into Jekyll

{% highlight html %}
{% raw %}
<meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
<link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
{% endraw %}
{% endhighlight %}

## Integrating Google Author Rich Snippets into Jekyll

{% highlight html %}
{% raw %}
<link rel="author" href="//plus.google.com/+{{ site.author.googleplus }}">
{% endraw %}
{% endhighlight %}

---

Make sure you have the following `_config.yml` and post front matter setting to implement the above tags (or you can change according to your use):

Site `_config.yml` setting:

{% highlight ruby %}
title:          "your site title"
description:    "your site description"
author:
  twitter:      username
  googleplus:   username
  facebook:
    fb_id:      your facebook profile id
    app_id:     your facebook app id
icon:           your site icon path # /assets/img/icon.png [best 300px X 300px]
{% endhighlight %}

Post front matter:

{% highlight ruby %}
---
layout:     post
title:      "your post title"
date:       2015-02-11T13:04:19+05:45 # XML Schema Date/Time
image:      your post image path # /assets/img/image.jpg
excerpt:    "for meta description" # Optional for overring content excerpt
categories: your post categories # ["category1"] - best is to have one category in a post
tags        your post tags # ["tag1", "tag2", "tag3"] - you can have several post tags
---
{% endhighlight %}

---

### Validating

Be sure to check one of your example posts via the different social media metadata validator.

* For Facebook, test using the [Facebook debugger](//developers.facebook.com/tools/debug).
* For Twitter, submit one of your example posts via the [Twitter card validator](//cards-dev.twitter.com/validator).
* For Google+, test with the [rich snippets tester](//www.google.com/webmasters/tools/richsnippets).
* If you use Pinterest a lot, you need to validate your rich pins by going to the [rich pin validator page](http://developers.pinterest.com/rich_pins/validator).