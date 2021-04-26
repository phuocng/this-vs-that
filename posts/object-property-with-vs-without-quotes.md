---
title: object.property vs object['property']
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

In this post, we will see the differences between declaring and accessing the object property with and without quotes:

```js
const obj = { key: 'value' };
obj.key;

// Or
const obj = { 'key': 'value' };
obj['key'];
```

## Differences


1. If the property name is a numeric literal, then you might to use different key to access the property value.

    ```js
    const obj = { 12e34: 'hello' };

    console.log(obj["1.2e34"]);     // undefined
    console.log(obj["1.2e+35"]);    // 'hello'
    ```

    Wrapping the property with quotes will help us avoid the problem:

    ```js
    const obj = { '12e34': 'hello' };

    console.log(obj['12e34']);      // 'hello'
    ```

2. If the property is one of [reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), then 
    we have to use with quotes to access the property value.

    ```js
    const styles = { class: 'foo' };

    // Will throw an exception because class is a reserved keyword
    styles[class];
    
    // returns 'foo'
    styles['class'];
    ```

    The same thing happens with the property contains special characters such as `-`.