---
title: "How to block unsafe websites and ads with the hosts file"
date: 2015-07-10T04:33:10+05:45
excerpt: "Blocking unwanted sites and ads in all of your applications globally and speed up browsing with the hosts file on your PC."
---

Browser extensions like [Adblock Plus](http://adblockplus.org/en/) are very popular to blocking various annoying ads. But these are for only browsers what if you want to block these annoying ads globally in your PC for every applications, so here's the hosts file to help you.

### What is a hosts file?

A hosts file, named `hosts` (with no file extension), is a plain-text file used by all operating systems to map hostnames to IP addresses.

In most operating systems, the `hosts` file is preferential to `DNS`.  Therefore if a host name is resolved by the `hosts` file, the request never leaves your computer.

Having a smart `hosts` file goes a long way towards blocking malware, adware, and other irritants. Also speeds up your Internet use since the local hosts file by default is checked first, before DNS is used.

#### Blocking with hosts file

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

#### Redirecting with hosts file

You can even redirect or create shortcuts to certain addresses on your system. Like if you want to create shortcut to an IP address commonly used by routers. Then all you need to add following in hosts file:

{% highlight text %}
192.168.0.1     router
{% endhighlight %}

Now if you visit `http://router`, then the default `192.168.0.1` router home page will open.

### Location of your hosts file

To modify your current `hosts` file, look for it in the following places and modify it with a text editor.

**Mac OS X, iOS, Android, Linux**: `/etc/hosts` folder.

**Windows**: `%SystemRoot%\system32\drivers\etc\hosts` folder.

Typical hosts files will contain networking entries like this:

{% highlight text %}
127.0.0.1     localhost # IPv4
::1           localhost # IPv6
{% endhighlight %}

### Reloading hosts file

Your operating system will cache DNS lookups. You can either reboot or run the following commands to manually flush your DNS cache once the new hosts file is in place.

#### Mac OS X

Open a Terminal and run:

{% highlight text %}
dscacheutil -flushcache
{% endhighlight %}

#### Windows

Open a Command Prompt and run (you need to open command prompt as "Run as Administrator"):

{% highlight text %}
ipconfig /flushdns
{% endhighlight %}

#### Linux

Open a Terminal and run:

{% highlight text %}
/etc/rc.d/init.d/nscd restart
{% endhighlight %}

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

*Currently free websites that depend on advertising revenue would quickly disappear with we blocked all advertising. Please consider whitelisting the domain. Thank you :heart:*
