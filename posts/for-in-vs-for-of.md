---
title: for ... in vs for ... of
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
## Differences

1. The values iterated on the \`for ... in\` and \`for ... of\` statements are different.

    \`for ... in\` iterates over the enumerable property keys of object. Whereas \`for ... of\` iterates over the values of the numeric properties of object. 

    ~~~ javascript
    const list = ['a', 'b', 'c'];

    for (let i in list) {
        console.log(i);     // '0', '1', '2'
    }

    for (let i of list) {
        console.log(i);     // 'a', 'b', 'c'
    }
    ~~~

2. Unlike \`for ... in\`, \`for ... of\` does not support plain objects:

    ~~~ javascript
    const person = {
        firstName: 'Foo',
        lastName: 'Bar',
        age: 42,
    };

    // TypeError: \`person\` is not iterable
    for (let k of person) {
        ...
    }
    ~~~
    
    It is because a plain object is not iterable. To fix that, we can use the \`Object.keys()\` method to iterate on the object properties:

    ~~~ javascript
    for (let k of Object.keys(person)) {    
        console.log(k, ':', person[k]);
    }

    // firstName: Foo
    // lastName: Bar
    // age: 42
    ~~~

3. \`for ... of\` supports iterating over a Unicode string.

    ~~~ javascript
    const msg = 'Hell😀 W😀rld';

    // for ... in
    for (let i in msg) {
        console.log(msg[i]);
    }

    // Output:
    // 'H', 'e', 'l', 'l', '�', ' ', 'W', '�', '�', 'r', 'l', 'd'

    // for ... of
    for (let c of msg) {
        console.log(c)
    }

    // Output:
    // 'H', 'e', 'l', 'l', '😀', ' ', 'W', '😀', 'r', 'l', 'd'
    ~~~
    
4. \`for ... of\` loop can wait for an async task to complete in each iteration via the \`await\` keyword:

    ~~~ javascript
    for await (... of ...) {
        ...
    }
    ~~~

## Good practices

1. It is not recommended to add a custom method to primitive objects such as \`Array\`, \`Boolean\`, \`Number\`, \`String\`, etc. 
    Since \`for ... in\` statement loops over the enumerable properties, it will include new methods which are added to the prototype. 

    ~~~ javascript
    Array.prototype.isEmpty = function() { 
        return this.length = 0;
    }

    const a = ['cat', 'dog', 'mouse'];
    for (let i in a) {
        console.log(i);     // '0', '1', '2', 'isEmpty'
    }
    ~~~
    
2. Destructing \`for ... in\` is [deprecated](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#Statements). Instead, use \`for ... of\`:

    ~~~ javascript
    const addressBook = new Map();
    addressBook.set('Foo', '111-222-333');
    addressBook.set('Bar', '444-555-666');

    for (const [name, phone] of addressBook) {
        console.log(name, ':', phone)
    }

    // Foo: 111-222-333
    // Bar: 444-555-666
    ~~~

## Good to know

By default, all properties of an array or object will appear in \`for ... in\`. However, this behavior is avoidable. 
Using \`Object.defineProperty\` can decide whether a property is enumerable or not.

~~~ javascript
let person = {
    firstName: 'Foo',
    lastName: 'Bar',
};

// The 'age' property is not enumerable
Object.defineProperty(person, 'age', { 
    value: 42,
    enumerable: false
});

for (let i in person) {
    console.log(i);     // 'firstName', 'lastName'
}
~~~
`}
/>
    );
};
