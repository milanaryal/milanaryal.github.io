---
title: "How to reset your macOS Dock to default settings"
description: "Organise and clean up your macOS Dock to its factory default settings."
date: 2023-09-29 00:00:00 +0545
redirect_from: "/how-to-reset-your-macos-dock-to-its-default/"
---

Do you want to reset the macOS Dock to its default settings, with the same app shortcuts placed on it as if you had just installed macOS?

If so, you can get back to a "fresh install feeling" using a terminal command.

> See also: [How to sort your macOS apps in Launchpad to its default](/how-to-sort-your-macos-apps-in-launchpad-to-its-default/)

### Resetting macOS Dock to Default Settings

The macOS Dock is a handy tool for quickly accessing your favorite apps, folders, other items. But sometimes it can become messy and overcrowded. This post will show you how to clean up your Dock or reset it to default.

- First, open the Terminal app on your macOS. Go to Applications > Utilities > Terminal (Or, Search for "Terminal" with Spotlight search)
- In the Terminal, type or copy & paste the following command:

```zsh
defaults delete com.apple.dock; killall Dock
```

- Then press the Return (Enter) key on your keyboard.
- Your macOS Dock has reset to its original settings. The plist file that stored your Dock preferences got deleted, so the Dock went back to how it was when you first got your Mac.

As soon as you run the command, the Dock will restart and go back to its default settings. This means that any icons you added or removed will be restored to their original state. It also means that the Dock’s size, magnification, and position will be reset.

**Note:** If you have uninstall any of the default apps from your device (such as Pages, Numbers, or Keynote), the Dock will show a question mark "?" icon in their place. You can either delete the icon from the Dock or reinstall the app to restore it.

_All the above commands are working as of macOS Sonoma 14._
