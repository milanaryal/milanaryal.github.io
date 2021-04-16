---
redirect_from: "/jekyll-site-last-modified-time/"
title: "Jekyll static assets cache busting"
date: 2015-01-05T17:08:17+05:45
last_modified_at: 2021-04-10T09:00:56+05:45
excerpt: "Implementing cache busting each time you make a change will allow the user's browser to download the latest assets, therefore you get no site assets breakages until a hard refresh."
---

For implementing cache busing into Jekyll HTML output linked assets we can use Jekyll site time tag. Following we have discussed it briefly.

### Jekyll site last modified time

If you are using [Jekyll](http://jekyllrb.com/){:rel="nofollow"} to generate your site or blog, you might curious to know the last exact site modified/generated time as the Jekyll generate and keep the files in `_site` folder.

I found the following liquid tag to know the exact last time when you run the jekyll command.

{% raw %}

```liquid
{{ site.time }}
```

{% endraw %}

To know modified time according to your locale timezone you have to add your [tz database time zone](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones){:rel="nofollow"} in your `_config.yml`:

```rb
timezone: Asia/Kathmandu # add your own locale timezone
```

And you can add this in the end of your website source code to display the date and time that the website was last modified:

{% raw %}

```text
<!-- Last modified at: {{ site.time }} -->
```

{% endraw %}

Which output as:

```text
<!-- Last modified at: 2015-01-05 18:06:54 +0545 -->
```

---

If you are hosting your site on _GitHub Pages_ and using Jekyll:

{% raw %}

```text
<!-- Proudly Hosted on GitHub | Generated {{ site.time }} | Revision {{ site.github.build_revision }} -->
```

{% endraw %}

Which output in following format:

```text
<!-- Proudly Hosted on GitHub | Generated 2015-01-05 18:06:54 +0545 | Revision 8b10cc6954163643f53d0b503888578e143d7e57 -->
```

### Jekyll assets cache busting

Implementing cache-busting each time you make a change will allow the user's browser to download the latest assets, therefore you get no site assets breakages until a hard refresh.

If we deploy a file with a unique name, the browser will recognise it as a new file and serve it up. A commonly-used cache-busting technique is to append a unique identifier (or hash) to the names of our asset files (such as CSS and JS files). For example, `style.css` becomes `style-1618065829.css`.

You could also manually increment when changes occur using semantic versioning e.g. `style.css?v=1.2` --- but its time consuming method and boring stuff to do. So, following we will learn a automatic technique our Jekyll will handle every time you build your site.

#### Building Jekyll site using GitHub Pages

Create a `build_version.html` file into `_includes/` folder and save the following snippet:

{% raw %}

```liquid
{%- if site.github.build_revision and jekyll.environment == "production" -%}
  {%- assign build_version = site.github.build_revision -%}
{%- else -%}
  {%- assign build_version = site.time | date: '%Y%m%d%H%M%S' -%}
{%- endif -%}
```

{% endraw %}

Then where ever you need include it on the top of your page and tag {% raw %}{{ build_version }}{% endraw %} to the end of your assets.

{% raw %}

```html
{% include build_version.html %}

<!-- Critical CSS -->
<link
  rel="stylesheet"
  href="{{ 'assets/css/style.css' | relative_url }}?v={{ build_version }}"
/>

<!-- Core JavaScript -->
<script src="{{ 'assets/js/bundle.js' | relative_url }}?v={{ build_version }}"></script>
```

{% endraw %}

#### Building Jekyll site using GitHub Actions

To add cache busting, you can also simply append the `site.date` global to the end of my assets, and force it to a unix timestamp (seconds since the epoch 1970):

{% raw %}

```html
<link
  href="{{ 'assets/css/style.css' | relative_url }}?v={{ site.time | date: '%s' }}"
  rel="stylesheet"
/>
```

{% endraw %}

This will then compile and render out your current timestamp every time you make a change to your site, as the site is statically rendered on the server upon changing something:

```html
<link href="assets/css/style.css?v=1618065829" rel="stylesheet" />
```

Now, this technique will bust/digest browser cache of the file every time the site is built.

Happy Jekyll'ing!
