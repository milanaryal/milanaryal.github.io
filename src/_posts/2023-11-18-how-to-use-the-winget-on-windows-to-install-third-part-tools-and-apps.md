---
title: "How to use the winget on Windows to install third-part tools & apps"
date: 2023-11-18 00:00:00 +0545
---

Windows Package Manager (also known as winget) is a free and open-source package manager designed by Microsoft for Windows 10 and Windows 11.

It consists of a command-line utility and a set of services for installing applications. The winget command-line tool enables users to discover, install, upgrade, remove, and configure applications on Windows 10 and Windows 11 computers. Independent software vendors can use it as a distribution channel for their software packages. The tool is available on Windows 11 and modern versions of Windows 10 as a part of the App Installer. If you are interested in learning more about winget, you can visit the official [Microsoft Learn page](https://learn.microsoft.com/en-us/windows/package-manager/winget/){:rel="nofollow"}.

Open the elevated PowerShell window using the Search box or any other preferred ways. When PowerShell window is opened as administrator, type and execute the following command:

```sh
winget upgrade
```

This command is not necessary but quite helpful as it will show you the list of all the outdated programs and available updates for them. You will also be able to see the program name, ID, installed version, and available version. Now execute the command that will automatically update those programs with their latest versions. The command is:

```sh
winget upgrade --all
```

One by one, the Windows Package Manager will automatically download the new versions of programs and install them silently. This may take some time. So, let the process complete, and your programs will be updated with the new versions.

Just for your information, run `winget` command to view more information about how to use the tool. The following are some of the other commands and options available for use with winget.

Searching for an application:

```sh
winget search "package name"
```

You can see more information about how to use one of winget's built-in commands by passing `-?`` to it. For example, to see the various options you can use with winget, run the following command:

```sh
winget search -?
```

Installing the specified application:

```sh
winget install <package_id>
```

You can use the following syntax to install multiple applications in a single command:

```sh
winget install <query1> <query2> ...
```

Example:

```sh
winget install Microsoft.WindowsTerminal Microsoft.PowerToys Microsoft.VisualStudioCode
```

But how do you actually find packages to install? The best places to start are the [winget-pkgs GitHub repository](https://github.com/microsoft/winget-pkgs), where there's a pretty hefty catalog of things you can install, as well as the excellent third-party resource, [winstall.app](https://winstall.app/){:rel="nofollow"} or [winget.run](https://winget.run/){:rel="nofollow"}.

Upgrading the given package:

```sh
winget upgrade <package_id>
```

Updating all available packages to the latest application:

```sh
winget upgrade --all
```

`winget upgrade --silent --all` --- Runs the installer in silent mode. This suppresses all UI. The default experience shows installer progress.

Displaying installed packages:

```sh
winget list
```

Uninstalling the given package:

```sh
winget uninstall <package_id>
```

If you're interested in seeing more details about the package you're downloading, too, there's a simple command that will bring up a complete dossier on what it is and where it's from:

```sh
winget show <package_id>
```

And if you're interested in poking around a little more with the Windows Package Manager, enter this in the terminal to bring up a list of all current commands.

```sh
winget --help
```

Learn more about the winget tool supported [commands](https://learn.microsoft.com/en-us/windows/package-manager/winget/#commands){:rel="nofollow"}.
