---
title: Keep your variable names as simple as possible
description: When naming variables, don’t forget the promised value of a design system — simplified consistency.
date: 2023-06-26
tags:
  - naming
  - consensus
  - complexity
---

The core promise of a design system making it easy for teams to quickly and consistently apply common design decisions across multiple digital products. 

I’ve started to notice something in design systems work that threatens to undo that promise: a tendency to introduce too much unwarranted complexity into the system by tokenizing every design choice, often with multiple layers of abstraction and hierarchy. In the name of standardization, design system tokens (or variables, class names, etc.) are created to address a huge number of facets: categories, properties, themes, concepts, breakpoints, variants, scales, modes, state, modifiers, objects, name-spacing, localization, etc.

Take this variable name: `psd-hero-space-inset-2x-media-query-xxl` — could you guess what design decision this represents or where this variable should be used in your designs or software?

Naming is one of the hardest things in computer science, but the increased complexity that layers of abstraction bring can often introduce significant cognitive load, both for the people creating them and the people using them. 

It’s possible there may be a scenario where the variable name I shared actually makes good on the promise of simplifying consistent application of design decisions, but I suspect that’s an exception, not the rule.

If you’re in a big org with multiple teams and many large applications, you’re inevitable going to contend with complexity. And building consensus by bringing designers and engineers together to decide on naming conventions is a great way to deal with that complexity. But don’t forget the promised value of the design system: simplified consistency. 

If you introduce too much complexity or abstraction when creating your design system, you may end up undoing the promised value.

So how do you strike the balance between simplicity and complexity, especially with a large design system? 

More on that tomorrow.