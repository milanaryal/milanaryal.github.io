---
title: "How to enable HTTPS-only mode in your favourite browser"
description: "Follow simple steps to set up HTTPS-only features by default in your browser."
date: 2022-05-31 21:30:00 +0545
---

Major browsers now offer native support for an HTTPS-only mode, you no longer need the browser third party extension like _"HTTPS Everywhere"_ to set HTTPS by default!

Follow the steps below to enable native HTTPS-only features in Firefox, Chrome, Edge, and Safari.

### Turn on HTTPS-only mode on Firefox

The steps below apply to Firefox desktop. HTTPS-only for mobile is currently only available in Firefox Developer mode, which advanced users can enable in `about:config`.

Settings > Privacy & Security > _Scroll to Bottom_ > _Enable_ HTTPS-Only Mode

![firefox-enable-https-only-mode](/uploads/20220531-firefox-enable-https-only-mode.gif)

Mozilla Blog: _<https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/>{:rel="nofollow"}_

### Set up HTTPS-only mode on Chrome

HTTPS-only in Chrome is available for both desktop and mobile in Chrome 94 (released today!).

Settings > Privacy and security > Security > _Scroll to bottom_ > _Toggle_ "Always use secure connections"

This feature is also under the flag `chrome://flags/#https-only-mode-setting`.

![chrome-enable-https-only-mode](/uploads/20220531-chrome-enable-https-only-mode.gif)

### Switch to HTTPS-only mode on Edge

This is still considered an "experimental feature" in Edge, but is available in Edge 92.

1. Visit `edge://flags/#edge-automatic-https` and enable Automatic HTTPS
2. Hit the "Restart" button that appears to restart Microsoft Edge.

Visit `edge://settings/privacy`, scroll down, and turn on "Automatically switch to more secure connections with Automatic HTTPS".

![edge-enable-https-only-mode](/uploads/20220531-edge-enable-https-only-mode.gif)

### HTTPS-only mode by default on Safari

HTTPS is upgraded by default when possible in Safari 15, recently released September 20th, for macOS Big Sur and macOS Catalina devices. No setting changes are needed from the user.

![safari-by-default-https-only-mode](/uploads/20220531-safari-by-default-https-only-mode.png)
_Updates for Safari 15_

### Upgrade to HTTPS-only mode on Brave

Brave have for years used HTTPS redirects provided by _HTTPS Everywhere’s_ Ruleset list.

Settings > Shields > Upgrade connections to HTTPS

Brave Shields Basics: _<https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing>{:rel="nofollow"}_

Reference: _<https://www.eff.org/https-everywhere/set-https-default-your-browser>{:rel="nofollow"}_
