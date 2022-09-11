---
title: mouseenter vs mouseover
category: DOM
layout: layouts/post.njk
---

### Difference

The `mouseenter` and `mouseover` events are triggered when you move the mouse over an element.

`mouseenter` only triggers when the mouse enters the element on which it is set. The counterpart event is `mouseleave`.

`mouseover` triggers when the mouse enters the element _or any of its children_. Its counterpart is `mouseout`.

### Good practice

Because the `mouseover` event propagates from the child element up through the hierarchy, if you're doing a resource-intensive task on the event you may notice the screen flickering.

It's recommended to use the `mouseenter` and `mouseleave` events instead.
