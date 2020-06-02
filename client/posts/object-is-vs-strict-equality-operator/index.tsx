import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<>
<Markdown
    content={`
## Difference

\`Object.is()\` behaves the same as \`===\` (strict equality operator) except for \`NaN\`, \`+0\` and \`-0\`.

~~~ javascript
+0 === -0;                              // true
Object.is(+0, -0);                      // false

NaN === NaN;                            // false
Object.is(NaN, NaN);                    // true

Number.NaN === Number.NaN;              // false
Object.is(Number.NaN, Number.NaN);      // true

NaN === Number.NaN;                     // false
Object.is(NaN, Number.NaN);             // true
~~~
`}
/>
</>
    );
};
