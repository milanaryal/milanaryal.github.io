---
title: "Adding 'Edit on GitHub' links to GitHub Pages using Jekyll"
date: 2015-01-17T01:00:53+05:45
redirect_from: "/2015/adding-edit-on-github-links-to-github-pages-using-jekyll/"
---

If you're using Jekyll on GitHub Pages you can have your Jekyll blog posts or collection document pages with extra "Edit on GitHub", "View source" and even "View revision history" links. Here's how you can have those:

### Edit on GitHub link

If you're hosting the site on GitHub Pages using Jekyll, they inject the source repository into a variable called `{% raw %}{{ site.github.repository_url }}{% endraw %}` which you can use in combination with `{% raw %}{{ page.path }}{% endraw %}` to wire up the URL on `github.com`.

#### For a blog post

```html
{% raw %}
<a href="{{ site.github.repository_url }}/edit/{{ site.branch }}/{{ page.path }}">
  Edit this page on GitHub
</a>
{% endraw %}
```

Example for output URL of above input URL:

```html
{% raw %}
<a href="http://github.com/username/username.github.io/edit/master/_posts/yyyy-mm-dd-your-post-title.md">
  Edit this page on GitHub
</a>
{% endraw %}
```

#### For a collection document

[For a collection document](http://jekyllrb.com/docs/collections/#documents){:rel="nofollow"}, you'll need to use `{% raw %}{{ page.relative_path }}{% endraw %}` instead of `{% raw %}{{ page.path }}{% endraw %}` to get the desired behavior.

```html
{% raw %}
<a href="{{ site.github.repository_url }}/edit/{{ site.branch }}/{{ page.relative_path }}">
  Edit this page on GitHub
</a>
{% endraw %}
```

#### On Prose

If you are using [Prose](http://github.com/prose/prose){:rel="nofollow"} to manage your content:

```html
{% raw %}
<a href="http://prose.io/#{{ site.repo }}/edit/{{ site.branch }}/{{ page.path }}">
  Edit this page
</a>
{% endraw %}
```

### View source link

You can add link of a source code of a post or doc on GitHub.

#### For a blog post

```html
{% raw %}
<a href="{{ site.github.repository_url }}/blob/{{ site.branch }}/{{ page.path }}">
  View source
</a>
{% endraw %}
```

#### For a collection document

```html
{% raw %}
<a href="{{ site.github.repository_url }}/blob/{{ site.branch }}/{{ page.relative_path }}">
  View source
</a>
{% endraw %}
```

### View revision history link

Like ways you can also add view revision history link which shows all the commitments of a post or doc.

#### For a blog post

```html
{% raw %}
<a href="{{ site.github.repository_url }}/commits/{{ site.branch }}/{{ page.path }}">
  View revision history
</a>
{% endraw %}
```

#### For a collection document

```html
{% raw %}
<a href="{{ site.github.repository_url }}/commits/{{ site.branch }}/{{ page.relative_path }}">
  View revision history
</a>
{% endraw %}
```
