---
title: What Is A Design System?
description: A brief explanation of what a design system is and isn't.
date: 2023-04-12
tags:
  - 101
---
This question deserves a much longer answer than this short email, but I'll attempt a concise answer. Let's begin by looking closely at the term.

What is a system? The dictionary gives two definitions:

> a set of things working together as parts of a mechanism or an interconnecting network 

and:

> a set of principles or procedures according to which something is done; an organized framework or method

This is a good starting place, because a design system is just that — a system. When people ask what a design system is, they’re often picturing a single artifact, platform, codebase, or software application. But a design system isn’t any one thing. It’s a collection of connected tools that are used to turning designs into software.

So our next question is naturally: What is design? My favorite definition comes from Jared Spool:

> “Design is the rendering of intent. The designer imagines an outcome and puts forth activities to make that outcome real.” – Jared Spool

Using these definitions as a springboard, let's venture a definition, shall we?

**A design system is a set of principles, procedures, and tools used to render the intended outcome of designers.**

That’s technically accurate, but it’s a bit abstract. Let’s get more specific. 

A good design system explains guiding design principles. It showcases ideal patterns. It explains contribution guidelines. And good design system tools empowers teams to more consistently and efficiently scale design across multiple properties.

From a designer’s perspective, a design system usually includes design assets (Figma, Sketch, XD, etc.) and documentation around design principles, aesthetics, usability, governance, contribution, etc.

From a developer’s perspective, a design system usually includes a library of commonly-used components, design-related values in a format represented as data. Etc…

Some specific examples might help:

- A small but highly automated design system might be a set of components in Figma using design tokens to abstract the design choices. The tokens are exported via Git to a JSON file as key/value pairs, which is parsed with a custom build process and transformed into CSS and JS variables for inclusion in a web app and into a Cocoapod for inclusion in an iOS app.
- A much larger and less automated design system might be a set of Sketch components that are manually synced and documented in a standalone Storybook instance. This serves as a showcase for the components, with documentation for core principles and processes, and automated testing for functionality and accessibility. A custom build process publishes the components to an npm module, which multiple teams import and use in their projects.

These are just two examples of what a design system might look like. The complexity, maturity, and tooling will all look different, depending on an organization’s needs and goals.