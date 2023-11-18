---
title: "How to use the winget on Windows to install third-part tools & apps"
date: 2023-11-18 00:00:00 +0545
---

Windows Package Manager (also known as winget) is a free and open-source package manager designed by Microsoft for Windows 10 and Windows 11.

It consists of a command-line utility and a set of services for installing applications. The winget command-line tool enables users to discover, install, upgrade, remove, and configure applications on Windows 10 and Windows 11 computers. Independent software vendors can use it as a distribution channel for their software packages. The tool is available on Windows 11 and modern versions of Windows 10 as a part of the App Installer. If you are interested in learning more about winget, you can visit the official [Microsoft Learn page](https://learn.microsoft.com/en-us/windows/package-manager/winget/).

Updating the winget:

```
winget update
```

Upgrading all installed packages:

```
winget upgrade --all
```

Searching for an application:

```
winget search "package name"
```

Installing the specified application:

```
winget install <package_id>
```

You can use the following syntax to install multiple applications in a single command:

```
winget install <query1> <query2> ...
```

Example:

```
winget install Microsoft.WindowsTerminal Microsoft.PowerToys Microsoft.VisualStudioCode
```

Upgrading the given package:

```
winget upgrade <package_id>
```

Displaying installed packages:

```
winget list
```

Uninstalling the given package:

```
winget uninstall <package_id>
```

Learn more about the winget tool supported [commands](https://learn.microsoft.com/en-us/windows/package-manager/winget/#commands).
