---
title: Don't build a bottleneck...
description: When you create tools that everyone in your organization uses, you're at risk of building a bottleneck.
date: 2023-06-19
tags:
  - governance
  - contribution
  - scale
---
When you create tools that everyone in your organization uses, there’s a very real danger you’re building a bottleneck for your organization’s product-release process.

There are times when intentional bottlenecks may be a good thing, like requiring components to pass unit tests or accessibility checks, or running robust QA before releasing new features into production.

But in my experience, bottlenecks that slow down experimentation and innovation are almost always destined get replaced, either by a mandate from leadership or by teams just building around it.

For example, say your team owns a code component library that is shared by 4 or 5 other teams, but the library only accounts for 80% of the components the teams actually need to ship the product they’re being asked to build. How do you handle this?

Do you push back and require them to make a business case for their requests before your team builds anything new? Do you even have the capacity on your team for this work? Do you borrow someone from those other teams temporarily to expand your capacity? Or do you try to convince the teams that the existing components are enough and they should just get creative?

This is where things get real in an organization.

Some suggestions for handling this:

- Don’t try to solve every problem. Some design system teams focus solely on forms and form validation. Some distribute foundational design decisions, like libraries or tokens with key themes and brand colors. I’ve seen teams stuck for months trying to figure out how to create a table component. [Start small and build from there.](https://practicaldesignsystems.com/daily/discount-design-systems/)
- Give teams an escape valve. A design system should cover common scenarios and best practices, but teams should also be encouraged to get creative. In practice, this means pulling common components from the DS into their specific digital product and using them well, but also building new components for features or scenarios that haven’t been accounted for yet.
- If you do have a strong central library and a mandate for usage across teams, make sure the considerations for inclusion and guidelines for contribution are well-documented. This increases the likelihood that team-specific solutions can be quickly adapted for use across multiple teams, and makes your team less likely to become a bottleneck.
- Create an internal marketplace. Let teams own their own creations, but standardize the format and provide guidelines for participation that enhances cross-team collaboration.

Remember, the goal is to create something useful for teams. If you have a lot of high-velocity teams and a very small design system team, don’t take on too much. Tackle site-wide headers and footers. Distribute color libraries. Gauge your team’s capabilities, and invest those in small, meaningful ways.