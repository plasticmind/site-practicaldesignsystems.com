---
title: Terrible name… useful way to prioritize
description: Creating a well-documented “why we decided to prioritize this” hand-shake agreement.
date: 2023-08-03T05:00:00.000Z
tags:
  - productivity
  - consensus
---

Yesterday, I shared the Eisenhower box as a way to prioritize tasks, but it’s a bit of a blunt force tool. When I started with a much larger, more diverse team, we started using a technique called “WSJF” (pronounced “whizz-jiff”... yes, ridiculous) to build consensus around what to tackle next.

According to [the SAFe website](https://scaledagileframework.com/wsjf/):

> Weighted Shortest Job First (WSJF) is a prioritization model used to sequence work for maximum economic benefit… [It is] estimated as the relative cost of delay divided by the relative job duration.

In short, the process looks like your team evaluating 4 different aspects of upcoming features:

1. User business value: How much value will this proposed feature bring to users?
2. Time criticality: How important to the customer is it that we do this now? Is there a fixed deadline?
3. Reducing risk / enabling opportunity: How else might this bring value to our business? 
4. Job size: How much time and effort will it take to implement this new feature?

Key representatives from leadership, design, and engineering would submit proposed items from their teams a few days before our meeting, then we’d all get together and go through the list, scoring together those 4 key aspects.

Typically, engineering would suggest architectural improvements like platform development and tech debt, product/design would bring new user-focused features (backed up by user research), and leadership would weigh in on business-related concerns.

We’d use a modified Fibonacci sequence (1, 2, 3, 5, 8, 13, 20) for scoring and a technique called “planning poker” that allowed people make educated estimates and then defend or modify those estimates after some discussion.

Once the user business value, time criticality, risk reduction, and job size are scored, there’s a simple formula applied: add up 1-3 and divide that by 4 to get a rough prioritization list.

This technique isn’t really meant for a lot of small, specific tasks; it’s better suited for setting high-level goals for large teams. I used this technique ahead of our quarterly planning to achieve consensus across a broad range of teams. 

We weren’t precious about the list. If some underlying factors changed, we would adjust as needed. But creating the list together provided us with a well-documented “why we decided this” hand-shake agreement which became a useful way to explain the implications if leadership ever suddenly wanted to change priorities (yes, that happens.)