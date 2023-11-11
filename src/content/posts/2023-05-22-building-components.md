---
title: The art of abstraction...
description: Let's go through the process of making a component.
date: 2023-05-22T05:00:00.000Z
tags:
  - components
  - abstraction
  - design-systems
  - 30-days
---

Let's go through the process of making a component.

In software development, there’s a principle called DRY (don’t repeat yourself). It was described by Andy Hunt and Dave Thomas in their book [The Pragmatic Programmer](https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary-ebook/dp/B07VRS84D1/):

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

This concept applies all over software development, but lets focus today on building components that can function as “single, authoritative representations” to be used throughout your interface. Good component building boils down to learning how to abstract common features, behaviors, and styles so you can create reusable and maintainable pieces of your UI.

Let’s say after assembling your content inventory, you discover 5 or 6 different global search fields across all your digital products, similar but slightly different — one has a blue border, one has gray border, one has an inset shadow, one has a magnifying glass icon, one has an autocomplete dropdown, etc. How do you decide which of those becomes “the official” search component?

When looking at similar variations of an existing UI element and thinking about how to turn them into a standard component, I like to document a few key things:

- **Identify Patterns:** Are there any recurring patterns between these variations? Look for visual and functional similarities.
- **Determine Common Properties:** What stays the same between instances? These could be styles, behaviors, or structural elements.
- **Recognize Variations:** What changes between instances? This will often be text, labels, icons, image URLs, or any kind of content that needs to be adjustable across instances.
- **Abstract the Common:** Once you’ve identified common properties, use these as the 'base' of your component. These will become the “base characteristics” of your components and will remain consistent across all instances of the component.
- **Define Props for Key Variants:** For each variation you identified, create a component property ('prop') that allows this aspect of the component to be customized.
- **Scrap the Cruft:** You’ll often find differences between variations of a single piece of UI that are just unintentional inconsistency and shouldn’t really be offered as props or variants. Scrap those variations whenever possible… but build consensus whenever you can! Make sure you’re not scrapping an important variation that exists for a reason you’re just not privy to.

How specifically you build components will vary slightly between code and design tools. Those details matter, but understanding these principles should help you navigate whatever tool the org might be using to build components.

One thing to note: components exists in a world of other components. When harmonizing the commonalities across variations of a component, you’ll also want to consider the style, structure, and behavior of other UI elements.

Remember, it's okay if your components evolve and change over time. The goal is not to create perfect, unchanging components. You’re creating a solid foundation that you (and the team) can refine as your understanding of the system deepens.