---
title: "Style guide"
tagline: "A living style guide."
description: "A living document of code detailing all the various components used on the website to maintain visual consistency."
permalink: "/style-guide/"
sitemap: false
robots: "noindex, follow"
---

> A living document of code detailing all the various colors, typographic elements, UI patterns, and components used on the website to maintain visual consistency.

Posts in [Milan Aryal](https://milanaryal.com.np/)'s blog are written in Markdown which are generated in standard HTML using [Jekyll](https://jekyllrb.com/).

This style guide is written in Markdown, the raw file is available [here](https://raw.githubusercontent.com/milanaryal/milanaryal.github.io/main/src/_pages/style-guide.md).

---

<!-- prettier-ignore-start -->

### Table of contents
{: .no_toc}

* Table of contents placeholder
{:toc}

<!-- prettier-ignore-end -->

---

### Headings

Following are the header tags for the body content. H1 and H2 are reserved on the front matter with main title and subtitle respectively. H5 and H6 tags are depreciated in this site.

<!-- prettier-ignore-start -->

### This is an h3 heading
{: .no_toc}

#### This is an h4 heading
{: .no_toc}

### [H3 heading with an anchor link](/style-guide/)
{: .no_toc}

#### [H4 heading with an anchor link](/style-guide/)
{: .no_toc}

<!-- prettier-ignore-end -->

---

### Body copy

This is an **ordinary paragraph** that is _long enough_ to wrap to [multiple lines](/style-guide/) so that you can see how the `line spacing` looks.

Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.

Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

---

### Blockquotes

For quoting blocks of content from another source within your document.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

---

### Lists

#### Unordered

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa
- Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit

#### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit

---

### Code

#### Inline

For example, `<section>` should be wrapped as inline.

#### Code block

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Example title</title>

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- JS -->
    <script src="/assets/js/script.js"></script>
  </body>
</html>
```

---

### Table

| #   | First name | Last name |   Username    |
| :-- | :--------: | :-------: | :-----------: |
| 1   |   Milan    |   Aryal   |  @milanaryal  |
| 2   |  Kshitiz   |   Aryal   | @kshitizaryal |
| 3   |   Larry    | the Bird  |   @Twitter    |

---

### Images

#### Default image shape

![placeholder](https://via.placeholder.com/800x400)

#### Image with caption

![placeholder](https://via.placeholder.com/800x400 "Image title")
_Image caption_

---

### Buttons

#### Default button

<button type="button" class="btn btn-outline-default">Default</button>

#### Default button with link

[Link]({{ page.url }}#buttons){: role="button" class="btn" data-proofer-ignore="true"}

---

### Responsive embed

Any YouTube or Vimeo videos, and SlideShare slides are responsive in the website.

#### Example of YouTube video embed

{% include embed.html src="youtube" id="Y1xs_xPb46M" caption="Whatever YouTube iframe embed code you paste within the you'll see it presented in a fluid 16:9 box." %}

#### Example of SlideShare slide embed

{% capture slide_caption -%}
[Pre-browsing](https://docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.p19){:rel="nofollow"} presentation by [Ilya Grigorik](https://twitter.com/igrigorik){:rel="nofollow"}.
{%- endcapture %}
{% include embed.html src="slideshare" id="45418162" caption=slide_caption %}
