import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Differences

1. The \`alt\` attribute is the _alternate_ text to serve as the content of element when the element isn't rendered normally. 

    \`<img>\` is the most popular tag using the \`alt\` attribute.

    When an image can't be loaded, the browser will display the \`alt\` attribute. It's useful because user will have an 
    idea of what the content is.

2. The \`title\` attribute is the tooltip text that user will see after hovering over the element.

## Good practice

Always use the \`alt\` attribute for \`<img>\` tags.

Google and other search engines can't read the image but they can see the \`alt\` text. 
Setting the \`alt\` attribute will let the search engines understand what the image is.

By doing so, the image will have more chances to be indexed by search engine crawlers. 
It's a good practice to make the website friendly with search engines.

Unlike the search engines, user can understand what the image is about when looking at it. 
So that we don't need to set the \`title\` attribute for \`<img>\` unless it really provides more information about the image.

## Tips

As mentioned in the previous section, the \`img\` tag should come with an \`alt\` attribute. 
Here is the two tips that help you avoid the problem in the development phase.

1. You can visually see which \`img\` missing the \`alt\` attribute by using the CSS:

    ~~~ css
    img:not([alt]),
    img[alt=""] {
        outline: 8px solid red;
    }
    ~~~

    Doing so will add a red border to any \`img\` tag whose \`alt\` attribute is missing or empty.

2. If you are using [Visual Studio Code](https://code.visualstudio.com), then I recommend to install the 
[webhint extension](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).
    It will automatically detect the issue and show the details when you hover on the element.
    ![Detect the missing alternate text with webhint](/assets/webhint-alt-warning.png)
`}
/>
    );
};
