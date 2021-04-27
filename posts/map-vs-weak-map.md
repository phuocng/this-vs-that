---
title: Map vs WeakMap
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

`Map` and `WeakMap` are two data structures that can be used to manipulate the relationship between keys and values.

## Differences

1. We can use object or any primitive types for both keys and values of a `Map`.

    However, `WeakMap` keys only accept objects. It means that we can't use the primitive types as keys of `WeakMap`.

    ```js
    const attrs = new WeakMap();

    // ERROR
    attrs.set('color', 'red');
    ```

2. Unlike `Map`, `WeakMap` does not support iteration on both keys and values. It is not possible to get all keys or values of a `WeakMap`.
    Also, there is no way to clear a `WeakMap`.

3. The most important difference is that `WeakMap` does not prevent the keys from being garbage collected when there is no references to the keys. 

    On the other hand, `Map` maintains the references to keys and values indefinitely. Once the keys and values are created, they will take the memory and will not be garbage collected even if there is no references to them.
    This could leads to a memory leak issue.

    Consider a simple code below where we map an unique id to particular person's information:

    ```js
    let id = { value: 1 };

    const people = new Map();
    people.set(id, { name: 'Foo', age: 20, address: 'Bar' });

    // Remove the id
    id = null;
    ```

    After removing the key object `id`, it is still able to access its reference via the map keys:

    ```js
    people.keys().next().value;     // { value: 1 }
    ```

    Because of this difference, `WeakMap` as its name implies holds the _weak_ references to the keys. 
    It explains why its keys are not enumerable which is mentioned in the previous difference.

## More

* [Object vs Map](/object-vs-map)