---
title: ++value vs value++
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
\`++\` is the increment operator adding one to the operand.
There're two variables of the operator which use \`++\` as prefix or postfix: \`++value\` and \`value++\`.

They have the same affect in for loops. The following loops print the same results which are the numbers from 0 to 4:

~~~ javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// And
for (let i = 0; i < 5; ++i) {
    console.log(i);
}
~~~

## Differences 

When returning a value, \`return value++\` returns the original value before the value is increased. While \`return ++value\` increases the value and returns the updated value.

The following \`foo\` and \`bar\` functions returns different results:

~~~ javascript
const foo = x => x++;
const bar = x => ++x;

foo(1);     // 1
bar(1);     // 2
~~~

## Good to know

\`value += 1\` is another alternative of the postfix increment \`value++\`. It's worth noting that they can provide different result when using with strings. 

The postfix increment \`value++\` will convert the value to number first, and then increase the value:

~~~ javascript
let value = '5';
value++;
value;          // 6
~~~

On the other hand, if value is a string, \`value += 1\` converts the second argument (\`1\`) to string first, and then concatenate them together.

~~~ javascript
let value = '5';
value += 1;
value;          // '51'
~~~
`}
/>
    );
};
