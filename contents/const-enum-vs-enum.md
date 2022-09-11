---
title: const enum vs enum
category: TypeScript
layout: layouts/post.njk
---

An enum can be declared with or without the `const` keyword. Here are the examples of a regular enum:

```js
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

and a `const` enum:

```js
const enum Light {
    Red,
    Green,
    Blue
}
```

## Differences

1. TypeScript compiles regular enum to JavaScript objects. Given the `Direction` enum above, it will be transpiled to the following JavaScript code:

    ```js
    var Direction;
    (function (Direction) {
        Direction[(Direction['Up'] = 0)] = 'Up';
        Direction[(Direction['Down'] = 1)] = 'Down';
        Direction[(Direction['Left'] = 2)] = 'Left';
        Direction[(Direction['Right'] = 3)] = 'Right';
    })(Direction || (Direction = {}));
    ```

    On the other hand, the `Light` enum is not transpiled at all. You will see nothing if the enum is not used.

    In the other cases, all the enum references are replaced by the inline codes. For example, `console.log(Light.Red)` is compiled as `console.log(0 /* Red */)`.

2. Because there is no JavaScript object that associates with `const` enum is generated at run time, it is not possible to loop over the `const` enum values.

    TypeScript will throw an error when we try to iterate over the `Light` enum:

    ```js
    // ERROR
    for (let i in Light) {
        console.log(i);
    }
    ```

## Good to know

If you do not want TypeScript to erase the generated code for `const` enums, you can use the `preserveConstEnums` compiler flag.

## See also

-   [literal union type vs string enums](/literal-union-type-vs-string-enums)
