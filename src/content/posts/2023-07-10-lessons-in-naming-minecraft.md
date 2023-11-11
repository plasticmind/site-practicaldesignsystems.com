---
title: A Lesson in Naming from Minecraft
description: Create something that everyone at your org understands, document and publicize it well, and use it consistently.
date: 2023-07-10T05:00:00.000Z
tags:
  - naming
  - conventions
  - best-practices
---
Have you ever heard the word *continentalness*? 

If you had to guess what it means, what would you say?

When Minecraft developers were coming up with a way to generate terrain for new worlds, they wanted enough randomness to be unique and interesting, but enough predictability so they could simulate features of real world geography. They chose Perlin noise, a special type of randomness that introduces smoothing for a more organic look and returns consistent results using the same seed.

![Sample Noise: Simplex vs. Perlin](/assets/i/post-noise-types.png)

Hang with me on this…

Developers modified the noise output in different ways and created a library of noise maps with different characteristics. Then — and this is the important bit — they used names to convey the mental metaphor for each map: continentalness, erosion, peaks & valleys, temperature, humidity, etc.

![Sample Noise Maps: Continentalness and Erosion](/assets/i/post-noise-continentalness.png)

One of the Minecraft developers who works on terrain generation explains in [a recent talk on the topic](https://www.youtube.com/watch?v=ob3VwY4JyzE):

> We could have called these noises Noise A or Noise B or Noise C, but using words like “temperature” and “humidity” makes it easier for us humans to understand what the heck we’re talking about when we’re configuring this in the code.”  —Henrik Kniberg
> 

I’ve talked about [useful naming conventions for design systems in a previous email](https://practicaldesignsystems.com/daily/how-ford-names-variables/), but here’s the lesson from Minecraft: naming can be a powerful way to quickly communicate ideas and intentions for variables and components, but the most important thing is to **create something everyone at your org understands, document and publicize it well, and use it consistently**.

And for the curious, *continentalness* defines the relationship between ocean terrain and inland terrain. In other words, it’s used to shape continents. It's amazing what you can get when you combine all of this randomness together in intentional and meaningful ways, isn't it?

![Merging noise maps to create full biomes](/assets/i/post-noise-biomes.png)