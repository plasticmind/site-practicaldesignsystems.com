---
title: "Day 31: Naming tokens"
description: A quick review of design tokens, with a focus on practical naming
  strategies for a small, MVP component library with an eye toward growth.
date: 2023-11-27T10:00:21.843Z
tags:
  - designsystems
  - naming
  - ai
draft: false
---
We’re in the home stretch of [this practical design system build series](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/). Today, I’m diving into the part of design systems that a lot of people struggle with: design tokens. 

Normally, I wouldn’t tackle design tokens at this size… I’ve only got a single component in my shared component library, and the benefit really isn’t worth the complexity. Remember, you don’t want to [over-optimize too early](https://practicaldesignsystems.com/daily/beware-premature-optimization/). But I want you to walk you through the process. If you can see what tokens look like end-to-end in this small example, it’ll be easier to envision the benefits at scale.

I won’t go into all the basics of design tokens since I’ve done that before. If you haven’t read that, [go read my token primer first](https://practicaldesignsystems.com/daily/design-tokens-101/). Today, I’m going to focus on some naming strategy.

One thing I *didn’t* talk about specifically in that primer are token groups. I like to think about tokens in two different ways: choice tokens and decision tokens. **Choice tokens** represent a palette of design options, whereas **decision tokens** represent choices which have been selected for use in certain contexts. 

Here’s another way to think about these groupings:

* **Primitive** — these are the base design choices, the colors, fonts, icons, and spacings that make up the overall aesthetic of your application, like `color-blue-500` or `font-size-xl`
* **Semantic** — these are decisions about which primitive tokens should be used for different purposes or roles throughout the application, and reflect the function rather than the value, like `color-text-error` or `color-border-primary`
* **Component** —  these are decisions about which primitive (or semantic) tokens should be used in specific components throughout the application, like `utility-nav-background` or `utility-nav-text-color`

Here’s the thing… component tokens can get a bit out of hand as we scale. Using semantic tokens helps create a system that's less about the nitty-gritty of each component and more about the broader strokes of our design intent. It makes what we build more versatile and coherent, across all products. 

I don’t want to tokenize everything. I want to home in on the stuff that really matters – whatever is foundational to my design's consistency and reusability. I’m talking basics here: colors, typography, spacing. These are the building blocks for a cohesive visual language.

The upside of an approach like that is that it’s easier to use in platforms like iOS or Android where a non-trivial part of the design needs to incorporate OS-level styling. Semantic tokens gives engineers the flexibility to pull in the design tokens that make sense, and drop the ones that don’t. 

Tomorrow, I’m going to name (and create) the tokens.

I know this a difficult topic for many. If you’ve got a question, hit reply and send it over. I'll do my best to respond.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).