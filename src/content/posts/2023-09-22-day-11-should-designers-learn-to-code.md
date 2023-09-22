---
title: "Day 11: Should designers learn to code?"
description: Design systems work sits at the intersection of design and
  engineering, so DS teams typically benefit from people with some skills in
  both fields.
date: 2023-09-21
tags:
  - engineering
  - code
  - design
draft: false
---
As promised, I’m going to jump into code as part of this practical design system build series. Before I do, I want to spend some time explaining why.

For a lot of people who consider themselves designers, engineering can feel like a black box. It’s like driving a car for the first time: there’s so much to pay attention to, and it’s hard to know what’s important and what’s not. Not only are there multiple layers of challenging concepts to wrap your head around, but the syntax often seems so arbitrarily unforgiving.

Design systems work sits at the intersection of design and engineering, so DS teams typically benefit from people with some skills in both fields. Even if your responsibility is a complicated set of Figma libraries, you’ll find yourself needing to understand and address many of the functional constraints that engineers grapple with. Auto-layout may feel gnarly, but it makes a lot more sense if you’ve worked with CSS flexbox and grid before.

I’m going to go through the process of taking that component I created in Figma and building it out in code. That way, you can see what the process might look like for an engineer. 

Most importantly, I’ll call out key connection points between the two, like standardizing the names of your components, props, and variables, or pulling in values from your design system.

So while I don’t necessarily think that all designers need to learn how to code, I think learning at least some of the basics of front-end engineering will make you a much better member of a design systems team.

These next few weeks will help.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).