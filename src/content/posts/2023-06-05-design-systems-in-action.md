---
title: Design systems in action…
description: Comparing notes from yesterday's exercise.
date: 2023-06-05
tags:
  - exercise
  - design-systems
  - 30-days
---

Yesterday, I introduced you to a Osmosis, a hypothetical-but-based-on-real-experience company, and asked you questions about how you might approach design systems work there.

If you haven’t read that email yet, go back and read it. It will help set the context for this email.

🔥 Let’s start with the friction points:

**Division Between Apps and Content**

The first one that stood out to me was the division between teams that **create applications** and the teams that **create content for applications**. 

Application teams tend to prioritize technical performance and scalability. They measure things like app startup times, crash rates, and error rates. Content teams tend to prioritize user engagement, and track things like engagement metrics, time on page, long-term retention, etc. 

So I can picture content design teams pitching stunning, highly produced and highly-engaging content to stakeholders with lots of compelling visuals, scroll-jacked transitions, animated illustrations, and plenty of one-off interfaces meant to surprise and delight. 

And I can imagine application engineers with furrowed brows in tense “descoping” meetings with the content team, asking politely for a significantly reduced version of the content they can actually pull off in-app.

**Lack of Coordination**

Because these teams are siloed, it’s very likely this “descoping” converstaion doesn’t happen until both teams have already done a lot of work. This work costs money. So both teams now have significant financial incentive to fight for the work they’ve done. Very hard to find consensus in an environment like that.

**White-Label Diversity**

Lastly, the white-label content for other brands could be a friction point. This might be possible to address with theming, but the clients might feel like the underlying framework makes them too similar to other white-label clients or that it’s not accommodating enough to their own style.

💦 Lots of potential friction… how might design systems help?

**Talk to Your Users**

I’m including this here as a reminder since it’s an important first step. 

Talk to leads from each division. Map out their workflow, identify their pain points, and look for places where their needs converge. 

**Possible Solutions**

As you talk with users, some solutions may emerge:

- Do the leads on the content side feel like their team takes too long to create these singular, hard-to-repeat pieces? Is the final product engaging but an accessibility nightmare? This may be a good opportunity to create a system of visual components to use when building out your content. And that exercise of formalizing those visual components (and their props) can help engineers build out the code counterparts.
- Do the leads on the application development side have ideas for ways to support more engaging functionality within their apps? As the content team begins to work more closely with engineering teams to explain their goals and vision in a more systematic way, features that are surprising, delightful, and scalable may come to light.
- Could data from the customer support leads inform which approach might be more suited to the actual needs of customers?

**Recognizing and Addressing Needs**

Even with a clear sense of what should happen next based on user research, there are still going to be some people who feel like their needs aren’t being met. Some of the app engineering teams might push back on adding new features. Some of the content team might feel like they’re being pigeon-holed, that the component approach stifles their creativity and will hurt customer engagement.

When this happens, I’ve found it helpful to be open about it. I don’t fixate on it, but I acknowledge the concerns and move on. 

I also find that there are often ways to achieve helpful compromises that address multiple competing legitimate concerns. For example, I might suggest that we move all of our common interfance elements to standard components, but allow application teams to create a small number of uncommon or non-standard interactions on an application-by-application basis in partnership with the content teams.

**Team Structure**

It wouldn’t surprise me if the designers on the app engineering team drove the design system initiative at this company. They’ve already put considerable time into thinking about how design works at scale in their applications. But that may not hold true if the individual app engineering teams are also siloed, and they’re all using different frameworks or platforms. (This is far more common than you might think.)

If someone on the content team were systems-minded with some engineering experience, they might be a good fit to drive the initiative. The content team is somewhat more centralized and probably has done the most research to understand customer needs.

If that were the case, I would recommend a team consisting of that person and one or more design leads and engineers from the app engineering team, with some additional project management support and stakeholder sponsorship if possible. 

**Getting Started**

The ideal catalyst for design systems work would be a new app or a redesign/replatform of an existing app that’s already been approved and funded. The design systems team could take on part of the project’s work. 

- Designers could create reusable UI components and interaction patterns, and document guidelines for usage. This work could speed up the content team when they prototype new content.
- Engineers could build out the code components to be included in the app and set up a reference website so that the next team to build could leverage those components in their build.

This work might also be connected to some content management systems work (after all, systems work is systems work!) Design systems teams often partner with a CMS team to create a platform that will deliver those produced pieces to applications via a fast, extensible API.

…

I’m almost 1,000 words in, and I’ve only just scratched the surface. We are just about at the end of the series, but there’s so much more to cover.

The goal was to review the fundamentals, the key concepts behind design systems. 

I hope this has helped you along the way.

As always, if you have a question or learned something and want to say thanks, hit reply!