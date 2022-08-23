---
title: "How I protect my time; and you can too."
excerpt_separator: "<!--more-->"
category: technology
classes: wide
author_profile: true
---

In a world more connected than ever, I am constantly solicited to view product demos, by people looking to recruit me to join their team, or by someone offering to buy me a virtual cup of coffee (I'm not actually sure what that even means). I thought to myself:

> "I wish there was a way to filter my inbox to serious senders only." 

So I embarked on a journey.

<!--more-->

## You've Got Mail! 📥 

I don't know about you, but I have trouble keeping up with the onslaught of inbound messages. A few times a week I have to go through the unending pile of messages in my texts, emails, LinkedIn messages, and other social media inboxes. It's a relentless battle against an increasing number opportunities paired with automated messaging software 😬.

What's makes this worse for me is the knowledge that the firms sending these messages have purchased my information. I never expressed any interested in hearing from them. These messages are noise, a distraction! 

For those who aren't aware, buried in the Terms of Service of many free-to-use websites is language forfeiting your rights to digital privacy. Companies regularly buy and sell our information. I find it insane 🤯 that there exists a marketplace for people's information, but this is the world we live in. 

An expression that helped me understand what's happening when I sign up for that free Google, LinkedIn, Facebook, and many other accounts:

> "If you're not paying for the product, you are the product."  

This gave me an idea. If companies are going to sell my information to marketers, then I should be able to put up a paywall between me and those seeking to gain my attention.

I shared my harebrained scheme to shield my inboxes behind a paywall with a friend. He pointed me to an excerpt from Cal Newport's [Deep Work](https://amzn.to/3AjXJIg) <small>(Affiliate Link)</small>.

> Consider consultant Clay Herbert, who is an expert in running crowd-funding campaigns for technology start-ups: a specialty that attracts a lot of correspondents hoping to glean some helpful advice. As a Forbes.com article on sender filters reports, “At some point, the number of people reaching out exceeded [Herbert’s] capacity, so he created filters that put the onus on the person asking for help.”
>
>Though he started from a similar motivation as me, Herbert’s filters ended up taking a different form. To contact him, you must first consult an FAQ to make sure your question has not already been answered (which was the case for a lot of the messages Herbert was processing before his filters were in place). If you make it through this FAQ sieve, he then asks you to fill out a survey that allows him to further screen for connections that seem particularly relevant to his expertise. For those who make it past this step, Herbert enforces a small fee you must pay before communicating with him. This fee is not about making extra money, but is instead about selecting for individuals who are serious about receiving and acting on advice. Herbert’s filters still enable him to help people and encounter interesting opportunities. But at the same time, they have reduced his incoming communication to a level he can easily handle

This seemed liked a very reasonable thing to do. It serves two purposes -
1. It increases friction for solicitors. In theory, I'll only be hearing from serious senders. 
2. If you are going to purchase my contact info, I should receive some benefit. 

I decided to try Herbert's tactics for myself. 

Below you'll read how I implemented my paywall, with general purpose instructions so [you can do this yourself](#how-you-can-do-the-same). 


## First Attempt

### 👋 Hi, do I know you? 
My first idea for keeping messages out of my inbox was to start with a simple inbox rule.

A naïve approach for identifying important messages was to partition my inbox into 2 groups - People in my contacts, and people not in my contacts.

Seemed simple enough...except Gmail doesn't have such a filter rule. 🧐

Fortunately, [I'm not the first person to have had this thought](https://webapps.stackexchange.com/a/142685). Thankfully, Gary Holeman has written and shared a Google App Script to automatically label messages based on the sender! He also uploaded a helpful [Youtube tutorial](https://youtu.be/W98z0wYKK8c) showing exactly how to set this up. 

I was able to get this working in less than 30 minutes. 👏 Thanks, Gary! 👏

With this script in place, messages from senders in my contact list are now labeled `Contact` and messages from senders outside my contact list are labeled `Filtered`.

Onward!

### 🤖 Auto Reply
Assigning the `Contact` and `Filtered` labels is a great first step for determining who should potentially encounter my paywall.

The next obstacle is how to automatically reply with the paywall. Turns out Gmail doesn't offer a convenient way to do this either 😡.

Unsurprisingly, this too is a solved problem. Whether you choose to use an if this than that (IFTTT) task automation tool such as one of [Zapier's Gmail automations](https://zapier.com/apps/gmail/integrations/gmail/10331/auto-respond-to-gmail-emails) or by writing [yet another Google App Script](https://webapps.stackexchange.com/a/47691), one can auto-reply with the paywall message to emails labeled `Filtered`.

With all this in pace, I wrote up my message and configured the automation script to send my reply to the sender of any message labeled `Filtered`.

#### ⭐️ Bonus: Declutter your Inbox

You may recall from above that one of my goals was to keep my inboxes from filling up with unwanted messages. Assigning labels of `Contact` or `Filtered` is a useful mechanism for partitioning messages, but it doesn't reduce the total number of messages I have to filter through.

After some digging, I discovered a feature of Gmail that I'm willing to bet you've haven't noticed. 

[Multiple Inboxes](https://support.google.com/mail/answer/9694882?hl=en)!

In a nutshell, multiple inboxes partition your emails using Gmail's [query syntax](https://support.google.com/mail/answer/7190?hl=en). 

Building on the automated label assignment, I can now deprioritize `Filtered` messages!

![Multiple Inboxes Screenshot](/assets/images/posts/paywall/multiple-inboxes.png)

In the screenshot above, I've set up two things.
1. Filtered messages, using the query syntax `label:Filtered`, are given their own inbox.
2. `Multiple inbox position: Below the inbox`, pushes `Filtered` messages below the fold.

![Filtered Inbox Result](/assets/images/posts/paywall/filtered-inbox.png)

The last and final requirement is to allow people through the paywall.

### 💰 Getting paid.

Being a technologist at heart, I started brainstorming how technically to facilitate payment and automate the promotion of `Filtered` messages into my `Inbox`. 

For me, the most obvious option was to use blockchain. I know I might lose some of you here. The world of crypto can be intimidating. If you're not feeling the crypto choice, feel free to substitute "public wallet address" with your Venmo, Cash App, etc. url. The reason I went crypto is because wallet addresses are easy to procure and reasonably safe to share widely. I made a brand new Bitcoin (BTC) wallet and Ethereum (ETH) wallet just for handling paywall related transactions. Since filtering and auto-replying is happening behind the scenes, I won't know who will be receiving my account information without some digging. I decided a dedicated account would limit risks of malicious actors knowing my primary account information.

One option I came up with was to use a hashing algorithm on the message object. Before auto-replying the paywall to the sender, hash the message and include the resulting checksum in the paywall message body. I would then instruct the payer to include that checksum in the transaction memo. 

The last step is to build a third and final Google App Script which periodically check transactions on the BTC or ETH blockchains. If the script detects a transaction to any of my associated public wallet addresses, look at the memo, pluck the hash from the memo, find the message in my inbox matching that hash, and remove the `Filtered` label. 

While this is easy to say in words, implementing all this felt way out of scope for my proof of concept. I decided having the payer send a screenshot of a successful transaction would suffice, for now. 

If any of my readers decided to build out this automation, services like [The Graph](https://thegraph.com/en/) provide the necessary infrastructure and interfaces to search and index transactions on blockchains. One could publish a subgraph to aggregate paywall transactions and provide a simple interface for the App Script to identify which messages to push through.

A future me problem 🙂

## Shortcomings

Technically speaking, my first attempt meets most of my objectives. As far as getting through the paywall, while I didn't implement it outright, I more or less know how I could build it if I felt so inclined.

However, there are some very obvious issues with this particular implementation.

1. Messages from _all_ unknown senders are treated as solicitation emails. Given the lack of intelligence in how messages are partitioned, I would still have to open up that `Filtered` Inbox periodically to make sure I wasn't missing important communications. This negates the efficacy of the separate inbox. Now I have to go two places instead of one. 
2. It only works with Gmail accounts. The above solution won't work for any of my other inboxes.
3. I'm auto-replying a paywall to _everybody_ who is not in my contact list. An approach like this can work for some, but the shotgun approach lacks the polish I expect of myself.
4. On my [serendipity](/serendipity) page, I say that I'm interested in hearing from people. A paywall feels antithetical to that message. I need to add intelligence to the process, the paywall is primarily intended for solicitors.

With all that in mind, I deleted all the Google App Scripts and I reverted my Gmail Inbox back to `Default` settings. 

I had lost the battle, but the war isn't over.

## Scope Creep

With my newly created BTC and ETH wallets, and an auto-reply to send, I decided to change my strategy. 

My primary goals were to reduce the noise to serious senders and to be compensated by those who wished to solicit to me in some way. After reflecting on the learnings from my [first-attempt](#first-attempt), I now had two new requirements - 

1. Be selective about who receives my paywall.
2. It need to be general purpose; Gmail filters aren't enough.

The simplest way I could think to accomplish this is to save my auto-reply to a file somewhere and use it as needed. If I decide to put a paywall between me and a sender, I could simply open up my template, copy, paste, send.

This felt like a pretty big step backwards. I went from having an [almost] automated paywall and regressed back to copy paste 😬.

Then it clicked!

## How you can do the same.

If you're an iOS user and you've ever typed `omw`, you may have noticed that your iPhone will replace that text with `"On my way!"`. What if we used this feature as a means to produce the paywall! Moreover, by using iCloud's sync utility, I can now access this text replacement across all my devices, and on multiple messaging protocols 🏆.

### Setting up Text Replacement.

[This Apple User Guide](https://support.apple.com/guide/mac-help/replace-text-punctuation-documents-mac-mh35735/mac) gives step-by-step instructions on how to setup text replacements.

One detail worth calling out, if you setup text replacement on iOS, [which you can](https://support.apple.com/en-us/HT207525), it will not allow the use of multi-line messages.

Fortunately, [yet another solved problem](https://superuser.com/a/1541766). 

From my Mac, I configured a text replacement to substitute `paywall` with my auto-reply, synced it through iCloud, and voilà!

![Paywall Setup](/assets/images/posts/paywall/paywall-setup.png)

### For Android users.

I don't have any Android devices, so I can't confirm this works, but [this article](https://www.wikihow.com/Add-Custom-Text-Shortcuts-to-Android) suggests a similar tactic is possible using Android Text Shortcuts. 

### Seeing it in action.

![Paywall In Action](/assets/images/posts/paywall/paywall-in-action.gif)

## Conclusion

Admittedly, this is far from automation, but I'm actually very happy with the solution.

Typing `paywall` requires little effort on my part. It allows me to be selective about who must overcome the additional friction. It works across my phone, tablet, and laptop. It can be used with SMS, Outlook, Gmail, LinkedIn, Facebook, and other social media platforms. Lastly, it reduces the noise in my inbox! When you ignore a message, solicitors typically follow up at least once, sometimes as much as 4 or 5 times! By sending this 2 second reply, the additional pings have seemingly disappeared 😉. 

I really hope you get some value out of this read, and can apply this to your individual situations. If you have any other ideas for how to use text replacements, please [head over to Reddit for further discussion](https://www.reddit.com/r/bithippie/comments/ww0mkf/how_i_protect_my_time_and_you_can_too/).

✌️