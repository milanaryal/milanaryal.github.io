---
title: "Implementing Medium inspired estimated reading time into Jekyll"
date: 2015-02-19T22:26:57+05:45
last_modified_at: 2015-03-16T15:07:25+05:45
excerpt: "Estimating the reading time for a article based on standard reading speed."
---

[Medium](//medium.com/the-story/read-time-and-you-bc2048ab620c) a simple feature estimated reading time (ERT) is really great. When people see a headline that piques their interest --- and know in advance that it only takes a couple of minutes to read --- they're more likely to click the link.

### Calculating estimated reading time

There are plenty of [code snippets](https://github.com/search?q=reading+time) and [WordPress plugins](http://wordpress.org/search/reading+time) that will automatically calculate the estimated reading time of your articles.

But what if you aren't a developer, or don't have access to one, and still want to test this on your website? You can calculate the estimated reading time yourself and simply add it to the top of your article.

#### Method 1: Doing the math

Research varies, but generally, the average adult reads 200-250 words in one minute.

Convert words into minutes here, some decimals into seconds there, a little rounding at the end... and you can calculate estimated time to read manually.

Here's how:[^ertmath]

* Find your total word count. Let's say it's 938 words.
* Divide your total word count by 200. You'll get a decimal number, in this case, 4.69.
* The first part of your decimal number is your minute. In this case, it's 4.
* Take the second part --- the decimal points --- and multiply that by 0.60. Those are your seconds. Round up or down as necessary to get a whole second. In this case, 0.69 x 0.60 = 0.414. We'll round that to 41 seconds.

The result? 938 words = a 4 minute, 41 second read.

But that's really specific. Why not round that time to make things simpler for your reader? Anything less than 30 seconds gets ignored; anything more than 30 seconds gets rounded up to the next minute.

Ta-da! That rounding makes your 938-word article a 5-minute read.

#### Method 2: Using an online calculator

A much faster way to get the estimated reading time of your article is to let a calculator do it.

* [Read-O-Meter](http://niram.org/read/)
* [Decimal To Time Calculator](http://www.calculatorsoup.com/calculators/time/decimal-to-time-calculator.php)

---

### Implementing estimated reading time into Jekyll using Liquid tags

With the help of Liquid tags we can have estimated reading time into Jekyll.

Wikipedia suggests a [proofreading speed on screen](http://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension) of 180 words per minute (WPM) so here we divide the total content words with 180 (but you can have your own average WPM).

{% highlight text %}
{% raw %}
{% assign reading_time = content | strip_html | number_of_words | divided_by: 180 %}

{{ reading_time }} min read
{% endraw %}
{% endhighlight %}

With the release of Jekyll 2.2.0 it depreciated the liquid tag rounding method `{% raw %}{{ reading_time | round }}{% endraw %}` so we can not get rounded value from the above technique. Here we only get 1.6 = 1 or 2.4 = 2 value.

#### Estimating reading time to the rounded whole number into Jekyll

To get estimated rounded value reading time to the nearest whole number we code more here.

What some of the following Liquid tags do for us:

* `content`: Your current post content on a page.[^content]
* `strip_html`: Remove all the HTML tags in a page content.
* `number_of_words`: Count all the words in a content.
* `append: '.0'`: Show all the decimal numbers.
* `divided_by: 180`: Divide the total content words by 180.

{% highlight text %}
{% raw %}
{% assign reading_time = content | strip_html | number_of_words | append: '.0' | divided_by: 180 %}

{% if reading_time < 0.5 %}Less than a minute read
{% elsif reading_time >= 0.5 and reading_time < 1.5 %}1 minute read
{% elsif reading_time >= 1.5 %}<span class="reading-time">{{ reading_time }}</span> minutes read
{% endif %}
{% endraw %}
{% endhighlight %}

Here we get 1.67777 or 2.43333 so until the Jekyll implementation of Liquid rounding method for now we wrap the `{% raw %}{{ reading_time }}{% endraw %}` with the `.reading-time` class so that the following jQuery will help us to get the rounded value to the nearest whole number.[^jquery]

{% highlight javascript %}
// Reading time - jQuery script that rounds it to the nearest whole number

$(document).ready(function() {
    $(".reading-time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });
});
{% endhighlight %}

Now with the help of above jQuery snippet we get the actual rounded value to the nearest whole number 1.6777 = 2 or 2.43333 = 2. That's what we want to get.

<figure>
  <iframe height='350' scrolling='no' src='//codepen.io/MilanAryal/embed/zxWyvd/' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/MilanAryal/pen/zxWyvd/'>Estimated reading time to the rounded whole number using jQuery</a> by Milan Aryal (<a href='http://codepen.io/MilanAryal'>@MilanAryal</a>) on <a href='http://codepen.io'>CodePen</a>.
  </iframe>
    <figcaption>Estimated rounded value reading time to the nearest whole number.</figcaption>
</figure>

#### A Jekyll estimated reading time in pure Liquid

If you don't want to use jQuery or any other techniques but only want to utilize pure Liquid tags then following codes will definitely help you to get estimated reading time into Jekyll.

{% highlight text %}
{% raw %}
{% capture reading_time %}{{ content | strip_html | number_of_words | plus:91 | divided_by:180 }}{% endcapture %}

{% if reading_time <= '1' %}{{ '1' | append:' minute read' }}{% else %}{{ reading_time | append:' minutes read' }}{% endif %}
{% endraw %}
{% endhighlight %}

Also it can be done as below,

{% highlight text %}
{% raw %}
{% assign reading_time = content | strip_html | number_of_words | plus:91 | divided_by:180 %}

{% if reading_time <= '1' %}{{ '1' | append:' minute read' }}{% else %}{{ reading_time | append:' minutes read' }}{% endif %}
{% endraw %}
{% endhighlight %}

[^ertmath]: Estimated reading time = Total content words / Average reading words per minute

[^content]: If you're implementing estimated reading time in paginator i.e. `{% raw %}{% for post in paginator.posts %}{% endraw %}` condition you should change `content` to `post.content`. Also know that `page.content` tag will include your current post front matter `title` text.

[^jquery]: Place the jQuery snippet below the jQuery loaded library otherwise it won't work!
