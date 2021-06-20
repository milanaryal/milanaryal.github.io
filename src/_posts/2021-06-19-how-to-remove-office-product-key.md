---
title: "How to remove Office 2019/16 product key on Windows"
date: 2021-06-20 07:00:00 +05:45
excerpt: "Lean how to remove Microsoft Office 2019 (or Office 2016) product key with simple command shell scripts."
---

1. Open a PowerShell (or command prompt) as Administrator

2. In the PowerShell (or command prompt), type the following:

   - Office 2019/16 (32-bit) on a 32-bit version of Windows<br />
     `cscript "C:\Program Files\Microsoft Office\Office16\OSPP.VBS" /dstatus`

   - Office 2019/16 (32-bit) on a 64-bit version of Windows<br />
     `cscript "C:\Program Files (x86)\Microsoft Office\Office16\OSPP.VBS" /dstatus`

   - Office 2019/16 (64-bit) on a 64-bit version of Windows<br />
     `cscript "C:\Program Files\Microsoft Office\Office16\OSPP.VBS" /dstatus`

3. You should now get a screen with some license details such as the license name, type and the last 5 characters of the Product Key.

4. You can use the last 5 characters of the Product Key to remove it using command:

   - Office 2019/16 (32-bit) on a 32-bit version of Windows<br />
     `cscript "C:\Program Files\Microsoft Office\Office16\OSPP.VBS" /unpkey:<LAST 5 CHARACTERS>`

   - Office 2019/16 (32-bit) on a 64-bit version of Windows<br />
     `cscript "C:\Program Files (x86)\Microsoft Office\Office16\OSPP.VBS" /unpkey:<LAST 5 CHARACTERS>`

   - Office 2019/16 (64-bit) on a 64-bit version of Windows<br />
     `cscript "C:\Program Files\Microsoft Office\Office16\OSPP.VBS" /unpkey:<LAST 5 CHARACTERS>`

5. Cheers! --- _[Src](https://gist.github.com/c3209cb215226d47322d98499c7a1df7){:rel="nofollow"}_.
