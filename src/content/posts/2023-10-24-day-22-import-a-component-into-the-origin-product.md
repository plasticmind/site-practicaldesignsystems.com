---
title: "Day 22: Import a component into the origin product"
description: Prepping component libraries is not glamorous, but it helps ensure
  compatibility across codebases.
date: 2023-10-23
tags:
  - components
  - code
  - npm
draft: false
---
Today’s task was a relatively simple one: now that we’ve got [the component published to npm in its own package](https://practicaldesignsystems.com/daily/day-21-publishing-my-component/), I need to replace the existing **UtilityNav** component with the one from that package.

Here’s a visual to help explain what’s going on:

![a flowchart showing a component library publishing to npm which products pull in](/assets/i/post-bofa-22-01.png)

I now have a new component library. It can be installed as a dependency in other apps, which pulls it in from npm and puts it into a `/node_modules` folder in the root of the project — and I can do this in virtually any other React apps. 

To use this in my original app (”Product A”), I only needed to remove the local instance of the **UtilityNav** component, and then do almost the same thing as [when I used Atlassian’s component in my product](https://practicaldesignsystems.com/daily/day-16-someone-else-s-component-in-my-app/).

⚠️ There was one probably that I think worth bringing up. I built the Utility Nav using JSX (a simplified type of syntax), but my Product A app doesn’t support JSX, so it failed with an error. I had to set up Babel in my component library repo to “transpile” the code down from JSX (better known as a “build” process) before it could be properly consumed by applications that don’t support JSX. 

Once I added the Babel support, I ran a `npm version patch` to bump the version number and `npm publish` to push the changes up to npm so I could import it into my Product A codebase.

💡 **Here’s a neat tip.** I added the following lines to the component library’s `package.json`.  The `build` step does the transpiling and copies what it builds over to a distribution folder. The `prepublishOnly` step says “if someone tries to publish this to npm, make sure you run the build step first.”

```jsx
"build": "babel src --out-dir dist --extensions \".js,.jsx\" --copy-files",
"prepublishOnly": "npm run build",
```

So now I can simply make a change, bump the version number, and publish without a whole lot of mental overhead.

**This kind of work is not glamorous, but it helps ensure compatibility across codebases.** (And it’s also exactly the kind of information that should be captured in documentation.)

Behold, the screenshot:

![an app screenshot with the Utility Nav loaded in (from a remote repo)](/assets/i/post-bofa-22-2.png)

[Boring, huh?](https://bigmedium.com/ideas/boring-design-systems.html) Might not look like much, but now that we’re importing UtilityNav component from an external library, other products can too.  

More on that tomorrow.

—

P.S. If you’ve just joined the list, I’m in the middle of a practical design system build. You can catch up at [the beginning of the series here](https://practicaldesignsystems.com/daily/let-s-build-a-design-system/).