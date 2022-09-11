---
title: array = [] vs array.length = 0
category: JavaScript
layout: layouts/post.njk
---

There are two ways to empty an array:

```js
arr.length = 0;

// Or assign it to an empty array
arr = [];
```

### Difference

Setting `arr = []` creates a new array and doesn't affect other references.

```js
let foo = ['hello', 'world'];

// Add a reference
let bar = foo;

foo = [];

// `bar` isn't affected
console.log(bar); // ['hello', 'world']
```

On the other hand, `arr.length = 0` modifies the array. All references are affected.

```js
let foo = ['hello', 'world'];
let bar = foo;

foo.length = 0;

// `bar` is affected
console.log(bar); // []
```

### Good to know

1. There is another, less popular approach to empty an array:

    ```js
    arr.splice(0, arr.length);
    ```

    This method affects other references. Since `.splice` returns an array of removed items, you can get a copy of original array by assigning the result to a new variable:

    ```js
    let foo = ['hello', 'world'];

    // Empty and create a copy of `foo`
    let bar = foo.splice(0, foo.length);

    console.log(foo); // []
    console.log(bar); // ['hello', 'world']
    ```

2. If the array is declared as a constant, then you can't reassign it to `[]`.

    ```js
    const foo = [1, 2, 3];
    foo = []; // will throw an exception of
    // "Assignment to constant variable"

    foo.length = 0;
    ```
