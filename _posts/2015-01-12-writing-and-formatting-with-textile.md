---
title: "Writing and formatting with Textile"
date: 2015-01-12T13:17:47+05:45
last_modified_at: 2016-02-14T06:45:41+05:45
redirect_from: "/2015/formatting-text-on-github-pages-and-jekyll-using-textile/"
---

Textile is a lightweight markup language. Textile converts its marked-up text input to valid, well-formed XHTML and also inserts character entity references for apostrophes, opening and closing single and double quotation marks, ellipses and em dashes. The main advantage of Textile over pure HTML is the ease of creating elements like tables, lists and formatting paragraphs. Those new to Textitle, following guide will help you become familiar with the full list of shortcuts.

File extention with `.textile` is the valid Textile document.

Header 1

```text
h1. Header 1
```

Header 2

```text
h2. Header 2
```

Header 3

```text
h3. Header 3
```

This is *italicized*

```text
This is _italicized_
```

This is **bold**

```text
This is *bold*
```

* Bulleted item 1
* Bulleted item 2

```text
* Bulleted item 1
* Bulleted item 2
```

1. Numbered item 1
2. Numbered item 2

```text
# Bulleted item 1
# Bulleted item 2
```

[text link](http://milanaryal.com)

```text
"text link":http://milanaryal.com
```

*Embed an image:*

```text
!http://www.example.com/image.png!
```

Blockquoted Text

```text
bq. Blockquoted Text
```

*Embed Code:*

To get this:

```text
/* Code Block */
#include <stdio.h>
#include <stdlib.h>
  int main()
```

Do this:

```text
<pre><code>
/* Code Block */
#include <stdio.h>
#include <stdlib.h>
  int main()
</code></pre>
```

---

### Further resources

* [Textile Reference Manual](http://redcloth.org/textile){:rel="nofollow"}
