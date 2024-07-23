---
title: "Jekyll estimated reading time using Liquid tags"
description: "Implementing Medium inspired estimated reading time for an article or a blog post based on standard reading speed in Jekyll generated static sites."
date: 2015-02-19T22:26:57+05:45
last_modified_at: 2021-04-27T23:00:00+05:45
redirect_from: "/implementing-medium-inspired-estimated-reading-time-into-jekyll/"
---

[Medium](http://medium.com/the-story/read-time-and-you-bc2048ab620c){:rel="nofollow"} a simple feature estimated reading time (ERT) is really great. When people see a headline that piques their interest --- and know in advance that it only takes a couple of minutes to read --- they're more likely to click the link.

### Calculating estimated reading time

There are plenty of [code snippets](http://github.com/search?q=reading+time){:rel="nofollow"} and [WordPress plugins](http://wordpress.org/search/reading+time){:rel="nofollow"} that will automatically calculate the estimated reading time of your articles.

But what if you aren't a developer, or don't have access to one, and still want to test this on your website? You can calculate the estimated reading time yourself and simply add it to the top of your article.

#### Method 1: Doing the math

Research varies, but generally, the average adult reads 200-250 words in one minute.

Convert words into minutes here, some decimals into seconds there, a little rounding at the end... and you can calculate estimated time to read manually.

Here's how[^ertmath]

- Find your total word count. Let's say it's 938 words.
- Divide your total word count by 200. You'll get a decimal number, in this case, 4.69.
- The first part of your decimal number is your minute. In this case, it's 4.
- Take the second part --- the decimal points --- and multiply that by 0.60. Those are your seconds. Round up or down as necessary to get a whole second. In this case, 0.69 x 0.60 = 0.414. We'll round that to 41 seconds.

The result? 938 words = a 4 minute, 41 second read.

But that's really specific. Why not round that time to make things simpler for your reader? Anything less than 30 seconds gets ignored; anything more than 30 seconds gets rounded up to the next minute.

Ta-da! That rounding makes your 938-word article a 5-minute read.

#### Method 2: Using an online calculator

A much faster way to get the estimated reading time of your article is to let a calculator do it.

- [Read-O-Meter](http://niram.org/read/){:rel="nofollow"}
- [Decimal To Time Calculator](http://www.calculatorsoup.com/calculators/time/decimal-to-time-calculator.php){:rel="nofollow"}

---

### Implementing Medium inspired estimated reading time in Jekyll using pure Liquid tags

With the help of Liquid tags we can have estimated reading time in Jekyll without using any plugins.

First thing do to is counting total words in our post content. For this we use native Liquid tag `strip_html` to remove all HTML tags and count our actual total words with `number_of_words` filter tag.

{% raw %}

```liquid
{% assign words = content | strip_html | number_of_words %}
```

{% endraw %}

Wikipedia suggests a [proofreading speed on screen](http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension){:rel="nofollow"} of 180 words per minute (WPM) so here we divide the total content words with 180 (but you can have your own average WPM).

{% raw %}

```liquid
{% assign reading_time = words | divided_by: 180 %}
```

{% endraw %}

If the divisor is an integer, the result of Liquid filter tag `divided_by` is rounded down to the nearest whole number, so we can not get our value in rounded figure i.e. we only get our value as 1.6 = 1 or 2.9 = 2.

To get rounded figure (i.e. 1.6 = 2 or 2.9 = 3) we do a little tricks with liquid filter tag by simply adding `.0` in our divisor to convert it to a float.

{% raw %}

```liquid
{% assign reading_time = content | strip_html | number_of_words | divided_by: 180.0 | round %}

{% if reading_time <= 1 %}
  {% assign reading_time = 1 | append: ' min read' %}
{% else %}
  {% assign reading_time = reading_time | append: ' min read' %}
{% endif %}
```

{% endraw %}

What some of the following Liquid tags do for us:

- `content`: Your content[^content] in a page or post.
- `strip_html`: Remove all the HTML tags in a page content.
- `number_of_words`: Count all the words in a content.
- `append: ' min read'`: Helps to append `min read` to our output.
- `divided_by: 180`: Divide the total content words by 180.
- `round`: Rounds a number to the nearest integer.

Now simply if you markup {% raw %}`{{ reading_time }}`{% endraw %} in your post layout, then it will output as `1 min read` or `2 min read` accordingly to your contents.

---

If you want more like to work our code in our post layout as well as paginator posts or any other pages then the following snippet will help you out. To get things organised put the following code in Jekyll `_includes/` folder naming it `reading_time.html`.

{% raw %}

```liquid
{%- comment -%}
  According to [Wikipedia](http://en.wikipedia.org/wiki/Words_per_minute),
  an average person can read 180 words per minute in a computer monitor.
{%- endcomment -%}

{%- assign words_per_minute = site.words_per_minute | default: 180 -%}

{%- assign post_content = include.content -%}

{%- if post_content -%}
  {%- assign words = post_content | strip_html | number_of_words -%}
{%- endif -%}

{%- if words %}
  {%- comment -%}### TOTAL_WORDS ###{%- endcomment -%}
  {%- if words <= 1 -%}
    {%- assign total_words = 1 | append: ' word' -%}
  {%- else -%}
    {%- assign total_words = words | append: ' words' -%}
  {%- endif -%}

  {%- comment -%}### READING_TIME ###{%- endcomment -%}
  {%- assign wpm = words_per_minute | times: 1.0 -%}
  {%- assign read_time = words | divided_by: wpm | round -%}
  {%- if read_time <= 1 -%}
    {%- assign reading_time = 1 | append: ' min read' -%}
  {%- else -%}
    {%- assign reading_time = read_time | append: ' min read' -%}
  {%- endif -%}
{%- endif -%}
```

{% endraw %}

And then include (or in other words import) our metadata in your post layout as[^whitespace_control]

{% raw %}

```liquid
{%- include reading_time.html content=page.content -%}
```

{% endraw %}

Now, if you markup {% raw %}`{{ reading_time }}`{% endraw %} inside your HTML tags, then it will output as `1 min read` or `2 min read` accordingly to your contents.

Also, more of it marking up {% raw %}`{{ total_words }}`{% endraw %} will output your content total words something like `170 words`. Hope, you will like it!

[^ertmath]: Estimated reading time equals to total content words divided by average reading words per minute.

[^content]: If you're implementing estimated reading time in paginator i.e. {% raw %}`{% for post in paginator.posts %}`{% endraw %} condition you should change `content` to `post.content`.

[^whitespace_control]: If you are wondering hyphen in your liquid tags {% raw %}{{-, -}}, {%-, and -%}{% endraw %} helps to strip whitespace from the left or right side of a rendered tag.
