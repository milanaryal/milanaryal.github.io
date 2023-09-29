---
title: "How to sort your macOS apps in Launchpad to its default"
description: "Arrange and clean up your macOS apps in Launchpad to their factory default order."
date: 2023-09-29 00:00:00 +0545
---

You can use Launchpad to quickly open your apps on macOS. If you want to arrange your apps in their default order, follow these steps.

> See also: [How to reset your macOS Dock to its default](/how-to-reset-your-macos-dock-to-its-default/)

### Steps to factory sort the apps in macOS Launchpad

- First, open the Terminal app on your macOS. Go to Applications > Utilities > Terminal (Or, Search for "Terminal" with Spotlight search)
- In the Terminal, type (or, copy & paste) this command:

```zsh
defaults write com.apple.dock ResetLaunchPad -bool true; killall Dock
```

Your Dock will restart after you press the Return (Enter) key on your keyboard. It will disappear for a few seconds and then come back with the changes.

Open Launchpad, you will see the default sorted Apple apps on the first page. The rest of your apps will be sorted on the other pages in alphabetical or to its default order.

**Alternative method,**

The Launchpad database is located in:

```text
~/Library/Application Support/Dock
```

You can delete the Launchpad database with the following command in the Terminal app on you macOS:

```zsh
rm ~/Library/Application\ Support/Dock/*.db; killall Dock
```

Press the Return (Enter) and Restart your macOS. Your Mac will make a new list of all your apps when it restarts. You can easily find and open any app you have, even the ones that were hidden before.

_All the above commands are working as of macOS Sonoma 14._
