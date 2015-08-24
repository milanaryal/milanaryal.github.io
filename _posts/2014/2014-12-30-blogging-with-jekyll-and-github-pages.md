---
title: "Blogging with Jekyll and GitHub Pages"
date: 2014-12-30T19:47:46+05:45
last_modified_at: "2015-07-15T15:59:30+05:45"
excerpt: "Transform your plain text into static websites and blogs."
redirect_from: "/2014/12/blogging-with-jekyll-and-github-pages/"
---

I recently migrated my blog to [GitHub Pages](//pages.github.com) using an awesome open source project [Jekyll](http://jekyllrb.com). It's really fun blogging with Jekyll. If you are not enjoying blogging with other CMS platform then you should really try Jekyll.

After reading a lot of documentation, I found following quickest way to set up a Jekyll powered blog on GitHub Pages:

### Jekyll's simple purpose

Tom Preston-Werner created Jekyll to enable people to blog using a simple static HTML website, with all of the content hosted and version-controlled on GitHub. The goal was to eliminate the complexity of other blogging platforms by creating a workflow that allows you to [blog like a hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html).

Jekyll takes your content written in Markdown, passes it through your templates and spits it out as a complete static website, ready to be served. GitHub Pages conveniently serves the website directly from your GitHub repository so that you don't have to deal with any hosting.

### So what is Jekyll, exactly?

According to Jekyll wiki,

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through [Markdown](http://daringfireball.net/projects/markdown/) (or [Textile](http://redcloth.org/textile)) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind [GitHub Pages](http://pages.github.com/), which means you can use Jekyll to host your project's page, blog, or website from GitHub's servers for free.

GitHub Pages uses the [following dependencies](//pages.github.com/versions/):

- {% for dependency in site.github.versions %}{{ dependency[0] }}{% if forloop.rindex0 > 0 %}, {% endif %}{% endfor %}

### Who are using Jekyll?

Here are some websites/blog that were created with Jekyll:

* [Jekyll](http://jekyllrb.com/) - itself and most of the GitHub's subpages
* [HealthCare.gov](https://www.healthcare.gov/) - landing page and content subpages
* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [Mark Dotto](http://markdotto.com/)
* [Zach Holman](http://zachholman.com/)
* [Todd Motto](http://toddmotto.com/)

... and many other awesome projects and blogs are using Jekyll and hosted on GitHub Pages.

### Getting Started

There are various ways to get started with Jekyll.

Install Jekyll locally via the command line, create a new boilerplate website using `jekyll new`, build it locally with `jekyll build`, and then serve it just make sure you've Ruby installed on your machine (further information visit [Jekyll docs](http://jekyllrb.com/)).

Or, here're the simple steps to blog with Jekyll on GitHub Pages without touching the single command line:

#### Step 1

Make [GitHub](//github.com) account and create repo `username.github.io`, remember your repo username must be match with GitHub account username.

#### Step 2

Download and install GitHub app according to your OS:

* Mac - [mac.github.com](//mac.github.com)
* Windows - [windows.github.com](//windows.github.com)

#### Step 3

Download and setup a good themes from the following popular sites:

* [Jekyll Themes Wiki](https://github.com/jekyll/jekyll/wiki/Themes)
* [Jekyll Themes](http://jekyllthemes.org/) - a Jekyll theme collection site
* [Poole](http://getpoole.com/)
* [Jekyll Now](http://www.jekyllnow.com/)
* There're other many theme collection site for Jekyll.


### Jekyll directory structure

A basic Jekyll site usually looks something like this:

{% highlight bash %}
.
├── CNAME # Contains your custom domain name (optional).
├── _config.yml
├── _drafts # To preview your posts.
│   ├── begin-with-the-crazy-ideas.textile
│   └── on-simplicity-in-technology.markdown
├── _includes # Snippets of code that can be used throughout your templates.
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html # The main template.
│   └── page.html # Static page layout.
│   └── post.html # Blog post layout.
├── _posts # All posts go in this directory!
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.markdown
│   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
│   └── members.yml
├── _site # After Jekyll builds the website, it puts the static HTML output here. This is what's served!
│   ├── CNAME
│   ├── about.html
│   └── feed.xml
│   ├── index.html
│   └── sitemap.xml
│   └── style.css
├─ .jekyll-metadata
├─ about.md # A static "About" page that I created.
├─ feed.xml # Powers the Atom/RSS feed.
├─ images # All of your images are stored here.
│  ├── first-post.jpg
├─ index.html # Home page layout.
├─ scss # The Sass style sheets for your website.
│  ├─ _highlights.scss
│  ├─ _reset.scss
│  ├─ _variables.scss
│  └─ style.scss
└── index.html
└── 404.html # Custom 404 page.
└── sitemap.xml # Site map for the website.
{% endhighlight %}

#### Step 4

* With the help of GutHub Windows/Mac client, clone your `username.github.io` and sync/push your theme.
* Congratulation! You are done.
* Now after few minutes (less than 15 min) you'll see your changes at your `http://username.githun.io`.

### Setting up a custom domain with GitHub Pages

Follow the following process to setup custom domain name with your GitHub Pages.

#### Configuring an A record with your DNS provider

With your DNS provider, create A records that resolve to the following IP addresses:

| Name         | Type    | Record         |
|--------------|---------|----------------|
| example.com  | A       | 192.30.252.153 |
| example.com  | A       | 192.30.252.154 |

#### Configuring a www subdomain

Again add following CNAME record to your DNS provider:

| Name         | Type    | Record             |
|--------------|---------|--------------------|
| www          | CNAME   | username.github.io |


<div class="alert alert-warning" role="alert">
  <p><i class="fa fa-warning"></i> Do not use wildcard DNS records (e.g. <code>*.example.com</code>) with GitHub Pages! A wildcard DNS record will allow anyone to host a GitHub Pages site at one of your subdomains.</p>
</div>

#### Create a CNAME file name

Now push a CNAME (with out any extention) file name in your GitHub Pages with your desire redirect:

* If your CNAME file contains `example.com`, then `www.example.com` will redirect to `example.com`.
* If your CNAME file contains `www.example.com`, then `example.com` will redirect to `www.example.com`.

### Publish your first blog post

[The front matter](http://jekyllrb.com/docs/frontmatter/) is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

{% highlight bash %}
---
layout: post
title: Blogging Like a Hacker
---
{% endhighlight %}

*Note: For the proper setup, don't use `tab` use `space` instead.*

Thanks to Liquid (Jekyll uses the Liquid templating language to process templates) that you can add your desire front matter:

{% highlight bash %}
---
layout:
title:
subtitle:
date:
author:
categories:
tags:
id:
excerpt:
permalink:
featured_image:
---
{% endhighlight %}

Save the file under the format `2014-12-30-blogging-like-a-hacker.md` which is in `YYY-MM-DD-blog-post-title.md`.

Now if you set your permalink as `/:year/:month/:title/` in `_config.yml` then above post will published as `example.com/2014/12/blogging-like-a-hacker/`.

### Using Jekyll Plugins with GitHub Pages

GitHub Pages currently supports several Jekyll plugins:

* [Jemoji](//help.github.com/articles/emoji-on-github-pages) - provides support for emoji within Jekyll posts and pages ([Emoji cheat sheet](http://www.emoji-cheat-sheet.com/))
* [Jekyll-mentions](//help.github.com/articles/mentions-on-github-pages) - provides support for &#64;mentions within Jekyll posts and pages
* [Jekyll-redirect-from](//help.github.com/articles/redirects-on-github-pages) - redirects visitors to an updated URL when Jekyll post or page filenames change.
* [Jekyll-sitemap](//help.github.com/articles/sitemaps-for-github-pages) - adds a standards compliant sitemap for your GitHub Pages.
* [Jekyll-feed](//github.com/jekyll/jekyll-feed) - generate an Atom (RSS-like) feed of your Jekyll posts.

Add a list of enabled gems (plugins) to your site's `_config.yml` file, such as:

{% highlight bash %}
gems:
  - jekyll-mentions
  - jemoji
  - jekyll-redirect-from
  - jekyll-sitemap
  - jekyll-feed
{% endhighlight %}

This is simple proccess to blog with Jekyll on GitHub Pages. You can learn more about Jekyll at [jekyllrb.com](http://jekyllrb.com/).

Happy Jekyll'ing!
