---
title: "Writing on GitHub Pages and Jekyll using Markdown"
date: 2015-01-09T15:04:14
redirect_from: "/2015/01/writing-on-github-pages-and-jekyll-using-markdown/"
---

Readme file on GitHub uses GitHub Flavored Markdown (GFM) and blogging platform like Jekyll, Ghost, Tumblr (support editing posts in Markdown) and many other platforms also encouraging to write posts using Markdown. Markdown is a minimal syntax for marking up your documents with formatting, using punctuation and special characters. For those new to Markdown, this guide will help you become familiar with the full list of shortcuts. Here's the version of Markdown in a combination of standard Markdown, GitHub Flavored Markdown, and other useful features like footnotes.

File extention with .markdown, .mkdown, .mkdn, .mkd, .md are the supported Markdown document.

### Enabling GitHub Flavored Markdown on Jekyll

You can add several extensions in which you can configure to the behaviour like GitHub Flavored Markdown, i.e. add this to your `_config.yml`:

#### For Redcarpet Markdown

{% highlight ruby %}
markdown: redcarpet
redcarpet:
  extensions: ["smart", "tables", "no_intra_emphasis", "fenced_code_blocks", "autolink", "strikethrough", "superscript", "with_toc_data"]
{% endhighlight %}

There're even more extensions for Redcarpet Markdown like "underline", "highlight", "quote", "footnote_ref"...

#### For Kramdown Markdown

{% highlight ruby %}
markdown: kramdown
kramdown:
  input: GFM # Enable GitHub Flavored Markdown (fenced code blocks)
{% endhighlight %}

**Also on Gost blogging platform**, it support the following combination of standard Markdown and GitHub Flavored Markdown.

> All HTML is valid Markdown. If you're stuck not able to format your content how you would like (for example using tables) you can always use [plain HTML](http://htmldog.com/guides/html/beginner/?__hstc=10303082.f33480622a9bdc4ffce7bcd81cc8cc49.1420789915940.1420789915940.1420789915940.1&__hssc=10303082.1.1420789915940&__hsfp=3394336207) instead of Markdown.

### Markdown style guide

The most common formatting options have keyboard shortcuts to make them easier to add:

|Result                                       |Markdown
|---------------------------------------------|---------------------------------------
| **Bold**                                    | `**text**`
| *Emphasize*                                 | `*text*`
| <strike>Strike-through</strike>             | `~~text~~`
| [Link]({{ page.url }}#markdown-style-guide) | `[title](http://)`
| `Inline Code`                               | ``` `code` ```
| Image                                       | `![alt](http://)`
| List                                        | `* item`
| Blockquote                                  | `> quote`
| H1                                          | `# Heading`
| H2                                          | `## Heading`
| H3                                          | `### Heading`

If you add underline extension on Redcarpet Markdown you will have <u>underline</u> feature with `_text_` (parse underscored emphasis as underlines. This is `_underlined_` but this is still `*italic*`).

### Headers

Headers are set using a hash before the title. The number of hashes before the title text will determine the depth of the header. Header depths are from 1-6

{% highlight text %}
* H1 : {% raw %}# Header 1{% endraw %}
* H2 : {% raw %}## Header 2{% endraw %}
* H3 : {% raw %}### Header 3{% endraw %}
* H4 : {% raw %}#### Header 4{% endraw %}
* H5 : {% raw %}##### Header 5{% endraw %}
* H6 : {% raw %}###### Header 6{% endraw %}
{% endhighlight %}

### Text styling

{% highlight text %}
* Links : {% raw %}[Title](URL){% endraw %}
* Bold : {% raw %}**Bold**{% endraw %}
* Italicize : {% raw %}*Italics*{% endraw %}
* Strike-through : {% raw %}~~text~~{% endraw %}
* Highlight : {% raw %}==text=={% endraw %}
* Paragraphs : Line space between paragraphs
* Line break : Add two spaces to the end of the line
* Lists : {% raw %}* an asterisk for every new list item.{% endraw %}
* Quotes : {% raw %}> Quote{% endraw %}
* Inline Code : {% raw %}`alert('Hello World');`{% endraw %}
* Horizontal Rule (HR) : {% raw %}--------{% endraw %}
{% endhighlight %}

### Images

To insert an image into your post, you need to first type `{% raw %}![](){% endraw %}` into the Markdown editor panel and image link inbetween `()`. To title your image, all you need to do is place the title text inbetween the square brackets, e.g; `{% raw %}![This is a title](){% endraw %}`.

### Footnotes

Footnotes can be added to the body of your text using placeholders like this: `{% raw %}[^1]{% endraw %}`. Alternatively you can use 'n' rather than numbers `{% raw %}[^n]{% endraw %}` so you don't have to worry about which number you are on. At the very end of your post, you can define your matching footnotes as shown below, URLs will be turned into links:

{% highlight text %}
{% raw %}
[^1]: This is my first footnote
[^n]: Visit http://milanaryal.com
[^n]: A final footnote
{% endraw %}
{% endhighlight %}

### Writing code

Inline code can be added using single back-ticks E.g. `alert('Hello World')`.

For code blocks, if extensions enabled Redcarpet and Kramdown supports both standard Markdown code blocks and the syntax from GitHub Flavored Markdown (GFM). Standard Markdown works by indenting code lines with 4 spaces:

{% highlight html %}
{% raw %}
<header>
        <h1>{{title}}</h1>
    </header>
GFM uses triple back-ticks ```
{% endraw %}
{% endhighlight %}

{% highlight html %}
{% raw %}
```
<header>
    <h1>{{title}}</h1>
</header>
```
{% endraw %}
{% endhighlight %}

### Examples

#### Link Markdown example

{% highlight text %}
{% raw %}
This is a paragraph that contains a [link to milanaryal.com](http://milanaryal.com).
{% endraw %}
{% endhighlight %}

#### List Markdown example

{% highlight text %}
{% raw %}
This paragraph contains a list of items.

* Item 1
* Item 2
* Item three
{% endraw %}
{% endhighlight %}

#### Quote Markdown example

{% highlight text %}
{% raw %}
This paragraph has a quote

> That is pulled out like this

from the text my post.
{% endraw %}
{% endhighlight %}

---

### Further references

* [Daring Fireball: Markdown syntax documentation](http://daringfireball.net/projects/markdown/syntax)
* [Redcarpet Markdown](https://github.com/vmg/redcarpet)
* [Kramdown Markdown](https://github.com/gettalong/kramdown)
* [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [GitHub guides: Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
