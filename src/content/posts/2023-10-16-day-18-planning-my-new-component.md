---
title: "Day 18: Planning my new component"
description: I've designed my component, now it's time to build it.
date: 2023-10-16
tags:
  - spec
  - documentation
  - component
  - engineering
draft: false
---
I’ve [designed my Utility Nav component in Figma](https://practicaldesignsystems.com/daily/day-4-building-a-component/). I’ve [created a version of it in an existing React app](https://practicaldesignsystems.com/daily/day-16-someone-else-s-component-in-my-app/) using a component from the Atlassian design system. Now it’s time to build my own component in code and publish it, so it can be included it other applications.

There are a lot of ways to do this.

Here's how I'm going to do it: I’m going to approach this building the component first inside one of my existing applications. Once I finish, I’ll move it to its own codebase. This is a common approach, since new design system components often come from existing products.

Some people jump into code and start building, but I like to write a spec first. This approach helps me think through naming and logic before I start writing code. I’ll use the Figma component as a guide, but I also took inspiration from the Atlassian component for a few additional props I’d like to include.

Here’s my spec:

---

**Utility Nav**

The **`UtilityNav`** component is a horizontal navigation bar that lists out and links to major products or sections within an organization.

**Props:**

**Items** (Array of Objects)

- Description: A list of items to display on the navigation bar.
- Type: **`Array<{ label: string, link: string, active?: boolean }>`**
- Default: **`[]`**
    - **`label`**: The display text for a navigation item.
    - **`link`**: The URL or route to navigate to when a nav item is clicked.
    - **`active`** (optional): An optional true/false value that indicates if the navigation item is the active page/product.

**Usage:**

```jsx
<UtilityNav
  items={[
    { label: 'Product A', link: '/product-a', active: true },
    { label: 'Product B', link: '/product-b' },
    { label: 'Product C', link: '/product-c' }
  ]}
/>
```

---

This isn’t the full documentation, but it’s a good head start.

A couple of things I should mention:

- The Atlassian nav component was just a container for other components. You had to pull in button component from the design system and use it to display links across the top. In a real world build, I’d probably take the same approach so links stayed consistent. But I’m keeping it the same to keep this component build simple.
- This brings up another important point. When I designed this in Figma, I used two simple components. But I’m building it as one in my codebase. This is a reality that design systems teams sometimes have to deal with, especially if they rely on other teams to do some of the engineering work.
- These are the kinds of tradeoffs that teams do design systems work have to consider. This isn’t a big change since it’s a simple component, but changes like this can often make it more challenging to map the decisions a product designer makes in Figma to decisions an engineer makes in code.

Now that I’ve got a general spec written for my components, I’m ready to build and style it. Tomorrow!

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).