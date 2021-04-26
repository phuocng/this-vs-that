---
title: Object vs Map
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
Storing the key and value pairs is a common thing we have to deal with in JavaScript. The most basic approach is to use an object:

~~~ javascript
const person = {};
person.name = 'Foo';
person.age = 20;

// Or
const person = {
    name: 'Foo',
    age: 20,
};
~~~

Being introduced from ES6, the \`Map\` data structure provides the same ability. The sample code above can be rewritten with \`Map\` as following:

~~~ javascript
const person = new Map();
person.set('name', 'Foo');
person.set('age', 20);
~~~

## Differences

1. Object only accepts string and symbol keys. Another types will be converted to string automatically.
\`Map\` on the other hand accepts any type of key.

2. We can iterate over the properties of a \`Map\` directly using \`forEach\` or \`for ... of\` statement:

    ~~~ javascript
    const styles = new Map();
    styles.set('color', 'blue');
    styles.set('fontSize', '12px');

    styles.forEach((value, key) => console.log(key, '=', value));

    // Output:
    // color = blue
    // fontSize = 12px
    ~~~

    Objects are not iterable directly. In order to loop over the properties of an object, we have to use either 
    \`Object.keys\`, \`Object.values\` or \`Object.entries\` to receives the list of keys, values or pairs of key and value. 

    ~~~ javascript
    styles = {
        color: 'blue',
        fontSize: '12px',
    };

    Object.keys(styles).forEach(key => console.log(key, '=', styles[key]));

    // Output:
    // color = blue
    // fontSize = 12px
    ~~~

3. Object have special properties such as \`constructor\`, \`__proto__\`, etc.

    ~~~ javascript
    let person = {};
    person['constructor'];  // ƒ Object() { [native code] }
    ~~~

    While \`Map\` only consists of what we define:

    ~~~ javascript
    let person = new Map();
    person.get('constructor');  // undefined
    ~~~

4. JSON supports \`Object\`:

~~~ javascript
const person = {};
person.name = 'Foo';
person.age = 20;

JSON.stringify(person);     // "{"name":"Foo","age":20}"
~~~

With \`Map\`, it's not possible to get the proper data when being serialized with JSON:

~~~ javascript
const person = new Map();
person.set('name', 'Foo');
person.set('age', 20);

JSON.stringify(person);     // "{}"
~~~

## Good to know

Maps keep the order of items. It means when you loop over keys of a map, we will see the same order as when they're inserted to the map.

It's true for objects that only consists of string and symbol keys. The order of object's keys aren't kept if there is a key 
that needs to be converted to string.

~~~ javascript
let codes = { 'A': 65, 'B': 66, 'C': 67, 0: 48 };
codes;                  // {0: 0, A: 65, B: 66, C: 67}
Object.keys(codes);     // ["0", "A", "B", "C"]
~~~

## Good practice

If we want to store the key/value pairs without caring about serializing them in JSON, then use \`Map\`. 
Looping through and getting the size of a map is more comfortable than doing with an object.

\`Object\` should be used if we want to convert back and forth between raw data and JSON, or include a specific business logic:

~~~ javascript
const person = {
    firstName: 'Foo',
    lastName: 'Bar',
    getFullName: function() {
        return \`\${this.firstName} \${this.lastName}\`;
    },
};
~~~

## More

* [hasOwnProperty vs in](/has-own-property-vs-in)
* [Map vs WeakMap](/map-vs-weak-map)
`}
/>
    );
};
