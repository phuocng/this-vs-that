---
title: parentElement vs parentNode
category: DOM
layout: layouts/post.njk
---

First of all, you need to know the difference between an element and a node.
In summary, an element is a special type of node which represents a single node in our DOM tree.
It can be not only an element but also a comment, a document, a text node, etc.

The `parentElement` and `parentNode` properties in most cases return the same node:

```js
// Both return <html> element
document.body.parentNode;
document.body.parentElement;
```

The only difference is that, the `parentElement` property can be `null` if the parent node is not an element node:

```js
// The exception
// returns the Document node
document.documentElement.parentNode;

// returns null because <html> element does not
// have a parent element node
document.documentElement.parentElement;
```

### Tip

By checking whether the parent element exists or not, we can travel from a given element up to the html tag:

```js
while (ele = ele.parentElement) {
  ...
}
```

The snippet code below calculates the distance from a given element to the top of page:

```js
const distanceToTop = (ele) => {
    let x = 0;
    while ((ele = ele.parentElement)) {
        x += ele.offsetTop;
    }
    return x;
};
```
