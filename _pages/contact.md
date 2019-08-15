---
layout: page
title: "Contact"
description: "Have questions? I have answers (maybe)."
image: "/assets/img/contact.jpg"
permalink: /contact/
---

If you have any questions, comments, or would just like to say hello in general, please don't hesitate to <span class="svg-icon icon-envelope-o svg-baseline" aria-hidden="true"><svg><use xlink:href="/assets/icons/icons.min.svg#icon-envelope-open"></use></svg></span> e-mail me at *considermilan at gmail dot com*. You can also contact me through these following social networks and I'll be sure to respond in a timely manner!

<ul class="social-links">
  {% if site.author.twitter %}
  <li>
    <a rel="me" href="//t.me/MilanAryal">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-telegram"></use></svg>
      </span><br><span class="label">Telegram</span>
    </a>
  </li>
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
  <li>
     <a rel="me" href="//instagram.com/milanaryal">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-instagram"></use></svg>
      </span><br><span class="label">Instagram</span>
    </a>
  </li>
  <li>
    <a rel="me" href="//github.com/MilanAryal">
      <span class="svg-icon svg-baseline" aria-hidden="true">
        <svg><use xlink:href="/assets/icons/icons.min.svg#icon-github"></use></svg>
      </span><br><span class="label">GitHub</span>
    </a>
  </li>
  {% endif %}
</ul>

<p class="pgp-key">
  <a href="//keybase.io/milanaryal/key.asc">
    PGP: <code>310B 1544 4945 F1A3 108E  B0A7 B51C F15F F0E9 5927</code>
  </a>
</p>

{% include google_maps.html %}
