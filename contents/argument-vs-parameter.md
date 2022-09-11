---
title: argument vs parameter
category: JavaScript
layout: layouts/post.njk
---

### Difference

A _parameter_ is the variable belonging to the declaration of a function.

An _argument_ is the actual value of the parameter that is passed to the function.

Assume that we have a function that calculates the sum of two numbers:

```js
const sum = function (a, b) {
    return a + b;
};
```

here `a` and `b` are the parameters. If we call the function, `sum(1, 2)`, then `1` and `2` are the arguments.

### Tip

There is a handy memory hook to distinguish these terms:

**P**arameter → **P**laceholder

**A**rgument → **A**ctual value
