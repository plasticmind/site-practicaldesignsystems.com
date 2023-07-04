---
title: 🌊 Over the Design Systems Waterfall
description: Don't let your design system become a little waterfall that solves problems only in theory.
date: 2023-07-03
tags:
  - agile
  - waterfall
  - process
  - bottleneck
---
Maybe it’s because I recently started working in government, but I’ve been thinking a lot about how organizations and projects are structured. The org I recently left was partway through a year and a half-long attempt to switch over to Scaled Agile Framework for Enterprises (SAFe), which was, to put it kindly, a very confusing and complicated attempted to make agile methodology work in a large organization.

It’s a noble goal, but in practice, it didn’t really address the complexities of enterprise dysfunction.

If you don’t know anything about agile methodology, it’s a way of working that was developed to address the problems with the more traditional waterfall methodology, something that works better for digital development. 

**Agile** takes a more iterative and flexible approach. Start small with a basic plan and work in small steps, constantly testing, gathering feedback, and improving your work along the way. 

**Waterfall** is more rigid and sequential. Create a comprehensive plan with clearly defined requirements, and stick to that plan until each phase is complete.

One of the most damning takes on waterfall methodology was from a blog post by Clay Shirky [about what went wrong with the Healthcare.gov rollout](https://web.archive.org/web/20131128035809/http://www.shirky.com/weblog/2013/11/healthcare-gov-and-the-gulf-between-planning-and-reality/):

> “Like all organizational models, waterfall is mainly a theory of collaboration. By putting the most serious planning at the beginning, with subsequent work derived from the plan, **the waterfall method amounts to a pledge by all parties not to learn anything while doing the actual work.** Instead, waterfall insists that the participants will understand best how things should work before accumulating any real-world experience, and that planners will always know more than workers.”
> 

Did you catch the bit at the end? Waterfall assumes that “planners will always know more than workers.” Managing engineers taught me that the opposite is often true. I may have a hunch how much time it will take to build or a hypothesis about the best approach, but without talking and listening to the engineers “in the trenches,” those are just educated guesses. Those guesses need to be informed — frequently. Planners need to talk with practitioners so everyone learns along the way.

SAFe ran into similar problems: a week worth of PI planning gets you a 3-month backlog. Look! Multiple consecutive springs! It’s an agile waterfall!

So what’s all this have to do with design systems?

Design systems is often very process-heavy practice. Lots of planning to ensure what you do works with other teams. Other teams start to rely on your tools, so you have to plan more before taking action. Create a lot of reusable variables, styles, and components up front for inclusion somewhere further downstream. Sounds eerily familiar.

I worry that design systems will become little waterfalls, upstream bottlenecks that solve problems in theory with no way to learn whether or not that’s true.

…

So how do you get over the design systems waterfall?

To start, [don’t optimize early.](https://practicaldesignsystems.com/daily/beware-premature-optimization/) Build only what will be useful to teams right now. As you do, be looking to learn what the next useful thing you build should be.

Iterate quickly. The longer you go without testing the genuine usefulness of the tools you’re building with real users, the more painful it will be to correct or rethink that work if you find out you’re wrong.

Finally, communicate and collaborate well. Before a sprint, talk with teams. What are their priorities? What are they struggling with? Validate the hypothesis your team has about the value of what they’re about to build. After a sprint, showcase the work and get it into your user’s hands as soon as possible so you can see it in action.