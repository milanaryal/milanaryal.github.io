---
layout: page
title: "Contact"
description: "Have questions? I have answers (maybe)."
image: "/assets/img/contact.jpg"
permalink: /contact/
---

If you have any questions, comments, or would just like to say hello in general, please don't hesitate to <span class="svg-icon icon-envelope-o svg-baseline" aria-hidden="true"><svg><use xlink:href="/assets/icons/icons.min.svg#icon-envelope-o"></use></svg></span> e-mail me at *considermilan at gmail dot com*. You can also contact me through these following social networks and I'll be sure to respond in a timely manner!

<ul class="social-links">
  {% if site.author.twitter %}
  <li>
    <a rel="me" href="//twitter.com/{{ site.author.twitter }}">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-twitter"></use></svg>
      </span><br><span class="label">Twitter</span>
    </a>
  </li>
  {% endif %}
  {% if site.author.facebook %}
  <li>
    <a rel="me" href="//facebook.com/{{ site.author.facebook }}">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-facebook"></use></svg>
      </span><br><span class="label">Facebook</span>
    </a>
  </li>
  {% endif %}
</ul>

{% include google_maps.html %}
