---
title: Systems thrive on connections…
description: The real power of design systems is in how their parts are connected.
date: 2023-05-26
tags:
  - connectedness
  - collaboration
  - design-systems
  - 30-days
---

Over the past few weeks, I’ve written a lot about taking a pragmatic MVP-style product approach to building design systems. 

But I need to make an important point that may have gotten lost in all my “just enough” talk.

The real power of a design system is in the “system.”  

All the way back at the beginning of this series, I talked about how a system was “things working together as parts of a mechanism or an interconnecting network.” Each part of a design system provides a window into your company’s product design and development: UI elements, code components, design tokens, patterns, and guidelines. 

But it's the *connectedness* of these parts that makes a design system really valuable.

Picture two individual parts of a design system: a UI kit and a component library. They’re both useful tools on their own — a UI kit can speed up visual prototyping for designers, and a component library speeds up application building for developers. But when connected in meaningful ways, they can be greater than the sum of their parts.

**A Practical Example: NYS**

Let me share a recent practical example from the work I’m doing at New York State.

New York State has an exhaustive set of brand guidelines that were created so that websites and applications built for NYS get built consistently and accessibly. There’s even primary and secondary colors defined for various groupings of the state’s various agencies and initiatives (e.g. education, public safety, administration.)

But these guidelines exist primarily as a lengthy PDF. When people build websites and applications for the State, they usually reference that PDF. 

Some visual prototyping tools exist that have captured those guidelines into libraries and components. Some component libraries and engineering tools exist that are using those guidelines. But as far as I know, these tools aren’t connected in any way. Changes to the brand guidelines means a new PDF has to be created, which results in a lot of manual handoffs, and ultimately a backlog of significant design and engineering work.

In my experience, this is not unusual. Many organizations I’ve worked with have had a similar “chain of handoffs.”

**Connected Decisions**

Now, imagine if some of those key design decisions — primary and secondary colors, agency-grouping colors, fonts, etc. — were stored not as a PDF, but rather as design tokens in a separate code repo. A design tool could pull in those tokens to create a UI Kit color library, and that library could be used for all new visual prototypes. Engineers could import those tokens into a global configuration file that gets included for all applications and reference them as part of their component libraries. 

If you’ve ever worked with APIs, the benefit is similar: it’s really easy to get data (in this case, design decisions) ported from one platform to another. Changes could be tracked and versioning would be built-in. An update could be as simple as pulling down the latest changes from brand guideline token library as part of a normal release cycle.

For an organization with hundreds of websites and web-based application, this streamlined process can be HUGE. Updates are faster and less risky. There’s less need to build custom solutions for common problems. There’s greater cohesion across sites and apps. It’s easier to update legacy products. 

Remember, you aren’t just building for the present, you’re preparing for the future. Your product will evolve, and your design system will needs to as well. Connectedness helps you scale. I can’t overstate the power of these connected systems.

**Connectedness = collaboration**

And keep in mind — a design system isn’t just a library of parts, it's a shared language that allows designers, developers, and product owners to collaborate more effectively. A big part of this connectedness I’m advocating for is the cross-functional understanding and streamlined communication between teams.

Connectedness doesn’t have to mean autocratic. Build so that common interface elements and design patterns are consistent and reliable, but allow for overrides. Build so that components are consistent in their base design but can be customized based on the product or use case. You’re trying to make it easy to build consistently and reliably, but still providing a canvas for unique experiences.

Yes — invest time crafting the individual parts of a design system, but don't overlook the importance of the connections. 

The strength of a chain isn't in the individual links, but in their union.