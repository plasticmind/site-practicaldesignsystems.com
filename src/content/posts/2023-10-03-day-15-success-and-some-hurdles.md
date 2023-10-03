---
title: "Day 15: Success (and some hurdles)"
description: Design systems are a part of software development and involve the
  messy work of versioning, platforms, and dependencies.
date: 2023-10-03
tags:
  - versioning
  - requirements
  - code
  - designsystems
draft: false
---
I tried to import the Atlassian design system into my app… let me tell you how that went.

*(This is a bit technical, but I think it will illustrate some of the implementation realities you’ll face when creating tools for engineers.)*

…

When I used `create-react-app` to create a new application, it set up the new app with React version 18.2 and no TypeScript support. I didn’t realize this at first, and I tried to follow the instructions on Atlassian’s reference site: `yarn add react@16.8 react-dom@16.8 typescript@4.5`

This resulted in all sorts of errors and an app that stopped compiling correctly. 

**I was stuck.**

Here are the requirements again:

> The Atlassian Design System is implemented with React 16 and TypeScript. Make sure you have React and optionally TypeScript installed before you start.
> 

I assumed that a higher React version than the requirements suggested would work, but it didn’t. 

For the sake of this series, I decided to downgrade my app to React 16.8. That downgrade required a bit of work: 

- Changing my dependencies to version 16.8 and reinstalling them;
- Modifying the code the app uses to render the page;
- Updating the TypeScript config settings.

Your users may not have the option to do that, especially since using a legacy version of a platform comes with its own security risks.

I don’t want to belabor this point, but these technical issues — versioning, platforms, dependencies — are all part of the software development process. **If you are going to do design systems work, it is important that you understand these concepts.**

…

In the end, I managed to get my app’s dependencies to play nicely with the Atlassian design system requirements. Tomorrow, I’ll pull in those Atlassian dependencies and get an imported component publishing inside my app.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).