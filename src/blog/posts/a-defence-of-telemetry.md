---
date: 2024-03-23
title: "A Defence of Telemetry"
---
Telemetry is a definitely a dirty word in the privacy sphere, and for good reason. The term is often associated with the disgustingly large amounts of data collected by Google, Meta, Microsoft, so on and so forth. Today, I write to argue in favour of telemetry... sometimes... when it's done right. There's a lot of conditions, but it *can* be done correctly.

Yes, obviously there's lots of privacy-invasive telemetry out there. I'm not trying to claim that all telemetry is acceptable, or even that all privacy-oriented software has acceptable telemetry (Looking at you, Mozilla!).  

With that being said, the problem with actively opposing telemetry for privacy reasons is the assumption that it is inherently privacy invasive. Now, that sounds contradictory. After all, how does a developer collect extra information without breaching privacy? Let's talk about some examples of services that I use daily, with telemetry enabled by my personal choice:

### Proton Suite
Yup, Proton Mail/Calendar/Drive/VPN/Pass, the Google suite replacement. One of the best known privacy services out there has telemetry enabled *by default*. Creepy, right? Well, hold your horses for just a second, because it's a lot better under the surface.

For starters, while it isn't explicitly stated in the settings, they confirmed [in response to a Reddit post](tab:https://www.reddit.com/r/ProtonMail/comments/w21g41/deleted_by_user/) as well as their [privacy policy](tab:https://proton.me/legal/privacy) that all of the data they collect through these telemetry options is both completely anonymous, and never sold to any third parties. That's definitely a good start!

But what data do they collect in the first place? Well, the two toggles in the privacy settings are for "Usage Statistics" and "Crash Reports", both very reasonable things to collect.
* Crash reports are obviously used to make the apps more stable, without this information the apps would have noticeably more problems.
* Usage statistics are a little bit tougher, but all we have to do is look at Firefox to understand. Most privacy-oriented modifications to Firefox, whether it be a fork or user.js profile, strip Mozilla's telemetry out of the program. Now consider how [lots of privacy enthusiasts are upset with direction Firefox has taken.](tab:https://www.youtube.com/watch?v=ugnOM2mzgNU) Without feature usage statistics, Proton, as well as other application developers, are basically flying blind as to what their customers want. 

Proton is basically the perfect example of what I *expect* from telemetry, the right balance between beneficial to the developers while still respecting user privacy. It's completely anonymous, very clear what they collect and what it's used for, and very easy to opt-out. Even though I pay the subscription for Proton Unlimited, I still have their telemetry enabled to further help the service improve.

### KDE
KDE is a Linux desktop environment that's very strongly recommended by privacy enthusiasts. Why does it have *any* telemetry at all? Well, the justification behind this is in the details:
* All telemetry is opt-in. Users have to actively search out the telemetry options and enable it.
* They're very clear about the fact that they do not collect personal data, files, visited websites, or any identifying information at all.
* They explicitly say that all telemetry is entirely anonymous.
* There are multiple different levels of information that can be shared by the user, and they're very clear about what gets sent at every level.

This is about as far as I'd expect any developer to go with privacy respecting analytics, without just flat out removing all telemetry. Being opt-in, *and* very well hidden means that the vast majority of users won't enable it, especially with the main demographic being privacy enthusiasts. 

### Brave Browser
Brave has had it's fair share of controversies, but the way they handle telemetry is pretty good. Upon booting up the browser for the first time, users are given the option to disable all telemetry. It's opt-out, sure, but it's made very easy to find and disable, especially during the first boot.

The only telemetry that isn't explicitly labelled anonymous is crash reports, for stability improvements. Both their product analytics, and daily usage ping for estimating user count are entirely private. All three options are given separate toggles in the privacy settings, so a user can enable whichever options they'd like.

Brave is also a perfect example of what happens to these sorts of products *without* any telemetry. One of the strongest elements of the Brave Browser is their randomised fingerprint protection; it's second to the Tor Browser, but without any of the speed penalties. However, a few months ago [Brave decided to remove their stricter fingerprinting option that would break some websites](tab:https://brave.com/privacy-updates/28-sunsetting-strict-fingerprinting-mode/). One of their main reasons for the decision was their analytics suggesting less than 0.5% of users enabled the feature. The thing is, most people enabling strict fingerprint protection are the same type of people to disable all telemetry. **In this instance, disabling telemetry actively hurt the privacy options of users.**

### So what does acceptable telemetry look like?
This really depends on what your threat model looks like! Some people are digital ghosts, and want absolutely nothing tracked about them. For those use cases, I agree that telemetry of any amount is unwanted. My only concern with digital privacy is trying to be more aware of surveillance capitalism, and by extension unethical use of our personal data by big corporations. (Side note to myself; differing threat models would make for a really good post later on!)

Here are the traits that I look for before enabling telemetry of any kind on the programs I use:
* It's either opt-in, or very *very* easy to opt-out.
* The developer is very clear about what data is collected and why.
* All of the data collected is reasonable for improving their service.
* The telemetry is anonymous and cannot be tied back to my account.
* The developer doesn't sell the telemetry to any third parties.

Telemetry, when implemented ethically, is a good thing. We've seen with Firefox, and especially Brave, how telemetry can affect the decisions that developers make with their products. As someone that's enthusiastic about some of these services being able to hit the mainstream, I like to enable telemetry to help the developers create a better product where I can, so that hopefully privacy can one day become the default rather than the niche.