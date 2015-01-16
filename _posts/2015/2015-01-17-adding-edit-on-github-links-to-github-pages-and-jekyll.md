---
layout: post
title: Adding "Edit on GitHub" links to GitHub Pages and Jekyll
date: 2015-01-17T01:00:53+05:45
---

You can have your GitHub documentation pages or Jekyll blog post with extra "Edit on GitHub" and "View source" links. Here's how you can have those:

### Edit on GitHub link

If you're hosting the site on GitHub Pages, they inject the source repository into a variable called `site.github.repository_url` which you can use in combination with page.path to wire up the URL on `github.com`.

Example: 
{% highlight html %}
{% raw %}
<a href="{{ site.github.repository_url }}/edit/master/{{ page.path }}">Edit this page on GitHub</a>
{% endraw %}
{% endhighlight %}

{% highlight html %}
{% raw %}
<a href="//github.com/USERNAME/USERNAME.github.io/edit/master/{{ page.path }}">
  Edit this page on GitHub
</a>
{% endraw %}
{% endhighlight %}

For a collection document, you'll need to use `{% raw %}{{ page.relative_path }}{% endraw %}` instead of `{% raw %}{{ page.path }}{% endraw %}` to get the desired behavior, see http://jekyllrb.com/docs/collections/#documents):

{% highlight html %}
{% raw %}
<a href="{{ site.github.repository_url }}/edit/master/{{ page.relative_path }}">Edit this page on GitHub</a>
{% endraw %}
{% endhighlight %}

If you are using [Prose](https://github.com/prose/prose) to manage your content:

{% highlight html %}
{% raw %}
<a href="http://prose.io/#{{site.repo}}/edit/{{site.branch}}/{{ page.path }}">Edit</a>
{% endraw %}
{% endhighlight %}

### View source link

If you're hosting the site on GitHub Pages:

{% highlight html %}
{% raw %}
<a href="{{ site.github.repository_url }}/blob/master/{{ page.path }}">
  View source
</a>
{% endraw %}
{% endhighlight %}

{% highlight html %}
{% raw %}
<a href="//github.com/USERNAME/USERNAME.github.io/blob/master/{{ page.path }}">
  View source
</a>
{% endraw %}
{% endhighlight %}