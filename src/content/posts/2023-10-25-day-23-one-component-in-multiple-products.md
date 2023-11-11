---
title: "Day 23: One component! In multiple products!"
description: The true benefit a centralized component library approach.
date: 2023-10-24T05:00:00.000Z
tags:
  - components
  - npm
  - engineering
draft: false
---
Today, you’ll start to see the true benefit a centralized component library approach.

I set up a second practice BofA app as part of this demonstration. I followed [the same instructions as yesterday](https://practicaldesignsystems.com/daily/day-22-import-a-component-into-the-origin-product/) to install the component library. I included the `<UtilityNav>` component above the fake header of my fake site, and voila:

![](/assets/i/post-bofa-24-1.png)

See that top bar? That’s the Utility Nav component, getting pulled in from our design system’s component library.

But here’s where the magic happens: if I need to change the component, I can update it in the component library. Every application that includes it will get that update the next time the update dependencies in the app.

Turns out, I *do* need to change the component. Applications need to be able to specify which menu item is active. 

When I [planned my component](https://practicaldesignsystems.com/daily/day-18-planning-my-new-component/), my schema called for each item on the nav to be passed as part of the `<UtilityNav>` tag. However, since then, my imaginary stakeholders told me that they don’t want the links changing from product to product. They want central control over this content since it should only change at the leadership level and should remain the same across all products.

There’s a few ways to tackle this: 

1. I could use the position/index, i.e. if menu item slot = 2, then give that slot an `active` class in the markup. 
2. I could match the name, i.e. if name specified in prop = the name on a menu item, apply the class. 
3. I could try to set up some logic to figure out what site we’re on and set the active state based on that, but that’s too complicated. 

For simplicity’s sake, I’m going to take the name matching route (#3).  While I’m at it, I’m also going to update the font to the one I chose in Figma. 

Once I’ve made those changes, I commit to Git, publish to npm, and import the updated package into the existing product. 

Behold, two instances of a component:

![](/assets/i/post-bofa-24-2.png)

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).