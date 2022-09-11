---
title: apply vs call
category: JavaScript
layout: layouts/post.njk
---

`apply()` and `call()` are common methods to invoke a function.

### Difference

Following is the syntax of these methods, where `fn` represents a given function:

```js
fn.apply(context, arrayOfArguments);
fn.call(context, arg1, arg2, ...);
```

As you see, `apply` requires the arguments as an array, whereas `call` requires the arguments to be listed explicitly.

For example, the following function returns the sum of three numbers.

```js
const sum = (a, b, c) => a + b + c;

sum.apply(null, [1, 2, 3]); // 6
sum.call(null, 1, 2, 3); // 6
```

### Tip

You can use this mnemonic to remember the differences between `apply` and `call`:

**A** is for **a**rray

**C** is for **c**omma
