import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
\`:active\` and \`:focus\` selectors represents different states of an element.

The \`:focus\` selector occurs when the element is ready to be interacted with. It happens when

* User presses the \`Tab\` key to give focus to the element
* User uses the mouse to click on the element
* On touchscreen screens, user taps on the element

The \`:active\` selector is applied when the element is being activated. It will be kept during the 
time user clicks on the element and releases the mouse.

There is an important notice for the Safari browser running on iOS. The \`:focus\` selector is supported, 
while the \`:active\` selector is applied only if there is handler for the \`touchstart\` event of relevant 
element or the \`body\` element.

## Good practice

There are people who like navigating a web page with their keyboard. By pressing the \`Tab\` key, 
users can jump to focusable elements quickly.
Some native HTML elements (such as \`<a>\`, \`<button>\`, \`<input>\`, \`<select>\` and \`<textarea>\`) provide 
the built-in keyboard accessibility.

But if you are building a custom element, and want it to be focusable and accessible via keyboard, 
then you should add the \`tabindex\` attribute for it.

There are two popular cases for setting \`tabindex\`:

* \`tabindex="0"\` will bring the element into the tab order.
* As opposed to the above value, \`tabindex="-1"\` removes the element from the tab order. 
It's not possible for user to explore the element with keyboard.

This technique is used in a lot of libraries, such as [Bootstrap's modal](https://getbootstrap.com/docs/4.4/components/modal) or
[Foundation's reveal](https://get.foundation/sites/docs/reveal.html).

By setting \`tabindex="-1"\` to either the modal or its overlay element, users won't be able to focus the element 
in the main page. Only the element within the modal are focusable.

Here is the structure of a Bootstrap's modal:

~~~ html
<!-- The overlay which takes full size -->
<div
    tabindex="-1"
    style="
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
    "
>
    <!-- The modal element -->
    ...
</div>
~~~

It's recommended to not set \`tabindex\` greater than 0 because screen readers navigate the web 
page in the DOM order instead of tab order.

## Tips

1. With Chrome DevTools, you can see the CSS classes used for \`:active\` and \`:focus\` states without activating the element.

    First, you need to inspect the element, and then select the _:hov_ tab under the _Styles_ tab:

    ![Toggle the :active and :focus selectors with Chrome DevTools](/assets/active-hover-classes-chrome.png)

    On Firefox, similar options can be found in the _:hov_ tab under the _Inspector_ tab.

    ![Toggle the :active and :focus selectors with Firefox Developer Tools](/assets/active-hover-classes-firefox.png)

2. Assume that you want to test the keyboard accessibility in your website. 

    There's a case that the pressing the _Tab_ key jumps to a particular element which is invisible in the viewport.

    Chrome DevTools provides the ability of tracking the focused element.

    * Open the _Console_
    * Click the eye icon which is located at the right of the Filter box to create a live expression
    * Type \`document.activeElement\`

    This live expression will represent the active element which has the focus currently. You can right click on the expression's 
    result and then choose _Reveal in Elements panel_ to inspect the focused element.

    ![Track the focused element](/assets/track-focused-element.png)
`}
/>
    );
};
