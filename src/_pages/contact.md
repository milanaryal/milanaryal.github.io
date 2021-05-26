---
title: "Contact"
tagline: "Have questions? I have answers (maybe)."
description: "If you have any questions, comments, or would just like to say hello in general, please don't hesitate to text me!"
feature_image: "/assets/img/contact.jpg"
permalink: "/contact/"
---

If you have any questions, comments, or would just like to say hello in general, please don't hesitate to text me through these following social networks and I'll be sure to respond in a timely manner!

<ul class="social-links social-links--contact">
  <li class="social-links--contact-lead">Ping me on</li>
  {% if site.author.telegram %}
  <li>
    <a rel="me" href="https://t.me/{{ site.author.telegram }}">
      {% include_cached icons/telegram.svg height="1em" class="icon icon-telegram" %}
      <br />
      <span class="label">Telegram</span>
    </a>
  </li>
  {% endif %}
  {% if site.author.twitter %}
  <li>
    <a rel="me" href="https://twitter.com/{{ site.author.twitter }}">
      {% include_cached icons/twitter.svg height="1em" class="icon icon-twitter" %}
      <br />
      <span class="label">Twitter</span>
    </a>
  </li>
  {% endif %}
  {% if site.author.facebook %}
  <li>
    <a rel="me" href="https://m.me/{{ site.author.facebook }}">
      {% include_cached icons/facebook-messenger.svg height="1em" class="icon icon-facebook-messenger" %}
      <br />
      <span class="label">Messenger</span>
    </a>
  </li>
  {% endif %}
</ul>

{% if site.author.keybase %}

<p class="pgp-key pgp-key--contact">
  <a href="https://keybase.io/{{ site.author.keybase }}/key.asc">
    PGP: <code>310B 1544 4945 F1A3 108E  B0A7 B51C F15F F0E9 5927</code>
  </a>
</p>
{% endif %}

{% include google_maps.html %}
