---
title: "Day 10: Gathering feedback from teams"
description: Showing off my unified design pattern to the team for feedback.
date: 2023-09-20
tags:
  - practical
  - feedback
  - components
draft: false
---
The last few emails I’ve sent have been laser-focused on the component creation process in Figma. It’s worth stepping back a moment and recapping:

* I started an interface inventory of Bank of America’s web-based digital products, documenting common patterns;
* I came up with a standard design for those patterns in Figma to propose to the team based on the most common design choices;
* I created a **Utility Nav** component and set it up with autolayout;
* I created a **Nav Item** component and used it to replace the individual list items in the **Utility Nav;**
* I added a variant to the **Nav Item** to represent the active state.

I now have a new component in Figma.

Now what?

At this point, I would review the work I’ve done with my team, especially if I were on a dedicated design systems team. I’ve extracted some common patterns into a unified standard, so I’d like to validate that quickly with the team. Any use cases I haven’t accounted for? Anything I’ve eliminated that should actually be a variant?

This is where I can show off what I’ve been doing in Figma. “Here are the various examples of this component across products, and here’s my unified pattern.”

![The full utility nav component page](/assets/i/post-bofa-component-full.png)

To help people understand what the new component looks like in the context of each product, I’d drop an instance of the component on to each screenshot. That’s a good approach in general, since previewing it in context helps me catch any modifications I might need, like font sizing.

![Dragging an instance of the component to my screenshots](/assets/i/post-bofa-drag-instance.gif)

At this point, I’d also want to talk with engineers to identify any gotchas that might make me revise my proposal or choose a different path altogether. Will my my proposal require considerable technical lift? Do they understand the expected behavior and functionality of the component? After all, right now this is just a component in a visual prototyping tool. Engineers will need to turn this into software.

If I need to work asynchronously with engineering, I might add notes to the Figma file to help communicate the expectations around behavior (e.g. “the current product on the bar should have the active state set, illustrated by the ‘active’ variant of the **Nav Item**.”)

If I were on an individual product team and planned to recommend this as a unified pattern across multiple products, it might take some effort to get people together from the other product teams. In that case, I might need to be a bit more strategic and intentional about my presentation. Are they excited collaborators, bought in on a unified set of components? Or will they need some convincing? 

This is where the rubber meets the road on communication and consensus-building. In most cases, the sooner you can invite teams into the process, the better.

…

After a check-in with teams, ideally I’d work closely with engineering to start connecting what I’ve designed in Figma to code. The faster I can get something implemented from end-to-end, the more quickly I can begin to iterate on it.

That will be the next phase of this series: walking through what it takes to build a component in code.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).