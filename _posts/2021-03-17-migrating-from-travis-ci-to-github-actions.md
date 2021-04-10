---
title: "Migrating from Travis CI to GitHub Actions [for GitHub Pages and Jekyll]"
date: 2021-03-17T14:00:00+05:45
---

I use continuous integration (CI) to test build status of my Jekyll blog in GitHub Pages environment.

> For those who aren't familiar with Continuous Integration (CI) or Continuous Delivery (CD), it's a automating software workflows to build or test the software based on certain triggers in your GitHub repository.

Travis CI has served me very well but with a notice from _travis-ci.org_ to [shutting down the website soon](https://ropensci.org/blog/2020/11/19/moving-away-travis/){:rel="nofollow"}, I planned to migrate to GitHub Actions (the native CI/CD system from GitHub).

#### Step 1: Remove Travis CI from the project folder

I first removed the following `.travis.yml` configuration file code snippet from the root directory of my project folder.

```yml
# travis-ci.org

language: ruby
rvm:
  - 2.7.1 # Ruby version

# Assume bundler is being used, therefore
# the `install` step will run `bundle install` by default.
script:
  - bundle exec github-pages versions # List dependency versions
  - bundle exec github-pages health-check # Checking DNS (Should have CNAME file)
  - bundle exec jekyll doctor # Checking Jekyll configuration
  - bundle exec jekyll build --config _config.yml,_config_test.yml --profile # Building site
  - bundle exec htmlproofer ./_site --allow-hash-href --assume-extension --http-status-ignore "403,429" --only-4xx # Checking HTML files
  - bundle exec jekyll clean # Cleaning up

branches:
  only:
    - master

env:
  global:
    - NOKOGIRI_USE_SYSTEM_LIBRARIES=true

addons:
  apt:
    packages:
      - libcurl4-openssl-dev

cache: bundler

git:
  depth: 10

notifications:
  email: false
```

- Removed Travis CI "Build Status" badge in a README file.
- Logged into the Travis CI website and disabled the GitHub repository from using Travis.

#### Step 2: Create GitHub Actions workflow in the project folder

Now, migrating to GitHub Actions here's a `.workflow.yml` file code snippet I created in the `.github/workflows` directory of my project folder.

{% raw %}

```yml
name: My workflow

on:
  push:
    branches:
      - main
    paths-ignore:
      - "LICENSE"
      - "README.md"

env:
  RUBY_VERSION: 2.7.1

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Clone repository
        uses: actions/checkout@v2

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: ${{ env.RUBY_VERSION }} # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically

      - name: Version info
        run: |
          ruby --version
          gem --version
          bundle --version

      - name: List dependency versions
        run: bundle exec github-pages versions

      - name: Checking DNS # Should have CNAME file
        run: bundle exec github-pages health-check

      - name: Checking Jekyll configuration
        run: bundle exec jekyll doctor

      - name: Building site
        run: bundle exec jekyll build --config _config.yml,_config_test.yml --profile

      - name: Checking HTML files
        run: bundle exec htmlproofer ./_site --allow-hash-href --assume-extension --http-status-ignore "403,429" --only-4xx

      - name: Cleaning up
        run: bundle exec jekyll clean
```

{% endraw %}

- Added GitHub Actions "Build Status" badge in a README file.

#### Step 3: Push commit

Finally, I push commit to GitHub and I can see the build status results in 'actions' tab of my project folder in GitHub website.

---

For any references following code snippet is a `Gemfile` of my Jekyll blog to build site in the GitHub Pages environment:

```rb
# frozen_string_literal: true

source "https://rubygems.org"

gem "github-pages", :group => :jekyll_plugins
gem "html-proofer", :group => :test
```

#### Further resources

- [Migrating from Travis CI to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/migrating-from-travis-ci-to-github-actions){:rel="nofollow"}, _GitHub Docs_
