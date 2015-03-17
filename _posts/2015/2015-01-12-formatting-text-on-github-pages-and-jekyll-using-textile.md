---
title: "Formatting text on GitHub Pages and Jekyll using Textile"
date: 2015-01-12T13:17:47+05:45
redirect_from: "/2015/01/formatting-text-on-github-pages-and-jekyll-using-textile/"
---

Textile is a lightweight markup language. Textile converts its marked-up text input to valid, well-formed XHTML and also inserts character entity references for apostrophes, opening and closing single and double quotation marks, ellipses and em dashes. The main advantage of Textile over pure HTML is the ease of creating elements like tables, lists and formatting paragraphs. Those new to Textitle, following guide will help you become familiar with the full list of shortcuts.

File extention with .textile is the valid Textile document.

Header 1

{% highlight text %}
h1. Header 1
{% endhighlight %}

Header 2

{% highlight text %}
h2. Header 2
{% endhighlight %}

Header 3

{% highlight text %}
h3. Header 3
{% endhighlight %}

This is *italicized*

{% highlight text %}
This is _italicized_
{% endhighlight %}

This is **bold**

{% highlight text %}
This is *bold*
{% endhighlight %}

* Bulleted item 1
* Bulleted item 2

{% highlight text %}
* Bulleted item 1
* Bulleted item 2
{% endhighlight %}

1. Numbered item 1
2. Numbered item 2

{% highlight text %}
# Bulleted item 1
# Bulleted item 2
{% endhighlight %}

[text link](http://milanaryal.com.com)

{% highlight text %}
"text link":http://milanaryal.com.com
{% endhighlight %}

*Embed an image:*

{% highlight text %}
!http://www.example.com/image.png!
{% endhighlight %}

Blockquoted Text

{% highlight text %}
bq. Blockquoted Text
{% endhighlight %}

*Embed Code:*

To get this:

{% highlight text %}
{% raw %}
/* Code Block */
#include <stdio.h>
#include <stdlib.h>
  int main()
{% endraw %}
{% endhighlight %}

Do this:

{% highlight text %}
{% raw %}
<pre><code>
/* Code Block */
#include <stdio.h>
#include <stdlib.h>
  int main()
</code></pre>
{% endraw %}
{% endhighlight %}

---

### Further resources

* [Textile Reference Manual](http://redcloth.org/textile)
