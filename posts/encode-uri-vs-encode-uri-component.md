---
title: encodeURI vs encodeURIComponent
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

Because a URL can consist of standard ASCII characters only, other special characters have to be encoded. They will be replaced by a sequence of different characters that represent its UTF-8 encoding.

`encodeURI` and `encodeURIComponent` are used for that purpose.

## Differences

1. `encodeURI` is used to encode a full URL.

    ```js
    encodeURI('https://domain.com/path to a document.pdf');

    // 'https://domain.com/path%20to%20a%20document.pdf'
    ```

    Whereas `encodeURIComponent` is used for encoding a URI component such as a query string. 

    ```js
    `http://domain.com/?search=\${encodeURIComponent('encode & decode param')}`

    // 'http://domain.com/?search=encode%20%26%20decode%20param'
    ```

2. There are 11 characters which are not encoded by `encodeURI`, but encoded by `encodeURIComponent`.

    The following snippet prints these characters:

    ```js
    const arr = Array(256)
        .fill(0)
        .map((_, i) => String.fromCharCode(i))
        .filter(c => encodeURI(c) != encodeURIComponent(c));

    arr.forEach(c => console.log(c, encodeURI(c), encodeURIComponent(c)));
    ```

    Here is the list of those characters:

    | Character | `encodeURI` | `encodeURIComponent`    |
    |-----------|-------------|-------------------------|
    | `#`       | `#`         | `%23`                   |
    | `$`       | `$`         | `%24`                   |
    | `&`       | `&`         | `%26`                   |
    | `+`       | `+`         | `%2B`                   |
    | `,`       | `,`         | `%2C`                   |
    | `/`       | `/`         | `%2F`                   |
    | `:`       | `:`         | `%3A`                   |
    | `;`       | `;`         | `%3B`                   |
    | `=`       | `=`         | `%3D`                   |
    | `?`       | `?`         | `%3F`                   |
    | `@`       | `@`         | `%40`                   |

## Good to know

1. `decodeURI` and `decodeURIComponent` are methods to decode a string that is encoded by `encodeURI` and `encodeURIComponent` respectively.

2. `encodeURIComponent` does not encode `-_.!~*'()`. If you want to these characters are encoded, you have to replace them with corresponding UTF-8 sequence of characters: 

    ```js
    const encode = str => encodeURIComponent(str)
        .replace(/\\-/g, '%2D')
        .replace(/\\_/g, '%5F')
        .replace(/\\./g, '%2E')
        .replace(/\\!/g, '%21')
        .replace(/\\~/g, '%7E')
        .replace(/\\*/g, '%2A')
        .replace(/\\'/g, '%27')
        .replace(/\\(/g, '%28')
        .replace(/\\)/g, '%29');

    encode("What's result of (4 + 2)?");    // "What%27s%20result%20of%20%284%20%2B%202%29%3F"
    ```

    The decoding function could look like as follow:

    ```js
    const decode = str => decodeURIComponent(
        str
        .replace(/\\%2D/g, '-')
        .replace(/\\%5F/g, '_')
        .replace(/\\%2E/g, '.')
        .replace(/\\%21/g, '!')
        .replace(/\\%7E/g, '~')
        .replace(/\\%2A/g, '*')
        .replace(/\\%27/g, "'")
        .replace(/\\%28/g, '(')
        .replace(/\\%29/g, ')')
    );

    decode('What%27s%20result%20of%20%284%20%2B%202%29%3F');    // "What's result of (4 + 2)?"
    ```