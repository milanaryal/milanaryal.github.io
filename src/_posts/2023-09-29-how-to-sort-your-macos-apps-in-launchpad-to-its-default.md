---
title: "How to sort your macOS apps in Launchpad to its default"
description: "Arrange and clean up your macOS apps in Launchpad to their factory default order."
date: 2023-09-29 00:00:00 +0545
last_modified_at: 2023-12-15 00:00:00 +0545
---

You can use Launchpad to quickly open your apps on macOS. But sometimes it can become messy and scatter. If you want to arrange your apps in their default order, follow these steps.

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

### Customize the LaunchPad grid size

Follow these steps:

- Step 1. Launch Terminal (usually found in Applications > Utilities)
- Step 2. First enter the following command (just copy and paste it) and press `enter`:

```zsh
defaults write com.apple.dock springboard-columns -int 6
```

- Step 3. Second enter this command (just copy and paste it) and press `enter`:

```zsh
defaults write com.apple.dock springboard-rows -int 4
```

- Step 4. Finally enter this command to quit and relaunch the Dock and Launchpad (again, just copy and paste it and press `enter`):

```zsh
defaults write com.apple.dock ResetLaunchPad -bool true; killall Dock
```

- Step 5. Once the Dock reappears, open Launchpad

- Step 6. Now you'll see a screen similar to the following:

```text

Loading Applications...

```

- Step 7. Be patient and wait for Launchpad to reload all the apps.

Now you'll have a 6 x 4 grid. You can also change the values at the end of the commands at Steps 2 and 3 to other values.

Finally, if you'd like **to restore the defaults**, you can run the same commands again and replace the values with the original **7 columns** and **5 rows**. Remember to also run the command at Step 4 whenever you make changes.

_All the above commands are working as of macOS Sonoma 14._
