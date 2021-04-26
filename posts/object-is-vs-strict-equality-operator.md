---
title: Object.is() vs ===
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

## Difference

`Object.is()` behaves the same as `===` (strict equality operator) except for `NaN`, `+0` and `-0`.

```js
+0 === -0;                              // true
Object.is(+0, -0);                      // false

NaN === NaN;                            // false
Object.is(NaN, NaN);                    // true

Number.NaN === Number.NaN;              // false
Object.is(Number.NaN, Number.NaN);      // true

NaN === Number.NaN;                     // false
Object.is(NaN, Number.NaN);             // true
```