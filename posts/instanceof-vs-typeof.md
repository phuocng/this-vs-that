---
title: instanceof vs typeof
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
\`instanceof\` and \`typeof\` are two operators to check the type of a value.

## Differences

The \`typeof\` operator checks if a value has type of primitive type which can be one of \`boolean\`, \`function\`, \`object\`, 
\`number\`, \`string\`, \`undefined\` and \`symbol\` (ES6).

~~~ javascript
typeof 'helloworld';                // 'string'
typeof (new String('helloworld'));  // 'object'
~~~

The \`instanceof\` operator checks if a value is an instance of a class or constructor function. 

~~~ javascript
'helloworld' instanceof String;                 // false
new String('helloworld') instanceof String;     // true
~~~

## Good to know

1. If you want to check if a value is a primitive string or a \`String\` object, then you need to use both operators:
    
    ~~~ javascript
    const isString = value => typeof value === 'string' || value instanceof String;

    isString('helloworld');             // true
    isString(new String('helloworld')); // true
    ~~~
        
    Another approach is to rely on the \`toString()\` of \`Object\` as below:

    ~~~ javascript
    const isString = value => Object.prototype.toString.call(value) === '[object String]';

    isString('hello world');                // true
    isString(new String('hello world'));    // true
    isString(10);                           // false
    ~~~

    We can use similar methods to check a value against given original or wrapped primitive types:

    ~~~ javascript
    const isBoolean = value => Object.prototype.toString.call(value) === '[object Boolean]';
    ~~~

2. Be careful when creating a value of primitive type with constructor. The type of value can be changed based on the way you use it.
    In the piece of code below, we start with creating a string from the \`String\` constructor:

    ~~~ javascript
    let message = new String('hello');
    message instanceof String;  // true
    typeof message;             // 'object'
    ~~~

    We are going to append the string object with another string:

    ~~~ javascript
    message += ' world';
    ~~~

    Now, let's look at the result of the operators:

    ~~~ javascript
    message instanceof String;  // false
    typeof message;             // 'string'
    ~~~

    These type modifications are known as __boxing__ and __unboxing__. Boxing is the process that wraps a primitive value by object. 
    Unboxing extracts the wrapped primitive value from object.

3. There is a special case when using \`typeof\` with \`null\`:

    ~~~ javascript
    typeof null;    // 'object', not 'null'
    ~~~
    
4. \`instanceof\` doesn't work for primitive types.

    If you want to use \`instanceof\` all the time, then you can override the behavior of \`instanceof\` by implementing 
    a static method with the key of \`Symbol.hasInstance\`.

    In the following code, we create a class called \`PrimitiveNumber\` that checks if a value is a number:

    ~~~ javascript
    class PrimitiveNumber {
        static [Symbol.hasInstance](value) {
            return typeof value === 'number';
        }
    }

    12345 instanceof PrimitiveNumber;           // true
    'helloworld' instanceof PrimitiveNumber;    // false
    ~~~
`}
/>
    );
};
