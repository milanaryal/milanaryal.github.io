---
title: "Write a shell script for Ubuntu to install your list of apps"
date: 2016-01-24T07:07:07+05:45
excerpt: "Create a shell script to install your list of APT-Get apps on freshly set up Ubuntu OS."
---

If you have freshly set up your Ubuntu OS on your machine, it's a pain to install each app by hand. So, here I want to share a technic to install a list of your required Apt-Get apps with a shell script file.

Our shell script file can do the following things respectively:

* Add different repos (PPAs and other sources)
* Update apps sources
* Install our apps

Here's the simple steps to follow:

#### Step 1

Create a new file with `.sh` extention. For example, `install-apps.sh`.

#### Step 2

Now open a file with your favorite text editor. And use the following format to create a script file:

```bash
#!/bin/bash

# ----------------------------------------------------------------------
# | Add repos                                                          |
# ----------------------------------------------------------------------

# nautilus-dropbox
sudo apt-key adv --keyserver pgp.mit.edu --recv-keys 5044912E
sudo add-apt-repository -y "deb http://linux.dropbox.com/ubuntu $(lsb_release -sc) main"

# google-chrome-stable
sudo wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
sudo add-apt-repository -y "deb http://dl.google.com/linux/chrome/deb/ stable main"

# ubuntu-tweak
sudo add-apt-repository -y ppa:tualatrix/ppa

# ..other sources and PPAs


# ----------------------------------------------------------------------
# | Update sources                                                     |
# ----------------------------------------------------------------------

sudo apt-get -y update


# ----------------------------------------------------------------------
# | Install apps                                                       |
# ----------------------------------------------------------------------

sudo apt-get -y install \
  nautilus-dropbox \
  google-chrome-stable \
  ubuntu-tweak \
  ruby
# .. other apps
```

In the above script, firstly we have added all your sources and PPAs. Secondly we try to update the machine and lately we have added our list of apps to install on our machine.

### Step 3

Now open the Terminal with shortcut key `Ctrl+Alt+T`.

Give execute permission to your script:

```bash
$ chmod +x /path/to/install-apps.sh
```

And to run your script:

```bash
$ /path/to/install-apps.sh
```

Since `.` refers to the current directory: if `install-apps.sh` is in the current directory, you can simplify this to:

```bash
./install-apps.sh
```

Note that `sudo` requires you to retype user password after [15 minutes](https://help.ubuntu.com/community/RootSudoTimeout), so here we try to put all `sudo` commands before the rest of the commands, as much as possible. Also we have force automatic "yes" (`-y`) as answer to all `apt-get` prompts which helps us to run commands non-interactively.
