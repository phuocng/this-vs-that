---
title: arrow vs regular function
category: JavaScript
layout: layouts/post.njk
---

### Differences

1. Inside a regular function, the `this` value is dynamic. It depends on how the function is invoked.

    ```js
    const person = {
        firstName: '',
        lastName: '',
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    person.firstName = 'Foo';
    person.lastName = 'Bar';
    person.getFullName(); // 'Foo Bar'
    ```

    Arrow function does not have `this`. Accessing `this` inside an arrow function will refer to the `this` of its closest non-arrow parent function.

    ```js
    const person = {
        yearOfBirth: new Date().getFullYear(),
        getAge: () => {
            return new Date().getFullYear() - this.yearOfBirth;
        },
    };

    person.yearOfBirth = 2000;
    person.getAge(); // NaN
    ```

    It is worth noting that calling `arrowFunction.call(thisValue)` or `arrowFunction.apply(thisValue)` do not change the `this` value.

2. We can use the `new` keyword with a regular function to create new object.

    ```js
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const foo = new Person('Foo', 42);
    ```

    On the other side, arrow functions do not own `this` value, hence they cannot be invoked with the `new` keyword.

    ```js
    const person = (name, age) => {...}

    // ERROR: person is not a constructor
    const foo = new person('Foo', 42);
    ```

3. Inside a regular function, we can use `arguments` which represents an array-like object of passed arguments.
   It is very useful if we want to access the parameters of a function whose number of parameters are dynamic.

    For example, the function below calculate the average of parameters:

    ```js
    function average() {
        const args = [...arguments];
        return args.reduce((a, b) => a + b) / args.length;
    }

    average(1, 2); // 1.5
    average(1, 2, 3); // 2
    ```

    Arrow functions do not have `arguments`. Calling `arguments` inside an arrow function will return the arguments of closest non-arrow parent function.

    But it is still possible to get the list of dynamic passed parameters by using the [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

    ```js
    const average = (...args) => args.reduce((a, b) => a + b) / args.length;

    average(1, 2, 3, 4); // 2.5
    average(1, 2, 3, 4, 5); // 3
    ```

4. We have to use the return statement in a regular function to return a result.

    ```js
    function sum(a, b) {
        return a + b;
    }
    ```

    However, in an inline arrow function that contains only one expression, we can implicitly return the value by omitting the curly brackets.
    The `sum` function above can be rewritten as follow:

    ```js
    const sum = (a, b) => a + b;
    ```

    Plus, arrow function also does not require parentheses if it has only one parameter:

    ```js
    const sumOfArray = (arr) => arr.reduce((a, b) => a + b, 0);
    ```

5. In non-restrict mode, regular functions allow us to use duplicate named parameters.

    The following declaration is accepted:

    ```js
    function double(x, x) {
        return x + x;
    }

    double(3, 2); // 4
    double(3, 5); // 10
    ```

    This usage is not allowed in strict mode:

    ```js
    'use strict';
    function double(x, x) { ... }

    // ERROR: Duplicate parameter name not allowed
    ```

    It is not possible to use the same name for different parameters in arrow functions, no matter the strict or non-strict mode is enabled.

### Good practice

If the inline arrow function consists of the `<`, `<=`, `>` or `>=` operator, it is advised to wrap the function body in parentheses.

Looking at the two versions below, it is easy for the first variant to cause a misleading.

```js
// Bad
const compareToZero = (a) => a <= 0 ? 0 : a;

// Good
const compareToZero = (a) => (a <= 0 ? 0 : a);
```

### Tip

You can use an underscore to name the argument which is not used in an arrow function. It makes the code more readable.

```js
// No arguments
const noop = (_) => {};

const range = (min, max) =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);
```

### Resource

You can find many useful arrow functions that have only single line of code at [1 LOC](https://1loc.dev) website.
