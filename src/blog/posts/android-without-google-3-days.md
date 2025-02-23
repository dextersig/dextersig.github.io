---
title: "Trying Completely Degoogled Android: Three Days Later"
date: 2024-03-27
---
While I was doing research for switching to a more private phone, something that was really important to me was the ability to easily "Degoogle", or remove any Google Services from the phone. Despite my choice of (ironically) a Google Pixel 7 for compatibility with GrapheneOS, I still had their sandboxed Google Play Services installed for a long time. As of March 25, 2024, I've officially reset my phone, and chosen NOT to install Google Play Services again. Let's talked about what's worked great so far, as well as what's been problematic.

### The Good

#### [GrapheneOS](https://grapheneos.org/)

My experience with GrapheneOS so far is surprisingly phenomenal. Their main claim to fame is their sandboxed Google Play Services, which have to be installed by the user. It works exactly like regular Google Play Services, but it's treated like any other app, meaning the user can go in and restrict access to things like location or health data. It's an excellent feature, and extremely difficult to implement correctly, so props to the developers for the stability and ease of use.

Unfortunately, the entire point of this experiment is to move away from Google Play Services altogether. This meant I couldn't install Sandboxed Google Play Services, but GrapheneOS still works amazingly. They've implemented security fixes that the stock Pixel devices haven't yet, and have a couple extra cool features like scrambled PIN codes.

I'd recommend anyone with a Pixel phone reading this to at least do some research and see if GrapheneOS with sandboxed Google Play Services is something that could work for them. [Their website has a great FAQ](https://grapheneos.org/faq) that answered a lot of the questions I had when I started out. Literally every app I used worked after some configuration, and it's pretty easy to get going thanks to their web-based installer. It's ironic that Google Pixel phones are the only supported devices at the moment, but it's still an excellent alternative to the stock operating system, and I plan to donate to help development.

#### Messaging

I expected messaging to be particularly difficult, and was pleasantly surprised. Despite using four different messaging apps, only one didn't maintain full functionality, which I'll talk about later.

* Signal: This was one of the easiest apps to transition to a device without Google Play Services, but also one of the most complex under the hood because of Signal's minimal data collection. The good news was that the official client was designed to work this way, notifications and all. The bad news was that I had to create a backup of all my messages onto a flash drive in order to transfer it over. Thankfully, the backup worked pretty much flawlessly, and I've been running the app exactly the same as I was before. This is another service alongside GrapheneOS that I plan to donate to.

* Telegram: [Telegram FOSS](https://github.com/Telegram-FOSS-Team/Telegram-FOSS) is a fork of the official Telegram client, designed to remove all of the proprietary blobs of the official client. Using this client was vital, as notifications wouldn't work otherwise (I'll talk about this later). The nice part is that all the messages transferred over without a backup, something I couldn't say about any other app in this category.

* Whatsapp: The messaging app that I use by far the least, which is a good thing because I couldn't find a way to perform a message backup without signing into a Google account. It's really annoying that I'm locked into using it by only a couple important group chats, but at least it does still work.

#### Open-Source Apps I was already using

These are applications that I just happened to be using that were already open source and designed to work without Google Play. 
* [Feeder](https://github.com/spacecowboy/Feeder) - My RSS Feed 
* [Grayjay](https://grayjay.app/) - a YouTube/Twitch/Nebula/etc client with solid privacy compared to the native clients.
* [Tusky](https://tusky.app/) - Mastodon client
* [Notesnook](https://notesnook.com/) - Encrypted Note-taking app

#### Google Play Store apps that just work??

Yeah, this was by far the most surprising thing to me. There's more than a few apps on the Google Play Store that work pretty much flawlessly without any problems on a degoogled phone, and GrapheneOS's protections make the apps more private than they would have been on a standard Google Pixel. I chose to install these apps without signing into a Google account through [Aurora Store](https://github.com/whyorean/AuroraStore). [Plexus](https://plexus.techlore.tech/) was a great start for researching what needed to be switched for an alternative, and what would just work anyway.

### The Bad

#### RCS Messaging

This was the one messaging app with issues I eluded to earlier. Google's implementation of encrypted RCS messaging only works with Google Play Services installed. Hopefully, things will change with [Apple promising RCS support for iPhones in 2024](https://9to5mac.com/2023/11/16/apple-rcs-coming-to-iphone/). Until then, I'm stuck with yucky SMS and MMS texting, ugh.

Worst case scenario, GrapheneOS has a messenger built-in, so I would be able to text in some form. I still wanted a nicer looking replacement, which is where [QUIK Messegner](https://github.com/octoshrimpy/quik) came in. Notifications are a minute or two late sometimes, but they do work. I used [SMS Import/Export](https://github.com/tmo1/sms-ie?tab=readme-ov-file) to transfer over messages and call logs from my previous phone, and it worked perfectly fine.

#### Notifications

As I eluded to earlier, a lot of apps rely on Google Play Services to deliver notifications properly. In fact, with Sandboxed Google Play Services on GrapheneOS, a toggle has to be enabled for unrestricted battery use in order for most notifications to arrive on time. This is why I had to use Telegram FOSS; All of the messaging apps have their own push notification service that run in the background to allow texts to arrive on time.

Unfortunately, not all of the apps I use have implemented a workaround. Proton Mail is the hardest pill to swallow; they've been talking about implementing notifications without Google Play Services for awhile now, but have yet to actually do it. Any social media I use like Discord or Mastodon, as well as my browser also don't have working notifications without having the app open in the background. There's enough apps with working notifications that it's bearable, but it's still by far the most annoying aspect of degoogling.

#### Banking

Banking apps are infamously reliant on Google Play Services. In fact, lots of them must have the "Exploit Protection Compatibility Mode" enabled in GrapheneOS for them to function. I just assumed my banking app wouldn't work, and decided to switch to the website portal for what I needed to do.

This was my biggest mistake so far, as I forgot about my VPN being connected. The bank locked my account because of a suspicious login from far away, even though it was my device. In one aspect, it's reassuring that they're watching that close to make sure my money doesn't get stolen. On the other hand, I still need to check the functionality of the native app, but if it doesn't work without Google Play Services, I don't have a great alternative for banking on my phone.

### I plan to stick it out for now!
The issues that I've had so far, as big as they might be, are few and far between. Being able to work independently of Google Play Services with minimal changes to my workflow is really awesome for my digital privacy. With standard Google Play Services, especially on a Google Pixel phone, Google can track nearly everything about a user and tie it to their Google account. In my opinion, without all of that bloat and spyware, Android and GrapheneOS is better than IOS and the iPhone XR i upgraded from. 

If anyone out there is looking to try this for themselves, my recommendation is to not do everything all at once. Start by looking into GrapheneOS with sandboxed Google Play Services, or by looking into what apps you can replace or delete that rely on Google Play Services. Progressive Web Apps are also very helpful, they won't require Google Play Services as long as the browser doesn't require it either. It took me almost a year to get to a point where I could comfortably delete Google Play Services entirely, and even then I'm still running into a couple big problems. 

I plan to write about this again in a month or two, when I've had more time to look into solutions for the problems I'm having, or catch new problems that I haven't seen already.