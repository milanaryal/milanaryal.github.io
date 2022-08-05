---
title: "Deploying Jekyll sites to GitHub Pages using GitHub Actions"
description: "Learn how to publish a Jekyll site to GitHub Pages using custom GitHub Actions workflow."
date: 2021-03-21 11:30:00 +0545
last_modified_at: 2022-08-05 00:00:00 +0545
---

You can build and deploy a Jekyll site as a GitHub Pages project or personal/organizational site directly from a repository and automate the whole process using GitHub Action Workflow.

GitHub provides free and fast static hosting over SSL for personal, organization, or project pages directly from a GitHub repository via its [GitHub Pages service](https://help.github.com/articles/what-is-github-pages/) and automating development workflows and build with [GitHub Actions](https://docs.github.com/en/actions).

The GitHub Pages (`github-pages` gem) only supports specific versions of Jekyll and Jekyll plugins. Latest version of Jekyll `v4.x.x` build time for your site is incredibly faster than older versions. So, to overcome the [GitHub Pages dependencies and versions](https://pages.github.com/versions/){:rel="nofollow"} we are going to use GitHub Actions to deploy your site to GitHub Pages with your specific version of Jekyll and Jekyll plugins.

Also, using GitHub Actions we can use any Jekyll plugins irrespective of them being on the supported versions list, even `*.rb` files placed in the `_plugins` directory of your site.

### Workspace setup

The first and foremost requirement is a Jekyll project hosted at GitHub. Choose an existing Jekyll project or follow the [quick start](https://jekyllrb.com/docs/){:rel="nofollow"} and push the repository to GitHub if it is not hosted there already.

We're only going to cover builds from the `main` branch in this page. Therefore, ensure that you are working on the `main` branch. If necessary, you may create it based on your default branch. When the Action builds your site, the contents of the _destination_ directory will be automatically pushed to the GitHub Pages site, ready to be used for serving.

Following is the contents of `Gemfile` for our project:

```rb
# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.2"

group :jekyll_plugins do  
  gem "jekyll-feed", "~> 0.16"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-redirect-from", "~> 0.16"
  gem "jekyll-sitemap", "~> 1.4"
end
```

### Setting up the Action

GitHub Actions are registered for a repository by using a YAML file inside the directory path `.github/workflows` (note the dot at the start). Here we shall employ Jekyll Actions from the Marketplace for its simplicity.

Create a **workflow file**, say `pages.yml`, using either the GitHub interface or by pushing a YAML file to the workflow directory path manually. The [base contents](https://raw.githubusercontent.com/actions/starter-workflows/main/pages/jekyll.yml) are:

{% raw %}

```yml
# Workflow for building and deploying a Jekyll site to GitHub Pages
name: Deploy Jekyll site to Page

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Build job
  build:
    name: build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          # Not needed with a .ruby-version file
          ruby-version: "3.1"
          # Runs 'bundle install' and caches installed gems automatically
          bundler-cache: true

      - name: Version info
        run: |
          ruby --version
          gem --version
          bundle --version

      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v1

      - name: Checking Jekyll configuration
        run: bundle exec jekyll doctor

      - name: Build with Jekyll
        # Defaults output to '/_site'
        run: bundle exec jekyll build --baseurl ${{ steps.pages.outputs.base_path }} --profile --trace
        env:
          JEKYLL_ENV: production

      - name: Upload artifact
        # This will automatically upload an artifact from the '/_site' directory
        uses: actions/upload-pages-artifact@v1
        if: ${{ success() && github.ref == 'refs/heads/main' }}
        with:
          path: ./_site/

      - name: Cleaning up
        run: bundle exec jekyll clean

  # Deployment job
  deploy:
    name: deploy
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: ${{ github.ref == 'refs/heads/main' }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
        if: ${{ success() }}
```

{% endraw %}

The above workflow can be explained as the following:

- We trigger the build using **on.push** condition for `main` branch only.
- The **name** of the job matches our YAML filename: `github-pages`.
- The **checkout** action takes care of cloning your repository.
- We specify our selected **action** and **version number** using `actions/deploy-pages@v1`. This handles the build and deploy.

### Providing permissions

The action needs permissions to push to your GitHub Pages site. So you need to setup a GitHub Pages build and deploy source profile.

To configure your site to [publish with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow):

- On GitHub, navigate to your site's repository.
- Under your repository name, click _Settings_.
- In the "Code and automation" section of the sidebar, click _Pages_.
- Under "Build and deployment", under "Source", select _GitHub Actions_.

![GitHub Pages - Custom GitHub Actions Workflows (beta)](https://i0.wp.com/user-images.githubusercontent.com/14911070/178842638-51b834d3-6c54-423e-95fa-822f734fa98a.png?ssl=1)

### Build and deploy

On pushing any local changes onto `main`, the action will be triggered and the build will **start**.

To watch the progress and see any build errors, check on the build **status** using one of the following approaches:

- **View by commit**: Go to the repository level view in GitHub. Under the most recent commit (near the top) you'll see a **status symbol** next to the commit message as a tick or _X_. Hover over it and click the **details** link.
- **Actions tab**: Go to the repository's Actions tab. Click on the workflow tab.

If all goes well, all steps will be green and the built assets will now exist on the GitHub Pages site.

On a successful build, GitHub Pages will **publish** the site build on the GitHub Actions. Note that you do not need to setup a GitHub Pages, as the action will take care of this for you. (For private repositories, you'll have to upgrade to a paid plan).

To see the **live site**:

1. Go to the **environment** tab on your repository.
2. Click **View Deployment** to see the deployed site URL.
3. View your site at the **URL**.

When you need to make further **changes** to the site, commit to `main` and push. The workflow will build and deploy your site again.

Be sure **not to edit** the GitHub Actions workflow, as any changes will be lost on the next successful deploy from the Action.

Further resources:

- [Starter Workflows](https://github.com/actions/starter-workflows/tree/main/pages), _GitHub Actions_
- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [GitHub Pages: Custom GitHub Actions Workflows (beta)](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/), _GitHub Blog_
