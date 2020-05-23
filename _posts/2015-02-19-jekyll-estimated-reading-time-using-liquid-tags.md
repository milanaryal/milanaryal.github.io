---
title: "Jekyll estimated reading time using Liquid tags"
date: 2015-02-19T22:26:57+05:45
last_modified_at: 2020-05-25T21:50:00+05:45
excerpt: "Implementing Medium inspired estimated reading time for an article or a blog post based on standard reading speed in Jekyll generated static sites."
redirect_from: "/implementing-medium-inspired-estimated-reading-time-into-jekyll/"
---

[Medium](http://medium.com/the-story/read-time-and-you-bc2048ab620c){: rel="nofollow" } a simple feature estimated reading time (ERT) is really great. When people see a headline that piques their interest --- and know in advance that it only takes a couple of minutes to read --- they're more likely to click the link.

### Calculating estimated reading time

There are plenty of [code snippets](http://github.com/search?q=reading+time){: rel="nofollow" } and [WordPress plugins](http://wordpress.org/search/reading+time){: rel="nofollow" } that will automatically calculate the estimated reading time of your articles.

But what if you aren't a developer, or don't have access to one, and still want to test this on your website? You can calculate the estimated reading time yourself and simply add it to the top of your article.

#### Method 1: Doing the math

Research varies, but generally, the average adult reads 200-250 words in one minute.

Convert words into minutes here, some decimals into seconds there, a little rounding at the end... and you can calculate estimated time to read manually.

Here's how[^ertmath]

* Find your total word count. Let's say it's 938 words.
* Divide your total word count by 200. You'll get a decimal number, in this case, 4.69.
* The first part of your decimal number is your minute. In this case, it's 4.
* Take the second part --- the decimal points --- and multiply that by 0.60. Those are your seconds. Round up or down as necessary to get a whole second. In this case, 0.69 x 0.60 = 0.414. We'll round that to 41 seconds.

The result? 938 words = a 4 minute, 41 second read.

But that's really specific. Why not round that time to make things simpler for your reader? Anything less than 30 seconds gets ignored; anything more than 30 seconds gets rounded up to the next minute.

Ta-da! That rounding makes your 938-word article a 5-minute read.

#### Method 2: Using an online calculator

A much faster way to get the estimated reading time of your article is to let a calculator do it.

* [Read-O-Meter](http://niram.org/read/){: rel="nofollow" }
* [Decimal To Time Calculator](http://www.calculatorsoup.com/calculators/time/decimal-to-time-calculator.php){: rel="nofollow" }

---

### Implementing Medium inspired estimated reading time in Jekyll using pure Liquid tags

With the help of Liquid tags we can have estimated reading time in Jekyll without using any plugins.

First thing do to is counting total words in our post content. For this we use native Liquid tag `strip_html` to remove all HTML tags and count our actual total words with `number_of_words` filter tag.

```liquid
{% raw %}{% assign words = content | strip_html | number_of_words %}{% endraw %}
```

Wikipedia suggests a [proofreading speed on screen](http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension){: rel="nofollow" } of 180 words per minute (WPM) so here we divide the total content words with 180 (but you can have your own average WPM).

```liquid
{% raw %}{% assign reading_time = words | divided_by: 180 %}{% endraw %}
```

With the release of Jekyll 2.2.0 it depreciated the liquid tag rounding method `{% raw %}{{ reading_time | round }}{% endraw %}` so we can not get our value in rounded figure. Here we only get our value as 1.6 = 1 or 2.4 = 2.

So, to correct our data we do a little more hacks. Here we add 91 to the total content words and divide it by 180.

```liquid
{% raw %}{% assign reading_time = content | strip_html | number_of_words | plus:91 | divided_by:180 %}

{% if reading_time <= 1 %}
  {% assign reading_time = '1' | append:' min read' %}
{% else %}
  {% assign reading_time = reading_time | append:' min read' %}
{% endif %}{% endraw %}
```

What some of the following Liquid tags do for us:

* `content`: Your content[^content] in a page or post.
* `strip_html`: Remove all the HTML tags in a page content.
* `number_of_words`: Count all the words in a content.
* `append: ' min read'`: Helps to append `min read` to our output.
* `divided_by: 180`: Divide the total content words by 180.

Now simply if you markup `{% raw %}{{ reading_time }}{% endraw %}` in your post layout, then it will output as `1 min read` or `2 min read` accordingly to your contents.

---

If you want more like to work our code in our post layout as well as paginator posts or any other pages then the following snippet will help you out. To get things organised put the following code in Jekyll `_includes/` folder naming it `reading_time.html`.

```liquid
{% raw %}{%- comment -%}
  According to [Wikipedia](https://en.wikipedia.org/wiki/Words_per_minute),
  an average person can read 180 words per minute in a computer monitor.
{%- endcomment -%}

{%- assign words_per_minute = 180 -%}

{%- if post.content -%}
  {%- comment -%}##### WITHIN PAGINATOR #####{%- endcomment -%}
  {%- assign post_content = post.content -%}
{%- elsif page.content -%}
  {%- comment -%}##### WITHIN LAYOUT FILE #####{%- endcomment -%}
  {%- assign post_content = page.content -%}
{%- elsif content -%}
  {%- comment -%}##### WITHIN POST LAYOUT #####{%- endcomment -%}
  {%- assign post_content = content -%}
{%- endif -%}

{%- if post_content -%}
  {%- assign words = post_content | strip_html | normalize_whitespace | number_of_words -%}
{%- endif -%}

{%- if words %}
  {%- comment -%}##### {{ total_words }} #####{%- endcomment -%}
  {%- if words <= 1 -%}
    {%- assign total_words = '1' | append:' word' -%}
  {%- else -%}
    {%- assign total_words = words | append:' words' -%}
  {%- endif -%}

  {%- comment -%}##### {{ reading_time }} #####{%- endcomment -%}
  {%- assign wpm = words_per_minute -%}
  {%- assign wpm_i = wpm | divided_by:2 | plus:1 -%}
  {%- assign read_time = words | plus: wpm_i | divided_by: wpm -%}
  {%- if read_time <= 1 -%}
    {%- assign reading_time = '1' | append:' min read' -%}
  {%- else -%}
    {%- assign reading_time = read_time | append:' min read' -%}
  {%- endif -%}
{%- endif -%}{% endraw %}
```

And then include (or in other words import) our metadata in your post layout as[^whitespace_control]

```Liquid
{% raw %}{% include reading_time.html %}{% endraw %}
```

Now, if you markup `{% raw %}{{ reading_time }}{% endraw %}` inside your HTML tags, then it will output as `1 min read` or `2 min read` accordingly to your contents.

Also, more of it marking up `{% raw %}{{ total_words }}{% endraw %}` will output your content total words something like `170 words`. Hope, you will like it!

[^ertmath]: Estimated reading time equals to total content words divided by average reading words per minute.
[^content]: If you're implementing estimated reading time in paginator i.e. `{% raw %}{% for post in paginator.posts %}{% endraw %}` condition you should change `content` to `post.content`.
[^whitespace_control]: If you are wondering hyphen in your liquid tags {% raw %}{{-, -}}, {%-, and -%}{% endraw %} helps to strip whitespace from the left or right side of a rendered tag.

{% comment -%}<!-- ############################ OLD DATA ############################ -->

### Implementing estimated reading time into Jekyll using Liquid tags

With the help of Liquid tags we can have estimated reading time into Jekyll.

Wikipedia suggests a [proofreading speed on screen](http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension){: rel="nofollow" } of 180 words per minute (WPM) so here we divide the total content words with 180 (but you can have your own average WPM).

```liquid
{% raw %}{% assign reading_time = content | strip_html | number_of_words | divided_by: 180 %}

{{ reading_time }} min read{% endraw %}
```

With the release of Jekyll 2.2.0 it depreciated the liquid tag rounding method `{% raw %}{{ reading_time | round }}{% endraw %}` so we can not get rounded value from the above technique. Here we only get 1.6 = 1 or 2.4 = 2 value.

#### Estimating reading time to the rounded whole number into Jekyll

To get estimated rounded value reading time to the nearest whole number we code more here.

What some of the following Liquid tags do for us:

* `content`: Your post content in a page.[^content]
* `strip_html`: Remove all the HTML tags in a page content.
* `number_of_words`: Count all the words in a content.
* `append: '.0'`: Show all the decimal numbers.
* `divided_by: 180`: Divide the total content words by 180.

```liquid
{% raw %}{% assign reading_time = content | strip_html | number_of_words | append: '.0' | divided_by: 180 %}

{% if reading_time < 0.5 %}Less than a minute read
{% elsif reading_time >= 0.5 and reading_time < 1.5 %}1 minute read
{% elsif reading_time >= 1.5 %}<span class="reading-time">{{ reading_time }}</span> minutes read
{% endif %}{% endraw %}
```

Here we get 1.67777 or 2.43333 so until the Jekyll implementation of Liquid rounding method for now we wrap the `{% raw %}{{ reading_time }}{% endraw %}` with the `.reading-time` class so that the following jQuery will help us to get the rounded value to the nearest whole number.[^jquery]

```js
// Reading time - jQuery script that rounds it to the nearest whole number

$(document).ready(function() {
    $(".reading-time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });
});
```

Now with the help of above jQuery snippet we get the actual rounded value to the nearest whole number 1.6777 = 2 or 2.43333 = 2. That's what we want to get.

<figure>
  <iframe height='350' scrolling='no' src='//codepen.io/MilanAryal/embed/zxWyvd/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MilanAryal/pen/zxWyvd/'>Estimated reading time to the rounded whole number using jQuery</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal' rel='me'>@MilanAryal</a>) on <a href='http://codepen.io' rel='nofollow'>CodePen</a>.
  </iframe>
    <figcaption>Estimated rounded value reading time to the nearest whole number.</figcaption>
</figure>

#### A Jekyll estimated reading time in pure Liquid

If you don't want to use jQuery or any other techniques but only want to utilize pure Liquid tags then following codes will definitely help you to get estimated reading time into Jekyll.

```liquid
{% raw %}{% assign reading_time = content | strip_html | number_of_words | plus:91 | divided_by:180 %}
{% if reading_time <= 1 %}
  {% assign reading_time = '1' | append:' min read' %}
{% else %}
  {% assign reading_time = reading_time | append:' min read' %}
{% endif %}{% endraw %}
```

Now if you tag `{% raw %}{{ reading_time }}{% endraw %}` where you want to show the post estimated reading time, then it will output as `1 min read` or `2 min read` accordingly to your contents.

[^ertmath]: Estimated reading time = Total content words / Average reading words per minute
[^content]: If you're implementing estimated reading time in paginator i.e. `{% raw %}{% for post in paginator.posts %}{% endraw %}` condition you should change `content` to `post.content`. Also know that `page.content` tag will include your current post front matter `title` text.
[^jquery]: Place the jQuery snippet below the jQuery loaded library otherwise it won't work!

<!-- ############################ END OF OLD DATA ############################ -->{%- endcomment -%}
