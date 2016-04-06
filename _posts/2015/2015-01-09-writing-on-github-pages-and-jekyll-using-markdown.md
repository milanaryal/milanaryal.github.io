---
title: "Writing on GitHub Pages and Jekyll using Markdown"
date: 2015-01-09T15:04:14+05:45
last_modified_at: 2016-02-14T08:38:16+05:45
---

Readme file on GitHub uses GitHub Flavored Markdown (GFM) and blogging platform like Jekyll, Ghost, Tumblr (support editing posts in Markdown) and many other platforms also encouraging to write posts using Markdown. Markdown is a minimal syntax for marking up your documents with formatting, using punctuation and special characters. For those new to Markdown, this guide will help you become familiar with the full list of shortcuts. Here's the version of Markdown in a combination of standard Markdown, GitHub Flavored Markdown, and other useful features like footnotes.

File extention with .markdown, .mkdown, .mkdn, .mkd, .md are the supported Markdown document.

### Enabling GitHub Flavored Markdown on Jekyll

> **Starting May 1st, 2016, GitHub Pages will only support [kramdown](http://kramdown.gettalong.org/), Jekyll's default Markdown engine.**
>
> [*Learn more*](https://github.com/blog/2100-github-pages-now-faster-and-simpler-with-jekyll-3-0)

You can add several extensions in which you can configure to the behaviour like GitHub Flavored Markdown, i.e. add this to your `_config.yml`:

#### For Kramdown Markdown

```rb
markdown: kramdown
kramdown:
  input: GFM # Enable GitHub Flavored Markdown (fenced code blocks)
  hard_wrap: false
highlighter: rouge
```

> All HTML is valid Markdown. If you're stuck not able to format your content how you would like (for example using tables) you can always use [plain HTML](http://htmldog.com/guides/html/beginner/) instead of Markdown.

### Markdown style guide

The most common formatting options have keyboard shortcuts to make them easier to add:

|Result | Markdown |
|---|---|
| **Bold** | `**text**` or `__text__`|
| *Emphasize* | `*text*` or `_text_` |
| [Link]({{ page.url }}#markdown-style-guide) | `[title](http://)` |
| `Inline Code` | <code>`code`</code> |
| Image | `![alt](http://)` |
| List | `* item` |
| Blockquote | `> quote` |
| H1 | `# Heading` |
| H2 | `## Heading` |
| H3 | `### Heading` |

### Headers

Headers are set using a hash before the title. The number of hashes before the title text will determine the depth of the header. Header depths are from 1-6

```text
* H1 : # Header 1
* H2 : ## Header 2
* H3 : ### Header 3
* H4 : #### Header 4
* H5 : ##### Header 5
* H6 : ###### Header 6
```

### Text styling

```text
* Links                : [Title](URL)
* Bold                 : **Bold** or __Bold__
* Italicize            : *Italics* or _Italics_
* Paragraphs           : Line space between paragraphs
* Quotes               : > Quote
* Inline Code          : `alert('Hello World');`
* Horizontal Rule (HR) : ---
```

### Images

To insert an image into your post, you need to first type `![]()` into the Markdown editor panel and image link inbetween `()`. To title your image, all you need to do is place the title text inbetween the square brackets, e.g; `![This is a title]()`.

### Footnotes

Footnotes can be added to the body of your text using placeholders like this: `[^1]`. Alternatively you can use 'n' rather than numbers `[^n]` so you don't have to worry about which number you are on. At the very end of your post, you can define your matching footnotes as shown below, URLs will be turned into links:

```text
[^1]: This is my first footnote
[^n]: Visit http://milanaryal.com
[^n]: A final footnote
```

### Writing code

Inline code can be added using single back-ticks E.g. <code>`alert('Hello World')`</code>.

For code blocks, if extensions enabled Kramdown supports both standard Markdown code blocks and the syntax from GitHub Flavored Markdown (GFM).

Standard Markdown works by indenting code lines with 4 spaces:

<pre><code>    &lt;header>
      &lt;h1>{% raw %}{{title}}{% endraw %}&lt;/h1>
    &lt;/header>
</code></pre>

GFM uses triple back-ticks <code>```</code> before and after the code block:

<pre><code>```
&lt;header>
  &lt;h1>{% raw %}{{title}}{% endraw %}&lt;/h1>
&lt;/header>
```
</code></pre>

### Examples

#### Link Markdown example

```text
This is a paragraph that contains a [link to milanaryal.com](http://milanaryal.com).
```

#### List Markdown example

```text
This paragraph contains a list of items.

* Item 1
* Item 2
* Item three
```

#### Quote Markdown example

```text
This paragraph has a quote

> That is pulled out like this

from the text my post.
```

---

### Further references

* [Daring Fireball: Markdown syntax documentation](http://daringfireball.net/projects/markdown/syntax)
* [Redcarpet Markdown](https://github.com/vmg/redcarpet)
* [Kramdown Markdown](https://github.com/gettalong/kramdown)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [GitHub guides: Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
