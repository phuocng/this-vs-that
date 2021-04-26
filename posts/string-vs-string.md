---
title: string vs String
category: TypeScript
tags:
  - posts
layout: layouts/post.njk
---

`string` and `String` are valid TypeScript types. The following declarations are valid:

```js
let foo: String = 'foo';
let bar: string = 'bar';
```

## Difference

`string` refers to the JavaScript's primitive types and can be created by using either literals (single or double quotes) or 
`String` function (without the `new` keyword).

The three declarations below create the same string:

```js
const message = 'hello';
const message = "hello";
const message = String('hello');
```

We often use `typeof variable === 'string'` to check if a given variable is a primitive string.

`String` on the other hand is an object that wraps the primitive string, and used to manipulate strings. We can create an 
instance of `String` from the constructor such as `new String(...)`: 

```js
const message = new String('hello');
```

In order to check whether a variable is an instance of `String` object, we have to use the `instanceof` operator:

```js
if (variable instanceof String) {
    ...
}
```

## Good to know

Given the declarations at the top of this page, you can assign a `String` object to a primitive `string` variable:

```js
let foo: String = 'foo';
let bar: string = 'bar';

foo = bar;      // OK
```

As the time of writing, `String` is declared as an [interface](https://github.com/microsoft/TypeScript/blob/master/src/lib/es5.d.ts#L374) 
so that the `string` is treated as a subtype of `String`. Assigning `foo = bar` therefore does not cause any problem.

But doing the opposite assignment will throw an error:

```js
// ERROR: Type 'String' is not assignable to type 'string'.
// 'string' is a primitive, but 'String' is a wrapper object.
bar = foo;
```

## Good practice

According to the official TypeScript's [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html), 
it is recommended to not use `Number`, `String`, `Boolean`, `Symbol`, or `Object`.

```js
// Do NOT
const reverse = (s: String): String => {
    ...
}

// Do
const reverse = (s: string): string => {
    ...
}
```