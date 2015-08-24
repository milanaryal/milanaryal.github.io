---
title: "Using GitHub's Atom text editor"
date: 2015-01-01T15:22:14+05:45
excerpt: "A hackable text editor for the 21st Century."
redirect_from: "/2015/01/using-githubs-atom-text-editor/"
---

I always had been using simple text editor like Notepad++ and Sublime Text. I never really did like Dreamweaver. For me it was too complicated by trying to be everything. I truly believe in and appreciate simplicity. But days comes like where I have to work with other language like Markdown, Textile.. So, I was in search for another simple text editor so that I can easily work with those language.

In search for a new alternative text editor for Sublime Text, [alternativeto.net](http://alternativeto.net/software/sublime-text/) provided me with options like Brackets, SciTE, Atom, Programmer's Notepad,... There's a wide range of these and I tried Atom because I found it is a open source project by GitHub and I always been fan with the GitHub.

I really impressed with the awesome [Atom text editor](//atom.io/), a hackable text editor for the 21st Century.

Github's Atom Text Editor, is really AWESOME! I'm a huge Notepad++ and Sublime Text fan, but I switch to GitHub Atom.

### Why Atom will be your favorite text editor

There are no lack of text editors, be it for Linux, Mac or Windows. However, the developers of Github feel that all the existing text editors are not up to their standard and decided to build their own text editor. As a result, Atom was born. Termed as "a hackable text editor for the 21st century," Atom comes with plenty of useful features not found in other text editors, and within the short time that it has been around, it has already won praises from many developers.

Atom is written using Node.js, CoffeeScript, HTML and LESS. It's then wrapped in a WebKit wrapper, so it will be super-easy to make packages for. It's truly a great text editor.

It's clear one of their primary goals is to cater to web developers, being that packages are web language based.

#### So actually, what is Atom text editor?

According to Atom wiki,

> A hackable text editor for the 21st Century.
>
> At GitHub, we're building the text editor we've always wanted. A tool you can customize to do anything, but also use productively on the first day without ever touching a config file. Atom is modern, approachable, and [hackable to the core](//github.com/atom/atom). We can't wait to see what you build with it.

---

### Why you should switch to GitHub's Atom text editor over Sublime text

Sublime text is nice but
here are some [arguments I found](http://stackoverflow.com/questions/22126078/what-is-the-difference-between-sublime-text-and-githubs-atom), why you should **switch to Atom text editor over Sublime text** which you might curious to know:

#### What is the difference between Sublime text and Github's Atom?

In addition to the points from prior answers, it's worth clarifying the differences between these two products from the perspective of choices made in their development.

Sublime is binary compiled for the platform. Its core is written in C/C++ and a number of its features are implemented in Python, which is also the language used for extending it. Atom is written in Node.js/Coffeescript and runs under webkit, with Coffeescript being the extension language. Though similar in UI and UX, Sublime performs significantly better than Atom especially in "heavy lifting" like working with large files, complex SnR or plugins that do heavy processing on files/buffers. Though I expect improvements in Atom as it matures, design & platform choices limit performance.

The "closed" part of Sublime includes the API and UI. Apart from skins/themes and colourisers, the API currently makes it difficult to modify other aspects of the UI. For example, Sublime plugins can't interact with the sidebar, control or draw on the editing area (except in some limited ways eg. in the gutter) or manipulate the statusbar beyond basic text. <del>Atom's "closed" part is unknown at the moment, but I get the sense it's smaller.</del> Atom has a richer API (though poorly documented at present) with the design goal of allowing greater control of its UI. Being closely coupled with webkit offers numerous capabilities for UI feature enhancements not presently possible with Sublime. However, Sublime's extensions perform closer to native, so those that perform compute-intensive, highly repetitive or complex text manipulations in large buffers are feasible in Sublime.

<del>Since more of Atom will be open,</del> Github open-sourced Atom on [May 6th, 2014](//github.com/blog/1831-atom-free-and-open-source-for-everyone). (Atom is [MIT licensed](https://raw.githubusercontent.com/atom/atom/master/LICENSE.md) and the source is freely available from the [atom/atom repository](https://github.com/atom/atom).) As a result it's likely that support and pace of development will be rapid. By contrast, Sublime's development has slowed significantly of late --- [but it's not dead](http://www.sublimetext.com/forum/viewtopic.php?f=2&t=15477&start=60#p58951). In particular there are a number of bugs, many quite trivial, that haven't been fixed by the developer. None are showstopping imo, but if you want something in rapid development with regular bugfixing and enhancements, Sublime will frustrate. <del>That said, installable Atom packages for Windows and Linux are yet to be released and activity on the codebase seems to have cooled in the weeks before and since the announcement, according to Github's stats.</del> Now prebuilt versions of Atom are available for OS X 10.8 or later, Windows 7 & 8, RedHat Linux, and Ubuntu Linux.

In terms of IDE functions, from a webdev perspective Atom will allow extensions to the point of approaching products like Webstorm, though none have appeared yet. It remains to be seen how Atom will perform with such "heavy" extensions, since the editor natively feels sluggish. Due to restrictions in the API and lack of underlying webkit, Sublime won't allow this level of UI customisation although the developer may extend the API to support such features in future. Again, Sublime's underlying performance allows for things that involve computational grunt; ST3's symbol indexing being an example that performs well even with big projects. And though Atom's UI is certainly modelled upon Sublime, some refinements are noticeably missing, such as Sublime's learning panels and tab-complete popups which weight the defaults in accordance with those you most use.

I see these products as complementary. The fact that they share similar visuals and keystrokes just adds to the fact. There will be situations where the use of either has advantages. Presently, Sublime is a mature product with feature parity across all three platforms, and a rich set of plugins. <del>Atom is the new kid whose features will rapidly grow; it doesn't feel production ready just yet and there are concerns in the area of performance.</del>

---

### Things on point

#### How is Atom different from Sublime?

* Atom is an open source text editor/IDE, built on JavaScript/HTML/CSS.
* Sublime Text is a commercial product, built on C/C++.
* Comparable to Atom is [Adobe Brackets](http://brackets.io/), another open source text editor/IDE built on JavaScript/HTML/CSS. Be minded that this makes Brackets more oriented towards Web development, specially in the front end.
* Advantages of open source projects are faster rate of development and, of course, price.

#### Does it include IDE features like build tools, function definition jumps, documentations, etc.?

* The short answer is yes, yes, and yes. The app is completely modular. Open source will give people the freedom to fill the gaps on several of these features.

#### Has anyone using Sublime point out the differences?

* Advantages of Atom is entry-level hackability, since it's built on the same code that powers Web sites.
* Advantages of Sublime Text is performance, as it doesn't need to run on top of Node.js, and it's a more mature product, about to reach a stable version
* There are a long list of minor differences that can be included in the comments (I wish this markdown could be able to draw a table for comparisons, but that's another issue).
* Because of Atom's rapid turnout, I am afraid some of differences I list here will become outdated over time.

#### Can I use the themes, schemes and packages from Sublime as is, like Sublime could do with text mate?

* The short answer is no, but because of Atom's hackability, it will be easy to retool packages from other editors to Atom.

---

More features on Atom are still coming and it is impressive. The fact that it is built on Web technologies makes it fully customizable and extensible. Modelling after Sublime Text’s look and feel is also a good idea, as it can reduce (or eliminate) any learning curve when switching from another text editor. I can definitely see it getting better in the future. If you have not tried it, do give it a try. I am sure you will love [Atom text editor](//atom.io/).
