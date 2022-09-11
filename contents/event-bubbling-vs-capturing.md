---
title: event bubbling vs capturing
category: DOM
layout: layouts/post.njk
---

To demonstrate the difference between event bubbling and capturing modes, let's take an example where we have two HTML elements, one is inside another.

Both elements handle the `click` event. To make it simple, we use an inline onclick attribute to handle the event:

```html
<div id="parent" onclick="console.log('parent clicked')">
    <!-- Parent node -->
    <div id="child" onclick="console.log('child clicked')">
        <!-- Child node -->
        Child
    </div>
</div>
```

Now we have two different handlers. Clicking the child node would perform these handlers in different orders based on which mode we want the event to be executed in.

-   In _bubbling_ mode, which is the default mode, the event will be triggered at the deepest element. Then it will be bubbled up to the its parents.

Clicking the child node will print `child clicked`, and then `parent clicked`.

-   In _capturing_ mode, the order is opposite. The handler will be invoked from the parent element first, then down to the its children.

We can force the event to be fired in the capturing mode by passing the third parameter of `addEventListener(event, handler, useCapture)` to `true`.

Let's revisit the example by using `addEventListener()`:

```js
document.getElementById('parent').addEventListener(
    'click',
    () => {
        console.log('parent clicked');
    },
    true
);

document.getElementById('child').addEventListener('click', () => {
    console.log('child clicked');
});
```

If we click the child node, the listener of parent node is fired first, and then the child node's listener. The _Console_ window will output as follow:

```html
parent clicked children clicked
```

### Good practice

It is not recommended to register the event handler via the element attributes such as `onclick`. For more details, check out the [addEventListener() function vs onproperty](/add-event-listener-function-vs-on-property).

### Good to know

The capturing mode does not happen for some special events (`focus`, for example) and on IE < 9.

### See also

-   [event.preventDefault vs return false](/event-prevent-default-vs-return-false)
-   [stopImmediatePropagation vs stopPropagation](/stop-immediate-propagation-vs-stop-propagation)
