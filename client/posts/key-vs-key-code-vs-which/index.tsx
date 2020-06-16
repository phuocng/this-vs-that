import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`key\`, \`keyCode\` and \`which\` can be used to determine which key is pressed. Following is a sample code that handles the 
\`keyPress\` event of a text box. 

It checks if user presses the _Enter_ key whose key code is 13:

~~~ javascript
textBoxElement.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
    // Do something ...
    }
});
~~~

## Difference

According to MDN documentations, both [keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) 
and [which](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which) are deprecated and will be removed from the Web standards.

Apart from that, both properties are supported differently by browsers. Some browsers use \`keyCode\`, other use \`which\`.

It's common to see how they are normalized as following:

~~~ javascript
const key = 'which' in e ? e.which : e.keyCode;

// Or
const key = e.which || e.keyCode || 0;
~~~

## Good practice

It's recommended to use the [key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) property.
The sample code above can be rewritten as 

~~~ javascript
if (e.key === 'Enter') {
    // Enter is pressed
}
~~~
`}
/>
    );
};
