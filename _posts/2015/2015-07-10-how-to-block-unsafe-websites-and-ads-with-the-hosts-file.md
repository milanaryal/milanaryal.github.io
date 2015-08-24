---
title: "How to block unsafe websites and ads with the hosts file"
date: 2015-07-10T04:33:10+05:45
last_modified_at: 2015-07-10T11:10:14+05:45
excerpt: "Blocking unwanted sites and ads in all of your applications globally and speed up browsing with the hosts file on your PC."
---

Browser extensions like [Adblock Plus](http://adblockplus.org/en/) are very popular to blocking various annoying ads. But these are only for browsers what if you want to block these annoying ads globally in your PC for every applications, so here's the hosts file to help you.

### What is a hosts file?

A hosts file, named `hosts` (with no file extension), is a plain-text file used by all operating systems to map hostnames to IP addresses.

In most operating systems, the `hosts` file is preferential to `DNS`.  Therefore if a host name is resolved by the `hosts` file, the request never leaves your computer.

#### File content

The hosts file contains lines of text consisting of an IP address in the first text field followed by one or more host names. Each field is separated by white space --- tabs are often preferred for historical reasons, but spaces are also used. Comment lines may be included; they are indicated by a hash character (#) in the first position of such lines. Entirely blank lines in the file are ignored. For example, a typical hosts file may contain networking entries like the following:

{% highlight text %}
# localhost address
127.0.0.1     localhost loopback #[IPv4]
::1           localhost          #[IPv6]
{% endhighlight %}

This example only contains entries for the loopback addresses of the system and their host names, a typical default content of the hosts file. The example illustrates that an IP address may have multiple host names (`localhost` and `loopback`), and that a host name may be mapped to both `IPv4` and `IPv6` IP addresses.

### Location of your hosts file

The location of the hosts file in the file system hierarchy varies by operating system. It is usually named hosts, without an extension. To modify your current `hosts` file, look for it in the following places and modify it with a text editor.

| Operating System              | Location
|-------------------------------|-------------------------------------------------------
| Linux                         | `/etc/hosts`
| Mac OS X, iOS                 | `/etc/hosts` (a symbolic link to `/private/etc/hosts`)
| Android                       | `/etc/hosts` (a symbolic link to `/system/etc/hosts`)
| Windows                       | `%SystemRoot%\System32\drivers\etc\hosts`

### Blocking with hosts file

Having a smart `hosts` file goes a long way towards blocking malware, adware, and other irritants. Also speeds up your Internet use since the local hosts file by default is checked first, before DNS is used.

For example, to nullify requests to some `doubleclick.net` servers, adding these lines to your hosts file will do it:

{% highlight text %}
# block doubleClick's servers
127.0.0.1     ad.doubleclick.com
127.0.0.1     ad.doubleclick.net
127.0.0.1     ad.ae.doubleclick.net
127.0.0.1     ad.ar.doubleclick.net
127.0.0.1     ad.at.doubleclick.net
127.0.0.1     ad.au.doubleclick.be
127.0.0.1     ad.au.doubleclick.net
127.0.0.1     ad.be.doubleclick.be
127.0.0.1     ad.be.doubleclick.net
127.0.0.1     ad.doubleclick.be
127.0.0.1     ad.doubleclick.de
# etc...
{% endhighlight %}

This is just a small number of DoubleClick's domains --- perhaps 0.5%. There are almost 300 doubleclick entries alone. Order doesn't matter, neither does upper or lower case letters, either is acceptable in DNS.

Note: On some machines `0.0.0.0` may run minutely faster instead of `127.0.0.1`, however the zero version may not be compatible with all systems.

### Mapping with hosts file

You can even map or create shortcuts to certain addresses on your system. For example if you want to create shortcut (human readable address) to an IP address commonly used by routers. Then all you need to add following in hosts file:

{% highlight text %}
192.168.0.1     router
{% endhighlight %}

Here we've mapped hostname `router` to IP address `192.168.0.1`. Now you can simply access router home page at `http://router`.

### Reloading hosts file

Your operating system will cache DNS lookups. You can either reboot or run the following commands to manually flush your DNS cache once the new hosts file is in place.

#### Flush DNS Cache on Linux

Open a Terminal and run:

{% highlight text %}
sudo /etc/init.d/nscd restart
{% endhighlight %}

#### Flush DNS Cache on Mac OS X

Open a Terminal and run:

{% highlight text %}
sudo dscacheutil -flushcache
{% endhighlight %}

#### Flush DNS Cache on Windows

Open a Command Prompt or PowerShell and run (you need to open command prompt as "Run as Administrator"):

{% highlight text %}
ipconfig /flushdns
{% endhighlight %}

#### Flush DNS Cache on Android

Addresses are cached for 600 seconds (10 minutes) by default on Android. Failed lookups are cached for 10 seconds, there is no command set in the console to flush the DNS, because of this you can either wait the default time outs or go for a hard reboot.

#### Flush the DNS on iOS

This is very similar to Android as we have no console access. We have 2 options here to clear DNS cache on iOS, first is reboot and second one is switching to flight mode. Because rebooting takes more time I'd recommend you use flight mode then re-enable standard mode.

### Edit the hosts file with a community created file

If you have a hosts file already, make a backup of it to another directory just in case.

You can create your own hosts file, adding different ad servers you hunt down to your list, but that's a lot of effort. A simpler solution is to use a community created hosts file. You can find pre-made lists of ad network files by googling or get a community provided file from following listed sites:

* MVPs.org Hosts file at [http://winhelp2002.mvps.org/hosts.htm](http://winhelp2002.mvps.org/hosts.htm), updated monthly, or thereabouts.
* Dan Pollock at [http://someonewhocares.org/hosts/](http://someonewhocares.org/hosts/), updated regularly.
* Malware Domain List at [http://www.malwaredomainlist.com/](http://www.malwaredomainlist.com/), updated regularly.
* Peter Lowe at [http://pgl.yoyo.org/adservers/](http://pgl.yoyo.org/adservers/), updated regularly.
* hpHosts at [http://hosts-file.net/](http://hosts-file.net/), updated regularly

Don't worry about a larger file making your PC slower. There is nothing those hosts can do to load anything on your PC. Even the largest files will actually make your PC feel faster.

---

*Currently free websites that depend on advertising revenue would quickly disappear with we blocked all advertising. Please consider whitelisting the domain. Thank you <3*
