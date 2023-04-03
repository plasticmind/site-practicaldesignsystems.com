---
title: "Versioning Your Design System"
date: "2023-03-28"
---

What’s the best way to handle versioning within your org’s design system?

In other words, how do you track changes to a design system and ensure that those changes can be tested and deployed safely without breaking apps or disrupting teams that use it.

Versioning is a big topic, but I’ll briefly touch on on three important considerations:

- **Setup:** How you track and deploy changes depends largely on how your design system and deployment infrastructure are set up. For instance, if you’re using the Figma Tokens plugin to sync changes in Figma to a tokens repo in GitHub, you might commit those changes to a new branch, file a pull request, and ask someone on the design systems team to review and approve those changes so they can be merged into a new release branch. This release might then be scheduled for testing (possibly on a dev or stage environment) and deployment to production, then communicated to the broader team (see below). But that’s just one setup. Your setup might not be as automated and may include more manual handoffs, but the process of update, test, release will probably look similar.

- **Naming:** Most software engineers are familiar with semantic versioning (e.g. v.2.1.3) for code releases, but this can benefit design systems as well. The first number is a major release (a change that might require work), the second number is a minor release, and the last number is for patches (a change that’s backwards compatible). Using this approach for your design system can help standardize the way your team thinks about and communicates changes. More here: [https://semver.org/](https://semver.org/)

- **Communication:** More than anything, communication is key to effective and reliable change management. If the promise of a design system simplify the use of common design decisions across multiple teams and properties, communicating those changes to teams using them is very important. Set up a dedicated Slack channel. Send out a weekly email. Keep your Jira tasks updated and accessible to all relevant teams. Publish a design system roadmap. Review the timeline in your company all-hands. Let people know when changes occur, what the scope and impact of those changes are, and what additional changes are planned for the future.

Don’t forget. Design systems are a group effort! The more collaborative you make your design system, the more you increase their value (real and perceived) within the org.