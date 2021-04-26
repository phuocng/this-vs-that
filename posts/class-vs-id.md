---
title: class vs id
category: HTML
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
\`class\` and \`id\` are common attributes for HTML elements. They can be used at the same time:

~~~ html
<div id="..." class="...">
    ...
</div>
~~~

## Differences

1. In general, these attributes serve different purposes.

    The \`id\` attribute has to be unique per page because it's used to identity a particular element. 
    It's very common to use the \`document.getElementById()\` method to retrieve an element by given id:

    ~~~ javascript
    // HTML
    <div id="sidebar">...</div>

    // JavaScript
    const sidebar = document.getElementById('sidebar');
    ~~~

    The \`class\` attribute isn't required to be unique, and it can contain different CSS classes separated by a space.
    We often use the class attribute to define the look and feel of the element.

2. It's rare to see that the \`id\` attribute is used when declaring CSS styles in web development today.

    In that case, note that styles defined in \`id\` has greater specificity than the one defined in \`class\`.

    For example, both the \`id\` and \`class\` in this element defines the text color. 

    ~~~ css
    #header {
        text-color: white;
    }
    .header {
        text-color: blue;
    }
    ~~~

    But in the end, the text color defined in the \`id\` will override the one defined by the \`class\`:

    ~~~ html
    <!-- The text color will be white -->
    <div id="header" class="header" />
    ~~~

## Good practices

1. Access the element via the \`id\` attribute

    If an element has the \`id\` attribute, we can access its DOM node from the global \`window\` object directly, 
    such as \`window['the-id']\`  or \`window.the-id\`.
    
    To avoid the conflicts with another elements, as there are more features added to the web platform, 
    it's recommended to use the \`document.getElementById('the-id')\` method instead of \`window.the-id\`.

2. Have you ever seen a class name starting with \`js-\`?

    If the answer is not, then you can visit [Github](https://github.com) and see the source of generated HTML. There are bunch of elements 
    whose class are prefixed with \`js-\` such as:

    ~~~ html
    <meta class="js-ga-set" name="userId" content="...">
    <meta class="js-ga-set" name="dimension1" content="...">
    ~~~

    They are often used to manage the list of elements that we don't want to set \`id\` for (dynamic elements, for example).
    In these cases, we use the \`document.querySelectorAll('js-xxx')\` method to retrieve the elements list.

    In the other words, the \`js-\` classes don't define the styles, but for managing the elements in JavaScript instead. 
    That's why they are prefixed with \`js-\`. Follow this naming convention is helpful if you're working in a team. 
    Other engineers will be aware of the class name, and don't remove them when refactoring the page.

3. Nowadays, we often build a single page application (SPA). 
    Each page is constructed by a lot of components which are dynamically injected to the page based on the user's actions.

    Therefore, it's not easy to ensure that an ID is unique across all components which are usually developed by different engineers.
    In that case, instead of using the \`id\` attribute, we should use a ref (stands for reference). 
    It's a concept that uses a variable referencing to a particular element.

    Most popular JavaScript frameworks support _ref_ such as:

    * [React's ref](https://reactjs.org/docs/refs-and-the-dom.html)
    * [Svelte's \`bind:this\`](https://svelte.dev/docs#bind_element)
    * [Vue's \`ref\` attribute](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements)

4. Avoid to use colons (:) and periods (.) in id attribute despite the fact that they're allowed.

    According to the [HTML specifications](https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute), 
    a valid id can consist of almost characters except [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

    Assume that we have an element representing an user's email address:

    ~~~ html
    <div id="user.email" />
    ~~~

    In order to access the element, the \`getElementById()\` method accepts all of three ways passing the \`id\`:

    ~~~ javascript
    // They return the same element
    document.getElementById('user.email')
    document.getElementById('user\\.email')
    document.getElementById('user\\\\.email')
    ~~~

    But these methods return different results if you are using [jQuery](https://jquery.com) library:

    ~~~ javascript
    // Function				// Returned element
    $('#user.email')        // <div id="user" class="email" />
    $('#user\\.email')      // <div id="user" class="email" />
    $('#user\\\\.email')    // <div id="user.email" />
    ~~~

    As you see, the first two methods will find an element with \`id\` of \`user\` and has \`email\` class. 
    In order to get the correct element, we have to escape the \`id\` using double backslashes (\`\\\`).

    It also happens if we use the same value in CSS:

    ~~~ css
    #user.email {
        ...
    }
    ~~~

    All the styles declared within \`#user.email { ... }\` has effect on the element with \`id\` of \`user\` and has the \`email\` class.
    The styles aren't applied to element with \`id\` of \`user.email\`. To define the styles for our element, we have to escape the selector. 
    But this time, it requires a *single* backslash only:

    ~~~ css
    #user\\.email {
        ...
    }
    ~~~

    Avoid using the special characters in the \`id\` and \`class\` attributes will help us get rid of the confusion and errors above.

    If it's not possible to get rid of colons and periods (for example, the \`id\` attribute is generated by the server side), 
    then you can use the single backslash as above, or use the attribute selector. 
    Note that it has a lower specificity than the \`id\` selector:

    ~~~ css
    [id="user.email"] {
        ...
    }
    ~~~
`}
/>
    );
};
