---
title: function declaration vs function expression
category: JavaScript
layout: layouts/post.njk
---

In JavaScript, there are some different ways to create a function. This post will talk about the difference between the following ways:

```js
// Function expression
var fn = function () {
    // The implementation ...
};

// Function declaration
function fn() {
    // The implementation ...
}
```

### Difference

A function created by using an expression is assigned to a variable at run time. We cannot invoke the function before the declaration.

```js
// TypeError: sum is not a function
sum(4, 2);

var sum = function (a, b) {
    return a + b;
};
```

Function declaration on the other hand is assigned to an identifier at parse time. It is available above its declaration.

```js
sum(4, 2); // 6

function sum(a, b) {
    return a + b;
}
```

### Good to know

1. In the strict mode introduced in ES5, function declaration is scoped to its enclosing block. We cannot invoke the function from outside of the block.

    ```js
    'use strict';
    {
        function sum(a, b) {
            return a + b;
        }
    }

    // ReferenceError: sum is not defined
    sum();
    ```

2. We can mix the two variants by using a named function expression. With this variant, the function name is taken from the declaration form.

    ```js
    var sum = function sumOf(a, b) {
        return a + b;
    };

    sum.name; // "sumOf"
    ```

3. Usually, we can invoke a function by using the form of _Immediately Invoked Function Expression_ (IIFE).

    ```js
    (function (a, b) {
        return a + b;
    })(4, 2);

    // 6
    ```

    Do you know that we get the same result if we omit the parentheses and put `+` at the beginning as follow:

    ```js
    +(function (a, b) {
        return a + b;
    })(4, 2);

    // 6
    ```

    It works because putting `+` at the beginning of function declaration will turn it to an expression, and passing the parameters with `()` at the end will invoke the expression.

    It is rare to see that code in development, but it is used in the minifications to save the file size.

    In addition to `+`, you can use other operators such as `-`, `!`, `~` and `void` in the similar way to invoke a function:

    ```js
    -function() { ... }();
    !function() { ... }();
    ~function() { ... }();
    void function() { ... }();
    ```

    Note that the return value could be different from the original function, for example:

    ```js
    !(function () {
        return false;
    })(); // true
    ```
