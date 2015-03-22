---
title: "Promote your content with schema.org structured data markup"
date: 2015-03-22T19:09:44+05:45
excerpt: "Learn how to use the schema.org vocabulary to improve the rich snippets on your search engine results."
---

[Schema.org](http://schema.org/) is an initiative launched on 2 June 2011 by Bing, Google and Yahoo! (the operators of the then world's largest search engines) to "create and support a common set of schemas for structured data markup on web pages." On 1 November Yandex (whose search engine is the largest one in Russia) joined the initiative.

### What is schema.org structured data?

"Schema.org structured data markup" is a standard way to annotate your content so machines can understand it. When your web pages include structured data markup, Google (and other search engines like Bing and Yahoo!) can use that data to index your content better, present it more prominently in search results, and surface it in new experiences like voice answers and maps.

This vocabulary defines a standard set of type names and property names, for example, `http://schema.org/MusicEvent` indicates a concert performance, with startDate and and location properties to specify the concert's key details.

Data in the schema.org vocabulary may be embedded in an HTML page using any of three alternative formats: microdata, RDFa, and JSON-LD.

schema.org can be used with RDFa and JSON-LD, but it is not supported by microformats.

### Types of items described by schema.org

Schema markup helps your website rank better for all kinds of content types. There is data markup for...

* Articles
* Local businesses
* Restaurants
* TV episodes and ratings
* Book Reviews
* Movies
* Software Applications
* Events
* Products

There are hundreds of markup types --- from toy stores to medical dose schedules. If you have any type of data on your website, there's a good chance that it's going to have an associated itemscope and itemtype.

A full list of items you can mark up with Schema is available [here](http://schema.org/docs/full.html).

### Schema.org structured data markup using microdata

The following is an example of how to mark up a HTML5 webpage using the schema.org schemas and microdata. In order to mark up the data the attribute `itemtype` along with the url of the schema is used. The attribute `itemscope` defines the scope of the itemtype. The kind of the current item can be defined by using the attribute `itemprop`.

{% gist MilanAryal/ee861d7a065cc05868d9 %}

### Related tools

* [Google's structured data markup helper](//www.google.com/webmasters/markup-helper/u/0/) - This tool will help you create basic Schema markup for several use cases.
* [Google's structured data testing tool](//developers.google.com/structured-data/testing-tool/) - Use this tool to test whether your rich snippets are properly configured.
