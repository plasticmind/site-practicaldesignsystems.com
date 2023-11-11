---
title: Pre-built vs. roll your own…
description: How can design systems support native applications?
date: 2023-05-30T05:00:00.000Z
tags:
  - roi
  - third-party
  - value
  - design-systems
  - 30-days
---

Anyone building a new design system has a lot of decisions to make, but one of the most important is this: what existing tools do you want to leverage, and what new tools do you want to create?

This cost-benefit analysis happens all the time and at multiple levels of a project.

A real-world example:

You're building a design system. Should you build a custom front-end framework tailored to your organization’s specific needs? Should you build with a lighter but more opinionated utility-focused framework like Tailwind? Should you build with a heavier framework like Material UI that comes with a lot of components and styles out of the box? Is the overhead required to maintain a custom framework worth the value that it brings?

If you’ve followed along in this series, you might be thinking: don’t overbuild… create only what will be valuable for your teams. That might lead you to the first option: start small, build custom. This is a good instinct to have, especially if you’re just starting your first digital product.

However, it would be unrealistic for me to say that’s always the best choice. Many of these pre-built libraries have a lot of things going for them, like:

- Large library of components and styles, often for a wide range of codebases and design tools
- Often built with more than you need, which can speed up future feature releases
- Extensible to support brand-specific theming
- Tested for performance and accessibility
- Meta tools, like browser extensions and IDE plugins
- Robust documentation, training, guidelines for use
- Designer/engineer familiarity, making hiring/onboarding easier

Let me pause for a moment and address a common question that comes up: how do I override some of a third-party framework’s styles to fit my brand’s design, but still benefit from the connectedness of the tools and overall ecosystem? 

The specifics of how to extend a framework’s styles and components and what each framework allows will vary, but the approach is usually some combination of:

1. setting base variables, which get inherited by components throughout the framework 
2. creating style overrides, which get applied to components with greater specificity than the framework’s base styles
3. class extensions, which is typically done in code to add functionality and props to existing components

So…

How do you decide if you should build your own framework or use someone else’s? The answer to that question depends on goals and overall strategy. 

For example:

- If your org or team is just getting started, you may want to get to market quickly to test a hypothetical value proposition. Getting to “good enough” in that case might mean that inheriting an existing framework is the best path to take.
- If the value proposition of your org is rooted in standing out, in being remarkably different than your competitors, then maybe “good enough” isn’t quite good enough. Investing the time and money to create a custom set of tools, features, or platforms (because it does take time and money to do this) might set you apart from your competitors and could be a valuable long-term asset for your org.
- If your value proposition is about reliability and consistency, then maybe a pre-existing framework makes more sense.
- What happens if that framework stops being supported? What’s your contingency plan?

I know, “it depends” isn’t a very satisfying answer, but an important part of this work is learning how to express the contingencies behind that answer and connect the various approaches to their inherent value.

Being able to think through and articulate clearly the tradeoffs between adopting an existing tool or framework and the limitations or risks that brings, and the inherent complexity of building and maintaining your own — that is one of the most important skills for the modern digital worker.

And something I hope you’ll feel more empowered to do by the end of this series!