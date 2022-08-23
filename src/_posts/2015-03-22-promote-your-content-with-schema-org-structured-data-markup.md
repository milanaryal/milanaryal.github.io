---
title: "Promote your content with schema.org structured data markup"
description: "Learn how to use the schema.org vocabulary to improve the rich snippets on your search engine results."
date: 2015-03-22T19:09:44+05:45
---

[Schema.org](https://schema.org/){:rel="nofollow"} is an initiative launched on 2 June 2011 by Bing, Google and Yahoo! (the operators of the then world's largest search engines) to "create and support a common set of schemas for structured data markup on web pages." On 1 November Yandex (whose search engine is the largest one in Russia) joined the initiative.

### What is schema.org structured data markup?

"Schema.org structured data markup" is a standard way to annotate your content so machines can understand it. When your web pages include structured data markup, Google (and other search engines like Bing, Yahoo!, and Yandex) can use that data to index your content better, present it more prominently in search results, and surface it in new experiences like voice answers and maps.

Schema.org explains,

> Most webmasters are familiar with HTML tags on their pages. Usually, HTML tags tell the browser how to display the information included in the tag. For example, `<h1>Avatar</h1>` tells the browser to display the text string "Avatar" in a heading 1 format. However, the HTML tag doesn’t give any information about what that text string means --- "Avatar" could refer to the hugely successful 3D movie, or it could refer to a type of profile picture --- and this can make it more difficult for search engines to intelligently display relevant content to a user.

So, schema.org vocabulary defines a standard set of type names and property names. For example,`https://schema.org/Recipe` indicates a recipe for for making food, with `cookTime`, `cookingMethod` and `ingredients` properties to specify the food's recipe key details.

In order for rich snippets to be shown for a recipe, the markup must contain at least two of the following:

- image
- at least one of prepTime, cookTime, totalTime, or ingredients
- nutritionInformation
- review

Following is the example in Google search results showing rich snippets for recipe results:

![Google SERP - Quick and easy pizza crust recipe](https://user-images.githubusercontent.com/9361180/172006877-082cde1d-380e-4ab6-b1e1-91c16c46daca.png)

Data in the schema.org vocabulary may be embedded in an HTML page using any of three alternative formats: microdata, RDFa, and JSON-LD.

Schema.org can be used with RDFa and JSON-LD, but it is not supported by microformats.

### Types of items described by schema.org

Schema.org markup helps your website rank better for all kinds of content types. There is data markup for...

- Articles
- Local businesses
- Restaurants
- TV episodes and ratings
- Book Reviews
- Movies
- Software Applications
- Events
- Products

There are hundreds of markup types --- from toy stores to medical dose schedules. If you have any type of data on your website, there's a good chance that it's going to have an associated itemscope and itemtype.

A full list of items you can mark up with schema.org is available [here](https://schema.org/docs/full.html){:rel="nofollow"}.

### Schema.org structured data markup using microdata

The following is an example of how to mark up a HTML5 webpage using the schema.org schemas and microdata. In order to mark up the data the attribute `itemtype` along with the url of the schema is used. The attribute `itemscope` defines the scope of the itemtype. The kind of the current item can be defined by using the attribute `itemprop`.

<!--
<script src="https://gist.github.com/ee861d7a065cc05868d9.js?file=schema-org-structured-data-markup-using-microdata.html"></script>
-->

{% include embed.html src="gist" id="ee861d7a065cc05868d9" user="MilanAryal" %}

### Expected types, text, and URLs

Here are a few notes schema.org suggests you to keep in mind when adding schema.org markup to your web pages.

- **More is better, except for hidden text.** In general, the more content you mark up, the better. However, as a general rule, you should mark up only the content that is visible to people who visit the web page and not content in hidden div's or other hidden page elements.

- **Expected types vs text.** When browsing the schema.org types, you will notice that many properties have "expected types". This means that the value of the property can itself be an embedded item. But this is not a requirement --- it's fine to include just regular text or a URL. In addition, whenever an expected type is specified, it is also fine to embed an item that is a child type of the expected type. For example, if the expected type is Place, it's also OK to embed a LocalBusiness.

- **Using the url property.** Some web pages are about a specific item. For example, you may have a web page about a single person, which you could mark up using the Person item type. Other pages have a collection of items described on them. For example, your company site could have a page listing employees, with a link to a profile page for each person. For pages like this with a collection of items, you should mark up each item separately (in this case as a series of Persons) and add the url property to the link to the corresponding page for each item, like this:

```html
<div itemscope itemtype="https://schema.org/Person">
  <a href="alice.html" itemprop="url">Alice Jones</a>
</div>
<div itemscope itemtype="https://schema.org/Person">
  <a href="bob.html" itemprop="url">Bob Smith</a>
</div>
```

### Related tools

- [Google's structured data markup helper](https://www.google.com/webmasters/markup-helper/u/0/){:rel="nofollow"} -- This tool will help you create basic schema.org markup for several use cases.
- [Google's structured data testing tool](https://developers.google.com/structured-data/testing-tool/){:rel="nofollow"} -- Use this tool to test whether your rich snippets are properly configured.
