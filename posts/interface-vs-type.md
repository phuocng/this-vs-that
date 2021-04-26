---
title: interface vs type
category: TypeScript
tags:
  - posts
layout: layouts/post.njk
---

Using `interface` and `type` declarations are common way to represent given data structure.

```js
// Using interface
interface Point {
    x: number;
    y: number;
}

// Using type alias
type Point = {
    x: number;
    y: number;
}
```

## Difference

It's possible to declare the same interface multiple times. They will be merged together to form a single interface definition.

```js
interface Point {
    x: number;
}

interface Point {
    y: number;
}

const p: Point = {
    x: 1,
    y: 2,
};
```

Where `type` alias must be unique and doesn't allow us to merge the declarations.

```js
type Person = {
    firstName: string;
}
// Throw error: Duplicate identifier
type Person = {
    lastName: string;
}
```

Being able to merge the interface declarations is very useful, for example, when we provide the type definitions for an external library 
which isn't made with TypeScript completely. 

In that case, if there're some missing definitions, we can provide them via declaration merging.

## Good practice

If you are author of a library or create type definitions for an external library, use `interface` for public APIs. So the consumers can extend them.