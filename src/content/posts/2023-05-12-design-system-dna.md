---
title: The DNA of a design system
description: What's in a design system?
date: 2023-05-12
tags:
  - basics
  - design-systems
  - 30-days
---

We covered a lot of ground yesterday, so I only had enough time to list the major parts of a design system at the end with a brief explanation. Today, I’d like to go through each and give some specific examples.

Here's our list from yesterday:

- UI kits
- Shared assets
- Component library
- Tokens
- Documentation
- Reference site
- Let's jump in...

## UI Kits

As I mentioned previously, designers often create visual prototypes for more than one digital product. A UI kit is a library of design decisions like brand colors, gradients, text styles, layout grids, components, etc. shared between teams that helps make their visual prototypes more consistent. If a company chooses to use an existing design framework for their products like Google’s Material Design or Apple’s Human Interface Guidelines (more on that later), a UI kit can also help designers create visual prototypes that look a lot like what the actual software will look like.

Here’s an example: [Outsystems]([https://](https://www.outsystems.com/)) is a tool that lets you drag-and-drop components in order to quickly build complex applications with very little coding required. The company anticipated that designers skilled in simplifying complicated user journeys would want to create a visual prototype using a design tool first, so they released an [Outsystems Figma UI Kit](https://www.outsystems.com/product-updates/outsystems-ui-figma/) which contains all the styles, UI patterns, widgets, and layouts based on the app’s framework… for Figma. Using this, designers can quickly mock up entire customer flows, right inside their design tool.

## Shared Assets

These are any objects or resources that need to be exported or downloaded so they can be used in the software. Some examples include logos, word marks, icons, typefaces, illustrations, photos, animations, etc.

For example, a design team might create a library of icons to use across platforms. These need to be exported from the design tool and either stored in the product’s codebase or imported from a standalone code library. Similarly, a typeface used in all products would need to be either downloaded and included in the product code, or referenced externally.

## Component Library

A component library is a collection of common code components that can be shared and reused across multiple codebases, often with design, state, and behavior built-in.

Components can be confusing, because people often use that word to refer both to components inside a design tool, like Figma or Sketch, and components in software, like React or Vue. They’re reusable objects like buttons that usually have styles applied and custom properties that represent their changeable aspects. And to make things more confusing, components can contain components. 🤯

Some examples of common components are buttons, tags, breadcrumbs, dividers, headers, accordions, dropdown menus, form elements, etc.

While there are similarities between design and software components, they’re not the same thing. Remember, design tools create visual prototypes; software is the real thing. Designers try to have a components in design tools that corresponds to a component in the software, but syncing between the two can be tough, because software components are usually more complex.

This is why design tokens are useful. Let’s talk about that next.

## Tokens

Here's what a design token might look like `primary-color: #FF6F61` or `border-radius-large: 0.5rem` — A token is basically the value for an important design decision (like typography, color, spacing, elevation, opacity, borders, etc.) that gets stored as a key/value pair.

"Isn't that just a CSS variable?" That's a very good question, and one I won't answer now. Tokens are a huge topic that we’ll discuss in a later email, so I'm only going to touch briefly on it here.

These key/value pairs are usually stored in a JSON file in some code repository, so engineers can easily pull it into codebases for multiple products. Designers can write these values out into code, but there are tools like [Token Studio](https://tokens.studio/) for Figma or [Design Token Exporter](https://sketchelements.com/plugins/design-token-exporter/) for Sketch that simplify this by reading values from your design files and write tokens out to a JSON file (via Git).

There are several benefits to codifying these small design decisions into tokens. Having important decisions in a small, abstract, easy-to-read format means that it’s easier to translate those choices across multiple platforms that need different value formats. It also serves as a single source of truth between design tools and software, making it less likely that the two get out of sync. This approach also encourages designers to build more consistently.

## Documentation / Reference Site

Designers need guidelines to understand how to build digital products consistent within a family of digital products. And engineers need design documentation to understand the designer’s intent. Nothing replaces good inter-team communication, but a reference site that showcases the tools, documentation, and guides for building digital products in an organization can be very helpful.

Where this documentation lives is going to depend on your tool stack. Some teams prefer to keep their documentation in [Storybook](https://storybook.js.org/) because it lives alongside the code, making it easier to showcase complex arrangements of components, code snippets, interactions, and visual regression testing. But it can be prohibitive for designers unfamiliar with code. Tools like [Supernova](https://www.supernova.io/) and [Zeroheight](https://zeroheight.com/) have attempted to create a third-space that promises usefulness to both designers and engineers.

Wherever it lives, it’s a key part of a mature design system. More on documentation in a later email.

...

Companies that build lots of digital products will likely have tackled each one of these to some degree or another. The mark of a truly mature design system, though, is the connectedness between its parts, but it’s often hard to achieve. We’ll talk about the superpower of connected tools in a later email.

But before we get there, tomorrow I’d like to consider the question: *“What do you value the most?”*