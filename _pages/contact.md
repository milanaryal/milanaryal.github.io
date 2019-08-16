---
layout: page
title: "Contact"
description: "Have questions? I have answers (maybe)."
image: "/assets/img/contact.jpg"
permalink: /contact/
---

If you have any questions, comments, or would just like to say hello in general, please don't hesitate to text me through these following social networks and I'll be sure to respond in a timely manner!

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
    <a rel="me" href="//m.me/{{ site.author.facebook }}">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-facebook-messenger"></use></svg>
      </span><br><span class="label">Messenger</span>
    </a>
  </li>
  {% endif %}
  {% if site.author.telegram %}
  <li>
    <a rel="me" href="//t.me/{{ site.author.telegram }}">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-telegram"></use></svg>
      </span><br><span class="label">Telegram</span>
    </a>
  </li>
  {% endif %}
</ul>

{% include google_maps.html %}
