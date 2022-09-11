---
title: == vs ===
category: JavaScript
layout: layouts/post.njk
---

## Difference

`==` (equality operator) and `===` (strict equality operator) are the operators to compare two operands.

The `==` operator does type conversions before comparing the values. On the other hand, the `===` operator doesn't perform any type conversions.

It means that the `===` operator returns `true` if two operands have the same type and same value.

For example:

```js
// `true` is converted to 1 and then compared to 1
true == 1; // true
true === 1; // false
```

The following table demonstrates the result of these operators:

## Good practice

Always use `===` to compare values.
