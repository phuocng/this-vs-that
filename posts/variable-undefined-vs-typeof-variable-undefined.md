---
title: variable === undefined vs typeof variable === "undefined"
category: JavaScript
---

There are two common ways to check whether a variable is `undefined`. We can use the identical (`===`) or `typeof` operator:

```js
variable === undefined;
typeof variable === 'undefined';
```

### Difference

The `typeof` operator works with undeclared variables, while the identical operator will throw a _ReferenceError_ exception.

```js
typeof undeclaredVar === 'undefined'; // true
undeclaredVar === undefined; // throws a ReferenceError exception
```

### Good to know

In the old browsers running ES3 enginee, `undefined` is a global variable name whose primitive value is undefined. The value can be changed:

```js
// ES3
var person = {};
person.name === undefined; // true

// Let's modify the value of undefined
undefined = 'Foo';
person.name === undefined; // false
```

In order to avoid the issue where `undefined` can be renamed or modified the value, we can wrap the code in an IFFE (immediately invoked function expression) as following:

```js
(function(undefined){
    // It's safe to use undefined here
})();

// Or
(function(undefined){
    ...
})(_);
```

In the sample code above, `undefined` is a parameter of function. Since we don't pass any parameter or an undefined variable (`_`) to the function, the parameter will be undefined. This common pattern was used in popular libraries such as [jQuery](https://jquery.com), [Backbone](https://backbonejs.org), etc.

It's not the case in modern browsers nowadays. From ES5, `undefined` can't be changed because its `Writable` property is set to `false`.

### Good practice

Always use `typeof`.

### See also

-   [undefined vs void](/undefined-vs-void)
