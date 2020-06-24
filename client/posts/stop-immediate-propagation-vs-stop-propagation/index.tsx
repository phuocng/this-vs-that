import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
The \`stopImmediatePropagation()\` method prevents the event from bubble up to the parent elements like what the \`stopPropagation()\` method does. 
Plus, it prevents the other listeners of the same event from being called.

Let's say that we attach different listeners that handles the same event of the same element. When the event occurs, 
the listeners are executed in the same order as they're added.

If we call the \`thestopImmediatePropagation()\` method in a given listener, then the remaining listeners will not be called.

In the following sample code, there're 3 listeners that handle the click event of a button represented by \`button\`.

~~~ javascript
button.addEventListner('click', function() {
    console.log('foo');
});

button.addEventListner('click', function(e) {
    console.log('bar');
    e.stopImmediatePropagation();
});

button.addEventListner('click', function() {
    console.log('baz');
});
~~~

Clicking the button will print \`foo\` and \`bar\` in the _Console_. We won't see \`baz\` because the last listener isn't called.
`}
/>
    );
};
