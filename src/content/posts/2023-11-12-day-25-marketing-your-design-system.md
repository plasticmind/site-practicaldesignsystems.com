---
title: "Day 25: Marketing your design system"
description: A design system is a product, and you should market that product to
  the people who will benefit from it.
date: 2023-11-13T10:00:32.557Z
tags:
  - referencesite
  - storybook
  - marketing
draft: false
---
I’m going to dive into Storybook tomorrow, but I wanted to start with a few important things to consider when deciding what tool to use to build [a design system reference site](https://practicaldesignsystems.com/daily/evolving-documentation/).

Let’s start with this question: what do potential users need to know about your design system? 

It’s going to depend a bit on a few things. Who are your users? What does your product stack look like? What does your design system include?

**Remember, your design system is a product.** Like any product that promises to deliver value to someone, you need to make the case to those people. I call that marketing. That’s why audience is such an important consideration. Make sure you talk to potential users and understand their needs.

To start, we can make a few educated guesses about what questions they'll be asking:

* What can I make with this design system?
* What does it include? Is it a design library, a code library, or both?
* How do I install and use it?

With those questions in mind, what tool makes the most sense for our reference site? 

* If your design system is really just a Figma UI kit with usage guidance for components and the primary audience for your design system are product designers who create visual prototypes, you may want to make your "reference site" a Figma file.
* If your design system is a component library and the primary audience are engineering teams that build web-based apps at your org, Storybook is probably a good solution. Should it just be local, or should it be published?
* If you’ve got a complex multi-tiered design system that powers dozens of apps at a large organization, you may need a full-on marketing site to showcase what people have built with the design system and how they’ve done it. Your engineering team could stand up a site on the company’s default CMS, or you could build out the site with a low-code tool like Webflow or Framer. 
* If you’re a highly collaborative organization with lots of input from design, engineering, and leadership teams, you may benefit from a “third space” tool like Supernova, Zeroheight, Knapsack, or Luro. Each differ slightly in the features they offer, but they’re meant to be a hub for all parts of a connected design system. You can pull in design resources (like token files, components, and Figma frames) and code resources (like code snippets, markdown, and Storybook stories) and reference those resources in documentation pages. This documentation can be easily shared with and contributed to by others in your org. No need to learn a discipline-specific tool.

Each of these approaches have pros and cons:

* A Figma-only reference site might overwhelm engineers who don’t know their way around the interface. 
* A Storybook-only reference site might alienate designers who don’t know how to run Storybook locally. 
* A large marketing site requires considerable work to build and maintain. 
* A third-space app requires less work up-front, but pricing models are usually per user, which can quickly add up and disincentivize wide sharing.

As I said earlier, what tool you choose depends on a number of factors. I hope this post has given you a good sense of what those factors are and which tool (or set of tools) might make the most sense for your design system and organization.

If you only get one thing from this email, let it be this:

**The hardest and most important part of a good reference site is creating the content.** Spend 5% of your time selecting the tool and 95% of your time filling it with content. Pick something that your team feels comfortable with and start creating. If you have to move to a new tool at some point, much of the hard work is already done. 

Since my small BofA **Utility Nav** project is primarily a component library, I’m going with Storybook (for now). I’ll walk you through that tomorrow.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).