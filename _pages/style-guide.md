---
layout: page
title: "Style guide"
description: "This is the style guide for Milan Aryal."
permalink: /style-guide/
sitemap: false
robots: "noindex, follow"
---

> A living document of code detailing all the various colors, typographic elements, UI patterns, and components used on the website to maintain visual consistency.

Articles in [Milan Aryal](//milanaryal.com/) are written in Markdown which are generated in standard HTML using [Jekyll](//jekyllrb.com/).

This style guide is written in Markdown, the raw file is available [here](//raw.githubusercontent.com/MilanAryal/milanaryal.github.io/master/_pages/style-guide.md).

---

### Table of contents
{:.no_toc}

* Table of contents placeholder
{:toc}

---

### Headings

Following are the header tags for the body content. H1 and H2 are reserved on the front matter with main title and subtitle respectively. H5 and H6 tags are depreciated in this site.

### This is an h3 heading
{:.no_toc}

#### This is an h4 heading
{:.no_toc}

### [H3 heading with an anchor link]({{ site.url }}/docs/style-guide/)
{:.no_toc}

#### [H4 heading with an anchor link]({{ site.url }}/docs/style-guide/)
{:.no_toc}

---

### Body copy

This is an **ordinary paragraph** that is *long enough* to wrap to [multiple lines]({{ site.url }}/docs/style-guide/) so that you can see how the `line spacing` looks.

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

* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit

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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Example title</title>

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/styles.min.css">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- JS -->
    <script src="/assets/js/scripts.min.js"></script>
  </body>
</html>
```

---

### Table

| #   | First name | Last name | Username |
|:--- |:----------:|:---------:|:--------:|
| 1   | Milan      | Aryal     | @MilanAryal |
| 2   | Kshitiz    | Aryal     | @KshitizAryal |
| 3   | Larry      | the Bird  | @Twitter |

---

### Images

#### Default image shape

![Milan Aryal](//placehold.it/800x400)

#### Image with caption

<figure>
  <img src="//placehold.it/800x400" alt="Milan Aryal">
    <figcaption>Image caption</figcaption>
</figure>

---

### Buttons

#### Default button

<button type="button" class="btn btn-default">Default</button>

#### Default button with link

[Link]({{ page.url }}#buttons){:role="button" class="btn btn-default"}

---

### Responsive embed

Any YouTube or Vimeo videos, and SlideShare slides are responsive in the website.

#### Example YouTube video embed

<figure>
  <!-- Copy & Pasted from YouTube -->
  <iframe width="560" height="315" src="//www.youtube.com/embed/Y1xs_xPb46M?rel=0&amp;hd=1&amp;theme=light" frameborder="0" allowfullscreen></iframe>
  <figcaption>Whatever YouTube iframe embed code you paste within the you'll see it presented in a fluid 16:9 box.</figcaption>
</figure>

#### Example SlideShare slide embed

<figure>
  <iframe src="//www.slideshare.net/slideshow/embed_code/45418162" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

  <figcaption>Slides: SlideShare, <a href="//docs.google.com/presentation/d/18zlAdKAxnc51y_kj-6sWLmnjl6TLnaru_WH0LJTjP-o/present?slide=id.p19">Preconnect, prefetch, prerender...</a> from <a href="//twitter.com/igrigorik">Ilya Grigorik</a>.</figcaption>
</figure>
