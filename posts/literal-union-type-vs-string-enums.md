---
title: literal union type vs string enums
category: TypeScript
tags:
  - posts
layout: layouts/post.njk
---

In TypeScript, there are a few ways to enumerate the possible values of a type. Let's consider a situation where our website has to support different themes including default, light, and dark.

They can be defined by one of the following approaches:

* Using a union of string literal types

```js
type Theme = 'DEFAULT' | 'LIGHT' | 'DARK';
```
    
* Using an enum

```js
enum Theme {
    DEFAULT,
    LIGHT,
    DARK,
}
```

## Differences

1. TypeScript does not generate code for the union of string literals. As a result, the generated code will have a smaller size.

    Here is the generated code when TypeScript transpiles the `Theme` enum:

    ```js
    var Theme;
    (function (Theme) {
        Theme[Theme["DEFAULT"] = 0] = "DEFAULT";
        Theme[Theme["LIGHT"] = 1] = "LIGHT";
        Theme[Theme["DARK"] = 2] = "DARK";
    })(Theme || (Theme = {}));
    ```

2. In the case of using a union type, you still have to type the full string when creating a new variable, for example:

    ```js
    type Theme = 'DEFAULT' | 'LIGHT' | 'DARK';
    const theme: Theme = 'DEFAULT';
    ```

    Popular editors like Visual Studio Code help us choose the value from the list of possible values quickly but we have to manually change the value in all places if we want to refactor the value to something else.

    On the other hand, using `enum` gives a few remarkable benefits when you refactor the code or develop a library.
    Let's take a look at a simple use case where your library provides the following function to switch the website to a given theme:

    ```js
    const switchTheme = (theme: Theme) => {
        ...
    };

    export { Theme, switchTheme };
    ```

    The consumers now can pass a particular theme to the `switchTheme` function without caring about the real value behind:

    ```js
    // consumer
    import { Theme, switchTheme } from 'your-lib';

    switchTheme(Theme.DARK);
    ```
        
    In comparison to `switchTheme('DARK')`, how convenient and safe the invoke above is.

## Good to know

There is another approach using the [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) which is available from TypeScript 3.4.

```js
const Theme = {
    DEFAULT: 'Default',
    LIGHT: 'Light',
    DARK: 'Dark',
} as const;

type Theme = typeof Theme[keyof typeof Theme];

let darkTheme: Theme = Theme.DARK;
let lightTheme: Theme = 'Light';
const invalidTheme: Theme = 'Blue';     // ERROR
```

## Good practice

If you don't set the values for enum, they will be set to incremental numbers by default.

So `Theme.DEFAULT`, `Theme.LIGHT` and `Theme.DARK` will take the value of 0, 1, 2, respectively. It is more hard to debug:

```js
console.log(Theme.DARK);    // 2
```

Even if we set the number for enum values, it's still possible for us to set an invalid value for a variable whose type is the enum:

```js
enum Theme {
    DEFAULT = 0,
    LIGHT = 1,
    DARK = 2,
}

// TypeScript doesn't throw errors
const theme: Theme.DEFAULT = 3;
```

Due to these reasons, it's advised to use string literals for the enum values. The `Theme` enum should look like as follow:

```js
enum Theme {
    DEFAULT = 'Default',
    LIGHT = 'Light',
    DARK = 'Dark',
}

console.log(Theme.DARK);                // 'Dark'
let theme: Theme.DEFAULT = 'Default';   // ERROR
```

## More

* [const enum vs enum](/const-enum-vs-enum)