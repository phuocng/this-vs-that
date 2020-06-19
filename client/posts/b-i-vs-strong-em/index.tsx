import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
The \`b\`, \`strong\` tags (and the other pair of tags, \`i\` and \`em\`) look like the same to each other when we see them rendered in a webpage.

Each browser has its own default styles, and it uses the same styles for the \`b\` ans \`strong\` tags.
Here is how they are styled in the popular browsers:

[Chrome](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css):

~~~ css
strong, b {
    font-weight: bold
}
i, cite, em, var, address, dfn {
    font-style: italic
}
~~~

[Firefox](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css):

~~~ css
b, strong {
    font-weight: bolder;
}

i, cite, em, var, dfn {
    font-style: italic;
}
~~~

[Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css):

~~~ css
strong, b {
    font-weight: bold;
}
i, cite, em, var, address, dfn {
    font-style: italic;
}
~~~

Without any custom styles, both the \`b\` and \`strong\` tags are bold, while the \`i\` and \`em\` tags are italic.

Despite the fact that their appearances are similar, the \`strong\` and \`em\` tags add extra semantic meaning to the enclosed text.

According to the HTML 5 specifications, the \`strong\` and \`em\` tags indicate the importances and emphasis respectively.
On a screen reader, there's nothing happen when it sees an \`i\` tag. But when it comes across an \`em\` tag, it knows that the content should be 
emphasised to the listeners.
`}
/>
    );
};
