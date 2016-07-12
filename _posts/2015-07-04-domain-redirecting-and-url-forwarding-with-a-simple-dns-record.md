---
title: "Domain redirecting and URL forwarding with a simple DNS record"
date: 2015-07-04T01:01:16+05:45
excerpt: "Configure domain redirects and URL forwarding using ALIAS, ANAME, CNAME or TXT record."
redirect_from: "/2015/domain-redirecting-and-url-forwarding-with-a-simple-dns-record/"
---

DNS itself won't redirect the path portion of a URL.

Adding

```text
www.proof.com  IN  CNAME  www.proof-two.com
```

will direct access to `www.proof.com` to `www.proof-two.com`, where you will need to use web server config to direct users to the appropriate page.

If your website is hosted on platform like GitHub Pages, Tumblr or Blogger you won't be able to redirect specific path or subdomain through server side.

Since, here's the following sites which helps you to simply redirect using `ALIAS`, `ANAME`, `CNAME` or `TXT` record:

* [redirect.center](http://redirect.center/){:rel="nofollow"}
* [redirect.name](http://redirect.name/){:rel="nofollow"}

### Using redirect.center

You just have to do is to point a domain to `redirect.center` server and `redirect.center` will perform a DNS lookup and redirect the user to your specified destination.

#### Redirect subdomains

Specify the destination domain as a subdomain of `example.com`. A simple subdomain redirect of `google.example.com` to `google.com`:

```text
google.example.com  IN  CNAME  google.com.redirect.center
```

If you want to redirect any unmatched subdomains to your main domain or another domain then you can also enter wildcard record (*):

```text
*.example.com  IN  CNAME  example.com.redirect.center
```

```text
*.example.com  IN  CNAME  domain2.com.redirect.center
```

#### Options to redirect

Options can be specified as part of a `CNAME`.

For example to redirect `www.oldwebsite.com` to `www.newwebsite.com` with a `302` status code:

```text
www.oldwebsite.com  IN  CNAME  www.newwebsite.com.opts-statuscode-302.redirect.center
```

For example to redirect with a path. If a user try to visit `www.oldwebsite.com/about/` will redirect to path `www.newwebsite.com/about/`:

```text
www.oldwebsite.com  IN  CNAME  www.newwebsite.com.opts-uri.redirect.center
```

`redirect.center` provides options to allow for the flexibility most situations will need.

| Option	               | Description
|------------------------|--------------------------------------------------------------------
| opts-statuscode-{code} | HTTP Status Code to be used in the redirect. 302, [HTTP Status Code](http://httpstatus.es/){:rel="nofollow"}
| opts-uri	             | Append URI (if any) to the target URL

#### Redirect main domain

A root domain (eg: `example.com`) cannot be a `CNAME`, a workaround for this is supported: point the `A` record for the root domain to the `redirect.center` server (`54.84.55.102`) and then create a `CNAME` matching the root domain (using `CNAME` or `TXT` options as described above).

For example to redirect `example.com` to `www.example.com`:

```text
example.com           IN  A      54.84.55.102
redirect.example.com  IN  CNAME  www.example.com.redirect.center
```

To redirect `example.com` to `domain2.com`:

```text
example.com           IN  A      54.84.55.102
redirect.example.com  IN  CNAME  domain2.com.redirect.center
```

*You can find updated usage instructions and examples here: [redirect.center](http://redirect.center/){:rel="nofollow"}.*

---

### Using redirect.name

Everything is configured by DNS. Just point your domain to the service `alias.redirect.name`, add a DNS record to configure your redirect(s), and you're good to go.

#### Redirect subdomains

Specify the destination domain as a subdomain of `example.com`. A simple subdomain redirect of `google.example.com` to `google.com`:

```text
google.example.com            IN  CNAME  alias.redirect.name
_redirect.google.example.com  IN  TXT    Redirects to https://www.google.com
```

#### Options to redirect

Wildcard matches (*) are also supported by `redirect.name`. Any unmatched paths will redirect to specfic page, so it's recommended that you add a wildcard catch-all path when redirecting specific paths.

```text
google.example.com            IN  CNAME  alias.redirect.name
_redirect.google.example.com  IN  TXT    Redirects from /* to https://www.google.com/*
```

Your `TXT` record value should have a human-readable format format like one of the following:

* `Redirects to [target]`, where `target` is the target URL
* `Redirects from [path] to [target]`, where `path` is a path to match on the hostname
* `Redirects permanently to [target]`, where `permanently` redirects with a `301` status code (defaults to `302` otherwise)

#### Redirect main domain

For apex/naked domains, it is recommended that you use an `ALIAS` or `ANAME` record type if your DNS provider supports it. Otherwise, use a plain `A` record, keeping in mind that the IP address may change (or more may be added).

For example to redirect `example.com` to `www.example.com`:

```text
example.com.           IN  A    45.55.72.95
_redirect.example.com  IN  TXT  Redirects to http://www.example.com
```

To redirect `example.com` to `domain2.com`:

```text
example.com.           IN  A    45.55.72.95
_redirect.example.com  IN  TXT  Redirects to http://domain2.com
```

You can find updated usage instructions and examples here: [redirect.name](http://redirect.name/){:rel="nofollow"}.

---

### Other alternatives

A service that does similar to this is [EasyRedir](http://www.easyredir.com/free-url-redirects){:rel="nofollow"}. There are certainly other options out there though, so I encourage you to have a look around.
