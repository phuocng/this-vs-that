import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`clientHeight\` = the height of an element + the vertical padding.

\`offsetHeight\` = the height of the element + the vertical padding + the top and bottom borders + the horizontal scrollbar (if it's available).

\`scrollHeight\` = the height of element's content (including the content which isn't visible on the screen) + the vertical padding.

## More

* [clientY vs pageY](/client-y-vs-page-y)
`}
/>
    );
};
