---
title: "Day 14: Using an existing design system"
description: Legacy support, versioning, release cadence — these are the types
  of things engineers think about when creating applications. If you’re building
  tools that engineering teams will consume, you need to be mindful of them too.
date: 2023-10-02
tags:
  - engineering
  - code
  - development
draft: false
---
The best way to understand how to build out a component that app developers can use in their app is by pulling in an existing design system into an app and trying to build with it. It gives a users-eye perspective and helps you better understand what your design system needs.

I’m going to build using [Atlassian’s design system](https://atlassian.design/). They have a top notch reference site with great content and, from the looks of it, plenty of components to choose from.

Take a look at their design system reference site:

![Screenshot of the Atlassian design system reference site](/assets/i/post-pds-14-1.png)

It’s a little too vague: “create simple, intuitive and beautiful experiences.” Should I be able to use this like Material or Carbon — to build any application? Or is this meant only for people building Atlassian products? 

That isn’t clear to me, but I’m going to attempt to build with it.

It’s got a clear “Get Started” call-to-action at the top, so I’ll start there.

![Three sections: content design, design, development](/assets/i/post-pds-14-2.png)

I love that they’ve anticipated three key audience types and created sections for them: **designers**, **content designers**, and **developers**. A quick glance through each sections shows that they’re practicing good “just in time” design — plenty of useful resources, tucked away in contextual buckets so users aren’t overwhelmed up front.

I’m playing the role of developer right now, so I’ll start there.

## Setting Appropriate Expectations

Right away, they set the expectation for the level of experience and tooling someone would need to make use of this design system:

> The Atlassian Design System is implemented with **React 16 and TypeScript**. Make sure you have React and optionally TypeScript installed before you start.

The documentation starts with the assumption that you have React 16 and TypeScript installed, and provides no guidance how to set that up.

When you create the documentation for your design system, you’ll need to think through your audience. You’ll want to use a level of technical language and assumed knowledge that’s appropriate for people using the documentation. 

In software development, these are often called **requirements**. 

But these requirements might be a blocker for some teams. *(foreshadowing)*

* What if my application doesn’t use TypeScript?
* What if my application is running a newer version of React?
* If these requirements aren’t met, am I able to use these tools at all?

I don’t know the Atlassian engineering ecosystem. They may have org-wide standards that all applications use TypeScript and that specific version of React. But it seems like that might preclude a lot of applications. What if a team upgrades their application to support React 17? Will the components stop working?

The documentation they provide doesn’t answer those questions, and those are probably real questions users will have.

Keep in mind: one value propositions of a design system library is making it easier for engineers to do their job. **The harder it is to use, the less value it brings them, and the less likely they are to adopt it.**

Legacy support, versioning, release cadence — these are the types of things engineers think about when creating applications. If you’re building tools that engineering teams will consume, you need to be mindful of them too.

Tomorrow, I’ll share my own experience of importing this design system into my app.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).