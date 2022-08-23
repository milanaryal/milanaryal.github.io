---
title: "Syntax highlighting with prism.js"
description: "Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind."
date: 2014-09-09T13:28:25+05:45
last_modified_at: 2015-10-05T08:11:07+05:45
---

Last time I was searching for a good syntax highlighter for beautifully viewing the code snippets on my blog post. Among different syntax highlighter I found out <a href="http://prismjs.com" rel="nofollow">PrismJS</a> by <a href="http://lea.verou.me" rel="nofollow">Lea Verou</a> is pretty awesome.

Yet not sure what I mean by a syntax highlighter or what it does? Here's an example of JavaScript snippet highlighted with syntax highlighter:

```html
<script language="javascript">
  var today = new Date();
</script>
....
<body onload="alert(today)"></body>
```

PrismJS is a light weight and works on most of all the platform whether it is your own hosted site or any other popular CMS platform like WordPress, Blogger or Tumblr.

### Installing on your page

To install PrismJS on your webpage you need to <a href="http://prismjs.com/download.html" rel="nofollow">download</a> the files `prism.js` and `prism.css` choosing your desire theme and required settings.

Here, JavaScript file `prism.js` is your settings and CSS file `prism.css` is your theme styles.

Now, upload the two files in your hosting site.

Then, you will need to link the `prism.css` and `prism.js` files in your index page. Example:

```html
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
```

Remember that to correctly work, `prism.css` file should be include before the `</head>` tag and `prism.js` before `</body>` tag.

### Installing on WordPress

Easily highlight your code on WordPress with WP PrismJS. Simply <a href="http://wordpress.org/plugins/wp-prismjs-syntax-highlighter/" rel="nofollow">download</a> & activate the plugin and a new icon on your TinyMCE editor will appear. Click on it and you will be able to enter your indented code; choose the language; specifying the maximum height of the code window and the filename.

### Installing on Blogger/Tumblr

To install PrismJS on your Blogger/Tumblr blog you can upload `prism.css` and `prism.js` files on <a href="http://www.dropbox.com/" rel="nofollow">Dropbox</a> because we cannot host file in the Blogger/Tumblr site. Then as same process above go to template edit and inculde `prism.css` file link before the `</head>` tag and `prism.js` file link before `</body>` tag.

If you don't like to upload the file and want to use PrismJS default theme then you can include the following two files link to install PrismJS:

```html
<link href="http://prismjs.com/themes/prism.css" rel="stylesheet" />

<script src="http://prismjs.com/prism.js"></script>
```

### Using PrismJS

First thing you have to escape HTML character `<` to `&lt;` and `>` to `&gt;` to highlight syntax with PrismJS. For Example:

```html
<pre>
  <code class="language-javascript">
    &lt;script&gt;
      var today= new Date()
    &lt;/script&gt;
      ....
    &lt;body onload=alert(today)&gt;
  </code>
</pre>
```

You can also use different tools to escape HTML character.

Then,

You have to wrap your code inside the `<pre>` and the `<code>` tag defining the necessary `class="language-XXX"`.

For example to show HTML snippet define `class="language-markup"`

```html
<pre>
  <code class="language-markup">
    <!-- YOUR RAW HTML CODE HERE -->
  </code>
</pre>
```

For CSS snippet define `class="language-css"`

```html
<pre>
  <code class="language-css">
    /* YOUR RAW CSS CODE HERE */
  </code>
</pre>
```

For JavaScript snippet define `class="language-javascript"`

```html
<pre>
  <code class="language-javascript">
    // YOUR RAW JAVASCRIPT CODE HERE
  </code>
</pre>
```

With PrismJS by help of these few easy steps you get a nice highlighted code snippet in your webpage, isn't it awesome?
