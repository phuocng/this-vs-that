import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
There are two ways to define the dimension for an element:

* Using the \`height\` or \`width\` attributes:
    
    ~~~ html
    <img height="100" />
    ~~~

* Or using the \`height\` or \`width\` property in CSS styles:

    ~~~ html
    <img style="height: 100px" /> 
    ~~~

## Differences

1. The \`width\` and \`height\` properties are available for all HTML elements. But the \`width\` and \`height\` attributes are only
    available for some elements such as \`canvas\`, \`image\`, \`table\`, \`td\`, etc.

    ~~~ html
    <!-- Work -->
    <img width="200px" />

    <!-- Does NOT work -->
    <div width="200px">
    ~~~

2. For \`canvas\` elements, they don't produce the same result.

    According to the [HTML specifications](https://html.spec.whatwg.org/multipage/canvas.html#attr-canvas-width), if the \`width\`
    and \`height\` attributes are missing then the default value will be used. 
    
    The \`width\` attribute defaults to 300, and the \`height\` attribute defaults to 150.

    It's recommended to set the \`height\` and \`width\` attributes for canvas directly or via JavaScript to avoid the problem 
    that the canvas is stretched.

    ~~~ html
    <!-- Work -->
    <canvas height="100" width="100">

    <!-- Does NOT work -->
    <canvas style="height: 100px; width: 100px;">
    ~~~

    The \`width\` and \`height\` attributes of canvas must be positive numbers without the units. \`width="100px"\` will have no affect
    despite the fact that it seems to be a valid attribute declaration for other elements.

3. The CSS style properties have the higher priority than the HTML properties. 

    In the following example, the \`height: 200px\` property will override the \`height="100px"\` attribute:

    ~~~ html
    <!-- The image will have the width of 200px -->
    <img height="100px" style="height: 200px" />
    ~~~

## Good to know

The \`width\` and \`height\` attributes are still used widely in emails where we have to support multiple screen sizes (mobile, desktop) and various email clients.
`}
/>
    );
};
