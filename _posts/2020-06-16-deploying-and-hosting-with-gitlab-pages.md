---
title: "Deploying and hosting static sites with GitLab Pages"
date: 2020-06-16T14:00:00+05:45
last_modified_at: 2020-06-18T14:00:00+05:45
excerpt: "Learn how to deploy and host your modern static websites on GitLab.com with GitLab Pages for free."
---

[GitLab](https://gitlab.com/){:rel="nofollow"} makes it incredibly easy to build, deploy, and host your modern static websites via their free GitLab Pages service, which provides native support for [numerous Static Site Generators (SSG)](https://gitlab.com/pages){:rel="nofollow"}, such as Gatsby, Next.js, Nuxt, Jekyll, Hugo, Hexo, Middleman and Pelican.

### Assumptions

- Working familiarity with Git for version control
- A [GitLab account](https://gitlab.com/users/sign_in){:rel="nofollow"}
- A [staticgen](https://www.staticgen.com/){:rel="nofollow"} website on your local machine that you are ready to publish

### Create `.gitlab-ci.yml`

In the root directory of your site project folder, create a `.gitlab-ci.yml` file. The `.gitlab-ci.yml` configures the GitLab CI on how to build your page. Simply add the content below.

#### [GitLab CI for Plain HTML sites](https://gitlab.com/pages/plain-html){:rel="nofollow"}

This project's static Pages are built by [GitLab CI](https://gitlab.com/pages/plain-html){:rel="nofollow"}, following the steps
defined in [.gitlab-ci.yml](https://gitlab.com/pages/plain-html/-/blob/master/.gitlab-ci.yml){:rel="nofollow"}:

```yml
image: alpine:latest

pages:
  stage: deploy
  script:
    - echo 'Nothing to do...'
  artifacts:
    paths:
      - public
  only:
    - master
```

The above example expects to put all your HTML files in the `public/` directory.

#### [GitLab CI for Gatsby sites](https://gitlab.com/pages/gatsby){:rel="nofollow"}

This project's static Pages are built by [GitLab CI](https://about.gitlab.com/gitlab-ci/){:rel="nofollow"}, following the steps
defined in [.gitlab-ci.yml](https://gitlab.com/pages/gatsby/-/blob/master/.gitlab-ci.yml){:rel="nofollow"}:

```yml
image: node:latest

# This folder is cached between builds
# http://docs.gitlab.com/ce/ci/yaml/README.html#cache
cache:
  paths:
    - node_modules/
    # Enables git-lab CI caching. Both .cache and public must be cached, otherwise builds will fail.
    - .cache/
    - public/

pages:
  script:
    - npm install
    - ./node_modules/.bin/gatsby build --prefix-paths
  artifacts:
    paths:
      - public
  only:
    - master
```

The above example expects to put all your HTML files in the `public/` directory.

#### [GitLab CI for Jekyll sites](https://gitlab.com/pages/jekyll)

This project's static Pages are built by [GitLab CI](https://about.gitlab.com/gitlab-ci/){:rel="nofollow"}, following the steps
defined in [.gitlab-ci.yml](https://gitlab.com/pages/jekyll/-/blob/master/.gitlab-ci.yml){:rel="nofollow"}:

```yml
image: ruby:latest

variables:
  JEKYLL_ENV: production

pages:
  script:
    - bundle install
    - bundle exec jekyll build -d public
  artifacts:
    paths:
      - public
  only:
    - master
```

The above example expects to put all your HTML files in the `public/` directory.

#### [GitLab CI for Hugo sites](https://gitlab.com/pages/hugo){:rel="nofollow"}

This project's static Pages are built by [GitLab CI](https://about.gitlab.com/gitlab-ci/){:rel="nofollow"}, following the steps
defined in [.gitlab-ci.yml](https://gitlab.com/pages/hugo/-/blob/master/.gitlab-ci.yml){:rel="nofollow"}:

```yml
image: monachus/hugo

variables:
  GIT_SUBMODULE_STRATEGY: recursive

pages:
  script:
    - hugo
  artifacts:
    paths:
      - public
  only:
    - master
```

The above example expects to put all your HTML files in the `public/` directory.

#### GitLab Pages examples

_Example websites hosted by GitLab Pages:_ Check out the [GitLab Pages official group](https://gitlab.com/pages){:rel="nofollow"} for a list of example projects, where you can explore some good options for Static Site Generators for Ruby, NodeJS and Python environments.

### Push your site project to GitLab

Next, create a new repository on GitLab. It is not necessary to make the repository public. In addition, you might want to add `public/` (and `_site/` for Jekyll) to your `.gitignore` file, as there is no need to push compiled assets to GitLab or keep your output website in version control.

```text
# initialize new git repository
git init

# add public/ directory to our .gitignore file
echo "public/" >> .gitignore

# for Jekyll add _site/ directory to our .gitignore file
echo "_site/" >> .gitignore

# commit and push code to master branch
git add .
git commit -m "Initial commit"
git remote add origin https://gitlab.com/YourUsername/your-static-site.git
git push -u origin master
```

### Wait for your page to build

That's it! You can now follow the CI agent building your page at `https://gitlab.com/<YourUsername>/<your-static-site>/pipelines`.

After the build has passed, your new website is available at `https://<YourUsername>.gitlab.io/<your-static-site>/`.

### Next steps

GitLab supports using custom CNAME's and TLS certificates. For more details on GitLab Pages, see the [GitLab Pages setup documentation](https://about.gitlab.com/blog/2016/04/07/gitlab-pages-setup/#custom-domains){:rel="nofollow"}.
