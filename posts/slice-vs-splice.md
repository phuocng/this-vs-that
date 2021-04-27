---
title: slice vs splice
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

`slice` and `splice` are common methods to get a sub-array of a given array. 

## Differences

1. The signature of methods are different.

    ```js
    array.slice(startingIndex, endingIndex);
    array.splice(startingIndex, length, ...items);
    ```

    While the first parameter are the same as each other indicating the starting index of removed elements, the second parameters aren't.
    
    The second parameter of `slice` and `splice` are the ending index and the number of sub items, respectively.

    With the `splice` method, it's possible to keep the items not to be removed from the original array by passing them to the last parameters.

2. `splice` changes the original array, while `slice` doesn't.

    Given the array of numbers from 1 to 5:

    ```js
    const array = [1, 2, 3, 4, 5];
    const sub = array.splice(2, 3);

    // The original array is modified
    array;      // [1, 2]
    sub;        // [3, 4, 5]
    ```

    Now, let's pass the same parameters to `slice`:

    ```js
    const array = [1, 2, 3, 4, 5];
    const sub = array.slice(2, 3);

    // The original array isn't modified
    array;      // [1, 2, 3, 4, 5]
    sub;        // [3]
    ```

## Tip

We can [clone an array](https://1loc.dev/#clone-an-array) by ignoring the ending index:

```js
const clone = arr => arr.slice(0);
```