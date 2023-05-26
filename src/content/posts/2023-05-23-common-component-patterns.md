---
title: Better than a truck full of Lego...
description: Let's go through the process of making a component.
date: 2023-05-23
tags:
  - components
  - abstraction
  - design-systems
  - 30-days
---

Yesterday, I talked about abstracting individual UI elements into reusable base components. Today, let’s move things up a level and talk about creating a library of common component patterns — basically, a higher-level collection.

If you’re creating a series of components for your company’s digital product builders, you could just include all of the base UI components: buttons, form fields, headers, etc. That can be helpful, especially for companies with only a few digital products. 

But if your company creates a lot of digital products and values efficient product building over ad hoc design requirements, you might consider creating a library of “commonly used together” component patterns. Think of component patterns like templates for common user interface tasks that go beyond individual elements, encompassing common combinations of those elements and their interactions.  

Creating a library like this speeds up teams, creates a more cohesive product landscape for users, and lets your better address things like state management, testing, and accessibility in a more holistic way than you could at the smaller component level.

A few examples are in order. 

- **Login Form:** this pattern might include text fields (for the username and password), a checkbox (for remember me), and a button (for submit)
- **Card Grid:** this pattern might contain rows and columns of cards, each of which is an individual component made up of an image, a title, and a brief description.
- **Data Table:** this pattern might contain all of the elements that make up a table, like the container, header, rows, and cells as well as pagination, sorting, and filter controls.

For some more ideas and examples, check out the [component pattern gallery](https://web.dev/patterns/components/) that the Chrome Developer Relations team put together. It’s rather exhaustive and showcases the HTML, JS, and CSS used for each component. Notice that these component patterns vary in complexity. The “Split Buttons” pattern is fairly simple, but the “Settings” pattern is rather complex.

⚠️ Keep in mind: your pattern library might be better off looking completely different than the examples I just gave. If your company builds survey apps, a really useful pattern library might look like progress indicators, reporting dashboard elements, different kinds of survey forms, etc. If your company builds digital news products, a useful pattern library might include patterns for advanced search forms, paywall popups, or subscription purchase checkout forms. 

We’ll talk about reference sites in a few days, but that’s probably the best place to house a component pattern gallery. Just make sure your designers and engineers can find it easily.

Just like making components, building a library of component patterns is an iterative process. Keep an eye out for recurring combinations of components in your designs and abstract those into patterns.