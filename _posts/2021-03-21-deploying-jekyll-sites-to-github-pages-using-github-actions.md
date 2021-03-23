---
title: "Deploying Jekyll [v4] sites to GitHub Pages using GitHub Actions"
date: 2021-03-21T11:30:00+05:45
excerpt: "Using GitHub Actions, learn how to publish your Jekyll websites onto GitHub Pages with your custom dependencies and versions."
---

The GitHub Pages (`github-pages` gem only supports specific versions of Jekyll and Jekyll plugins. Latest version of Jekyll `v4.x.x` build time for your site is incredibly faster than older versions. So, to overcome the [GitHub Pages dependencies and versions](https://pages.github.com/versions/){:rel="nofollow"} we are going to use GitHub Actions to deploy your site onto GitHub Pages with your scpecfic version of Jekyll and Jekyll plugins.

Also, using GitHub Actions we can use any Jekyll plugins irrespective of them being on the supported versions list, even `*.rb` files placed in the `_plugins` directory of your site.

> **Note**: This is the updated post directly from _Jekyll documentaions_ site with much simpler procedures.

### Workspace setup

The first and foremost requirement is a Jekyll project hosted at GitHub. Choose an existing Jekyll project or follow the [quickstart](https://jekyllrb.com/docs/){:rel="nofollow"} and push the repository to GitHub if it is not hosted there already.

We're only going to cover builds from the `main` branch in this page. Therefore, ensure that you are working on the `main` branch. If necessary, you may create it based on your default branch. When the Action builds your site, the contents of the _destination_ directory will be automatically pushed to the `gh-pages` branch with a commit, ready to be used for serving.

> **Warning**: The Action we're using here will create (or reset an existing) `gh-pages` branch on every successful deploy. So, if you have an existing `gh-pages` branch that is used to deploy your production build, ensure to make a backup of the contents into a different branch so that you can rollback easily if necessary.

Following is the contents of `Gemfile` for our project:

```rb
# frozen_string_literal: true

source "https://rubygems.org"

gem 'jekyll', '~> 4.2'

group :jekyll_plugins do
  gem 'jekyll-seo-tag', '~> 2.7', '>= 2.7.1'
  gem 'jekyll-sitemap', '~> 1.4'
end
```

### Setting up the Action

GitHub Actions are registered for a repository by using a YAML file inside the directory path `.github/workflows` (note the dot at the start). Here we shall employ Jekyll Actions from the Marketplace for its simplicity.

Create a **workflow file**, say `deploy.yml`, using either the GitHub interface or by pushing a YAML file to the workflow directory path manually. The base contents are:

```yml
name: deploy

on:
  push:
    branches:
      - main
    paths-ignore:
      - "README.md"
      - "LICENSE"

jobs:
  deploy:
    name: github-pages
    runs-on: ubuntu-latest

    steps:
      - name: Clone repository
        uses: actions/checkout@v2

      - name: Bundle caching
        uses: actions/cache@v2
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile') }}
          restore-keys: |
            ${{ runner.os }}-gems-

      - name: Build and deploy
        uses: helaili/jekyll-action@v2
        with:
          token: ${{ secrets.JEKYLL_PAT }}
```

The above workflow can be explained as the following:

- We trigger the build using **on.push** condition for `main` branch only --- this prevents the Action from overwriting the `gh-pages` branch on any feature branch pushes.
- The **name** of the job matches our YAML filename: `github-pages`.
- The **checkout** action takes care of cloning your repository.
- We specify our selected **action** and **version number** using `helaili/jekyll-action@2`. This handles the build and deploy.
- We set a reference to a secret **token** for the action to use. The `JEKYLL_PAT` is a _Personal Access Token_ and is detailed in the next section.

### Providing permissions

The action needs permissions to push to your `gh-pages` branch. So you need to create a GitHub **authentication token** on your GitHub profile, then set it as an environment variable in your build using _Secrets_:

1. On your GitHub profile, under **Developer Settings**, go to the [Personal Access Tokens](https://github.com/settings/tokens){:rel="nofollow"} section.
2. **Create** a token. Give it a name like "GitHub Actions" and ensure it has permissions to `public_repos` (or the entire `repo` scope for private repository) --- necessary for the action to commit to the `gh-pages` branch.
3. **Copy** the token value.
4. Go to your repository's **Settings** and then the **Secrets** tab.
5. **Create** a token named `JEKYLL_PAT` (_important_). Give it a value using the value copied above.

### Build and deploy

On pushing any local changes onto `main`, the action will be triggered and the build will **start**.

To watch the progress and see any build errors, check on the build **status** using one of the following approaches:

- **View by commit**: Go to the repository level view in GitHub. Under the most recent commit (near the top) you'll see a **status symbol** next to the commit message as a tick or _X_. Hover over it and click the **details** link.
- **Actions tab**: Go to the repository's Actions tab. Click on the workflow tab.

If all goes well, all steps will be green and the built assets will now exist on the `gh-pages` branch.

On a successful build, GitHub Pages will **publish** the site stored on the repository `gh-pages` branches. Note that you do not need to setup a `gh-pages` branch or enable GitHub Pages, as the action will take care of this for you. (For private repositories, you'll have to upgrade to a paid plan).

To see the **live site**:

1. Go to the **environment** tab on your repository.
2. Click **View Deployment** to see the deployed site URL.
3. View your site at the **URL**.

When you need to make further **changes** to the site, commit to `main` and push. The workflow will build and deploy your site again.

Be sure **not to edit** the `gh-pages` branch directly, as any changes will be lost on the next successful deploy from the Action.

### Further resources

Popular Jekyll GitHub Actions on the GitHub Marketplace:

- [jekyll-actions](https://github.com/marketplace/actions/jekyll-actions){:rel="nofollow"}
- [jekyll-action-ts](https://github.com/marketplace/actions/jekyll-action-ts){:rel="nofollow"}
- [jekyll-deploy-gh-pages](https://github.com/marketplace/actions/jekyll-deploy-gh-pages){:rel="nofollow"}

Jekyll official documentaions:

- [Build and host the Jekyll site with GitHub Pages uing GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/){:rel="nofollow"}
