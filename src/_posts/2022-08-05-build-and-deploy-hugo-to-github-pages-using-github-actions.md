---
title: "Build and deploy Hugo to GitHub Pages using GitHub Actions"
description: "Custom GitHub Actions workflow for building and deploying a Hugo site to GitHub Pages. And, hosting a Hugo site on GitHub Pages for free."
date: 2022-08-05 00:00:00 +0545
---

You can build and deploy a Hugo site as a GitHub Pages project or personal/organizational site directly from a repository and automate the whole process using GitHub Action Workflow.

GitHub provides free and fast static hosting over SSL for personal, organization, or project pages directly from a GitHub repository via its [GitHub Pages service](https://help.github.com/articles/what-is-github-pages/) and automating development workflows and build with [GitHub Actions](https://docs.github.com/en/actions).

We're only going to cover builds from the `main` branch in this page. Therefore, ensure that you are working on the `main` branch. If necessary, you may create it based on your default branch. When the Action builds your site, the contents of the _destination_ directory will be automatically pushed to the GitHub Pages site, ready to be used for serving.

To configure your site to [publish with GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow):

- On GitHub, navigate to your site's repository.
- Under your repository name, click _Settings_.
- In the "Code and automation" section of the sidebar, click _Pages_.
- Under "Build and deployment", under "Source", select _GitHub Actions_.

![GitHub Pages - Custom GitHub Actions Workflows (beta)](https://i0.wp.com/user-images.githubusercontent.com/14911070/178842638-51b834d3-6c54-423e-95fa-822f734fa98a.png?ssl=1)

GitHub will suggest several starter workflows. If you already have a workflow to publish your site, you can skip this step. Otherwise, create a file in `.github/workflows/pages.yml` containing the [following content](https://raw.githubusercontent.com/actions/starter-workflows/main/pages/hugo.yml):

{% raw %}

```yml
# Workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

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

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    name: build
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: "0.99.0"
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_Linux-64bit.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v1
      - name: Build with Hugo
        run: |
          hugo \
            --cleanDestinationDir \
            --minify \
            --baseURL ${{ steps.pages.outputs.base_url }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        if: ${{ success() && github.ref == 'refs/heads/main' }}
        with:
          path: ./public/

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

Resources:

- [Starter Workflows](https://github.com/actions/starter-workflows/tree/main/pages), _GitHub Actions_
- [GitHub Pages: Custom GitHub Actions Workflows (beta)](https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/), _GitHub Blog_
- [Host on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/), _Hugo Docs_
