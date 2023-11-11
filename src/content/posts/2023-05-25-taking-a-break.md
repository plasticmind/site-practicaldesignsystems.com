---
title: Taking a break...
description: What does randomness have to do with creativity?
date: 2023-05-25T05:00:00.000Z
tags:
  - components
  - abstraction
  - design-systems
  - 30-days
---

Today, I wanted to take a break from design systems to talk about creativity.

I just read the most recent update from  [Dan Mall's newsletter](https://danmall.com/newsletter/)  (go subscribe) about where AI fits within his process. As always, it was a thought-provoking read, but there was one part in particular that got my brain-wheels spinning:

> [AI] leans heavily on averages; the closer the training data matches an average, the higher degree of confidence that the result is more “correct,” or at least desirable. The problem is that this is the polar opposite of what we consider creativity to be. Creativity isn’t about averages. It’s about the outliers, sometimes the one thing that’s different than all the rest. Often times, the only thing we can credit for that deviation is serendipity.

There's a really interesting algorithm that most AI models use for training called "hill climbing." It's used when trying to achieve a heuristic (close enough) solution for an intractable (too large to solve) problem, like the [traveling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem) . It works by attempting some random baseline solution, then modifies it slightly and tries again to see if there was improvement. If there was, it accepts that as the baseline solution, modifies it slightly and tries again.

The tricky part is the algorithm can often reach a "local maximum" where every other option it tries is worse. It thinks it has the best possible answer, so it gives up. But that solution not as optimal as it could be if it were willing to accept some worse actions in order to discover even greater maximums.

![Local maximum](/assets/i/local-maximum.jpeg)

Think of it like a small hill next to a large mountain. If you climbed the mountain blind with strict instructions to "only climb upwards," you could get stuck on the small hill with no more "climb up" action possible. You'd think you had reached the highest point. To make it up the large mountain, you need to have some threshold for accepting "climb down" actions or else you'd have to start again in a different random place and hope to get lucky enough to reach the higher summit.

One of the ways AI avoids getting stuck in "local maximum" is by introducing some random inferior changes (this is called jittering) early on in the process (the explore phase) and slowly turning that noise down toward the end of the process (the exploit phase).

Thinking about how machines solve intractable problems got me thinking about how creativity works in the human mind. After all, the creative process is in some sense an intractable problem: there's usually not one specific "right" solution, just an attempt to get to close enough given our time constraints.

We call the middle of the bell curve "average." It's a local maximum of sorts. Those "outliers" than Dan mentioned the creative insights that come to us from unlikely, random, serendipitous places — I see those as a sort of "informed jitter" for our creative process. Not-quite-random random moments like when August Kekulé figured out the structure of benzene from a dream he had about a snake eating its tail or when Jamie Link accidentally shattered a silicon chip and invented Smart Dust.

It's good to let some randomness into your creative process.

That's why I took a break from talking about design systems and wrote this instead.