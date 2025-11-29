---
title: "How to Limit Battery Charging on Apple Silicon MacBooks [with batt]"
description: "Extend your MacBook’s battery life with batt, an open-source tool for Apple Silicon that adds charge limits, idle-sleep control, and MagSafe LED features."
date: 2025-11-27 00:00:00 +0545
---

Looking for a way to **extend your MacBook battery lifespan**, **stop overcharging**, or **set a custom charging limit**? The open-source tool **`batt`** is one of the best solutions for Apple Silicon MacBooks. With features like charge limiting, idle-sleep control, and MagSafe LED integration, `batt` gives you full control over how your MacBook charges — something macOS doesn’t offer natively.

This quick guide shows you **how to install, configure, and uninstall `batt`** in just a few minutes.

---

### ✅ What Is `batt` and Why You Should Use It

`batt` is a lightweight macOS utility that allows you to:

* Set a **maximum battery charge limit** (e.g., 70–80%)
* Reduce battery wear for long-term health
* Prevent idle sleep during charging
* Control MagSafe LED status
* Disable charging before sleep
* Run in the background with minimal resource usage

If you often keep your MacBook plugged in, `batt` can dramatically extend battery longevity.

**View Source Code:** [GitHub Repository](https://github.com/charlie0129/batt){:rel="nofollow"}

---

### 🛠️ How to Install & Set Up `batt` on macOS

**Install Options**

**A. GUI Version (Easy Method)**

Download the `.dmg` from the GitHub Releases page → open it → drag **`batt.app`** into your Applications folder.

**B. CLI Version (Homebrew)**

```bash
brew install batt
sudo brew services start batt
```

**C. CLI Version (Install Script)**

```bash
bash <(curl -fsSL https://github.com/charlie0129/batt/raw/master/hack/install.sh)
```

---

### 🔧 Initial Configuration

#### Check installation:

```bash
sudo batt status
```

#### Set your preferred charge limit (recommended: 80%):

```bash
sudo batt limit 80
```

#### Important: Disable macOS Optimized Charging

Go to: **System Settings → Battery → Battery Health → Turn off “Optimized Battery Charging.”**

This prevents macOS from overriding `batt`’s charge control.

---

### ⚙️ Advanced Optimization Settings

Prevent idle sleep during charging:

```bash
sudo batt prevent-idle-sleep enable
```

Disable charging right before sleep (reduces overnight wear):

```bash
sudo batt disable-charging-pre-sleep enable
```

Enable MagSafe LED battery status:

```bash
sudo batt magsafe-led enable
```

Remove all charge limits:

```bash
sudo batt disable
# or
sudo batt limit 100
```

---

### ❌ How to Uninstall `batt` Completely

#### If Installed via Script:

```bash
sudo batt uninstall
sudo rm /etc/batt.json
sudo rm $(which batt)
```

#### If Installed via Homebrew:

```bash
sudo batt disable
sudo brew services stop batt
brew uninstall batt
sudo rm /opt/homebrew/etc/batt.json
```

#### If Using the GUI App:

Open `batt.app` → click **Uninstall Daemon…** → delete the app from Applications.

---

### 🎯 Final Thoughts: Boost Your MacBook Battery Health Easily

If you want more control over your MacBook’s charging behavior, `batt` is one of the most effective tools available for **Apple Silicon** devices. By capping charge levels and automating charging behavior, you can dramatically improve **battery lifespan**, **reduce heat**, and **optimize long-term performance**.
