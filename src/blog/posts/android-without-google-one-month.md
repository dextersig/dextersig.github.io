---
title: "Trying Completely Degoogled Android: One Month Later"
date: 2024-04-23T12:00:00-06:00
---
Hello! This article is a followup on the previous article "Trying Completely Degoogled Android: Three Days Later", where I took my Google Pixel 7 and installed a custom version of Android that had no dependency on Google whatsoever.

I'd highly recommend going back and reading the "Three Days Later" article before this one; it highlights the process of setting up my Google Pixel 7 without Google Play Services, and some of the struggles that came with it. This is a smaller article to follow up on the original thoughts while I work on some larger articles in the background. 

#### Banking Apps
Turns out that my bank's mobile app works just fine without Google Play! After last time, where an e-transfer was detected as fraud by my bank, I logged into the app and it worked pretty much flawlessly. At the time, I thought it was because I had accidentally signed into the web portal on a VPN, but the employees told me it was more likely flagged because the amount I had transferred was very small (and could be less easily noticeable by a victim in that situation). Banking apps are one of more infamous categories of apps when trying to remove Google Play from a phone, but I happened to luck out.

#### Battery Life and Push Notifications
One of the more noticeable things with using a degoogled phone was battery life. Most apps are reliant on Google Play Services to send push notifications to the user. Any exceptions to this rule, such as Signal, have to run their own push service. The problem is when every app has to run their own push service, it can have a noticeable (albeit not unusable) effect on battery life.

Even more annoying is when apps that would benefit from their own push notification service don't have one implemented. By a landslide, the largest annoyance I have with my current workflow is Proton Mail. As of right now, I have to manually check the app for new emails, which is especially annoying considering that other Proton apps have perfectly functioning notifications, AND [the other email app that I have on my phone](https://k9mail.app/) for my school email has working notifications!! It's annoying enough that for anyone interested in the degoogling process who isn't already heavily invested into the Proton ecosystem, I'd recommend a [Tuta email](https://tuta.com/), where their app has their own push service. 

#### Web Browsers
When writing the "Three Days Later" article, I mentioned that I used Brave Browser. It still worked just as good as before deleting Google Play Services. Even though Brave is a great browser, I decided to move my main browser to something that isn't based off of Chromium. I chose Mull Browser, a privacy and security oriented fork of Firefox. Besides not supporting a couple PWA apps that I liked to use, it's been working just as well as Brave. I still use Brave on top of Mull for those PWA's that don't function properly, as well as for running into compatibility issues with Mull.

#### Sometimes, Less is More
One thing I've noticed about myself is that I spend a lot less time on my phone when Google Play Services aren't installed. My guess is that it's a combination of lesser access to the most popular games and social media apps, as well as generally being more aware about what I'm installing on my phone.

#### It's Working For Me!
So yeah, I plan to stay with it in the long term! Everything that I need to work is still working, and there's a massive privacy benefit in having zero Google services running on the phone. 