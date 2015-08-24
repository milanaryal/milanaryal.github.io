---
title: "Syntax highlighting with prism.js"
date: 2014-09-09T13:28:25+05:45
excerpt: "Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind."
redirect_from:
  - "/2014/09/syntax-highlighter-prism.html"
  - "/2014/09/syntax-highlighting-with-prism-js/"
---

Last time I was searching for a good syntax highlighter for beautifully viewing the code snippets on my blog post. Among different syntax highlighter I found out [PrismJS](http://prismjs.com) by [Lea Verou](http://lea.verou.me) is pretty awesome.

Yet not sure what I mean by a syntax highlighter or what it does? Here's an example of JavaScript snippet highlighted with syntax highlighter:

{% highlight html %}
<script language="javascript">
  var today= new Date()
</script>
  ....
<body onload=alert(today)>
{% endhighlight %}

PrismJS is a light weight and works on most of all the platform whether it is your own hosted site or any other popular CMS platform like WordPress, Blogger or Tumblr.

### Installing on your page

To install PrismJS on your webpage you need to [download](http://prismjs.com/download.html) the files `prism.js` and `prism.css` choosing your desire theme and required settings.

Here, JavaScript file `prism.js` is your settings and CSS file `prism.css` is your theme styles.

Now, upload the two files in your hosting site.

Then, you will need to link the `prism.css` and `prism.js` files in your index page. Example:

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
 ...
    <link href="themes/prism.css" rel="stylesheet" />
</head>
<body>
 ...
    <!-- after all your content -->
    <script src="prism.js"></script>
</body>
</html>
{% endhighlight %}

Remember that to correctly work, `prism.css` file should be include before the `</head>` tag and `prism.js` before `</body>` tag.

### Installing on WordPress

Easily highlight your code on WordPress with WP PrismJS. Simply [download](http://wordpress.org/plugins/wp-prismjs-syntax-highlighter/) & activate the plugin and a new icon on your TinyMCE editor will appear. Click on it and you will be able to enter your indented code; choose the language; specifying the maximum height of the code window and the filename.

### Installing on Blogger/Tumblr

To install PrismJS on your Blogger/Tumblr blog you need to upload `prism.css` and `prism.js` files in other file hosting sites alternately like [Google Drive](http://drive.google.com/) or [Dropbox](http://www.dropbox.com/) because we cannot host file in the Blogger/Tumblr site. Then as same process above go to template edit and inculde `prism.css` file link before the `</head>` tag and `prism.js` file link before `</body>` tag.

Remember that hosting your file on other site like Google Drive you should set the file for public view and need to link direct link like `http://googledrive.com/host/YOUR_FILE_ID/`. Public viewing link and direct link may vary according to the different sites.

If you don't like to upload the file and want to use PrismJS default theme then you can include the following two files link to install PrismJS:

{% highlight html %}
<link href="http://prismjs.com/themes/prism.css" rel="stylesheet" />

<script src="http://prismjs.com/prism.js"></script>
{% endhighlight %}

### Using PrismJS

First thing you have to escape HTML character `<` to `&lt;` and `>` to `&gt;` to highlight syntax with PrismJS. For Example:

{% highlight html %}
<pre>
  <code class="language-javascript">
    &lt;script&gt;
      var today= new Date()
    &lt;/script&gt;
      ....
    &lt;body onload=alert(today)&gt;
  </code>
</pre>
{% endhighlight %}

You can also use different tools to escape HTML character.

Then,

You have to wrap your code inside the `<pre>` and the `<code>` tag defining the necessary `class="language-XXX"`.

For example to show HTML snippet define `class="language-markup"`

{% highlight html %}
<pre>
  <code class="language-markup">
    <!-- YOUR RAW HTML CODE HERE -->
  </code>
</pre>
{% endhighlight %}

For CSS snippet define `class="language-css"`

{% highlight html %}
<pre>
  <code class="language-css">
    /* YOUR RAW CSS CODE HERE */
  </code>
</pre>
{% endhighlight %}

For JavaScript snippet define `class="language-javascript"`

{% highlight html %}
<pre>
  <code class="language-javascript">
    // YOUR RAW JAVASCRIPT CODE HERE
  </code>
</pre>
{% endhighlight %}

With PrismJS by help of these few easy steps you get a nice highlighted code snippet in your webpage, isn't it awesome?
