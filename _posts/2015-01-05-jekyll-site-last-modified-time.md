---
title: "Jekyll site last modified time"
date: 2015-01-05T17:08:17+05:45
last_modified_at: 2016-07-10T09:58:56+05:45
excerpt: "Display the date and time that the website was last modified."
---

If you are using [Jekyll](http://jekyllrb.com/){:rel="nofollow"} to generate your site or blog, you might want to know the last exact site modified/generated time as the Jekyll generate and keep the files in `_site` folder.

I found the following liquid tag to do it:

{% raw %}

```liquid
{{ site.time }}
```

{% endraw %}

To know modified time according to your locale timezone you have to add your [tz database time zone](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones){:rel="nofollow"} in your `_config.yml`:

```rb
timezone: Asia/Kathmandu # add your own locale timezone
```

And you can add this in the end of your website source code:

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

---

Happy Jekyll'ing!
