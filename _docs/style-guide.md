---
title: "Style guide"
description: "This is the style guide for Milan Aryal."
# date: 2015-08-12T13:09:23+05:45
# last_modified_at: 2015-08-12T19:43:47+05:45
---

<p class="lead">A living document of code detailing all the various colors, typographic elements, UI patterns, and components used on the website to maintain visual consistency.</p>

Articles in [Milan Aryal](http://milanaryal.com/) are written in Markdown which are generated in standard HTML using [Jekyll](http://jekyllrb.com/).

<div class="alert alert-info">
  This style guide is written in Markdown, the raw file is available <a class="alert-link" href="https://raw.githubusercontent.com/MilanAryal/milanaryal.github.io/master/_docs/style-guide.md">here</a>.
</div>

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

### [H3 heading with an anchor link]({{ site.url }}/docs/style-guide/)
{:.no_toc}

#### This is an h4 heading
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

### Lead body copy

<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>

---

### Alignment text

<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>

---

### Transformation text

<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>

---

### Blockquotes

For quoting blocks of content from another source within your document.

#### Default blockquote

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

#### Blockquote options

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

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

#### Inline

<ul class="list-inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>

---

### Code

#### Inline

For example, `<section>` should be wrapped as inline.

#### Code block

{% highlight html %}
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
{% endhighlight %}

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

![Milan Aryal](/assets/img/m-icon-white-on-blue.png)

#### Rounded corners

<img src="/assets/img/m-icon-white-on-blue.png" alt="Milan Aryal" class="img-rounded">

#### Circle

<img src="/assets/img/m-icon-white-on-blue.png" alt="Milan Aryal" class="img-circle">

#### Thumbnail

<img src="/assets/img/m-icon-white-on-blue.png" alt="Milan Aryal" class="img-thumbnail">


### Buttons

<p>
  <button type="button" class="btn btn-default">Default</button>
  <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
  <button type="button" class="btn btn-primary">Primary</button>
  <!-- Indicates a successful or positive action -->
  <button type="button" class="btn btn-success">Success</button>
  <!-- Contextual button for informational alert messages -->
  <button type="button" class="btn btn-info">Info</button>
  <!-- Indicates caution should be taken with this action -->
  <button type="button" class="btn btn-warning">Warning</button>
  <!-- Indicates a dangerous or potentially negative action -->
  <button type="button" class="btn btn-danger">Danger</button>
  <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
  <button type="button" class="btn btn-link">Link</button>
</p>

<p>
  <button type="button" class="btn btn-primary btn-lg">Large</button>
  <button type="button" class="btn btn-primary disabled">Disabled</button>
  <button type="button" class="btn btn-primary">Default</button>
  <button type="button" class="btn btn-primary btn-sm">Small</button>
  <button type="button" class="btn btn-primary btn-xs">Extra Small</button>
</p>

---

### Alerts

<div class="alert alert-danger">
  <strong>Oh snap!</strong> <a href="#" class="alert-link" data-proofer-ignore>Change a few things up</a> and try submitting again.
</div>

<div class="alert alert-success">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link" data-proofer-ignore>this important alert message</a>.
</div>

<div class="alert alert-warning">
  <strong>Heads up!</strong> This <a href="#" class="alert-link" data-proofer-ignore>alert needs your attention</a>, but it's not super important.
</div>

<div class="alert alert-info">
  <strong>Heads up!</strong> This <a href="#" class="alert-link" data-proofer-ignore>alert needs your attention</a>, but it's not super important.
</div>

<div class="alert">
  <h4><i class="fa fa-warning"></i></i> Warning!</h4>
  <p>This is a block style alert.</p>
</div>

---

### Contextual colors

Convey meaning through color with a handful of emphasis utility classes. These may also be applied to links and will darken on hover just like our default link styles.

<p class="text-muted">Muted color paragraph.</p>
<p class="text-primary">Primary color paragraph.</p>
<p class="text-success">Success color paragraph.</p>
<p class="text-info">Info color paragraph.</p>
<p class="text-warning">Warning color paragraph.</p>
<p class="text-danger">Danger color paragraph.</p>

---

### Contextual backgrounds

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

<p class="bg-primary">Primary background color paragraph.</p>
<p class="bg-success">Success background color paragraph.</p>
<p class="bg-info">Info background color paragraph.</p>
<p class="bg-warning">Warning background color paragraph.</p>
<p class="bg-danger">Danger background color paragraph.</p>

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
