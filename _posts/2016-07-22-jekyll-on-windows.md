---
title: "Running Jekyll on Windows"
date: 2016-07-22T07:53:11+05:45
last_modified_at: 2021-04-10T14:50:00+05:45
---

[Setting up Jekyll on Windows](https://jekyllrb.com/docs/windows/){:rel="nofollow"} is not as easy as installing on Linux or macOS. Several errors may occur if you do not correctly setup dependencies for Jekyll on Windows.

### Setting up Jekyll via RubyInstaller on Windows

Learn how to run Jekyll, the blog-aware, static site generator in via RubyInstaller on Windows.

- [Jekyll official documentation](https://jekyllrb.com/docs/installation/windows/#installation-via-rubyinstaller){:rel="nofollow"}
- [How to run Jekyll v2.x on Windows](http://jekyll-windows.juthilo.com/){:rel="nofollow"}, _by Julian Thilo_
- [How to install Jekyll v3.x on Windows](https://labs.sverrirs.com/jekyll/){:rel="nofollow"}, _by Sverrir Sigmundarson_

### Jekyll some common issues while running on Windows

Here are some common errors or warnings which may occur while setting up Jekyll on windows:

> GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
>
> Error: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
>
> Error: Run jekyll build –trace for more information.

#### Fixing Jekyll OpenSSL default certificate error on Windows

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

#### Fixing Jekyll GitHub Metadata warning on Windows

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
JEKYLL_GITHUB_TOKEN=abc123def456 bundle exec jekyll serve
```

---

Last updated _{{ page.last_modified_at | date: '%B %-d, %Y' }}_

### Setting up Jekyll via Bash on Windows 10 (WSL: Ubuntu)

If you are using Windows 10 version 1607 or later, you can run Jekyll by installing the Windows Subsystem for Linux (WSL).

#### 1. [Install WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10){:rel="nofollow"}

Before installing Ubuntu distro enable WSL feature with the Powershell:

```bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

And, get Ubuntu distro from

- [Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6){:rel="nofollow"}

<br />or with<br />

- [command-line/script](https://docs.microsoft.com/en-us/windows/wsl/install-manual){:rel="nofollow"} on Powershell

#### 2. Prepare OS

Update OS packages:

```bash
sudo apt update -y && sudo apt upgrade -y
```

#### 3. Setup Ruby and gems

Install [zlib](https://www.zlib.net/){:rel="nofollow"} for Nokogiri (鋸) Ruby gem:

```bash
sudo apt install zlib1g zlib1g-dev
```

[Install Ruby](https://www.ruby-lang.org/en/documentation/installation/#apt){:rel="nofollow"} with WSL Ubuntu OS native apt:

```bash
sudo apt -y update

sudo apt install ruby-full build-essential zlib1g-dev

ruby --version
```

And, [avoid installing Ruby Gems as the root user](https://jekyllrb.com/docs/installation/ubuntu/){:rel="nofollow"}

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Install essential gems for your project

Install [Bundler](https://bundler.io/){:rel="nofollow"} gem:

```bash
gem install bundler
```

Following is the example contents of `Gemfile` for Jekyll project:

```rb
# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jekyll', '~> 4.2'

group :jekyll_plugins do
  gem 'jekyll-seo-tag', '~> 2.7', '>= 2.7.1'
  gem 'jekyll-sitemap', '~> 1.4'
end
```

Place the `Gemfile` in the project root folder and install required gems with the following command line:

```bash
bundle install
```

That's it! You're ready to start using Jekyll.
