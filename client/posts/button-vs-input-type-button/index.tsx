import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Differences

1. \`<button>\` can contain HTML. \`<input type="button" />\` on the other hand is an [empty element](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)
    (such as \`br\`, \`hr\`, \`image\`), therefore it cannot contain content.

2. \`<button>\` supports pseudo-elements such as \`:after\` and \`:before\` which is very useful to style the button.
    Whereas \`<input type="button" />\` doesn't.

3. By default, \`<button>\` has the default attribute \`type="submit"\`. It means that if the \`type\` attribute isn't specified, clicking 
    the button will submit its enclosing form.

    If you want the \`input\` to behave as a submit button, we have to change the \`type\` attribute to \`submit\`.

## Good practices

1. The \`button\` element has is more semantic than the \`input\` with type of \`button\`. It's recommended to use the \`button\` element 
    if you want to create a clickable button.

2. Always specific the \`type\` attribute for the \`button\` element. The possible values are

| Value         | Description                                       |
|---------------|---------------------------------------------------|
| \`submit\`    | The button submits the form data to the server    |
| \`reset\`     | Resets form inputs to initial values              |
| \`button\`    | By default, it does nothing when pressed          |
`}
/>
    );
};
