import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`nodeName\` and \`tagName\` are the properties to get the name of HTML node.

\`tagName\` is used to get the type of element nodes that have node type of 1. For other type of nodes such as attribute, comment, text, .etc, 
\`nodeName\` is used to get the name of node.

Let's take a look at the following example where we have a simple button:

~~~ html
<button id="login">Login</button>
~~~

The \`nodeName\` and \`tagName\` properties are the same for the HTML element:

~~~ javascript
const button = document.getElementById('login');
button.nodeType;        // 1
button.nodeName;        // 'BUTTON'
button.tagName;         // 'BUTTON'
~~~

Let's access the node represents the \`id\` attribute:

~~~ javascript
const idNode = button.getAttributeNode('id');
idNode.nodeType;        // 2
idNode.nodeName;        // 'id'
idNode.tagName;         // undefined
~~~

In a similar way, the button text node gives different result for \`nodeName\` and \`tagName\`:

~~~ javascript
const content = button.firstChild;
content.nodeType;       // 3
content.nodeName;       // '#text'
content.tagName;        // undefined
~~~
`}
/>
    );
};
