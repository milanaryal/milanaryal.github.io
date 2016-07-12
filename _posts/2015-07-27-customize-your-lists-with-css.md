---
title: "Customize your lists with CSS"
date: 2015-07-27T16:20:55+05:45
last_modified_at: 2015-07-27T19:09:10+05:45
redirect_from: "/2015/custom-styling-lists-with-css/"
---

This post will helps you to customize unordered and ordered lists according to our needs with the help of CSS.

---

It's really easy to have lists into a document, you just have need to add `ul` or `ol` element and `li` child elements.

```html
<ul>
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
</ul>

<ol>
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
</ol>
```

### Default lists CSS settings

Most browsers will display the `<ul>` and `<ol>` element with the following default values:

```css
ul {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
```

There's pretty default list CSS options to style them. But, what if you want absolute unordered list bullet icon or don't what to have full stop on ordered list number or want to remove the left spacing (or proper indenting) of list.

---

The secret to custom styling lists is here we are opening.

For better structure, recognition or to make more style-able it's good habit to add a hook (i.e. classes or ID's) to the elements.

```html
<ul class="post-list">
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
</ul>

<ol class="post-list">
  <li>This is the first item</li>
  <li>This is the second item</li>
  <li>This is the third item</li>
</ol>
```

### Custom styling unordered and ordered lists with CSS

First reset the default lists CSS settings.

```css
/**
 * Global list reset
 */
ul, ol {
  padding: 0;
  list-style: none;
  list-style-image: none;
}
```

Then, we're styling the lists and resetting the ordered list counter.

```css
/**
 * Custom list style
 */
.post-list {
  counter-reset: post; /* assume counter reset = post */
  margin-bottom: 30px;
}
.post-list > li {
  margin-left: 30px;
  margin-bottom: 12px;
  padding-top: 2px;
}
.post-list > li:before {
  position: absolute;
  display: inline-block;
  box-sizing: border-box;
  width: 58px;
  margin-left: -58px;
  text-align: right;
}
```

#### Customizing unordered lists

Here we're styling unordered lists.

```css
/**
 *  Unordered list
 */
ul.post-list > li:before {
  padding-top: 6px;
  padding-right: 15px;
  font-size: 14.3px;
  content: "\2022"; /* unicode for bullet, "•" */
}
```

#### Customizing ordered lists

Then, after we're styling ordered lists.

```css
/**
 * Ordered list
 */
ol.post-list > li:before {
  padding-right: 12px;
  counter-increment: post;
  content: counter(post) "\002E"; /* unicode for full stop, "." */
}
```

#### Normalizing unstyled and inline list CSS

If you want to normalize the default unstyled and inline list Bootstrap CSS for the above values, then you just have to add following CSS after above values.

```css
/**
 * Normalizing unstyled and inline list
 */
 .list-unstyled > li,
 .list-inline > li {
   margin: 0;
   padding: 0;
 }
 .list-unstyled > li:before,
 .list-inline > li:before {
   content: normal;
}
```

Then, after put the following default Bootstrap CSS.

```css
/**
 * Default unstyled and inline list Bootstrap CSS
 */
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
```

### Custom styling unordered and ordered lists with SCSS

If you love SCSS like me, then here's what we do.

```scss
//
// Global list reset
//
ul, ol {
  padding: 0;
  list-style: none;
  list-style-image: none;
}

//
// Custom list style
//
.post-list {
  counter-reset: post; // let counter = post
  margin-bottom: 30px;
  > li {
   margin-left: 30px;
   margin-bottom: 12px;
   padding-top: 2px;
  }
  > li:before {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    width: 58px;
    margin-left: -58px;
    text-align: right;
  }
}

//
// Unordered list
//
ul.post-list {
  > li:before {
    padding-top: 6px;
    padding-right: 15px;
    font-size: 14.3px;
    content: "\2022"; // "•"
  }
}

//
// Ordered list
//
ol.post-list {
  > li:before {
    padding-right: 12px;
    counter-increment: post;
    content: counter(post) "\002E"; // "."
  }
}
```

*You should style the elements according to your need.*

### Some custom styled lists examples on CodePen

You might want to look onto the following examples on CodePen styled with SCSS (a CSS preprocessor) and build with Slim (a HTML preprocessor).

<figure>
  <p data-height="268" data-theme-id="0" data-slug-hash="pJxqzM" data-default-tab="result" data-user="MilanAryal" class='codepen'>See the Pen <a href='http://codepen.io/MilanAryal/pen/pJxqzM/'>Custom styling lists with CSS</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal' rel='me'>@MilanAryal</a>) on <a href='http://codepen.io' rel='nofollow'>CodePen</a>.</p>

  <figcaption>Custom styling lists with CSS</figcaption>
</figure>

<figure>
  <p data-height="268" data-theme-id="0" data-slug-hash="aORxzB" data-default-tab="result" data-user="MilanAryal" class='codepen'>See the Pen <a href='http://codepen.io/MilanAryal/pen/aORxzB/'>Using CSS counters</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal' rel='me'>@MilanAryal</a>) on <a href='http://codepen.io' rel='nofollow'>CodePen</a>.</p>

  <figcaption>Using CSS counters</figcaption>
</figure>

<figure>
  <p data-height="268" data-theme-id="0" data-slug-hash="BNqGmr" data-default-tab="result" data-user="MilanAryal" class='codepen'>See the Pen <a href='http://codepen.io/MilanAryal/pen/BNqGmr/'>Custom ordered lists number</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal' rel='me'>@MilanAryal</a>) on <a href='http://codepen.io' rel='nofollow'>CodePen</a>.</p>

  <figcaption>Tutor: Treehouse, <a href="http://blog.teamtreehouse.com/customize-ordered-lists-pseudo-element" rel="nofollow">Customize your ordered lists with CSS</a></figcaption>
</figure>

<figure>
  <p data-height="268" data-theme-id="0" data-slug-hash="GJYwdO" data-default-tab="result" data-user="MilanAryal" class='codepen'>See the Pen <a href='http://codepen.io/MilanAryal/pen/GJYwdO/'>Custom styling ordered lists</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal' rel='me'>@MilanAryal</a>) on <a href='http://codepen.io' rel='nofollow'>CodePen</a>.</p>

  <figcaption>Tutor: Christian Heilmann, <a href="http://christianheilmann.com/2014/11/19/simple-things-styling-ordered-lists/" rel="nofollow">Simple things: styling ordered lists</a></figcaption>
</figure>

<!-- CodePen JS -->
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
