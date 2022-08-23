---
title: "Integrating social meta tags into Jekyll"
description: "A guide to add metadata tags for search engines and social networks to better index and display your site's content."
date: 2015-02-11T13:04:19+05:45
last_modified_at: 2020-06-16T19:00:00+05:45
---

Social media meta tags allows us to optimize for sharing Twitter, Facebook, Google+ and Pinerest by defining exactly how titles, descriptions, images and more appear in social streams. There're various ways but following social meta tags is the best method to integrating into Jekyll.

A lot of these will even cross-share the tags. For example, Google+ will actually use Facebook's Open Graph tags if their available. All in all, the following code is a great start.

### Integrating Open Graph into Jekyll

<!-- prettier-ignore-start -->
{% raw %}

```html
<meta property="og:title" content="{% if page.title %}{{ page.title | smartify | strip_html | normalize_whitespace | escape_once }}{% else %}{{ site.name }}{% endif %}">
<meta property="og:type" content="{% if page.layout == 'post' and page.date %}article{% else %}website{% endif %}">
<meta property="og:url" content="{{ page.url | replace:'/index.html','/' | absolute_url }}">
<meta property="og:image" content="{% if page.image %}{{ page.image | absolute_url }}{% else %}{{ site.logo | absolute_url }}{% endif %}">
<meta property="og:description" content="{% if page.excerpt %}{{ page.excerpt | markdownify | strip_html | normalize_whitespace | truncate: 160 | escape_once }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:site_name" content="{{ site.name }}">
<meta property="og:locale" content="{{ site.locale }}">

{% if site.facebook %}
  {% if site.facebook.admins %}
    <meta property="fb:admins" content="{{ site.facebook.admins }}">
  {% endif %}
  {% if site.facebook.publisher %}
    <meta property="article:publisher" content="{{ site.facebook.publisher }}">
  {% endif %}
  {% if site.facebook.app_id %}
    <meta property="fb:app_id" content="{{ site.facebook.app_id }}">
  {% endif %}
{% endif %}

{% if page.layout == 'post' and page.date %}
  <meta property="article:author" content="https://www.facebook.com/{{ site.author.facebook }}">
  <meta property="article:modified_time" content="{% if page.last_modified_at %}{{ page.last_modified_at | date_to_xmlschema }}{% else %}{{ page.date | date_to_xmlschema }}{% endif %}">
  <meta property="article:published_time" content="{{ page.date | date_to_xmlschema }}">
  {% for post in site.related_posts limit:3 %}
    <meta property="og:see_also" content="{{ post.url | replace:'/index.html','/' | absolute_url }}">
  {% endfor %}
{% endif %}

{% if page.categories %}
  {% for category in page.categories limit:1 %}
  <meta property="article:section" content="{{ category }}">
  {% endfor %}
{% endif %}

{% if page.tags %}
  {% for tag in page.tags %}
  <meta property="article:tag" content="{{ tag }}">
  {% endfor %}
{% endif %}
```

{% endraw %}
<!-- prettier-ignore-end -->

### Integrating Twitter cards into Jekyll

<!-- prettier-ignore-start -->
{% raw %}

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@{{ site.twitter.username | remove:'@' }}">
{% if page.layout == 'post' and page.date %}
  <meta name="twitter:creator" content="@{{ site.author.twitter | remove:'@' }}">
{% endif %}
<meta name="twitter:title" content="{% if page.title %}{{ page.title | smartify | strip_html | normalize_whitespace | escape_once }}{% else %}{{ site.name }}{% endif %}">
<meta name="twitter:description" content="{% if page.excerpt %}{{ page.excerpt | markdownify | strip_html | normalize_whitespace | truncate: 160 | escape_once }}{% else %}{{ site.description }}{% endif %}">
<meta name="twitter:image" content="{% if page.image %}{{ page.image | absolute_url }}{% else %}{{ site.logo | absolute_url }}{% endif %}">
<meta name="twitter:url" content="{{ page.url | replace:'/index.html','/' | absolute_url }}">
```

{% endraw %}
<!-- prettier-ignore-end -->

### Optimizing for search engine into Jekyll

<!-- prettier-ignore-start -->
{% raw %}

```html
<meta name="description" content="{% if page.excerpt %}{{ page.excerpt | markdownify | strip_html | normalize_whitespace | truncate: 160 | escape_once }}{% else %}{{ site.description }}{% endif %}">

{% if page.robots %}
  <meta name="robots" content="{{ page.robots }}">
{% endif %}

<link rel="canonical" href="{{ page.url | replace:'/index.html','/' | absolute_url }}">

{% if paginator.previous_page %}
  <link rel="prev" href="{{ paginator.previous_page_path | replace:'/index.html','/' | absolute_url }}">
{% endif %}

{% if paginator.next_page %}
  <link rel="next" href="{{ paginator.next_page_path | replace:'/index.html','/' | absolute_url }}">
{% endif %}
```

{% endraw %}
<!-- prettier-ignore-end -->

Make sure you have the following `_config.yml` and post front matter setting to implement the above social meta tags (or you can change according to your use):

Site `_config.yml` setting:

```yml
name: "your site name"
description: "your site description"
url: "http://yoursitename.com" # URL of site, include http://, do not include a trailing slash
baseurl: "/base" # does not include hostname
logo: your site logo path # /assets/img/logo.png [best 300px X 300px]
timezone: your timezone # eg. Asia/Kathmandu
locale: your locale language # eg. en_us
author:
  facebook: username # site author facebook page
  twitter: username # site author twitter page
facebook:
  app_id: 1234 # site facebook app id
  publisher: 1234 # site facebook page id
  admins: 1234 # site admin facebook profile id
twitter:
  username: username # site twitter page
```

Post front matter:

```yml
---
layout: post
title: "your post title"
date: 2015-02-11T13:04:19+05:45 # XML Schema Date/Time
last_modified_at: 2015-03-15T05:20:00+05:45 # last page modified date/time
image: your post featured image path # /assets/img/image.jpg
excerpt: "for meta description" # Optional for overring content excerpt
categories: your post categories # ["category1"] - best is to have one category in a post
tags: your post tags # ["tag1", "tag2", "tag3"] - you can have several post tags
---
```

---

### Jekyll SEO Tag

> **Update May 10, 2016**
>
> Jekyll now have a dedicated SEO plugin to better index your site's content

If your blog or product landing page is using using Jekyll or GitHub Pages, [it can now be optimized for SEO](http://github.com/blog/2162-better-discoverability-for-github-pages-sites){:rel="nofollow"}.

To enable the Jekyll SEO tag plugin, you need to add the following to your site's `Gemfile`:

```rb
gem 'jekyll-seo-tag'
```

Also, add the following line to your site's `_config.yml` file (_note that if you are using a Jekyll version less than `3.5.0`, use the gems key instead of `plugins`_):

```yml
plugins:
  - jekyll-seo-tag
```

Now by adding a simple {% raw %}`{% seo %}`{% endraw %} tag right before `</head>`, Jekyll will automatically add SEO metadata to each page. It even accounts for the page title, in addition to the description, canonical URL, next (and previous) URL and post metadata.

When you share a post to Facebook, LinkedIn, Twitter or other social networks, the tag makes sure content is displayed richly. The functionality comes courtesy of the [Jekyll SEO plugin](http://github.com/jekyll/jekyll-seo-tag){:rel="nofollow"} (GitHub Pages compatible), which GitHub says "provides a battle-tested template of crowdsourced best-practices."

---

### Validating

Be sure to check one of your example posts via the different social media metadata validator.

- For Facebook, test using the [Facebook debugger](http://developers.facebook.com/tools/debug){:rel="nofollow"}.
- For Twitter, submit one of your example posts via the [Twitter card validator](http://cards-dev.twitter.com/validator){:rel="nofollow"}.
- For Google+, test with the [rich snippets tester](http://www.google.com/webmasters/tools/richsnippets){:rel="nofollow"}.
- If you use Pinterest a lot, you need to validate your rich pins by going to the [rich pin validator page](http://developers.pinterest.com/docs/rich-pins/validator/){:rel="nofollow"}.
