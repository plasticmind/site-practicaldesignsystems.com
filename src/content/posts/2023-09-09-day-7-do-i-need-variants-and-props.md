---
title: "Day 7: Do I need variants and props?"
description: I don't need them, but I'm going to build them out so you can see
  how they can be useful in certain scenarios.
date: 2023-09-09
tags:
  - components
  - variants
  - props
  - figma
draft: false
---
The first component I built for [my practical design system build](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/) is a utility nav. 

It’s a good first component because it’s simple, it’s used on many of BofA’s digital products, and its a boring component that could benefit from standardization and is likely content that needs to get updated all at once.

It’s odd though because it doesn’t have the characteristics that most components do. 

Buttons and input fields have various states that need to be represented and designed for. Those components have a mix of elements with dynamic properties that need to change per instance (like a label or placeholder text) and those that don’t.

But this utility nav doesn’t have much in the way of dynamic content. Here’s what it looks like so far:

![Lots of text layers in my new components](/assets/i/post-bofa-text-layers.png)

A few text layers against a colored frame, arranged with auto-layout.

These links probably don’t change frequently enough to warrant the complications of making them all dynamic, so it’s likely that this component’s content would just be hardcoded when it gets built out in code. **In other words, this component probably doesn’t need variants and props.**

However, I want to help you better understand the process, which often involves variants and props. **In the interest of helping you learn, I’m going to build some out anyway.**

…

The only obvious state I need to account for is the active state of the menu links. I could just select a layer and underline it, but what if we decide the active state should involve more than just underline? 

On Monday, I’ll turn those text layers into a new menu item component. It may sound complex, but it’s going to give me some serious flexibility. I’m excited about it… don’t miss it!

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).