---
title: keydown vs keypress vs keyup
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
1. The order of events

    When user presses a key or combination of different keys, \`keydown\`, \`keypress\` and \`keyup\` are triggered in that order:

    * The \`keydown\` event is triggered first when user presses a key
    * The \`keyup\` event is triggered last when user releases a key
    * In between, the \`keypress\` event is triggered

2. These events serve different purposes.

    The \`keydown\` and \`keyup\` events are often used to handle the physical keys, while the \`keypress\` event is used to 
    handle characters which are being typed.

    The \`keypress\` ignores keys such as \`delete\`, \`arrows\`, \`page up\`, \`page down\`, \`home\`, \`end\`, \`ctrl\`, 
    \`alt\`, \`shift\`, \`esc\`, etc.
    So, if we need to handle those keys, it's better to use either \`keydown\` or \`keyup\` event.

    The sample code below listens on the \`keydown\` event, and closes the modal if the _Esc_ key is pressed:

    ~~~ javascript
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close the modal
        }
    });
    ~~~
    
3. The \`keydown\` and \`keypress\` events fire multiple times if user press and hold a key. 
    
    While \`keyup\` fires only once when user releases the key.
`}
/>
    );
};
