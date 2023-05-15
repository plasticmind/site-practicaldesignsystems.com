---
title: Beware premature optimization
description: Too much abstraction or design systems work too early can be risky.
date: 2023-05-14
tags:
  - optimization
  - abstraction
  - 30-days
---

Before we dive into more advanced design system topics, a word of caution:

⚠️ Don’t build a design system for a single digital product.

Design systems are tools meant to help scale design decisions between teams and across multiple digital products. For your first product, it usually isn’t worth spending a lot of time connecting visual prototypes to software with complex tooling or abstracting design decisions like colors, spacing, or components to a shared library or turning everything into a UI kit.

In software development, we call that “premature optimization.”

💬 “Yes, but I’ve got plenty of experience building digital products! I have a good sense what needs to be abstracted for the other digital products that will get built.”

Sure, some abstraction, like reusable Figma styles or CSS variables or React components, will be included in a digital product from the start. Good product builders will do this automatically, because they know where it makes sense within a project.

But even for someone with plenty of experience, too much abstraction or design systems work too early can be risky, for a few reasons:

- Building a product by starting with a bunch of abstract pieces is tough and can lead to an uninspiring and incoherent experience for users.
- A difficult and important part of creating a design system is building consensus with people across disciplines and departments; if you skip this and make all the decisions yourself (or as a single team), you risk alienating other product creators.
- You may also create a lot of waste by building a system that no one ends up using. Remember, we want design systems that are less prescriptive and more practical.
  
A classic case of premature optimization is when a well-meaning startup founder orders a huge design system built — a huge UI kit with flexible auto-layout components in Figma, design tokens that are exported from Figma and transformed to usable values across platforms, full component libraries in Native React with Storybook instances — to ensure that products are “built the right way going forward.”

Can it work? Maybe, but it’s backwards and carries all the risks listed above. And more than likely, it puts the team that has to manage this new design system in the unenviable position of becoming a massive bottleneck. Far better if the company built a few digital products first and then brought teams together to figure out what made the most sense to abstract and share.

For an even more thorough discussion of this topic, I recommend reading Dan Mall’s fantastic article, [The Folly of Design System “Foundations.”​](https://danmall.com/posts/folly-of-design-system-foundations/)

One good way to think about “how much design system is enough” is by approaching your design system like a product and identifying the MVP (minimum viable product).

More on that tomorrow.