---
title: "Day 20: 5 ways to style components"
description: There are several ways to style web components. Which do I recommend?
date: 2023-10-18
tags:
  - engineering
  - code
  - styles
  - css
draft: false
---
Yesterday, I built out the base HTML and some light styling for my Utility Nav component. I created a separate CSS file for my component, but it’s worth taking a minute to talk about a few different approaches you can take when creating styles for a component:

**Inline Styles:** 

It may be easy to write, but it’s inefficient, hard to maintain, and you can’t use pseudo-classes. I’m writing this one off up front. 

**Traditional CSS:** 

You’re probably familiar with this approach. It’s what I did yesterday: create a stylesheet for my component that targets it by class name. The styles are imported when the component is loaded. 

It’s a common approach that is easy to grok. You can also mix this approach with a set of global styles, like grids, typography, and shared variables that get reused across many components. You can also incorporate a build step so you can use a preprocessor like SASS to make your style writing even more efficient.

If you’re working on a complex app, your class names will probably need to be highly specific in order to prevent bleeding over from other styles. And highly-specific class names can get difficult to parse in complex apps.

**CSS Modules:** 

This is similar to traditional CSS, but a file naming convention (like `UtilityNav.module.css` lets the app engine know to load it as an object and will scope classes it to a particular component. 

For example, if my CSS file references `.UtilityNav`, when the app renders out the Utility Nav component, it may have the class `UtilityNav_ax7yz`.  This helps avoid the style bleedover I mentioned earlier.

**Third-Party Utility-Class Library:** 

Yes, I’m talking about [Tailwind](https://tailwindcss.com/) here.  Developers tend to like this because they don’t have to worry about external CSS files. They can add whatever styling is needed by adding the appropriate utility class names. For example, adding the class `.mt-4` will add 1rem of padding to the top of your element.

But the learning curve on this can be steep, especially if you’re not familiar with CSS. They’ve got good tooling that helps make it easier, but you still have to set up the tooling. It can also make HTML difficult to read. I’ve also seen a similar problem to inline styling: when engineers are making design decisions for every element, a considerable amount of inconsistency can get introduced across user interfaces

**CSS-in-JS:**

Some people prefer to write JS and have the app engine compile that down to CSS. I am not one of those people. 🫠

It does make it easier to manipulate CSS properties based on information the app engine knows about (like state), though I still tend to prefer managing these state changes with classes.

…

So, where do I land?

Each case is different, but in this case — the BofA **Utility Nav** case — I’m starting small — a single component that can be included into multiple products.

I don’t want the overhead of a large third-party library. I don’t need the complexity of CSS-in-JS. 

I think a single component-specific CSS file is fine. As I add more components, I’ll probably end up taking the Atlassian route and creating a larger global CSS file for the design system that can be included along with the component.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).