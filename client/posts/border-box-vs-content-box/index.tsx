import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`border-box\` and \`content-box\` are two values of the \`box-sizing\` property.
Unlike the \`content-box\`, the \`border-box\` value indicates that the dimension of an element will also include the border and padding.

Let's assume that we have a div element whose size is \`200px x 100px\`, the border and padding are \`5px\` and \`10px\` respectively.  

~~~ css
.div {
    width: 200px;
    border: 5px;
    padding: 10px;
}
~~~

In the content box model, the content inside of element will have the same dimension as the element.

~~~ css
.div {
    /* ... */
    box-sizing: content-box;
}
~~~

~~~
// Content box               
                    ◀︎──── 200px ────▶︎

┌───────────────────────────────────────────────────────┐
|                                                       |
|       ┌───────────────────────────────────────┐       |
|       |                                       |       |
|       |           ┌───────────────┐           |       |
| Border|  Padding  |    Content    |           |       |
|       |           |               |           |       |
|  5px  |    10px   |     200px     |   10px    |  5px  |
|◀︎─────▶︎|◀︎─────────▶︎|◀︎─────────────▶︎|◀︎─────────▶︎|◀︎─────▶︎|
|       |           |               |           |       |
|       |           └───────────────┘           |       |
|       |                                       |       |
|       └───────────────────────────────────────┘       |
|                                                       | 
└───────────────────────────────────────────────────────┘
~~~

In the border box model, the content's dimension has to subtract the border and padding from the element's dimension.
Specifically, the content's width is \`200 - 5 * 2 - 10 * 2 = 170px\`.

~~~
// Border box
◀︎──────────────────────── 200px ────────────────────────▶︎

┌───────────────────────────────────────────────────────┐
|                                                       |
|       ┌───────────────────────────────────────┐       |
|       |                                       |       |
|       |           ┌───────────────┐           |       |
| Border|  Padding  |    Content    |           |       |
|       |           |               |           |       |
|  5px  |    10px   |     170px     |   10px    |  5px  |
|◀︎─────▶︎|◀︎─────────▶︎|◀︎─────────────▶︎|◀︎─────────▶︎|◀︎─────▶︎|
|       |           |               |           |       |
|       |           └───────────────┘           |       |
|       |                                       |       |
|       └───────────────────────────────────────┘       |
|                                                       | 
└───────────────────────────────────────────────────────┘
~~~    
`}
/>
    );
};
