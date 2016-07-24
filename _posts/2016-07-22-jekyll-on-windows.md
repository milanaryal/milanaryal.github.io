---
title: "Running Jekyll on Windows"
date: 2016-07-22T07:53:11+05:45
---

[Setting up Jekyll on Windows](https://jekyllrb.com/docs/windows/){:rel="nofollow"} is not as easy as installing on Linux or macOS. Several errors may occur if you do not correctly setup dependencies for Jekyll on Windows.

Here are some common errors or warnings which may occur while setting up Jekyll on windows:

> GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
>
> Error: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
>
> Error: Run jekyll build –trace for more information.

### Fixing Jekyll OpenSSL default certificate error on Windows

> `Liquid Exception: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed`

Do the following steps to fix this error on your local environment (please do not follow these steps in a production server!):

1. Download the [cacert.pem](http://curl.haxx.se/ca/cacert.pem){:rel="nofollow"} file and save this on your hard drive (recommended path `C:\RubyInstaller\cacert.pem`).
2. Now goto Control Panel > System > Advances system settings and click Environment Variables. Or simply type "environment variables" on Start menu search box.
3. Then define new user variable with variable name `SSL_CERT_FILE` and variable value `C:\RubyInstaller\cacert.pem`.
4. Now click OK and Apply.
5. System reboot may needed to work for first time.

<figure>
  <a href="/uploads/20160722-setting-environment-variables-on-windows.jpg">
    <img src="/uploads/20160722-setting-environment-variables-on-windows.jpg" alt="Setting environment variables on Windows">
  </a>
  <figcaption>Setting environment variables on Windows</figcaption>
</figure>

### Fixing Jekyll GitHub Metadata warning on Windows

> `GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.`

If you have recently upgraded to Jekyll v3.x.x then you may face GitHub Metadata warning (in your local development environment) if you have have use any [github-metadata](https://github.com/jekyll/github-metadata){:rel="nofollow"}, a.k.a. `site.github` Liquid tag in your Jekyll site.

Here's the solution to fix this warning and access GitHub Metadata on your Windows local development environment:

1. [Create an GitHub access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/){:rel="nofollow"} with `public_repo` scope. (Remember to keep your tokens secret; treat them just like passwords!)
2. Now similarly as previous goto Control Panel > System > Advances system settings and click Environment Variables. Or simply type "environment variables" on Start menu search box.
3. Then define new user variable with variable name `JEKYLL_GITHUB_TOKEN` and GitHub access token as variable value (which is something like `abc123def456`).
4. Now click OK and Apply.
5. System reboot may needed to work for first time.

For security reason you can also access GitHub token with the following command line while building or serving Jekyll site:

```bash
$ JEKYLL_GITHUB_TOKEN=abc123def456 bundle exec jekyll serve
```
