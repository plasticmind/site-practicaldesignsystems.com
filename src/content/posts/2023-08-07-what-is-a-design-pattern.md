---
title: What is a design pattern?
description: Timeless design advice from a classic book on software development.
date: 2023-08-07
tags:
  - design-patterns
  - components
---

I visited a local maker space with my son for a class on 3D printing, and I stumbled across a rather unassuming old book that caught me by surprise — *Design Patterns: Elements of Reusable Object-Oriented Software* by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, published in 1995. It's an architectural reference for object-oriented software development, a catalog of simple, elegant solutions to specific problems for developers in that discipline.

It’s almost 30 years old and focused entirely on software development for now-legacy systems; but I keep unearthing gem after gem, advice that holds just as much value today for people creating patterns in a design systems. 

Here are a few selections I found enlightening. 

The book starts off by describing the benefits of thinking in patterns with a quote from another classic book, *A Pattern Language*:

> “Each pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.”

Then it describes four essential elements of patterns:

> The **pattern name** is a handle we can use to describe a design problem, its solutions, and consequences in a word or two. Naming a pattern immediately increases our design vocabulary. It lets us design at a higher level of abstraction. Having a vocabulary for patterns lets us talk about them with our colleagues, in our documentation, and even to ourselves. It makes it easier to think about designs and to communicate them and their trade-offs to others. Finding good names has been one of the hardest parts of developing our catalog.
> 
> The **problem** describes when to apply the pattern. It explains the problem and it’s context. It might describe specific design problems, such as how to represent algorithms as objects. It might describe class or object structures that are symptomatic of an inflexible design. Sometimes the problem will include a list of conditions that must be met before it makes sense to apply the pattern.
> 
> The **solution** describes the elements that make up the design, the relationships, responsibilities, and collaborations. The solution doesn’t describe a particular concrete design or implementation, because the pattern is like a template that can be applied in many different situations. Instead, the pattern provides an abstract description of a design problem and how a general arrangement of elements (classes and objects in our case) solves it.
> 
> The **consequences** are the results and tradeoffs of applying the pattern. The consequences are often unvoiced. When we describe design decisions, they are critical for evaluating design alternatives, and for understanding the costs and benefits of applying the pattern. The consequences for software often concerns space and time trade-offs. They may address language and implementation issues as well. Since reuse is often a factor in object-oriented design, the consequences of a pattern include its impact on a system’s flexibility, extensibility, or portability. Listing these consequences explicitly helps you understand and evaluate them.

Think about how relevant this is for a design system’s component or pattern library. People tend to focus on the solution, but have you named your component well? Have you outlined the problem your component is meant to solve and when its meant to be used? Have you expressed the expected results or trade-offs of using your component?

There’s so much more to this book… expect some additional insights in coming days.