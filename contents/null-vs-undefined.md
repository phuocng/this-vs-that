---
title: null vs undefined
category: JavaScript
layout: layouts/post.njk
---

### Differences

1. `undefined` indicates that a variable has been declared but not been assigned to any value, including `null`.

    ```js
    let foo;
    console.log(foo); // undefined
    ```

    `null` is used to indicate that a variable doesn't have a value.

    ```js
    let foo = null;
    console.log(foo); // null
    ```

2. `undefined` and `null` are considered to be different types.

    `undefined` is a type itself, whereas `null` is a special value of object.

    ```js
    console.log(typeof undefined); // 'undefined'
    console.log(typeof null); // 'object'
    ```

    Since they are different types, here are the result of [equality and identity](/equality-operator-vs-strict-equality-operator) operators when comparing them to each other:

    ```js
    null == undefined; // true
    null === undefined; // false
    ```

### Good to know

`JSON.stringify` omits `undefined`, but keeps `null`:

```js
JSON.stringify({
    name: 'John',
    address: null,
    age: undefined,
});

// {"name":"John","address":null}
```
