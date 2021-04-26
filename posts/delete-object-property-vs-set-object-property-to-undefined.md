---
title: delete obj.property vs obj.property = undefined
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
Assume that \`obj\` is an object, and \`property\` is the name of its property.

## Differences

1. Calling \`obj.property = undefined\` sets the value of property to \`undefined\`. The property is still there and appears if we iterate the properties of the object.

    ~~~ javascript
    let person = { name: 'John' };
    person.name = undefined;

    person.hasOwnProperty('name');              // true
    name in person;                             // true
    Object.keys(person);                        // ['name']
    for (let p in person) { console.log(p); }   // 'name'
    ~~~

    \`delete obj.property\` will remove the property from the object. Let's revisit the sample code above, now with \`delete person.name\`:

    ~~~ javascript
    let person = { name: 'John' };
    delete person.name;

    person.hasOwnProperty('name');      // false
    name in person;                     // false
    Object.keys(person);                // An empty array

    // Nothing is shown up in the Console
    for (let p in person) { console.log(p); }
    ~~~

2. \`delete\` can't delete an inherited property.

    ~~~ javascript
    const car = { branch: "Audi" };

    const a4 = Object.create(car);
    console.log(a4.branch);     // 'Audi'

    delete a4.branch;
    console.log(a4.branch);     // 'Audi'
    ~~~

    In this case, we have to set the property to \`undefined\`:

    ~~~ javascript
    a4.branch = undefined;
    console.log(a4.branch);     // undefined
    ~~~

## Good to know

1. \`delete\` doesn't work with array:

    ~~~ javascript
    const array = [1, 2, 3, 4, 5];

    delete array[1];
    console.log(array);     // [1, empty, 3, 4, 5]
    ~~~

    If you want to remove an item from an array, use the \`splice\` method.

    ~~~ javascript
    const array = [1, 2, 3, 4, 5];
    array.splice(2, 1);
    console.log(array);     // [1, 2, 4, 5]
    ~~~

    There's an alternative method to remove the last element from array:

    ~~~ javascript
    const array = [1, 2, 3, 4, 5];
    array.pop();
    console.log(array);     // [1, 2, 3, 4]
    ~~~

2. We can use the ES6 spread operator to remove a property from an object:

    ~~~ javascript
    const { name, ...rest } = { name: 'Foo', age: 20 };

    console.log(name);      // 'Foo'
    console.log(rest);      // { age: '20' }
    ~~~

    It's also possible to remove a dynamic property:

    ~~~ javascript
    const property = 'name';
    const { [property]: value, ...rest } = { name: 'Foo', age: 20 };

    console.log(value);     // 'Foo'
    console.log(rest);      // { age: '20' }
    ~~~
`}
/>
    );
};
