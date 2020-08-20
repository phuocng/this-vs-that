import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Differences

1. The \`alt\` attribute is the _alternate_ text to serve as the content of element when the element isn't rendered normally. 

    \`<img>\` is the most popular tag using the \`alt\` attribute.

    When an image can't be loaded, the browser will display the \`alt\` text in its place so the user can get an 
    idea of why the image was included.

2. The \`title\` attribute is the tooltip text seen when hovering over the element.

## Good practice

Always use the \`alt\` attribute for \`<img>\` tags.

Google and other search engines can't read the image but they can see the \`alt\` text. 
Setting the \`alt\` attribute is a [good practice](https://youtu.be/CV2tIFgUKW4) for SEO (search enginge optimization).

You usually won't set the \`title\` attribute for \`<img>\` unless it really provides more information about the image. But it could be argued that if you have to explain your image with title text, maybe there's a better image to use.

## Tips

Here's two options for making sure you always include the \`alt\` attribute on the \`img\` tag.

1. Use CSS to give a red outline to any \`img\` having a missing or blank \`alt\` attribute:

    ~~~ css
    img:not([alt]),
    img[alt=""] {
        outline: 8px solid red;
    }
    ~~~

2. If you are using [Visual Studio Code](https://code.visualstudio.com), you can install the 
[webhint extension](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint).
    It will automatically detect the issue and show the details when you hover on the element.
    ![Detect the missing alternate text with webhint](/assets/webhint-alt-warning.png)
`}
/>
    );
};
