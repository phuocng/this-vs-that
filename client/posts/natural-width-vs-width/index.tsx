import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`naturalWidth\` is the natural width of an element. It never changes.
For example, a 100px wide image always has \`naturalWidth\` of 100px even when the image is resized by CSS or JavaScript.

Whereas, \`width\` is the value of \`width\` attribute. It is subject to change and can be updated via CSS or JavaScript.

## Good to know

It's possible to get the natural width of an image that can be loaded by given \`url\`:

~~~ javascript
const getNaturalWidth = url => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => {
            resolve(img.naturalWidth);
        });
        img.addEventListener('error', () => reject());
        img.src = url;
    });
};

// Usage
getNaturalWidth('https://path/to/image.png').then((naturalWidth) => {
    ...
});
~~~
`}
/>
    );
};
