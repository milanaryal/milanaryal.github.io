---
title: "How to set up Gmail with a desktop mail clients"
date: 2011-02-24T15:06:36+05:45
last_modified_at: 2016-07-09T17:31:09+05:45
redirect_from: "/2011/how-to-manage-gmail-account-from-microsoft-outlook/"
---

We can set-up Gmail in different desktop email clients like Microsoft Outlook, Apple Mail, or Mozilla Thunderbird. In fact, any email address which lets you enable POP/IMAP can be set up in such mail clients. I recommend using IMAP if possible because it's the best way to make sure you can see all your mail at any time on all of your devices.

To use Gmail in mail clients, first of all, you will need to enable POP/IMAP in Gmail. To do so, go to settings and click on the Forwarding and POP/IMAP tab and select enable POP or IMAP for all mail. Enable POP for mail that arrives from now on or select IMAP if you want to import your old mails and also want to sync all mails on all of your devices as well.

Next, open Outlook, go to Tools and click on email accounts, select the 'Add New Account' and click next. Then select POP/IMAP in the type of server. Then you will need to enter the specifications for Gmail. Enter your own username and password and fill out the following details in the respective fields:

####  Incoming Mail POP (Post Office Protocol) Server

POP creates local copies of emails and deletes the originals from the server, the emails are tied to that specific machine, and cannot be accessed via any webmail or any separate client on other computers.

Server: `pop.gmail.com`  
Port: 995  
Requires SSL: Yes  

#### Incoming Mail IMAP (Internet Message Access Protocol) Server

Compared to POP, IMAP allows users to log into many different email clients or webmail interfaces and view the same emails, because the emails are kept on remote email servers until the user deletes them. In a world where we now check our email on web interfaces, email clients, and on mobile phones, IMAP has become extremely popular.

Server: `imap.gmail.com`  
Port: 993  
Requires SSL: Yes  

#### Outgoing Mail SMTP (Simple Mail Transfer Protocol) Server

SMTP is an Internet standard for electronic mail (email) transmission. SMTP by default uses TCP port 25. The protocol for mail submission is the same, but uses port 587. SMTP connections secured by SSL, known as SMTPS, default to port 465 (nonstandard, but sometimes used for legacy reasons).

Server: `smtp.gmail.com`  
Port: 465 or 587  
Requires SSL: Yes  
Requires authentication: Yes

#### Your login info

Full Name or Display Name: [your name]  
Email address: Your full email address (name@domain.com)  
Password: Your account's password  
Requires authentication: Yes

#### Other resources

* [Use Gmail with Outlook, Apple Mail, or other mail clients](https://support.google.com/mail/topic/3398031?hl=en) --- Gmail Help
