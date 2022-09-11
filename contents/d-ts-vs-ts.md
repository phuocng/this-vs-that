---
title: '*.d.ts vs *.ts'
category: TypeScript
layout: layouts/post.njk
---

## Difference

`.ts` is the standard TypeScript files. The content then will be compiled to JavaScript.

`*.d.ts` is the type definition files that allow to use existing JavaScript code in TypeScript.

For example, we have a simple JavaScript function that calculates the sum of two numbers:

```js
// math.js
const sum = (a, b) => a + b;

export { sum };
```

TypeScript doesn't have any information about the function including the name, the type of parameters. In order to use the function in a TypeScript file, we provide its definition in a `d.ts` file:

```js
// math.d.ts
declare function sum(a: number, b: number): number;
```

From now on, we can use the function in TypeScript without any compile errors.

The `d.ts` file doesn't contain any implementation, and isn't compiled to JavaScript at all.

## Good to know

TypeScript provides an option named `allowJs` which allows to use plain JavaScript code in TypeScript.

```json
// tsconfig.json
{
    "compilerOptions": {
        "allowJs": true,
        ...
    }
}
```

It's very useful when we want to migrate the existing code base from plain JavaScript to TypeScript. So we can convert each JavaScript file to TypeScript one by one without having to convert entire code completely.

See the [migrating from JavaScript](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html) guide for more information.
