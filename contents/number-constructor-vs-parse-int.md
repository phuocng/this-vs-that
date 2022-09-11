---
title: Number() vs parseInt()
category: JavaScript
layout: layouts/post.njk
---

Both `Number()` and `parseInt()` are often used to convert a string to number.

## Differences

1. `Number()` converts the type whereas parseInt parses the value of input.

    ```js
    // Parsing
    parseInt('32px'); // 32
    parseInt('5e1'); // 5

    // Convert type
    Number('32px'); // NaN
    Number('5e1'); // 50
    ```

    As you see, `parseInt` will parse up to the first non-digit character. On the other hand, `Number` will try to convert the entire string.

2. `parseInt` accepts two parameters. The second parameter is used to indicate the radix number.

    ```js
    parseInt('0101'); // 101
    parseInt('0101', 10); // 101
    parseInt('0101', 2); // 5

    Number('0101'); // 101
    ```

3. They return different results when we passing special values such as `undefined` or `null`:

    ```js
    parseInt(); // NaN
    parseInt(null); // NaN
    parseInt(true); // NaN
    parseInt(''); // NaN

    Number(); // 0
    Number(null); // 0
    Number(true); // 1
    Number(''); // 0
    ```

## Good practices

1. Always pass the radix to `parseInt`.

    The `parseInt` method takes two parameters:

    ```js
    parseInt(value, radix);
    ```

    The second parameter specifies the current numeral system. In the case it's not specified, then it will be set automatically based on the value.

    - If the value starts with `0x` or `0X`, then the radix is 16 (hexadecimal)
    - In other cases, the radix is 10 (decimal).

    > In the older versions of JavaScript, if the string starts with 0 then the radix is set as 8 (octal).

    ```js
    parseInt('0xF'); // 15
    parseInt('0XF'); // 15
    parseInt('0xF', 16); // 15

    parseInt('0xF', 10); // 0
    ```

    Since the method could be implemented differently in different versions of JavaScript and browsers, it's recommended to pass the radix number.

2. Trim the spaces before parsing the number.

    Both `Number()` and `parseInt` accept the spaces in input. But be aware that you could get different result when passing a value with spaces as following:

    ```js
    parseInt('   5   '); // 5
    parseInt('12 345'); // 12, not 12345
    ```

    To avoid the similar situations, you should [remove all spaces](https://1loc.dev/#remove-spaces-from-a-string) before parsing:

    ```js
    parseInt(value.replace(/\s+/g, ''), 10);
    ```

3. Don't use `new Number()` to compare the numbers.

    ```js
    Number('2') == 2; // true
    Number('2') === 2; // true

    new Number('2') == 2; // true
    new Number('2') === 2; // false

    const a = new Number('2');
    const b = new Number('2');

    a == b; // false
    a === b; // false
    ```

## Tip

Instead of using the `Number()` constructor to [convert](https://1loc.dev/#convert-a-string-to-number) a string to number, you can use the `+` operator:

```js
+'010'; // 10
+'2e1'; // 20
+'0xF'; // 15
```
