---
title: Evolving documentation…
description: The best documentation is dynamic, connected, relevant… and updated!
date: 2023-05-27T05:00:00.000Z
tags:
  - documentation
  - connectedness
  - collaboration
  - design-systems
  - 30-days
---

Your design system is not a static entity. It’s a living, breathing thing that evolves with your organization. Your documentation is part of that system, and it too needs to evolve. 

If you’ve done any software development, though, you know that documentation is often an afterthought: “if it works, it ships,” or “the best documentation is easily understood code.” But when you look at documentation through the lens of a holistic design system, it’s a communal asset, not a chore delegated to a select few. 

Every organization I’ve worked with has had some amount of important information or key insights about “how this works” stuck in knowledge silos — in the Slack channel of a team that’s now in a different part of the organization, in a repo created by contractors whose contract ended years ago, in a Confluence doc no one has access to, sprawled across a whiteboard project on a service that the company no longer pays for. 

Don’t let important knowledge about your product live in isolation. Decide on a single source of truth and make it easy to find. 

Build a design system reference website. 

Think of this like a product website, with your design system as the product. Convince users of its value.  Articulate guiding principles. Provide links to key resources. But above all, explain, in great detail, how to use it. Provide examples. And be explicit for each audience. A designer may need to understand component behavior, while a developer might be interested in how to include a npm package into their application.

I agree with Sarah Drasner’s take on good documentation:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I don&#39;t understand how companies desperately want devs to use their product, spend so much money building it... and not pay attention to documentation?!<br><br>Docs/tutorials are how people onboard. <br>It&#39;s not separate or a nice-to-have.</p>&mdash; Sarah Drasner (@sarah_edo) <a href="https://twitter.com/sarah_edo/status/1429097168598487041?ref_src=twsrc%5Etfw">August 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And her follow-up tweet is even more insightful:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">One word of caution: if they do leave out of frustration, it will take a *lot* more work to get them to come back later. Even if you&#39;ve made improvements.<br><br>On the other hand if they have a good experience, word of mouth between devs that trust each other is huge.</p>&mdash; Sarah Drasner (@sarah_edo) <a href="https://twitter.com/sarah_edo/status/1429194796933910528?ref_src=twsrc%5Etfw">August 21, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This couldn’t be more true than in your design system.

…

I made the case yesterday for the importance of connected systems, and it applies in spades for documentation. Because documentation for your digital product lives all over the place — Git repos, Figma frames, Notion docs, Storybook, Sharepoint, PDFs — a well-connected system can make it easy to pull disparate sources together in one place: e.g. linking Storybook stories to Figma frames, importing Figma files into Supernova. 

How you build it will depend on your organization and tooling. But build in as much connectedness as possible, since this will help distribute the responsibility for documentation and make contribution easier. 

You might opt for a simple static site generator to keep overhead low and flexibility high. You may opt instead for a tool like Backlight, Supernova, Zeroheight, or Luro. They provide a “third space” that isn’t specifically design or engineering, but they can easily pull together resources from different platforms, which is highly connected.

…

There are plenty of good examples of design systems documentation done well. [Shopify’s Polaris](https://polaris.shopify.com/) or [IBM’s Carbon Design System](https://carbondesignsystem.com/) do a great job presenting comprehensive, well-connected documentation that caters to the different system users. 

But I’ve always admired the pragmatic approach that AWS uses for their documentation site. Take a look at [the documentation page for Amazon EC2](https://docs.aws.amazon.com/ec2/). There are so many different things being documented: API references, migration guides, best practices, CLI references. But they link out to all of the various versions of each, no matter the format: HTML, PDF, GitHub. This approach is both highly flexible (works with any linkable format) and redundant (if one link breaks, there are other options.)

Remember, documentation isn’t just about capturing what was… it's about actively describing what is and making possible what can be. It's not just a fossil record of past decisions, but an active field journal of ongoing explorations.