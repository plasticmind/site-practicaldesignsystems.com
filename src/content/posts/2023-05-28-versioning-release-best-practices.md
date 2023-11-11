---
title: Versioning and release best practices
description: The best system is one where users can easily understand and anticipate changes.
date: 2023-05-28T05:00:00.000Z
tags:
  - version-control
  - process
  - release
  - communication
  - design-systems
  - 30-days
---

I said [yesterday](/daily/evolving-documentation/) that your design system needs to evolve over time.

The practical question... how?

Sure, you could make move fast and break things. Update the code library! Modify your UI kit! but remember a design system is a tool for users that build digital products at your company. If designers and engineers rely on it, and you move fast and break it… the down stream potential for failure is substantial (proportional to its upstream potential for efficiency.)

How do you prevent that from happening? How do you update your design system without breaking things?

Thankfully, software engineers solved this problem a while ago. 

A lot of design system work I’ve come across seems to be driven by designers, but adopting best practices from software engineering helps create an efficient and predictable flow for updates to your design system.

There are 5 key pillars to smooth releases:

- Understandable versioning system
- Consistent release schedule
- Transparent release process
- Clear and concise communication of changes
- Pathway for feedback

I’m going to explain each in depth, using some of the more common tools and approaches. Modify as needed to fit your organization’s needs.

**Understandable Versioning**

Versioning is standard fare if you’ve worked with software before, but a lot of design tools are starting to incorporate aspects of version control into their feature sets. It’s really helpful [to learn the basics](https://rogerdudler.github.io/git-guide/), but today I’ll focus on versioning and release concepts.

A quick primer on version control if you’re new to it: it’s a way track and manage different updates and changes to software, like editions of a book. It helps engineers avoid overwriting each other’s work and simplifies the process of merging code from multiple contributors.

When code from multiple contributors has been reviewed and merged, it’s often bundled together into a “release” by a “release manager” and sent to a test environment for review. If all goes well, it will end up live in a production environment.

A key detail here: **numbering your release.** 

Why does that matter? Sometimes changes to code *needs* to break things. When it does, specific version numbers let your engineers select which they want to use until they can address the breaking changes in the digital product they’re working on.

One of the most popular versioning schemes is called Semantic Versioning (SemVer). You’ve probably seen it before. It’s a useful shorthand that communicates underlying changes in a release with a version number split into three parts: 

`MAJOR.MINOR.PATCH` — e.g. `1.7.2`

There are 3 types of changes accounted for in this scheme:

- Increment the `MAJOR` version number if you release new functionality that breaks things (not backwards-compatible)
- Increment the `MINOR` version number if you release new functionality that doesn’t break things (backwards-compatible)
- Increment the `PATCH` version if you release small bug fixes that don’t break things (backwards-compatible)

Adapting this to a design system, a major version might be a redesign, a minor version could be adding new components, and a patch version could be bug fixes or slight modifications. 

**Consistent Release Schedule**

Consistency is key in releases. It shows users that your serious about delivering value and incorporating their feedback.

Find a release cadence that works for your team (I’ll talk about governance in a later email) and for other digital product building teams. This could be on a set schedule (e.g., bi-weekly, monthly) or based on the completion of features. 

A good principle for establishing cadence is to weigh how often you’re expected to deliver updates with the bandwidth of your users to pull in changes.

**Transparent Release Process**

When it comes time release, your users shouldn’t be surprised. 

At a previous org, the release manager would announce updates during weekly status meetings with all teams using the system. She would meet with each team weekly to understand which features were a priority for that release cycle and report on progress. She would confirm with them release dates and ensure there weren’t any blackout dates in a release Slack channel created for each digital product team. 

The day of the release, no one was surprised. This is good release management.

**Clearly and Concise Communication of Changes**

Another helpful pattern from engineering is a changelog. It’s a record of all notable changes made to a project. It helps users and contributors quickly understand how a version differs from one to the next.

Did you add new components? Modify existing components? Deprecate components? Fix bugs? Any other changes?

Each new version of your design system should be accompanied by clear and concise communication. This might be release notes, a changelog, a timely Slack notification (🚨 ”The new component library just got released into Dev!”), a post on the reference website, a email blast — or all of the above. 

Make this a habit!

**Pathway to Feedback**

Finally, give users a way to get support and provide feedback. 

Some teams use GitHub issues or pull requests for handling feedback for component libraries. Some teams ask teams to route requests through a project management tool. Other ways of feedback might be comments on a Figma board, messages in a dedicated support channel, question and answer time during a standing weekly office hours meeting. Slack messages are easy for users, but can also get very noisy and easily lost. 

The larger your organization is, the more structure you’ll probably need for collecting feedback. But if your design system initiative is fledgling, you may want to lower the barriers for participation.

The important point is that users get the support they need and know where to go to get it.

…

Remember, the best design system is one where users can easily understand and anticipate changes.