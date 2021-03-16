import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
The \`in\` operator and \`hasOwnProperty\` function are the common ways to check if an objects contains a particular key.

~~~ javascript
const person = {
    name: 'Foo',
};

'name' in person;               // true
person.hasOwnProperty('name');  // true
~~~

## Differences

1. For inherited properties, \`in\` will return \`true\`. \`hasOwnProperty\`, as the name implies, will check if a property is owned by itself, 
    and ignores the inherited properties.

    Let's reuse the person object from the previous example. Since it's a JavaScript object which has built-in properties such as \`constructor\`,
    \`__proto__\`, the following check return true:

    ~~~ javascript
    'constructor' in person;    // true
    '__proto__' in person;      // true
    'toString' in person;       // true
    ~~~

    While \`hasOwnProperty\` returns \`false\` when checking against these properties and methods:

    ~~~ javascript
    person.hasOwnProperty('constructor');   // false
    person.hasOwnProperty('__proto__');     // false
    person.hasOwnProperty('toString');      // false
    ~~~

2. For the \`get\` and \`set\` methods of a class, \`hasOwnProperty\` also returns \`false\`.

    For example, we have a simple class representing triangles:

    ~~~ javascript
    class Triangle {
        get vertices() {
            return 3;
        }
    }

    // Create new instance
    const triangle = new Triangle();
    ~~~
        
    Despite the fact that \`vertices\` is the property of \`triangle\`:

    ~~~ javascript
    triangle.vertices;          // 3
    'vertices' in triangle;     // true
    ~~~
        
    \`hasOwnProperty\` still ignores it:

    ~~~ javascript
    triangle.hasOwnProperty('vertices'); // false
    ~~~

## Good practice

In order to check the existence of a property, use \`hasOwnProperty\`. Use \`in\` to check the existence of a method.

## More

* [Object vs Map](/object-vs-map)
`}
/>
    );
};
