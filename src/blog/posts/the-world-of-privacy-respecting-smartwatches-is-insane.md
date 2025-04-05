---
title: The World of Privacy-Respecting Smartwatches is Insane.
date: 2024-02-21T12:00:00-06:00
---

Hoo boy. Smartwatches and privacy get along about as well as fire and oil. The main advantage over a traditional analog watch is in direct conflict with what privacy enthusiasts want; devices that are capable of tracking your sleep patterns, heart rate, stress levels, location, movement speed, and many other body traits are an absolute no-go. This isn't helped by the fact that most smartwatches upload data back to the servers of the company that maintains the product. Most people concerned that Google is tracking their browsing habits aren't exactly thrilled by the idea of that same company selling data about their sleeping habits to advertisers.

So, these devices are some of the worst for digital privacy right alongside electric cars and IoT appliances. Around the summer of 2023, when I started taking my own digital privacy more seriously, I decided to switch from Apple to a privacy-focused Android operating system. Thankfully, I wasn't hard locked into Apple's ecosystem at the time, just an iPhone XR on it's last legs and... the Apple Watch. Rats.

I decided to research what options existed for a privacy-respecting smart watch. I wanted something that could communicate with my new Android phone, now that my Apple Watch was becoming a glorified paperweight. I also wanted something with the absolute bare minimum in health tracking, a heartbeat sensor. I thought these requirements were very simple, but I still didn't expect very many options to exist. In retrospect, maybe those requirements were a little... too simple.

Buckle in. From fully functioning computers that fit around the wrist, to digital watches that have designs older than me, this is the comprehensive list of every option I considered when hunting for a privacy-respecting smartwatch.

## Casio F-91W

Alright, I know, okay? Just... listen. **Hear me out.**

Does it have communication with any external computer, never mind an Android phone? No, smartphones didn't really... well, didn't really exist when this first released in 1989.

Does it have any tracking sensors whatsoever? Again, no.

Does it even really qualify as a smartwatch? Probably not.

But for 20-30 Canadian dollars? It's *really* hard to complain. it's cheap enough to be an accessory to a regular smartwatch. It even carries some advantages over the several hundred dollar mini computers. Obviously price, but also longevity too! It has a coin battery that will last for years, if not decades. It's also a really tough nut to crack, capable of standing up many different extreme enviornments, and even being able to survive a good swim. It's actually not a terrible companion to what most people consider a proper smartwatch.

And here's where I pull the rug out: **some mad scientist out there turned the thing into a smartwatch.**

[Sensor Watch](https://www.crowdsupply.com/oddly-specific-objects/sensor-watch) is a tiny hackable micro-controller that fits right inside the F91W shell, where the original electronics went. There's no wireless connectivity, and no modifications to the rest of the watch , meaning that any code that runs stays locally on the watch. No modifications also means it uses the original segmented screen of the F91W, so the battery still lasts upwards of a year. It can be turned into a digital thermometer, a sunrise/sunset timer based on latitude and longitude, and my personal favourite: a TOTP code generator! It's not very practical, especially relative to a few of the other options on this list, but for around 60 bucks combined for the base watch and the board it would make for a really fun project someday.

## PineTime

Pine64's open source [PineTime](https://pine64.com/product/pinetime-smartwatch-sealed/) is the cheapest project on this list that I would actually consider as a daily driver smartwatch, not a niche item like the base F91W. Well, that isn't to say that the PineTime appeals to a wide demographic. with only 4.5MB of flash storage, and 64KB of RAM, the specs aren't going to blow anyone away. However, the more I researched, the more I realized just how impressive the PineTime truly was, especially considering the price tag...

Eventually I came to the conclusion that the value proposition here is outstanding, far better than I initially expected. For only a little more money than a base F91W, this is an actual smartwatch that offers all of the functionality I outlined: a heartbeat sensor, and connectivity with Android through the Bluetooth module. It even has a few extra goodies, like an accelerometer, week long battery, IPS touch display for good sunlight visibility, and even IP67 certification! I wouldn't go swimming with it, but it's still an impressive package for the price.

What's most interesting about this device is the open-source aspect. From this point onward, I'll be referring to any device with both open source software and hardware (yes, there's multiple) as "hackwatches". The creators of these hackwatches usually provide documentation of how the watch works, meaning that those who have the technical know-how could create their own programs. That level of flexibility (again, assuming the user has the coding knowledge) is something unheard of on more mainstream options.

Pine64 definitely created a F91W + Sensor Watch killer, although most people are more likely interested in these low-level hackable projects as a novelty, and not an actual daily driver smartwatch. I'd go as far to say that PineTime offers the best value proposition of any watch on this list, just don't expect the same functionality as an Apple Watch or similarly priced products.

## Watchy

Out of any hackwatches on this list, [Watchy](https://www.crowdsupply.com/sqfmi/watchy) is by far the most unique. The E-Ink display provides several advantages over a traditional LCD screen. E-Ink displays are easier on the eyes (no blue light!), provide better sunlight visibility, and better battery life (the screen uses no power if the display is static). It has full accelerometer, WiFi, and Bluetooth functionality, which is pretty impressive at the price tag.

Like any of the other hackwatches on this list, the device is fully programmable by the end user. This also has the advantage of the most buttons out of any watch on the list, a total of four. That many buttons might actually open some opportunities for custom programs that wouldn't be possible on watches with only one or two buttons.

This is definitely a better value for the money than the F91W + Sensor Watch, but things become a little murkier when comparing to the PineTime. Watchy is about twice the price of the PineTime, albeit still very cheap. Watchy has 8 times the ram (64KB -> 520KB), replaces the heartbeat sensor for a WiFi module, and lacks some smartwatch-esque features (touchscreen, water and dust resistance). Watchy (agh, such a fun name) makes sense as a basic wearable computer, while PineTime makes sense as an extremely basic programming smartwatch. Which one I would recommend over the other depends on what features the user would rather experiment with.

## Bangle.js

Here's where things start to get interesting. [Bangle.js 2](https://www.espruino.com/Bangle.js2) is a bridge between these open source hackwatches, and more feature rich smartwatches.

Costing around 130 in Canadian money, this is by far the most expensive hackwatch on the list. Accordingly, it also has the most sensors and features. Bluetooth connectivity, an accelerometer, IP67 rating, and a heart rate sensor are all included. Unique to the hackwatch space, Bangle.js includes a magnetometer, air pressure/temperature sensor, and GPS functionality. That last point is especially important, as proprietary smartwatches with GPS functionality tend to err on the pricier side. The next cheapest smartwatch I could find with GPS functionality was about 70 loonies more expensive.

(Small teaser; the brand that sold that smartwatch also happened to be the same brand I chose in the end!)

## AsteroidOS

[AsteroidOS](https://asteroidos.org/) is an alternate Linux operating system designed to operate on smartwatches developed by larger companies. It explicitly has the goal of providing users better privacy and control over their data. An on-device app store doesn't exist, but programs can be installed manually when connected to a desktop. Something worth noting is that AsteroidOS has absolutely zero compatibility with WearOS, Google's Android-based operating system that's found on most mainstream smartwatches.

AsteroidOS supports a very specific list of smartwatches, with varying degrees of functionality. All of the smartwatches with official support are proprietary hardware, which means I don't consider devices with AsteroidOS a hackwatch. What really turned me off from AsteroidOS was the price of adoption. Most compatible smartwatches were relatively old and would need to be purchased second-hand. Not only that, but when searching for compatible watches on eBay and my areas second-hand market, most were price equal, or even more expensive than new smartwatches, including the watch that I eventually settled on. Especially with the right deal, this doesn't seem like a terrible option, just not for me.

## Apple Watch

This was my choice of smartwatch before I started considering digital privacy more seriously, and it actually wasn't a terrible choice. Generally speaking, Apple's privacy policy is a step above Google's privacy policy. [According to Mozilla's Privacy Not Included article](https://foundation.mozilla.org/en/privacynotincluded/apple-watch/), user health data is encrypted, both on device and in iCloud.

Even if the Apple Watch was the perfect solution, I would still have to find an alternative. During the summer of 2023, I purchased an Android phone second hand to replace my iPhone XR and installed a privacy-oriented OS on it. Unfortunately, this left me without a device to properly control the Apple Watch. If you're already using an iPhone, the Apple Watch is unparalleled in functionality.

## And the Winner Is...

My research eventually led me to a smartwatch company that genuinely seems to be trying their best to create a privacy-respecting smartwatch experience: [Garmin.](https://www.garmin.com/en-CA/)

Endorsed by [Mozilla's Privacy Not Included](https://foundation.mozilla.org/en/privacynotincluded/?search=Garmin#product-review), Garmin has one of the best privacy policies... well, in general, never mind just smartwatch companies. They have a very clear, readable privacy policy that states don't sell your data, and give you the option to delete your data at any time.

Garmin's software is also very impressive from a privacy perspective. If, for whatever reason, a customer is still concerned about their data after reading the privacy policy, watches and fitness trackers from this brand maintain most of their functionality without being connected to a phone through Bluetooth or via the internet. Data can be extracted from the watch to a computer via a wired cable, and ran through open source software for analysis. They run a customized operating system independent of WearOS, so data won't be relayed through Google during usage.

Pricing is also very competitive. Remember the cheapest GPS-enabled smartwatch alluded to earlier? That title belongs to the [Garmin Bounce](https://www.garmin.com/en-CA/p/714945) at 200 Canadian pesos. My personal choice was the [Garmin Vivomove Sport](https://www.garmin.com/en-CA/p/742133/pn/010-02566-00), a stylish hybrid analog/digital watch with functionality between between the Bangle.js 2 hackwatch, and the (much more expensive) Apple Watch.

Garmin smartwatches are the product that I would reccomend for most people. For technically skilled folks, Bangle.js 2 offers most of the functionality of Garmin at a cheaper price, while staying more private. For any digital ghosts out there, the F91W with the Sensor Watch upgrade actually makes the most sense.

Despite being completely unexpected, I was delighted at how many different options existed for privacy enthusiasts! Everyone, from those very casually interested in privacy, to digital ghosts that live in the woods, have options! Even though i settled with Garmin, I'm still interested in a hackwatch as a programming project, and AsteroidOS would also be interesting to look at in the future. It's really fun to see so much competiton in a field that seems pretty stiff in terms of competition at first, especially in the niche of privacy.