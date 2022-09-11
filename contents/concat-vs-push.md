---
title: concat vs push
category: JavaScript
layout: layouts/post.njk
---

[concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) and
[push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) are common methods to append one
or more items to a given array.

## Differences

1. The `concat` method does not change the existing array:

    ```js
    const shapes = ['Triangle', 'Square'];

    shapes.concat(['Circle', 'Rectangle']); // ['Triangle', 'Square', 'Circle', 'Rectangle']
    shapes; // ['Triangle', 'Square']
    ```

    The `push` method on the other hand modifies the original array.

    ```js
    const animals = ['cat', 'dog', 'mouse'];
    animals.push('bird', 'cow'); // 5
    animals; // ['cat', 'dog', 'mouse', 'bird', 'cow']
    ```

    In the sample code above, both methods produces different results. `concat` returns a new array while `push` returns the length of updated array.

2. Because `concat` creates a new array to hold the result of merged arrays, it's slower than `push`.

    For small arrays, both methods do not produce a significant difference in term of performance.
    But if you have to work with big array and performance is the critical thing to your application, then consider using `push`.

## Good to know

1. If you use React or a state management library such as Redux, where we do not modify the current state and returns the new state on each reducer,
   it's good use case for using `concat`.

2. I find the following [code snippet](https://github.com/stardazed/stardazed/blob/master/src/core/buffer.ts) quite useful when you have to merge really big array. Credits to [@zenmumbler] (https://twitter.com/zenmumbler).

    The function copies items from array `source` to `dest` by splitting the source array into multiple chunks and copying them one by one.

    ```js
    const MAX_BLOCK_SIZE = 65535; // max parameter array size for use in Webkit

    export function appendArrayInPlace<T>(dest: T[], source: T[]) {
        let offset = 0;
        let itemsLeft = source.length;

        if (itemsLeft <= MAX_BLOCK_SIZE) {
            dest.push.apply(dest, source);
        } else {
            while (itemsLeft > 0) {
                const pushCount = Math.min(MAX_BLOCK_SIZE, itemsLeft);
                const subSource = source.slice(offset, offset + pushCount);
                dest.push.apply(dest, subSource);
                itemsLeft -= pushCount;
                offset += pushCount;
            }
        }
        return dest;
    }
    ```

## Tip

You can use ES6 spread operator to merge different arrays into one:

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const final = [...a, ...b, ...c]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The spread operator is handy if we use the `push` method as well:

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

a.push(...b);
a; // [1, 2, 3, 4, 5, 6]
```

`Array.prototype.push.apply(firstArray, secondArray)` is another option that also works in ES5. This approach however isn't recommended in case the second array is very large because the maximum number of parameters in one function is limited.

It's hard-coded to [65536](https://bugs.webkit.org/show_bug.cgi?id=80797) if you are curious.

## See also

-   This [page](https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki) has a deep investigation and provides many benchmarks to prove why `push` is faster than `concat`.
