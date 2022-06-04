---
title: "Integrating social meta tags into WordPress, Tumblr and Blogger"
date: 2014-11-27T19:39:45+05:45
last_modified_at: 2015-12-28T23:54:52+05:45
excerpt: "Tips for integrating social meta tags into popular CMS systems like WordPress, Tumblr and Blogger."
---

Social media meta tags make your content look better on social media. You can control how your post or update shows up in news feeds. And handsome social media updates make your content more appealing.

Meta data allows you to tell social media platforms how titles, images, and more should show up in the newsfeeds on those sites. The `rel=publisher` and `rel=author` also are on this list because those two tell Google+ to link your site to your company page and your posts to your profile, respectively. Using meta data on social media (which also shows up in searches) shows potential readers more information such as author byline, description, and images so they are more apt to click on your content.

You may have heard about the Open Graph protocol which enables any web page to become a rich object in a social graph. Facebook, Pinterest, LinkedIn, Google+, and most social websites use these Open Graph meta tags. Twitter has its own Twitter card property to get rich snippet. Google+ and Pinterest also support Schema.org meta tags but Open Graph is fine.

Following tips will help you for integrating social meta tags into popular CMS systems like WordPress, Tumblr and Blogger.

### WordPress site, self-hosted or third-party hosted

The WordPress publishing platform is one of the most popular and widely used CMS systems in the world. It provides rich plugin support for additional functionality, including various plugins for social media.

Popular plugins in particular like <a href="http://wordpress.org/plugins/jetpack/installation" rel="nofollow">Jetpack</a> and <a href="http://yoast.com/wordpress/plugins/seo" rel="nofollow">WordPress SEO by Yoast</a> make it easy to integrate your WordPress site with social meta tags.

Install WordPress SEO by Yoast, this plugin made everything easier:

![Installing WordPress SEO by Yoast](/uploads/20141127-wordpress-dashboard-screenshot-yoast-wordpress-seo.png)

1. Go to the left navigation and click on SEO and then Social under that.
2. In the Facebook tab, check the checkbox "Add Open Graph meta data".
3. Select Save Changes.
4. Now move on to the Twitter tab and check the checkbox "Add Twitter card meta data" and save changes.
5. Similarly add meta data for other social media.

### WordPress site, hosted on WordPress.com

Automattic/WordPress supports hosting of WordPress sites on their WordPress.com domain, with over 72M sites and counting.

By default, WordPress-hosted blogs are enabled with social meta tags. WordPress automatically scans the contents of your post and determines the best meta data. Additionally, WordPress allows for easy-posting of your blog entries directly to social media via the "New Post" interface.

### Tumblr

Tumblr has quickly become one of the most popular blogging platforms for content and photos, with nearly 145M sites and counting.

By default, Tumblr has social meta tags enabled, and "smart suggests" the meta data based on your post type. However, if you want to further customize the social meta tags, you can follow following process.

First add following code in the `<head>` tag:

<!-- prettier-ignore-start -->

```html
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# blog: http://ogp.me/ns/blog#">
```

<!-- prettier-ignore-end -->

And place the <a href="http://stackoverflow.com/questions/11493718/facebook-open-graph-protocol-on-tumblr" rel="nofollow">following code</a> before `</head>` section:

<!-- prettier-ignore-start -->

```html
<!-- BEGIN TUMBLR FACEBOOK OPENGRAPH TAGS -->
<meta property="og:site_name" content="{Title}"/>

{block:PermalinkPage}

    <meta property="og:url" content="{Permalink}"/>
    <meta property="og:type" content="article"/>

        {block:Posts}
            {block:Text}
                {block:Title}<meta property="og:title" content="{PlaintextTitle}"/>{/block:Title}
                <meta property="og:description" content="{PlaintextBody}"/>
            {/block:Text}

            {block:Photo}
                <meta property="og:image" content="{PhotoURL-500}"/>
                {block:Caption}<meta property="og:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Photo}

            {block:Photoset}
                {block:Photos}
                <meta property="og:image" content="{PhotoURL-500}"/>
                {/block:Photos}
                {block:Caption}<meta property="og:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Photoset}

            {block:Quote}
                <meta property="og:title" content="{PlaintextQuote}"/>
                <meta property="og:description" content="{PlaintextSource}"/>
                <meta property="og:image" content="{PortraitURL-64}"/>
            {/block:Quote}

            {block:Link}
                <meta property="og:title" content="{PlaintextName}"/>
                <meta property="og:description" content="{PlaintextDescription}"/>
                <meta property="og:image" content="{PortraitURL-64}"/>
            {/block:Link}

            {block:Chat}
                <meta property="og:title" content="{PlaintextTitle}"/>
                <meta property="og:description" content="{block:Lines}{block:Label}{Label}: {/block:Label}{Line} &bull; {/block:Lines}"/>
                <meta property="og:image" content="{PortraitURL-64}"/>
            {/block:Chat}

            {block:Audio}
                <meta property="og:title" content="{block:Artist}{Artist} - {/block:Artist}{block:TrackName}{TrackName}{/block:TrackName}"/>
                <meta property="og:description" content="{PlaintextCaption}"/>
                {block:AlbumArt}<meta property="og:image" content="{AlbumArtURL}"/>{/block:AlbumArt}
            {/block:Audio}

            {block:Video}
                {block:Caption}<meta property="og:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Video}

            {block:Answer}
                <meta property="og:title" content="{PlaintextQuestion}"/>
                <meta property="og:description" content="{PlaintextAnswer}"/>
                <meta property="og:image" content="{PortraitURL-64}"/>
            {/block:Answer}

        {/block:Posts}

{/block:PermalinkPage}

{block:IndexPage}
    <meta property="og:title" content="{Title}"/>
    <meta property="og:type" content="blog"/>
    <meta property="og:description" content="{MetaDescription}"/>
    <meta property="og:image" content="{PortraitURL-64}"/>
{/block:IndexPage}
<!-- END TUMBLR FACEBOOK OPENGRAPH TAGS -->
```

<!-- prettier-ignore-end -->

For Twitter card property also place the <a href="http://www.quora.com/Whats-the-best-way-to-implement-Twitter-Cards-on-a-Tumblr-blog" rel="nofollow">following code</a> before `</head>` section:

<!-- prettier-ignore-start -->

```html
<!-- BEGIN TWITTER TAGS -->
{block:PermalinkPage}

    <meta name="twitter:url" content="{Permalink}"/>
    <meta name="twitter:site" content="@YOUR_BLOG_TWITTER_USERNAME_HERE">
    <meta name="twitter:creator" content="@YOUR_TWITTER_USERNAME_HERE">

        {block:Posts}
            {block:Text}
                <meta name="twitter:card" content="summary">
                {block:Title}<meta name="twitter:title" content="{PlaintextTitle}"/>{/block:Title}
                <meta name="twitter:description" content="{PlaintextBody}"/>
                <meta name="twitter:image" content="{PortraitURL-64}"/>
            {/block:Text}

            {block:Photo}
                <meta name="twitter:card" content="photo">
                <meta name="twitter:image" content="{PhotoURL-500}"/>
                {block:Caption}<meta name="twitter:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Photo}

            {block:Photoset}
                <meta name="twitter:card" content="photo">
                {block:Photos}<meta name="twitter:image" content="{PhotoURL-500}"/>{/block:Photos}
                {block:Caption}<meta name="twitter:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Photoset}

            {block:Quote}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{PlaintextQuote}"/>
                <meta name="twitter:description" content="{PlaintextSource}"/>
                <meta name="twitter:image" content="{PortraitURL-64}"/>
            {/block:Quote}

            {block:Link}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{PlaintextName}"/>
                <meta name="twitter:description" content="{PlaintextDescription}"/>
                <meta name="twitter:image" content="{PortraitURL-64}"/>
            {/block:Link}

            {block:Chat}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{PlaintextTitle}"/>
                <meta name="twitter:description" content="{block:Lines}{block:Label}{Label}: {/block:Label}{Line} &bull; {/block:Lines}"/>
                <meta name="twitter:image" content="{PortraitURL-64}"/>
            {/block:Chat}

            {block:Audio}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{block:Artist}{Artist} - {/block:Artist}{block:TrackName}{TrackName}{/block:TrackName}"/>
                <meta name="twitter:description" content="{PlaintextCaption}"/>
                {block:AlbumArt}<meta name="twitter:image" content="{AlbumArtURL}"/>{/block:AlbumArt}
            {/block:Audio}

            {block:Video}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{PlaintextTitle}"/>
                {block:Caption}<meta name="twitter:description" content="{PlaintextCaption}"/>{/block:Caption}
            {/block:Video}

            {block:Answer}
                <meta name="twitter:card" content="summary">
                <meta name="twitter:title" content="{PlaintextQuestion}"/>
                <meta name="twitter:description" content="{PlaintextAnswer}"/>
                <meta name="twitter:image" content="{PortraitURL-64}"/>
            {/block:Answer}

        {/block:Posts}

{/block:PermalinkPage}

{block:IndexPage}
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{Title}"/>
    <meta name="twitter:description" content="{MetaDescription}"/>
    <meta name="twitter:image" content="{PortraitURL-64}"/>
{/block:IndexPage}
<!-- END TWITTER TAGS -->
```

<!-- prettier-ignore-end -->

### Blogger

Google's Blogger is a great platform for publishing rich content. To add some social meta tags follow the following process.

First add `xmlns:og='http://ogp.me/ns#'` in the `<HTML>` tag. Note that there may already exist some code.

<!-- prettier-ignore-start -->

```html
<HTML xmlns:og='http://ogp.me/ns#'>
```

<!-- prettier-ignore-end -->

And place the following code before `</head>` section:

<!-- prettier-ignore-start -->

```html
<!-- Open Graph metatags -->
  <b:if cond='data:blog.pageType == &quot;item&quot;'>
  <meta content='article' property='og:type'/>
  <meta content='https://www.facebook.com/YOUR_FACEBOOK_PROFILE_USERNAME_HERE' property='article:author'/>
    <meta content='YOUR_NAME_HERE' name='author'/>
  <meta expr:content='data:blog.title' property='og:site_name'/>
  <meta expr:content='data:blog.pageName' property='og:title'/>
  <meta expr:content='data:blog.pageName' name='title'/>
  <meta expr:content='data:blog.canonicalUrl' property='og:url'/>

    <b:if cond='data:blog.postImageUrl'>
         <meta expr:content='data:blog.postImageUrl' property='og:image'/>
         <b:else/>
         <meta content='YOUR_LOGO_URL_HERE' property='og:image'/>
    </b:if>
    <b:if cond='data:blog.metaDescription'>
         <meta expr:content='data:blog.metaDescription' property='og:description'/>
      <meta expr:content='data:blog.metaDescription' name='description'/>
         <b:else/>
         <meta expr:content='data:blog.pageTitle' property='og:description'/>
      <meta expr:content='data:blog.pageTitle' name='description'/>
    </b:if>

  <b:else/>
  <meta content='blog' property='og:type'/>
  <meta expr:content='data:blog.title' property='og:site_name'/>
  <meta expr:content='data:blog.canonicalHomepageUrl' property='og:url'/>
  <meta content='YOUR_LOGO_URL_HERE' property='og:image'/>

    <b:if cond='data:blog.metaDescription'>
      <meta content='data:blog.metaDescription' property='og:description'/>
      <meta content='data:blog.metaDescription' name='description'/>
      <meta content='YOUR_BLOG_KERYWORDS_HERE' name='keywords'/>
    </b:if>

  </b:if>
  <!-- You can replace following locale "British English" (en_GB) or Nepali (ne_NP) alternative with your own -->
  <meta content='en_US' property='og:locale'/>
  <meta content='en_GB' property='og:locale:alternate'/>
  <meta content='ne_NP' property='og:locale:alternate'/>
    <!-- /Open Graph metatags -->
```

<!-- prettier-ignore-end -->

For Twitter card property also place the following before `</head>` section:

<!-- prettier-ignore-start -->

```html
<!-- Twitter card metatags -->
  <meta content='@YOUR_BLOG_TWITTER_USERNAME_HERE' name='twitter:site'/>

  <b:if cond='data:blog.pageType == &quot;item&quot;'>
  <meta content='@YOUR_TWITTER_USERNAME_HERE' name='twitter:creator'/>
  <meta expr:content='data:blog.pageName' name='twitter:title'/>
  <meta expr:content='data:blog.canonicalUrl' name='twitter:url'/>
    <b:if cond='data:blog.postImageUrl'>
      <meta content='summary_large_image' name='twitter:card'/>
         <meta expr:content='data:blog.postImageUrl' name='twitter:image:src'/>
      <meta content='560' name='twitter:image:width'/>
      <meta content='750' name='twitter:image:height'/>
         <b:else/>
      <meta content='summary' name='twitter:card'/>
         <meta content='YOUR_LOGO_URL_HERE' name='twitter:image'/>
    </b:if>
    <b:if cond='data:blog.metaDescription'>
         <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
         <b:else/>
         <meta expr:content='data:blog.pageTitle' name='twitter:description'/>
    </b:if>

  <b:else/>
  <meta content='summary' name='twitter:card'/>
  <meta expr:content='data:blog.title' name='twitter:title'/>
  <meta expr:content='data:blog.canonicalHomepageUrl' name='twitter:url'/>
  <meta content='YOUR_LOGO_URL_HERE' name='twitter:image'/>
  <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
  </b:if>
    <!-- /Twitter card metatags -->
```

<!-- prettier-ignore-end -->

For Google+ and Facebook authorship include the following code before `</head>` section:

<!-- prettier-ignore-start -->

```html
<!-- Facebook admins and app ID -->
<meta content='YOUR_FB_ID_HERE' property='fb:admins'/>
<meta content='YOUR_FB_APP_ID_HERE' property='fb:app_id'/>

<!-- Google authorship and publisher markup -->
<link href='https://plus.google.com/YOUR_GOOGLE+_PROFILE_ID_HERE' rel='author'/>
<link href='https://plus.google.com/YOUR_GOOGLE+_PAGE_ID_HERE' rel='publisher'/>
```

<!-- prettier-ignore-end -->

---

### Validating

Be sure to check one of your example posts via the different social media metadata validator.

- For Facebook, test using the <a href="http://developers.facebook.com/tools/debug" rel="nofollow">Facebook debugger</a>.
- For Twitter, submit one of your example posts via the <a href="http://cards-dev.twitter.com/validator" rel="nofollow">Twitter card validator</a>.
- For Google+, test with the <a href="http://www.google.com/webmasters/tools/richsnippets" rel="nofollow">rich snippets tester</a>.
- If you use Pinterest a lot, you need to validate your rich pins by going to the <a href="http://developers.pinterest.com/docs/rich-pins/validator/" rel="nofollow">rich pin validator page</a>.
