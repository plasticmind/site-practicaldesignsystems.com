---
title: Design tokens 101
description: Buckle up, this is a big topic.
date: 2023-05-24
tags:
  - components
  - abstraction
  - design-systems
  - 30-days
---

Design tokens are a complicated topic. You should understand why by the end of this. Today, I’ll just scratch the surface, but if you do have questions — hit reply and ask!

… 

**What are design tokens?**

Design tokens are key/value pairs that store style values for small design decisions (like typography, color, spacing, elevation, opacity, borders, etc.) 

Here’s an example of a design token:

`color-primary-action: splashberry-400`

Hm. Our primary action color is splashberry 400? That’s not very helpful, because we don’t know what color splashberry is.  What if I also showed you this:

`splashberry-400: #D52472`

Aha! There’s a hex value that can instruct a digital device how to display this color I’ve named splashberry 400.

What happens when we add this:

`color-background-button: color-primary-action`

The background color of our button references the primary action color, which references our funny color name, which has a specific hex color value.

**Whew.** Why all the aliasing? 

As I’ve said before, careful abstraction can be useful. Because “primary action” is separate from the button color definition, it can be applied to more action items than just buttons: menu select, anchor link, pagination controls, etc. And because it’s separate from the specific color, the primary action color could be changed in one place and impact all action items.

If you’ve used CSS variables before, this should all sound boringly familiar. But there’s a key difference between design tokens and CSS variables:

**Design tokens are meant to store values in a platform agnostic way so that they’re easily portable between systems and digital products.**

Some examples:

- CSS variables are really great for web projects. You can even create library of global CSS variables that you can import into multiple web projects. But some digital products like native Android or iOS apps can’t use CSS color values.
- Figma styles let you create styles for colors, text, effects, and layout grids and reuse them across your designs. However, these styles can only really be shared between Figma files as libraries.

This is where design tokens are most useful. 

When you store small design decisions in tokens, they serve as a single source of truth between design tools and software. But that abstraction also makes it easier to translate design decisions across multiple platforms that need different value formats. 

What appears in Figma as `hsb(0,100,100)` might need to become `Color(red = 0xFF, green = 0xFF, blue = 0xFF, alpha = 0xFF)` for your native Android apps and `#f00` in the CSS variables for your website. Discrete values in a JSON file in a Git repo are much easier to fetch and transform as needed.

Here’s a common workflow for tokens, so you can picture it better: 

Figma → Token Studio → SuperNova → Web / iOS / Android

Designers would create designs in Figma and store those design decisions as tokens using a plugin like Token Studio. Then, if they change a token value, every place in Figma that references that token would be updated. Those tokens can also be exported to a code repository; and from there, you can do quite a lot: pull them into a reference tool like SuperNova or Storybook, transform them into variable libraries (Kotlin Swift, CSS, etc.) based on your platform needs, or import them as base values for your next project.

Easy access to a library of micro design decisions in a parseable format means engineers can opt to pull in only values that make sense for their application. An iOS app needs to follow Apple’s Human Interface Guidelines for App Store approval, but they might reference tokens for brand-specific fonts, action colors, padding, etc.

Creating a useful set of design tokens is one more example of useful abstraction, and it encourages designers to build more consistently across digital products. 

…

As I said, I’m only scratching the surface. I didn’t explain all the different things tokens can be used for, and I haven’t discussed naming conventions, transformation, versioning, syntax, problems with aliasing, removing units, syncing across platforms, or the pending W3C specification.

I’ll leave you with further reading if you’d like to learn more about design tokens: 

- Goldman Sachs recently launched their design systems reference site, with a section called [Design System Concepts](https://design.gs.com/foundation/design-system-concepts) that describes the names they use for concepts in use across the site — an important first step for token naming.
- Nathan Curtis has an enormous and exhaustive reference on the topic of tokens. [Go read it… or at least bookmark it.](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)