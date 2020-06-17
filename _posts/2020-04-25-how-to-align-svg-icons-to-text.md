---
title: "How to align SVG icons to text"
date: 2020-04-25T08:30:00+05:45
excerpt: "With just simple CSS code, align SVG icons to text and forget the font icons."
---

Font icons are awesome but they carry so much icons that we don't need and it just slow down our webpages and waste of our bandwidth. To solve this issues, we use SVG icons as an alternative.

SVG icons are amazingly awesome but they simply don't align with our text. We just need some simple CSS code to markup our SVG icons.

This post is inspired by _Elliot Dahl_, [article on _Medium_](https://medium.com/p/d44b3d7b26b4){:rel="nofollow"}. He has described everything about the SVG icons to fit with text. Here, I have even simplify our code to markup with just fewer simple tags.

Here's a simple CSS code for our SVG icons:

```css
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: inherit;
  color: inherit;
  vertical-align: -0.125em;
  fill: currentColor;
}
```

Following is just an example to markup our SVG icons:

```html
<h4>An example</h4>

<p>
  To markup, you just simply need to paste your SVG icon in a text like
  <svg class="icon icon-name" viewBox="0 0 XX XX">...</svg>, and you are done!
</p>
```
