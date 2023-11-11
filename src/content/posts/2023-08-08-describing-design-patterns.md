---
title: Describing design patterns
description: Creating a catalog of reusable patterns that solve general design problems in specific contexts.
date: 2023-08-08T05:00:00.000Z
tags:
  - components
  - patterns
  - documentation
---

Let’s continue on from yesterday’s exploration of *Design Patterns*, the classic book on object-oriented software development. 

When describing design patterns, the books recommends a format that includes the following details:

- Pattern name and classification
- Intent
- Also known as
- Motivation
- Applicability
- Structure
- Participants
- Collaborations
- Consequences
- Implementation
- Sample code
- Known uses
- Related patterns

You may not need or want to include all of these when documenting your component or pattern library, but thinking through each might give you ideas of ways to improve their usefulness.

A quick summary of each:

- **Pattern name and classification:** The most important thing in naming is that your team has a shared understanding of what a name means, but good names can do a lot of heavy lifting by defining your system’s design vocabulary.
- **Intent:** What does this pattern do? Why does this pattern exist? What design problem is it meant to solve?
- **Also Known As:** Are there any other names this pattern goes by? (Useful when you’re documenting patterns across multiple platforms with their own jargon.)
- **Motivation:** Give a specific example of how this pattern solves the problem its intended to solve. Make the pattern’s usefulness understood in less abstract terms.
- **Applicability:** How do you know when this patterns makes sense to use?
- **Structure:** The book recommends a graphical representation of the classes in the pattern and how it handles requests and interactions with other patterns. For component libraries, this translates to a list of the component’s classes and props.
- **Participants:** What objects and classes contribute to this pattern? This guidance seems relevant to higher-order components or patterns.
- **Collaborations:** How do the various participants in this pattern work together?
- **Consequences:** How does the pattern accomplish its intent? What are the results and trade-offs of using this?
- **Implementation:** What are some practical tips or techniques for using this pattern (e.g. language-specific issues)?
- **Sample code:** How specifically can users incorporate this into their codecase?
- **Known uses:** What systems use this pattern? (This is a pattern, so it should be more than one system!) I love this idea and wish more design systems incorporated it.
- **Related patterns:** What other patterns in the catalog are similar or related to this one? What are the key differences? This is especially useful for large catalogs or in situations where two similar components might be easily confused.

Keep in mind, the goal for a library like this is to describe the reusable patterns that solve general design problems in specific contexts in order to help designers and developers quickly and consistently take advantage of them.