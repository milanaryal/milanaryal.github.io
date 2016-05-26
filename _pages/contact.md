---
layout: page
title: "Contact"
description: "Have questions? I have answers (maybe)."
featured_image: "/assets/img/contact-bg.jpg"
permalink: /contact/
---

If you have any questions, comments, or would just like to say hello in general, please don't hesitate to e-mail me at <i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="//www.google.com/recaptcha/mailhide/d?k=01Ah8C4RPlxrq0YzH0lAgV3A==&amp;c=5EHKDn7dLYlMt2GbgnzCJSmRU5Ib6dm-bTB5J6Kxa0I=" onclick="window.open('//www.google.com/recaptcha/mailhide/d?k\x3d01Ah8C4RPlxrq0YzH0lAgV3A\x3d\x3d\x26c\x3d5EHKDn7dLYlMt2GbgnzCJSmRU5Ib6dm-bTB5J6Kxa0I\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" title="Reveal this e-mail address">[show email]</a>. You can also contact me through these following social networks and I'll be sure to respond in a timely manner!

<ul class="list-inline text-center text-muted fa-3x">
  {% if site.author.twitter %}
  <li>
    <a rel="me" href="//twitter.com/{{ site.author.twitter }}">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
  {% if site.author.facebook %}
  <li>
    <a rel="me" href="//facebook.com/{{ site.author.facebook }}">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
  {% if site.author.google_plus %}
  <li>
    <a rel="me" href="//google.com/+{{ site.author.google_plus }}">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
  {% if site.author.linkedin %}
  <li>
    <a rel="me" href="//linkedin.com/in/{{ site.author.linkedin }}">
      <i class="fa fa-linkedin" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
  {% if site.author.github %}
  <li>
    <a rel="me" href="//github.com/{{ site.author.github }}">
      <i class="fa fa-github" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
  {% if site.author.keybase %}
  <li>
    <a rel="me" href="//keybase.io/{{ site.author.keybase }}">
      <i class="fa fa-key" aria-hidden="true"></i>
    </a>
  </li>
  {% endif %}
</ul>

<ul class="list-inline text-center text-muted">
  <li>
    <a href="//keybase.io/milanaryal/key.asc">
      PGP: <code>9A68 F472 C067 D0DD 7877 E0C7 BD04 0021 477E 20C1</code>
    </a>
  </li>
</ul>

{% include google_maps.html %}
