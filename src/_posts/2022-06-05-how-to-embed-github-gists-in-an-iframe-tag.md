---
title: "How to embed GitHub Gists in an iframe tag"
description: "A simple method to embed GitHub Gists in an HTML iframe tag without script tags in your document."
date: 2022-06-05 00:00:00 +0545
---

GitHub Gists are an easy way to work with code snippets without creating a fully fledged repository.

Here's a simple method, to [embed Gist](https://github.blog/2008-07-24-embedded-gists/) in an HTML iframe tag to an asynchronously-loaded web pages, without need of script tags in your document.

Input:

```html
<iframe
  src="https://gist.github.com/MilanAryal/e9d558eae37b0aba9faeb4cbf061e970.pibb"
  style="width: 100%; height: 300px; border: 0;"
>
</iframe>
```

Add `.pibb` to the end of any Gist URL ([like this](https://gist.github.com/MilanAryal/e9d558eae37b0aba9faeb4cbf061e970)) in order to get the _HTML-only_ version suitable for embedding in any other site.

Output:

{% include embed.html src="gist" id="e9d558eae37b0aba9faeb4cbf061e970" user="MilanAryal" %}

---

Other method:

```html
<iframe
  style="width: 100%; height: 300px; border: 0;"
  src="data:text/html;charset=utf-8,
    <head><base target='_blank' /></head>
    <body><script src='https://gist.github.com/Albert-W/e37d1c4fa30c430c37d7b1b1fe9b60d8.js'></script>
    </body>"
></iframe>
```

Another method:

```html
<iframe
  style="width: 100%; height: 300px; border: 0;"
  srcdoc='<html><body><style type="text/css">body { margin: 0; } .gist .gist-file, .gist .gist-data { border: 0 !important; }</style><script src="https://gist.github.com/sundbry/5e0507d93d4c89023b2ba5f39f27f722.js"></script></body></html>'
></iframe>
```
