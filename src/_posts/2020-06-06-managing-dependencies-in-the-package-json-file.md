---
title: "Managing Node.js dependencies version in the package.json file"
date: 2020-06-06T18:00:00+05:45
---

Learn to manage and update all the npm dependencies saved in the package.json file, to their latest available version.

> npm is the package manager for JavaScript.

#### Requirements

Install [Node.js](https://nodejs.org/en/download/package-manager/){:rel="nofollow"} on your machine.

If you install a package using `npm install <packagename>`, the latest available version of the package is downloaded and store in the `node_modules` folder, and a corresponding entry is added to the `package.json` and `package-lock.json` files that are present in your current folder.

#### Some essential additional flags for `npm install`

aliases: `npm i`, `npm add`

- -P, --save-prod: Package will appear in your dependencies.
- -d, --save: Package will appear in your dependencies.
- -D, --save-dev: Package will appear in your devDependencies.
- -E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.
- --no-save: Prevents saving to dependencies.

To stable our project with changes in dependencies version, it is necessary to learn to manage the exact dependency version that you need in your project --- which I am gonna discuss below.

#### Updating node dependencies

In your `package.json` you can tag each dependency with a range of versions to install then type `npm install` to install all the listed dependencies at the given versions:

**Only install `2.6.1`:**

```json
{
  "dependencies": {
    "package-name": "2.6.1"
  }
}
```

**Prefix with `~` to install the latest patch version `2.6.x`:**

As `2.6.1`, `2.6.2`, `2.6.3`, etc versions are released, `npm install` will install the latest version of those. If `2.7.0` is release, it will not install that version (generally a good strategy as it may contain breaking changes).

```json
{
  "dependencies": {
    "package-name": "~2.6.1"
  }
}
```

**Prefix with `^` to install the latest patch version `2.x.x`:**

It will update you to the most recent major version (the first number). `^2.6.1` will match any `2.x.x` release including `2.7.0`, but will hold off on `3.0.0`.

```json
{
  "dependencies": {
    "package-name": "^2.6.1"
  }
}
```

**Explicitly set the range:**

You can use `>`, `<`, `<=`, `>=` to explicitly set the version range. Another good option for custom ranges or if you would like to be explicit with your version ranges. The follow will install every version greater or equal than `2.6.1` but less than `7.0.0`:

```json
{
  "dependencies": {
    "package-name": ">= 2.6.1 < 7.0.0"
  }
}
```

**Always install the latest with `*`:**

Or if you just always want the latest version use `*`:

```json
{
  "dependencies": {
    "package-name": "*"
  }
}
```

See more about version ranges in the [npm docs](https://docs.npmjs.com/cli/v6/using-npm/semver){:rel="nofollow"} or npm's [semantic versioning parser](https://github.com/npm/node-semver){:rel="nofollow"}.

**`npm outdated`**

If you would like to see which of your dependencies are out of date, use `npm outdated`: see [npm docs](https://docs.npmjs.com/cli/outdated){:rel="nofollow"} for more info.

**`npm update`**

Use `npm update` to update all your dependencies to the latest versions. Or `npm update packagename anotherpackage` to update specific packages to the latest version.

### Essential npm commands

#### Creating a `package.json` file

`npm init` - create `package.json` file initating a command line questionnaire

`npm init --yes` or `npm init -y` - create a `package.json` file and fill in default values

#### Managing global packages

`npm ls -g --depth=0` - list out global installed packages

`npm uninstall -g [<name> [<name ...]]` - uninstall global package(s)

`npm outdated --global` - check for outdated global installed packages

#### Managing project packages

`npm list` or `npm ls` (preferred shorthand) - list out currently installed npm packages

`npm ls --depth=0` - only draws out the top of the dependency tree

`npm install` - will install both "dependencies" and "devDependencies"

`npm install --production` - will only install "dependencies"

`npm install --dev` - will only install "devDependencies"

`npm outdated` - check for outdated packages

`npm prune [<name> [<name ...]]` - removes "extraneous" packages

`npm where` - show npm installed path

`npm cache clean` - clean npm cache

`npm run-script <script-name>` or for short `npm run <script-name>` - run scripts from `package.json`

#### Execute npm package binaries with npx

> `npx` - a tool for executing Node packages.

From npm@5.2.0, npm ships with npx package which lets you run commands from a local `node_modules/.bin` or from a central cache.

Simply run:

`npx [options] <command>[@version] [command-arg]...`

By default, npx will check whether `<command>` exists in `$PATH`, or in the local project binaries, and execute that.

For npm < 5.2.0, you can install npx package manually by running the following command:

`npm install -g npx`

#### Resources

- [Getting started with npm](https://docs.npmjs.com/){:rel="nofollow"}
