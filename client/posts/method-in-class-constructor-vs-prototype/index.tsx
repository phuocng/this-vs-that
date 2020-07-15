import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Given a class, there are two common ways to define a method for it.

* Define the method in the class constructor

~~~ javascript
function Calculator() {
    this.sum = function(a, b) {
        return a + b;
    }
}
~~~

* Or define the method in the class prototype:

~~~ javascript
function Calculator() {}

Calculator.prototype.sum = function(a, b) {
    return a + b;
}
~~~

Both approaches produce the same result when the method is invoked by a class instance:

~~~ javascript
const calc = new Calculator();
calc.sum(1, 2);                 // 3
~~~

## Differences

1. In the first approach, the method has to be created every time we create a new instance of the class. The second approach, on the other hand, creates the method once and share it for all instances of the class.

    That's being said, the second approach is more efficient, and requires less memory than the first one.

2. The method created via prototype can be extended and overridden by the sub class.

## Good practice

The first approach could create a huge constructor function that consists of logic of other functions.

Consider the following huge constructor:

~~~ javascript
function Foo() {
    this.bigFunction = function() {
        // A big function here
    }

    this.anotherBigFunction = function() {
        // ...
    }
} 
~~~

versus

~~~ javascript
function Foo() {}

Foo.prototype.bigFunction = function() {
    ...
}

Foo.prototype.anotherBigFunction = function() {
    ...
}
~~~

The latter looks more readable and convenient.
`}
/>
    );
};
