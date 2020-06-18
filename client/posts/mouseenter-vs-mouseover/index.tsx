import React from 'react';

import Markdown from '../../components/Markdown';
import MouseEnterDemo from './MouseEnterDemo';
import MouseOverDemo from './MouseOverDemo';

export default () => {
    return (
<>
<Markdown
    content={`
## Difference

The \`mouseenter\` and \`mouseover\` events are triggered when you move the mouse over an element.

The difference is that, the \`mouseenter\` event only triggers when the mouse enters the element. 

Whereas, the \`mouseover\` event occurs when the mouse enters the element or any of its children.
The similar behaviour applies for the \`mouseleave\` and \`mouseout\` events.
`}
/>
<MouseEnterDemo />
<MouseOverDemo />
<Markdown
    content={`
## Good practice

Because the \`mouseover\` event could be triggered many times when the mouse enters any child element, the screen can be flickering if 
we change the layout or perform expensive task within event handler.

It's recommended to use the \`mouseenter\` and \`mouseleave\` events instead.
`}
/>
</>
    );
};
