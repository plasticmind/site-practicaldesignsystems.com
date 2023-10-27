---
title: "Day 24: Is this enough?"
description: With some really thoughtfully structured design systems, we can
  reduce the friction between design decisions and software development.
date: 2023-10-26
tags:
  - recap
  - handoff
  - designsystems
draft: false
---
We’re more than 3 weeks into this practical build series, so let’s review what we’ve covered so far:

1. I did an [interface inventory of several Bank of America’s websites](https://practicaldesignsystems.com/daily/day-1-starting-an-interface-inventory/), and found [some common patterns](https://practicaldesignsystems.com/daily/day-2-looking-for-common-patterns/).
2. I selected one pattern I saw being used across multiple sites, [created a standardized version of it](https://practicaldesignsystems.com/daily/day-3-extracting-patterns-with-a-commonality-spectrum/), and [turned it into a component](https://practicaldesignsystems.com/daily/day-4-building-a-component/).
3. I [auditioned the new component in screenshots](https://practicaldesignsystems.com/daily/day-10-gathering-feedback-from-teams/) to see if it worked.
4. I [created 3 React sites](https://practicaldesignsystems.com/daily/day-13-i-need-products/) to use as demo digital products.
5. I successfully pulled in [an existing design system](https://practicaldesignsystems.com/daily/day-14-using-an-existing-design-system/) and [tried out one of their components](https://practicaldesignsystems.com/daily/day-16-someone-else-s-component-in-my-app/).
6. I [planned out my new component](https://practicaldesignsystems.com/daily/day-18-planning-my-new-component/), [built and styled it in React](https://practicaldesignsystems.com/daily/day-19-building-my-new-component/), and [published it to npm](https://practicaldesignsystems.com/daily/day-21-publishing-my-component/) as a separate component library. 
7. I [pulled that into multiple sites](https://practicaldesignsystems.com/daily/day-22-import-a-component-into-the-origin-product/) and pushed out [updates that showed up on both sites](https://practicaldesignsystems.com/daily/day-23-one-component-in-multiple-products/).

Bullets 1-3 are tasks that designers typically handle. Bullets 4-7 are tasks that engineers typically handle. Throw in some user research and dev ops, and for many organizations, this is their digital production pipeline.

Do you see the gap? We’re missing connectivity between the two.

![two overlapping diamonds with the heading "Designers" and "Developers" — and the word "Design Systems" pointing to the overlap.](/assets/i/post-bofa-25-1.png)

If Research Jesse provides some insights to Designer Jesse who decides that something needs to change, how does that change get into the actual software? Usually by Designer Jesse writing up tickets in his favorite project management tool and handing it off to Developer Jesse.

Again… this is how many orgs function, and it isn’t bad. 

But with some really thoughtfully structured design systems, we can reduce the friction between design decisions and software development.

In the real world, a well-structured Figma component and centralized component library is probably good enough for my little Utility Nav.  But the goal of this series has been to explore practically the connective tissue between visual prototyping and software development.

Over the next two weeks, I’m going to tackle two important topics: **Storybook and design tokens**.

Thanks for sticking around… your support means a lot!

**If you’ve got any specific questions you’d like me to tackle as we go through this, let me know.**

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).