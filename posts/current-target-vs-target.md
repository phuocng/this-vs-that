---
title: currentTarget vs target
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<>
<Markdown
    content={`
\`currentTarget\` and \`target\` are properties of the event object when we listen to a particular event, for example:

~~~ javascript
element.addEventListener('click', function(e) {
    // \`currentTarget\` and \`target\` are \`e\`'s properties
});
~~~
    
## Difference

\`currentTarget\` is the element that the event was bound to. It never changes. In the sample code above, \`e.currentTarget\` is the element.

\`target\` is the element user clicked on, in the case of \`click\` event. It can be the original element or any of its 
children depending on where user clicks on exactly.

In the following demo, we attach a handler to the \`click\` event to the outer square. 

Try to click the inner square or the area between two squares, and here is the result:
`}
/>
<TargetDemo />
<Markdown
    content={`
| Property          | Click the inner square    | Click outside of the inner square     |
|-------------------|---------------------------|---------------------------------------|
| \`currentTarget\` | Outer square              | Outer square                          |
| \`target\`        | Inner square              | Outer square                          |

## Use case

Here is an use case that demonstrates the usage of both properties. 

Assume that we have a modal shown at the center of screen. The modal is placed inside an overlay which takes the full size of screen.

The markup is pretty simple as below:

~~~ html
<!-- Overlay -->
<div id="overlay">
   
    <!-- Modal content -->
    <div id="modal">
        ...
    </div>
</div>
~~~

It's a common experience for user to close the modal when clicking the overlay. There are two approaches to do that, 
but first, we need to query the modal and overlay elements:

~~~ javascript
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
~~~

__First approach__: We close the modal when user clicks the overlay:

~~~ javascript
overlay.addEventListener('click', function() {
    console.log('Close the modal');
});
~~~

What happen if user clicks inside the modal? We don't want the event to bubble up to the parent element (which is overlay), 
hence the \`stopPropagation\` method is called:

~~~ javascript
modal.addEventListener('click', function(e) {
    e.stopPropagation();
});
~~~

__Second approach__: To ensure that user clicks the overlay area and not inside the modal, we can simply check if 
both the \`currentTarget\` and \`target\` properties refer to the same element:

~~~ javascript
overlay.addEventListener('click', function(e) {
    if (e.currentTarget === e.target) {
        console.log('Close the modal');
    }
});
~~~

The second approach is much simpler than the first, and it doesn't require to handle the \`click\` event of the modal.
`}
/>
</>
    );
};
