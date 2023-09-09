---
title: "Day 6: Local, global, connected… oh my!"
description: Creating a proper component
date: 2023-09-07T04:30:39.917Z
tags:
  - component
  - abstraction
draft: false
---
Back at the DS work today… but for all the work I’ve done, I haven’t actually created a proper *component* yet.

In [a previous post](https://practicaldesignsystems.com/daily/let-s-talk-about-components/), I mentioned that people can often mean many different things when they use the word component. For the sake of today’s email, I’m talking about **a Figma component**, which has some specific characteristics:

![Master component vs. component instance](/assets/i/post-bofa-master-component.png)

* It is a layer (or group of layers) that gets special treatment in Figma, like a purple ❖ diamond next to its name in the Layers panel or showing up in the Assets panel;
* It can be re-used as *instances* across multiple screens, and a change on master component will update all of the instances;
* It can contain *props,* which are the changeable parts of a component, defined as values that can be connected to specific design properties;
* It can have multiple *variants*, or different variations, of the same component with various style combinations, and they can also contain their own unique props.
* It can be published to a library for use in other projects;
* It can also be imported for use in FigJam (Figma’s whiteboarding tool).

So… there’s a lot of benefit behind creating components.

Variants and props are big enough topics to get their own post, so today I’m going to focus on simply creating a master component, placing some instances, and publishing.

…

When I last left my humble utility nav, it was an auto-layout frame with a background color and several nicely padded text layers.

![Utility Nav Component](/assets/i/post-bofa-utility-nav.png)

To turn this into a component, I simply selected it and pressed CMD-OPT-K, though I could have right-clicked and selected “Create Component.”

![Selecting "Create Component" from the main menu](/assets/i/post-bofa-create-component.png)

It now has the purple diamond — that’s how you know it’s a component!

![Component layer has a diamond icon](/assets/i/post-bofa-component-layer.png)

If I click on the “Assets” tab at the top of the left sidebar, I can now see my component.

![Selecting the assets layer](/assets/i/post-bofa-assets.png)

Now I’m ready to place a couple of instances. I’m going to place them on my Digital Products page, right on top of my screenshots so I can see how my new standardized approach will look in context. This is me trying on a new shirt and looking at it in the mirror to make sure it works.

![Dragging and dropping component instance on to screenshot](/assets/i/post-bofa-place-component-instance.gif)

I drag it over the top of the existing utility nav on the BofA home page. I may need to cover up part of the screenshot utility nav with a gray box, but that’s trivial. I dragged my new component to each of the screenshots that have them to see how it looks.

The blue text is a light, so I’m going to go back to the master component and change the font to black. As soon as I do, every instance of the utility nav updates. I can see those changes real-time. 

Now, I want to publish my component so that other teams could easily reuse it in another Figma project (fair warning: this requires a paid account). 

With the Assets sidebar still open, I clicked the book icon in the upper-righthand side of that panel and selected Publish:

![Publishing my component](/assets/i/screenshot-2023-09-08-at-03.03.52-2x.png)

I just needed to write a commit message (this whole interaction is very GitHub like) to get the library published. 

Now that the component is published, I can import it into another project and start building with it. There’s even some neat versioning features, which can be useful when you start releasing consistent updates.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).