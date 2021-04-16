---
title: "Adding 'Edit on GitHub' links to GitHub Pages using Jekyll"
date: 2015-01-17T01:00:53+05:45
last_modified_at: 2021-03-18T21:00:00+05:45
---

If you're using Jekyll on GitHub Pages you can have your Jekyll blog posts or collection document pages with extra "Edit on GitHub", "View source" and even "View revision history" links. Here's how you can have those:

### Edit on GitHub link

If you're hosting the site on GitHub Pages using Jekyll, they inject the source repository into a variable called {% raw %}`{{ site.github.repository_url }}`{% endraw %} which you can use in combination with {% raw %}`{{ page.path }}`{% endraw %} to wire up the URL on `github.com`.

#### For a blog post

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/edit/{{ site.github.source.branch }}/{{ page.path }}"
>
  Edit this page on GitHub
</a>
```

{% endraw %}

Example for output URL of above input URL:

{% raw %}

```html
<a
  href="http://github.com/username/username.github.io/edit/main/_posts/yyyy-mm-dd-your-post-title.md"
>
  Edit this page on GitHub
</a>
```

{% endraw %}

#### For a collection document

[For a collection document](http://jekyllrb.com/docs/collections/#documents){:rel="nofollow"}, you'll need to use {% raw %}`{{ page.relative_path }}`{% endraw %} instead of {% raw %}`{{ page.path }}`{% endraw %} to get the desired behavior.

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/edit/{{ site.github.source.branch }}/{{ page.relative_path }}"
>
  Edit this page on GitHub
</a>
```

{% endraw %}

#### On Prose

If you are using [Prose](http://github.com/prose/prose){:rel="nofollow"} to manage your content:

{% raw %}

```html
<a
  href="http://prose.io/#{{ site.github.repository_nwo }}/edit/{{ site.github.source.branch }}/{{ page.path }}"
>
  Edit this page
</a>
```

{% endraw %}

### View source link

You can add link of a source code of a post or doc on GitHub.

#### Source link for a blog post

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/blob/{{ site.github.source.branch }}/{{ page.path }}"
>
  View source
</a>
```

{% endraw %}

#### Source link for a collection document

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/blob/{{ site.github.source.branch }}/{{ page.relative_path }}"
>
  View source
</a>
```

{% endraw %}

### View revision history link

Like ways you can also add view revision history link which shows all the commitments of a post or doc.

#### Revision history link for a blog post

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/commits/{{ site.github.source.branch }}/{{ page.path }}"
>
  View revision history
</a>
```

{% endraw %}

#### Revision history link for a collection document

{% raw %}

```html
<a
  href="{{ site.github.repository_url }}/commits/{{ site.github.source.branch }}/{{ page.relative_path }}"
>
  View revision history
</a>
```

{% endraw %}
