---
title: addEventListener() function vs on property
category: DOM
layout: layouts/post.njk
---

There are two different ways to handle an event of element. The following piece of code demonstrates how to handle the `click` event with the `addEventListener` function:

```js
const handler = () => {
    console.log('the element is clicked');
};

element.addEventListener('click', handler);
```

The other way is to use the `onclick` property or inline `onclick` attribute such as:

```html
element.onclick = handler;

<div onclick="handler()" />
<div onclick="javascript: handler()" />
```

## Differences

1. You can add multiple handlers for an event with `addEventListener`.

    The `on___` property or attribute allows to register only one handler. Setting `on___` will remove all existing handlers.

    In the following sample code, clicking the element will print `onclick is used` in _Console_ because the `onclick` removes the original `handler`.

    ```js
    const handler = () => {
        console.log('addEventListener is used');
    };
    element.addEventListener('click', handler);

    const anotherHandler = () => {
        console.log('onclick is used');
    };
    element.onclick = anotherHandler;
    ```

2. With `addEventListener`, it's possible for us to handle the event in either capturing or bubbling phase by passing.
   The `on___` property doesn't support that.

    Assume that we have two `div` element as following:

    ```html
    <div id="parent">
        Parent
        <div id="child">Child</div>
    </div>
    ```

    We are going to add handlers for the `click` event:

    ```js
    const handleParentClick = () => {
        console.log('parent is clicked');
    };

    const handleChildClick = () => {
        console.log('child is clicked');
    };
    ```

    Setting the third parameter of `addEventListener` to `true` or `false` could change the order of handler execution.

    ```js
    // We will see "child is clicked" and then
    // "parent is clicked" when clicking the child element
    // The `click` event is passed from the bottom node
    // up to its parents
    document.getElementById('parent').addEventListener('click', handleParentClick, false);

    document.getElementById('child').addEventListener('click', handleChildClick, false);
    ```

    In contrast with the bubbling phase, the following code will make the `click` event is passed from parents down to its children:

    ```js
    // We will see "parent is clicked" and then
    // "child is clicked" when clicking the child element
    document.getElementById('parent').addEventListener('click', handleParentClick, true);

    document.getElementById('child').addEventListener('click', handleChildClick, true);
    ```

3. The last thing is the browser compatibility.
   The `addEventListener` function doesn't work before Internet Explorer (IE) 9, while `onclick` is supported by all browsers.
   The IE 8 and older versions use the `attachEvent` function.

    It isn't really important thing in the web development today as most websites don't support IE 8 or 9 anymore. But if you still need to take care of IE 8 (_really?_), then here is the small line of code that fills the gap:

    ```js
    element.attachEvent ? element.attachEvent('onclick', handler) : element.addEventListener('click', handler);
    ```

## Good practices

1. Always pick `addEventListener`

    There are a couple of problems with setting `onclick` attribute. It has a potential security issue since we pass a string.
    The browser also doesn't warn if the method passed to `onclick` attribute doesn't exist.

    But you often see that the event handlers are set on element's attributes in modern JavaScript frameworks, such as:

    - Angular: `<button (click)="sayHello()">Hello</button>`
    - React: `<button onClick={sayHello}>Hello</button>`
    - Vue: `<button v-on:click="sayHello">Hello</button>`

    It's designed in a declarative way, so it's easy for developers to get used to the library. Despite the fact that the declaration looks similar to the `onclick` attribute, the framework parses the code, and transpiles it to `addEventListener` method.

2. To avoid the memory leak issue, remember to remove the handler when it's not used anymore.

    ```js
    const handler = (e) => {
        ...
    };

    // Attach event listener
    element.addEventListener('click', handler);

    // Remove it later
    element.removeEventListener('click', handler);
    ```

    In the web development nowadays, an element in a single page application might be added and removed from page automatically.
    The popular JavaScript provides the moments that we can hook on to setup and clean up event handlers.

    The sample code below demonstrates the similar actions with React library:

    ```js
    class Resize extends React.Component {
        const handleResize = (e) => {
            ...
        };

        componentDidMount() {
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
    ```
