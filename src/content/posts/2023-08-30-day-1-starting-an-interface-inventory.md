---
title: "Day 1: Starting an interface inventory"
description: Collecting an inventory of our digital products.
date: 2023-08-30T05:00:00.000Z
tags:
  - interface-inventory
  - getting-started
  - design-systems
---
Today, I’m kicking off a practical design system build, soup to nuts.

For this series, I’m going to pretend I’m starting a new design system for Bank of America (BoA for short).

I haven’t worked with BoA, and don’t know anything about their platforms except what I see on their web sites. But it seems like an ideal case study: a large org with clear brand direction and multiple digital products.

If I worked at BoA, I’d start by asking product designers about any existing design files. The more I can work with what already exists, the better. I’m not trying to reinvent the wheel here, I’m simply playing [the role of archeologist](https://practicaldesignsystems.com/daily/start-with-curiosity/)—unearthing good patterns and surfacing them for broader use.

Since I don’t have access to original design files, I’m going with the next best thing: **screenshots**.

In a previous email, I shared an [Interface Inventory Template](https://docs.google.com/presentation/d/1ePoIKYg6UEzUF_tPzWDU-rji4o29Vj9oF7LoA01_U0w/edit?usp=sharing) I created for Google Slides, but I’m using Figma here because I like that the canvas can grow as needed. I’ll create a new file for the inventory and add a new page to hold the product screenshots.

If I were an employee, it would be easy to get a list of unique digital products supported by the org. Since I’m not, I’ll do a quick approximation by searching Google for `site:bankofamerica.com` and considering each subdomain as a unique product. (Keep in mind that some orgs stitch multiple products together under a single domain.)

I’ll pull those subdomains up in my browser, take [a full page screenshot](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl), and paste them into the page I created to hold a screenshot of each digital product:

![A digital product inventory in Figma](https://practicaldesignsystems.com/assets/i/post-figma-product-inventory.png)

I love this 10,000 foot view of the digital product offering. With all of the products side-by-side, you can already get a sense of the styles and patterns that are common.

A quick note: if you’re working on a more complex application where key UX interactions may be somewhere other than the home page (e.g. an ecommerce checkout page), you can capture those. I’d still keep them grouped by product, though, since most products pull from the same set of components and styles for all pages.

Okay, that’s all set up. Tomorrow, I’ll look these over to find common organisms that might be good candidates for the first component I’d like to tackle.

See you then!

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).