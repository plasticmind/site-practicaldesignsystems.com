---
title: "Day 26: A Storybook primer"
description: A quick recap of Storybook and how I’m planning to use it in my design system.
date: 2023-11-14T10:00:44.615Z
tags:
  - storybook
  - referencesite
  - documentation
draft: false
---
I wrote [a post about Storybook](https://practicaldesignsystems.com/daily/let-s-talk-storybook/) as part of [my 30 Days series](https://practicaldesignsystems.com/30-days/). It’s long, and I won’t repeat it all, but here’s a quick primer.

Storybook is a tool you can install within web applications to showcase and document code components. 

This is what Storybook looks like inside a web application:

![A diagram of how storybook fits into an application](/assets/i/post-bofa-26-1.png)

In its simplest form, Storybook is a package installed in your app paired with at least one “story” file. Each component in your app is meant to have one of these story files. Here’s an example of what a story file looks like:

![Code snippet for a typical storybook file](/assets/i/post-bofa-26-2.png)

Here’s what’s happening in this particular story file:

* Pull in the app’s button component (and related props)
* Tell Storybook that we're exporting a button component
* Create a story called **Primary** where the Button component’s `primary` prop is set to `true` and its label is set to `Button`

Now, if you were to run Storybook locally, a “Button story” will show up in the Storybook interface, like this: 

![A screenshot of storybook explorer in a browser](/assets/i/post-bofa-26-3.png)

This is a really useful way to workshop individual components in isolation. You can do things like: 

* Showcase important states
* Interact with components on the canvas
* Include usage guidance and documentation
* Test components for significant UI changes or accessibility issues
* Link Figma component previews into stories
* Publish Storybook and embed/link component stories from within Figma

This extensibility is one of the reasons why Storybook is so popular.

Eagle-eyed readers will notice a few more “Button stories” in this screenshot: Primary, Secondary, Large, and Small. Hopefully, now you understand exactly how those would get created. You might have also notice an “Introduction” page, a standalone documentation page. More on how to set that up later this week.

…

Let me mention one other important thing that relates to my existing BofA build. (If you’re new, be sure to [catch up on the series](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/) for the appropriate context.)

My **UtilityNav** component doesn’t live in any one app, [it is now being imported from my component library](https://practicaldesignsystems.com/daily/day-22-import-a-component-into-the-origin-product/). 

**So where should I set up Storybook?** 

Each app, in theory, could have Storybook set up for its own local components. If it’s a mature app with a solid engineering team, that’s quite possible.

But I’m building a design system. My focused is on creating a library of shared component that can be pulled into apps. So I’m going to set up Storybook inside the shared component library. It will serve as a [storefront](https://bradfrost.com/blog/post/the-workshop-and-the-storefront/) for other app development teams: here are the components available in this shared library and here’s how they work.

So there’s a quick recap of Storybook and how I’m planning to use it. Tomorrow, I’ll get Storybook installed and configured in my component library.

Cheers,

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).