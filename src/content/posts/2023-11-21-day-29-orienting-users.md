---
title: "Day 29: Orienting users"
description: Help users understand and navigate your design system with
  Storybook’s standalone pages.
date: 2023-11-21T10:00:03.186Z
tags:
  - storybook
  - chromatic
  - referencesite
draft: false
---
Yesterday, I wrote the documentation for my component in Storybook. 

Today, I’m going to orient users using standalone pages.

I want Storybook to be more than just a display shelf for components. I want to answer the question: “what’s the purpose of this design system?” and give users clear, simple steps how to install and integrate the design system into their projects. I’d also like to provide helpful information like latest version, contribution guidelines, and how to get help or provide feedback.

I created a new file named `GettingStarted.mdx` and put it in the root `src` folder. The name and location doesn’t matter, as long as its in a location where Storybook looks for stories.

Here are a few noteworthy things in that file:

![a screenshot of a Storybook standalone doc page](/assets/i/post-bofa-29-1.png)

1. Import the Storybook Meta object to define the page title and my `package.json` file so I can reference the current version number on the page
2. Set the page title
3. Reference the latest version number
4. Include code blocks with language-specific highlighting 

As you can see, this results in a page that is clear and easy to parse. It comes up first and orients the user instead of taking someone directly to a component page:

![screenshot of a standalone Storybook page](/assets/i/post-bofa-29-2.png)

I’ve included more not pictured here, like contribution guidelines, a link for submitting questions or feedback, and links to the relevant Github repo and npm package. 

To make it easier to share with the imaginary engineering team, I published my Storybook to a public URL using [Chromatic](https://www.chromatic.com/), a suite of cloud-based tools by the people who make Storybook. The free account level is very generous, and it provides a lot of great functionality, like public publishing and visual regression testing. It’s a good starting place for teams with not much budget.

**[Check out the public Storybook site →](https://655c28ebc0c53cef7636cc66-kqsvwkbjjl.chromatic.com/)**

Tomorrow, we collaborate with engineering!

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).