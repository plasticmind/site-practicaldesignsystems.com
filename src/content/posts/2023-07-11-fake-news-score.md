---
title: The fake news score
description: Discovering the real value of what you're building.
date: 2023-07-11
tags:
  - value
  - mvp
  - over-optimize
---

Years ago, I worked on a platform that billed itself as a newsroom in a box. For significantly less than it would cost to develop all the design and functionality required for a robust newsroom product — design, development, paywall integration, analytics, newsletter integration, ad management, user accounts, AP feeds, etc. — this platform would be turnkey.

One of the selling points was an easy-to-read score on your site’s dashboard that graded the overall health of your site and setup based on a number of key business intelligence measurements and characteristics. Each day, you would log in and, at a glance, get a sense of how your site was performing.

Here’s the crazy part: the score wasn’t real. 

Or more accurately, it wasn’t **automated**.

Each day, someone would gather data from the key measurements for each site on the platform and manually enter them into a spreadsheet. The score was then calculated and displayed on each site’s dashboard. Most people assumed it was some kind of real-time measurement, but it was just someone manually crunching numbers every day.

For weeks, we had discussed ways to automate this process, but many of the things we wanted to measure didn’t have an API or any other easy way to get at the data. So we decided to do it manually, at least to start.

The breakthrough moment was when we realized that the value of the score wasn’t real-time automation, it was insight. The people involved in the project were legends in the news industry, so their insights were highly sought after. That was the real value. 

There’s a danger, especially when building systems, to lose sight of what is genuinely valuable in favor of increased automation. [Don’t optimize too early!](https://practicaldesignsystems.com/daily/beware-premature-optimization/)