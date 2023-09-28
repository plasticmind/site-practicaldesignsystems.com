---
title: "Day 13: I need products!"
description: I need to create an app so I can include my design system in it.
date: 2023-09-27
tags:
  - app
  - engineering
  - code
draft: false
---
I promised code yesterday, but when I was writing this email, something dawned on me: **I need products!**

There are two important scenarios here: creating components that someone can include in an application (making the design system) and including the component in an app (using the design system).

I was going to start by creating the **Utility Nav** component as part of an MVP design system… but I don’t have any products to pull them into yet! 

![Screenshots of a lot of digital products](/assets/i/post-pds-bofa-13-1.png)

*Each one of these is a digital product, likely with its own code base and engineering team.*

If you were working at a large org, you’d probably be starting with multiple existing products. Remember, shared components are only really useful when they’re being pulled into 3 or more digital products.

Now, I *could* jump right in to building the shared component, but I’m actually going to create a sample app and show you what it looks like to build by pulling in components from an existing design system. That will give you an idea of what “using a design system” looks like for engineers: what works, what doesn’t, and what sort of implicit assumptions are made by the people who made the design system reference site.

…

To start, I’m going to create my first digital product: a new React application. 

If you’re a designer, stick with me on this. As I mentioned [the other day](https://practicaldesignsystems.com/daily/day-11-should-designers-learn-to-code/), you may not learn how to code, but understanding component-driven development can help you design in ways that are more adaptive to the way software is built. 

I’m going to use a handy tool called [Create React App](https://create-react-app.dev/) that lets me stand up a boilerplate React app very quickly. 

Check out the Quick Start guide:

![Create React App Quick Start Guide](/assets/i/post-pds-bofa-13-2.png)

Some of you reading this will understand it right away, but some may not. These instructions assume that:

* You are using a Mac or Linux computer;
* You have Node and npm installed (and understand what those are);
* You’re using the version of npm that comes with npx.

These are common assumptions for documentation around app development, and if you do any kind of design system work, you’re probably familiar with them. But it’s always good to question those assumptions when putting together the documentation for your design system.

…

I already have Node, npm, and npx installed. In short, here’s what each of those do:

* **Node** lets you run Javascript on a server (like PHP) vs. running “client-side” in a browser;
* **npm** is a Node’s package manager that installs the code libraries (i.e. dependencies, more on that in a moment) that an application might need;
* **npx** runs those packages.

I ran `npx create-react-app bofa-product-a` at the command line. It created a new `bofa-product-a` folder and filled it with a lot of application code:

![VSCode displaying all of the boilerplate code for a new React app](/assets/i/post-pds-bofa-13-3.png)

This is my sample app where I’ll pull in design system components. I’ll do that tomorrow.

A few notes about dependencies:

* The `package.json` file is a list of all dependencies: their name and version number. This is an important file, since it tells Node what external packages you need in your app. This is how we’ll pull in a library of components.
* The `node_modules` folder is where all the dependencies are stored when they’re downloaded. You really won’t spend any time in here.

One more important consideration: different products at an org often use very different platforms and code bases (Android, iOS, WordPress, React, web components, etc.), so its often impossible to get a library of components that can be used everywhere. 

There are other approaches you can take to address this reality, like providing higher-level tools like one set of design tokens which can be incorporated into each platform/system in a way that works best for them.

For this series, I’m going to approach this as if all three of my digital products are web-based React apps.

![New Boilerplate React app in a browser window](/assets/i/post-pds-bofa-13-4.png)

My sample app is now up and running. Tomorrow, I’ll choose an existing design system and attempt to include it in my app.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).