---
title: DOMContentLoaded vs load
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
## Differences

The \`DOMContentLoaded\` event fires when all the nodes in the page have been constructed in the DOM tree.
The \`load\` event fires when all resources such as images and sub-frames are loaded completely.

## Good to know

The \`DOMContentLoaded\` event isn't supported in IE 8 and the older versions of IE. 

To support the behavior in the old versions of IE, we can use the \`readyState\` property to check if the document is loaded completely or not:

~~~ javascript
const ready = function (cb) {
    document.readyState === 'loading'
    // The document is still loading
    ? document.addEventListener('DOMContentLoaded', function (e) {
        cb();
    })
    // The document is loaded completely
    : cb();
};
~~~

The \`ready\` function accepts a function that will be invoked when the document is ready:

~~~ javascript
ready(function() {
    // Do something when the document is ready
    ...
});
~~~
`}
/>
    );
};
