---
title: "How to prevent Google Analytics data from hijacking"
date: 2020-04-17T12:25:00+05:45
excerpt: "A simple filter on Google Analytics to prevent misleading of your website pageviews data."
---

As we know anyone can view our website source code and see our analytics tracking ID. And if you are open-source lover and have hosted your site openly in services like GitHub Pages then chances are anyone can knowing or unknowingly clone your site and could forget to replace tracking ID. This would seriously mislead to our overall analytics data.

So, to overcome this issue --- here we will discuss few steps to do for preventing analytics data from hijacking.

<br>

You can add a filter to your profile:

1. Go to: `Filters`

*Home __>__ Select Site __>__ Admin (in the bottom left-hand corner) __>__ Filters (under "All Web Site Data")*

2. Click `New Filter`

3. Add a filter name like "Mitigate Hijacking"

4. Click `Custom Filter`

5. Click `Include`

6. Select "Hostname" in `Filter Field`

7. Add your domain with escape character for the dot, like: `example\.com`

8. Select "No" for `Case Sensitive`

The result should look something like this:

![preventing google analytics data from hijacking](/uploads/20201417-google-analytics-filter-domain.png)

*Note: Google Analytics interface changes periodically*

<br>

...for more information [about view filters](https://support.google.com/analytics/answer/1033162?hl=en){: rel="nofollow" }.

---

#### References

* [Webmasters Stackexchange](https://webmasters.stackexchange.com/questions/56713/could-somebody-hijack-my-google-analytics-for-a-site){: rel="nofollow" }
