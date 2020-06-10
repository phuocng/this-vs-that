import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
There are two ways to access an individual character of a string:

* using the \`charAt[index]\` method
* and using bracket notation such as \`'hello'[1]\`

In both ways, \`'hello'[1]\` and \`'hello'.charAt(1)\` returns the second character \`e\`.

## Differences


1. The second way is standard of ECMA 5, and is supported in modern browsers. It is not supported in the very old browsers such as IE 6, 7.
    (I don't think we still need to support these versions of IE).

2. Here is a table listing the expect result of both methods:

    | Method                    | \`index\` is in the range of 0 and \`string.length - 1\`  | Other cases       |
    |---------------------------|-----------------------------------------------------------|-------------------|
    | \`string.charAt(index)\`  | character at associate position                           | an empty string   |
    | \`string[index]\`         | character at associate position                           | \`undefined\`     |

    We will get different results in some edge cases if you don't pass a proper index (not an integer or out of bounds). 

    ~~~ javascript
    'hello'[NaN];               // undefined
    'hello'.charAt(NaN);        // 'h'

    'hello'[undefined];         // undefined
    'hello'.charAt(undefined);  // 'h'

    'hello'[true];              // undefined
    'hello'.charAt(true);       // 'e'

    "hello"["00"];              // undefined

    // return 'h' because it will try to convert \`00\` to number first
    "hello".charAt("00");       

    'hello'[1.5];               // undefined
    // return 'e' because it will round 1.23 to the number 1 
    'hello'.charAt(1.23);
    ~~~

    In the case the index is out of bounds:

    ~~~ javascript
    'hello'[100];           // undefined
    'hello'.charAt(100);    // ''
    ~~~

> ## Good to know ##
>
> _Why does \`'hello'.charAt(true)\` return \`e\`?_
>
> The \`charAt(index)\` method will try to convert the index to the number first. Since \`Number(true) === 1\`, \`charAt(true)\` will
> returns the character at the one index position, i.e, the second character.
`}
/>
    );
};
