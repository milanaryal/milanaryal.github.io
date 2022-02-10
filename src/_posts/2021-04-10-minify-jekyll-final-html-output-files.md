---
title: "Minify Jekyll's final HTML output files"
description: "Compress and minify HTML files after they have been generated locally with a static website generator like Jekyll."
date: 2021-04-10 06:00:00 +0545
last_modified_at: 2021-06-07 08:00:00 +0545
---

Site assets minifying (or in another word compressing) helps to decrease site load and speed up browser loading time. Just like with CSS and JavaScript, HTML output can be compressed and minified by removing whitespace, new lines, comments and even removing certain optional closing tags, making for smaller file sizes.

Popular static site generator, Hugo version 0.47 introduced the `--minify` flag command which execute to minify the final HTML output to `/public` by simply running `hugo --minify`. Here, we are going to use the same dependency [Minify](https://github.com/tdewolff/minify){:rel="nofollow"} written in Go language by _Taco de Wolff_. It's extremely fast compare to other minify tools (and depends upon your site weight).

Following I have written simple procedures to Minify HTML pages after they have been generated locally with a static website generator like Jekyll.

#### Building site with Jekyll

First build Jekyll final production site with the following command line:

```bash
JEKYLL_ENV=production bundle exec jekyll build --profile --trace
```

#### Install Minify

- [CLI installation](https://github.com/tdewolff/minify/tree/master/cmd/minify#installation){:rel="nofollow"}

Deb package on Ubuntu

```bash
sudo apt-get update && sudo apt-get -y install minify
```

Using Homebrew on MacOS

```bash
brew install tdewolff/tap/minify
```

#### Minify HTML files

- [Usage](https://github.com/tdewolff/minify/tree/master/cmd/minify#usage){:rel="nofollow"}

```bash
minify --type=html --recursive --output "./" --match=\.html --html-keep-conditional-comments --html-keep-default-attrvals --html-keep-document-tags --html-keep-end-tags --html-keep-quotes "./_site/" --verbose
```

#### Minify XML files

You can also minify `*.XML` files with following command line:

```bash
minify --type=xml --recursive --output "./" --match=\.xml --xml-keep-whitespace "./_site/" --verbose || true
```

#### Minify JSON files

You can also minify `*.json` files with following command line:

```bash
minify --type=json --recursive --output "./" --match=\.json "./_site/" --verbose || true
```

### Build, minify and deploy Jekyll site into GitHub Pages using GitHub Actions

If you have hosted your site in GitHub Pages, you can create a workflow for a continuous integration.

GitHub Actions are registered for a repository by using a YAML file inside the directory path `.github/workflows` (note the dot at the start).

Create a **workflow file**, say `workflow.yml`, using either the GitHub interface or by pushing a YAML file to the workflow directory path manually.

The base contents are:

{% raw %}

```yml
name: My workflow

on:
  push:
    branches:
      - main

env:
  RUBY_VERSION: 2.7

jobs:
  deploy:
    name: gh-pages
    runs-on: ubuntu-latest

    steps:
      - name: Clone repository
        uses: actions/checkout@v2

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: ${{ env.RUBY_VERSION }} # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      - name: Building site
        run: JEKYLL_ENV=production bundle exec jekyll build --profile --trace

      # - name: Install Minify deb package on Ubuntu
      #   if: matrix.os == 'ubuntu-latest'
      #   run: apt-get update && apt-get install --no-install-recommends --yes minify

      # https://github.com/tdewolff/homebrew-tap/
      - name: Install Minify using Homebrew
        run: brew install tdewolff/tap/minify

      # https://github.com/tdewolff/minify/tree/master/cmd/minify#usage
      - name: Minify HTML files
        run: |
          minify --type=html --recursive --output "./" --match=\.html "./_site/" \
          --html-keep-conditional-comments \
          --html-keep-default-attrvals \
          --html-keep-document-tags \
          --html-keep-end-tags \
          --html-keep-quotes \
          --verbose

      - name: Minify JSON files
        run: |
          minify --type=json --recursive --output "./" --match=\.json "./_site/" --verbose || true

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        if: success()
        with:
          allow_empty_commit: false
          cname: yoursite.com.np
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: ./_site/
```

{% endraw %}

After so much research and testings I have found, this is the best and fastest method to minify Jekyll's output HTML files for your site.

If you search on _Google_ you can also find another alternative, Jekyll [layout that compresses HTML](https://github.com/penibelst/jekyll-compress-html){:rel="nofollow"} which is written in pure Liquid. But note that, I do not recommend using it because it slow down your Jekyll build time and has not been updated since long time.
