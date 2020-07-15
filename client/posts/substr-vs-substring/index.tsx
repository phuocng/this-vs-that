import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Both \`substr\` and \`substring\` are common functions to get a sub-string of a given string.

## Differences

1. Both methods have two parameters. The first parameters indicate the index of starting position of sub-string. The second parameters are different.

    ~~~ javascript
    substr(startPosition, length);
    substring(startPosition, endPosition);
    ~~~

    As you can see, the second parameters of \`substr\` and \`substring\` are the length and the end position of sub-string respectively.
    Given a string of \`helloworld\`:

    ~~~ javascript
    'helloworld'.substr(2, 4);      // 'llow'
    'helloworld'.substring(2, 4);   // 'll'
    ~~~

2. \`substr\` allows to use a negative number for the start position parameter.

    ~~~ javascript
    'helloworld'.substr(-2, 4);     // 'ld'
    ~~~

    \`substring\`, on the other hand, will turn a negative start position to 0 (zero):

    ~~~ javascript
    'helloworld'.substring(-2, 5);  // 'hello'
    'helloworld'.substring(0, 5);   // 'hello'
    ~~~

## Good to know

\`slice\` is another function for getting a sub-string. It's not deprecated as [substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr), and supports negative indices. 

~~~ javascript
'helloworld'.slice(2, 4);       // 'll'
'helloworld'.slice(-10, 5);     // 'hello'
'helloworld'.slice(-5);         // 'world'
~~~
`}
/>
    );
};
