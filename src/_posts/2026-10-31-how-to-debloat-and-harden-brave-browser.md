---
title: "How to Debloat and Harden Brave Browser [Windows, macOS, Linux]"
description: "Boost Brave Browser's speed and privacy by disabling unnecessary background features and telemetry across Windows, macOS, and Linux."
date: 2026-10-31 00:00:00 +0545
---

## How to Debloat and Harden Brave Browser [Windows, macOS, Linux]

Brave is a popular browser known for protecting your privacy. But out of the box, it comes with extras many people never asked for: a crypto wallet, a rewards program, a VPN offer, an AI chatbot, a news feed, and more. It also quietly sends some usage information back to the company.

The good news: you can switch all of that off with a free tool called **SlimBrave Neo**. You don't need to be a tech expert. This guide walks you through it step by step.

---

### What is SlimBrave Neo?

Think of SlimBrave Neo as a **control panel for Brave**. Instead of hunting through dozens of hidden settings, you get one simple screen where you can:

- Turn off features you don't use (wallet, rewards, AI chat, news and so on)
- Stop Brave from sending usage reports
- Add extra privacy protection
- Choose a ready-made "preset" with one click

It's free, open source (anyone can inspect the code), and doesn't install anything extra into your browser.

---

### Pick a preset

A preset is a ready-made bundle of settings. You can pick one and then change anything you like before saving.

| Preset | Best for |
|---|---|
| **Balanced Privacy** | Most people. More privacy, but everyday things still work. **A good place to start.** |
| **Maximum Privacy** | People who want the strictest protection. Note: it also turns off printing, the built-in PDF viewer and developer tools. |
| **Performance Focused** | Anyone who just wants a lighter, faster Brave. |
| **Developer** | Web developers who need their tools to keep working. |
| **Strict Parental Controls** | Parents, schools and workplaces who want a restricted browser. |
| **Brave Origin** | People who want Brave to match its official "no extras" edition. |

**Tip:** Nothing changes on your computer until you press the final **Apply** button, so feel free to explore.

---

### Before you begin

- You need **Brave already installed**.
- You need **permission to make changes** on your computer (an administrator account, or your password on Mac and Linux).
- **Only download this tool from the official page:** <https://github.com/ChaoticSi1ence/SlimBrave-Neo>{:rel="nofollow"}. The creator says there are no official installers (no `.exe`, `.msi` or `.dmg` files). If you find a download elsewhere claiming to be SlimBrave Neo, don't trust it.

#### A quick word about "the terminal"

The steps below use a **terminal**, a window where you type short instructions instead of clicking. It looks intimidating, but you only need to copy and paste a few lines. Here's how to open it:

- **Windows:** Click the Start button, type `PowerShell`, and press Enter.
- **macOS:** Press `Cmd + Space`, type `Terminal`, and press Enter.
- **Linux:** Press `Ctrl + Alt + T` (on most systems).

To run a line, paste it into the window and press **Enter**.

---

### Windows

You'll need Windows 10 or 11.

1. Open **PowerShell** (see above).
2. Paste these three lines, pressing Enter after each:

   ```bash
   git clone https://github.com/ChaoticSi1ence/SlimBrave-Neo.git
   cd SlimBrave-Neo
   powershell -ExecutionPolicy Bypass -File .\SlimBrave.ps1
   ```

   *Don't have "git"? Use this single line instead:*

   ```bash
   iwr "https://raw.githubusercontent.com/ChaoticSi1ence/SlimBrave-Neo/main/SlimBrave.ps1" -OutFile "SlimBrave.ps1"; powershell -ExecutionPolicy Bypass -File .\SlimBrave.ps1
   ```

3. Windows will ask whether to allow the app to make changes. Click **Yes**.
4. A window opens with all the options. Click a **preset card** or flip individual switches on and off. Each option has a plain-English description under it, and there's a search box if you're looking for something specific.
5. Click **Apply Settings** when you're happy.
6. **Close Brave completely and open it again.**

---

### macOS

1. Open **Terminal** (see above).
2. Paste these three lines, pressing Enter after each:

   ```bash
   git clone https://github.com/ChaoticSi1ence/SlimBrave-Neo.git
   cd SlimBrave-Neo
   sudo python3 slimbrave-mac.py
   ```

3. Type your macOS password when asked. (You won't see the letters appear as you type. That's normal.)
4. A menu appears. Use the **arrow keys** to move, **Space** to switch things on or off, and **Enter** to select buttons. Press `?` any time for a help screen.
5. Choose **Apply**.
6. **Close Brave completely and open it again.**

#### macOS extra: making the changes stick

On newer macOSs, your settings can disappear after a restart. If that happens, run the tool this way instead, which makes them permanent:

```bash
sudo python3 slimbrave-mac.py --persist on
```

You'll then finish with a few clicks: open **System Settings → General → Device Management**, double-click **SlimBrave Neo - Brave Policy**, click **Install**, and enter your password.

---

### Linux

1. Open a terminal.
2. Paste these three lines, pressing Enter after each:

   ```bash
   git clone https://github.com/ChaoticSi1ence/SlimBrave-Neo.git
   cd SlimBrave-Neo
   sudo python3 slimbrave-linux.py
   ```

   > 💡 **Linux Tip:** If you use `brave-origin` (the official telemetry-free Brave build), SlimBrave-Neo detects it automatically and applies your policies seamlessly.

3. Enter your password when asked.
4. Use the **arrow keys** to move around, **Space** to toggle options, and `/` to search. A description of each setting appears at the bottom of the screen.
5. Choose **Apply**.
6. **Close Brave completely and open it again.**

**Good to know:** Linux users can also try **Brave Origin**, an official version of Brave that already has these extras removed. SlimBrave Neo is better if you want to pick and choose.

---

### How to check it worked

1. Open Brave.
2. Type `brave://policy` into the address bar and press Enter.
3. You should see a list of the settings you applied.

---

### How to undo everything

Changed your mind? No problem.

- **Windows:** Open SlimBrave Neo again and click **Reset**.
- **macOS or Linux:** Run the tool with `--reset` at the end. For example, on Linux:

  ```bash
  sudo python3 slimbrave-linux.py --reset
  ```

Then restart Brave.

---

### Things to keep in mind

- **Stronger privacy can mean less convenience.** For example, blocking location access means map sites will ask you to type your address. If something stops working after you apply a preset, open the tool again and switch that option back.
- **Syncing:** Some presets turn off Brave Sync, which keeps your bookmarks and history matched across devices. If you rely on it, switch that option off before applying.
- **Start gentle.** Try **Balanced Privacy** first. You can always go stricter later.

---

### Final thoughts

With a few minutes and a handful of copy-and-paste steps, you can turn Brave into a quieter, cleaner and more private browser, set up exactly the way you want it.

**Project page:** <https://github.com/ChaoticSi1ence/SlimBrave-Neo>{:rel="nofollow"}
