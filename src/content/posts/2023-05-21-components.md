---
title: Let's talk about components...
description: A brief primer on code components and component libraries
date: 2023-05-21T05:00:00.000Z
tags:
  - components
  - abstraction
  - design-systems
  - 30-days
---

For the latter half of our 30 days, we’re going to focus on the tactics of building design systems. Let’s start with a primer on one of the key parts of a design system: **components**

People use that word to mean all sorts of things. Sometimes they mean a design component — a repeatable graphical UI element, e.g. an input field component in Figma. Sometimes they mean a code component — a large module of related application functionality, e.g. a beefy sortable list in Vue. 

In his landmark book [Atomic Design](https://atomicdesign.bradfrost.com/), Brad Frost attempted to tackle this confusion by describing a hierarchy of components with different levels of complexity and inheritance: atoms → molecules → organisms → templates → pages. That model is useful, but some people use a simplified version, and others don’t use it at all. 

What matters isn’t so much what you call things or the level of abstraction you use, but more so that your team is on the same page. So let’s get our head around the parts of a component, and then you can form some consensus with your team around naming.

…

As your digital products grow, your teams will inevitably use the same pieces of interface over and over again (both in a visual prototyping tool or the actual software) — the same input field, search bar, product thumbnail, whatever, repeated throughout your products. At some point, you’ll want to turn that into a reusable block of code or visual representation of it. 

To make a component, you’ll codify the parts of that interface element that you want to stay the same everywhere the component appears, like behavior and style. And you’ll put the things that need to change for each instance into a component property (prop), like the button text, or the input field label, or the product image URL.

Building with components helps your teams be more efficient, consistent, and scalable. You don’t need to rebuild each bit of UI every time you use it, which results in a better user experience. And a change made to a component is propagated across all instances of that component, which results in easier maintenance. 

…

Now, let's talk about: **component libraries**. 

Maybe not too hard to figure out, but these are just collections of reusable components that provide a common design language and user experience for digital products across your org. This can be anything as small as a simple libraries consisting of a few basic UI elements to huge libraries with hundreds of components for building complex user interfaces.

As with components, there can sometimes be confusion. People will sometimes say “component library” and mean “collection of well-built Figma components with useful props and style varieties.” Other times, they mean “collection of well-built React components with useful props and style varieties.” Sometimes, especially with larger pre-built libraries, there will be a code component library and a library of design component to make visual prototyping more in line with the software. Ideally, the DS you build will have both code components (for rapid product development) and design components (for rapid prototyping).

And don’t forget documentation! A well-maintained component library will have documentation for each component — information about its purpose, how to use it, and any associated design or behavior variations. That way, all teams understand and use the components the same way… and your users will benefit with a more cohesive digital product.

Having a shared component library means less time spent on re-creating or re-styling common elements and more time spent on crafting unique user experiences and innovative features.

Using components can be a bit of a mind-shift, but it saves you from recreating the same thing over and over again, and frees your teams up to focus on higher-order problems, like design decisions that transcend components — overall user flow, creative enhancement, new products, etc.

Tomorrow, we’ll talk about how to abstract!