---
title: "How to use Homebrew on macOS to install third-party tools & apps"
date: 2023-07-15 00:00:00 +0545
---

Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux.

It is a package manager that finds and installs the right software packages that will allow you to compile and run various apps/software on your specific operating system. It was originally written by Max Howell and has gained popularity in the Ruby on Rails community.

### Homebrew Installation

To install Homebrew on your Mac (or Linux machine), you can follow these steps:

1. Open Terminal.
2. Paste the following command line: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`.
3. Press Return and enter your admin password when prompted.
4. Wait for the installation to complete.
5. Once installed, you can use "brew install" to install software.

Alternatively, you can go to the Homebrew website and copy the installation script provided under “Install Homebrew”. Then, open Terminal and paste the script to start the installation process.

If you are using macOS Intel, Homebrew will be installed to `/usr/local`. If you are using Apple Silicon, it will be installed to `/opt/homebrew`. (If you are using Linux, it will be installed to `/home/linuxbrew/.linuxbrew`.)

### Install Homebrew Package

Homebrew formula is a package definition written in Ruby that allows you to easily install packages and large binaries.

To install a package using Homebrew on your Mac, you can follow these steps:

1. Open Terminal.
2. Type `brew install <package_name>` followed by the name of the package you want to install.
3. Press Return.

For example, if you want to install Git using Homebrew, you would type `brew install git`.

### Install Homebrew Cask

Homebrew Cask is an extension to Homebrew that allows you to easily install macOS applications and large binaries. It provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.

To install Homebrew Cask on your Mac, you can follow these steps:

1. Open Terminal.
2. Type `brew install --cask <cask_name>`.
3. Press Return.
4. Once installed, you can go to Launchpad on macOS to open the installed apps.

Here's an awesome list of GitHub repositories for further resources:

- [brew-commands](https://github.com/milanaryal/cli-cheat-sheet/blob/main/brew-commands.md) - 🍻 Default formulae for the missing package manager for macOS (or Linux).
- [brew-cask-commands](https://github.com/milanaryal/cli-cheat-sheet/blob/main/brew-cask-commands.md) - 🍻 A CLI workflow for the administration of macOS applications distributed as binaries.
- [awesome-macos](https://github.com/milanaryal/awesome-macos) - A curated list of 😎 awesome apps and tools for  macOS.
