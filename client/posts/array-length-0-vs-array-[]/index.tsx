import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
There are two ways to empty an array:

~~~ javascript
arr.length = 0;

// Or assign it to an empty array
arr = [];
~~~

## Difference

Setting \`arr = []\` creates a new array and doesn't affect other references.

~~~ javascript
let foo = ['hello', 'world'];

// Add a reference
let bar = foo;

foo = [];

// \`bar\` isn't affected
console.log(bar);   // ['hello', 'world']
~~~

On the other hand, \`arr.length = 0\` modifies the array. All references are affected.

~~~ javascript
let foo = ['hello', 'world'];
let bar = foo;

foo.length = 0;

// \`bar\` is affected
console.log(bar);   // []
~~~
`}
/>
    );
};
