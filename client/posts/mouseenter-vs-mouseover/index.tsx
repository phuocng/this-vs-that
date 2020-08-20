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

\`mouseenter\` only triggers when the mouse enters the element on which it is set. The counterpart event is \`mouseleave\`. 

\`mouseover\` triggers when the mouse enters the element *or any of its children*. Its counterpart is \`mouseout\`.
`}
/>
<MouseEnterDemo />
<MouseOverDemo />
<Markdown
    content={`
## Good practice

Because the \`mouseover\` event propagates from the child element up through the hierarchy, if you're doing a resource-intensive task on the event you may notice the screen flickering.

It's recommended to use the \`mouseenter\` and \`mouseleave\` events instead.
`}
/>
</>
    );
};
