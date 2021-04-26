---
title: double quotes vs single quote
category: JavaScript
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
Single quote \`'\` and double \`"\` quotes are used to wrap strings. There is no real difference between them except that JSON doesn't accept the single quote. 

Other than that, here is the list of advantages and disadvantages:

* Single quote is more readable and looks better when representing an empty string. See \`''\` in comparison to \`""\`.
* In most keyboards, you might need to press extra key (_Shift_) to get the double quotes character
* We don't have to escape if you write HTML in a string:

~~~ javascript
const div = '<div class="message">Hello</div>';
~~~

* Double quotes are often used in other programming languages. So people will get used to it easily when switching to JavaScript.

## Good practice

Choose and stick with one of single or double quotes. Using the same coding convention is very important, especially when you are working within a team.

Here is a list of preferences by different teams. They enfore the team using the same convention by using the [ESLint](https://eslint.org) rules.

__Single quote__
* [Airbnb](https://github.com/airbnb/javascript#strings)
* [Google](https://google.github.io/styleguide/javascriptguide.xml?showone=Strings#Strings)
* [React](https://github.com/facebook/react/blob/master/.eslintrc.js)

~~~ javascript
// ESLint rule
quotes: [ERROR, 'single', {...}],
~~~

__Double quotes__
* [jQuery](https://contribute.jquery.org/style-guide/js/#quotes)
* [Typescript](https://github.com/microsoft/TypeScript/blob/master/.eslintrc.json)

~~~ javascript
// ESLint rule
"@typescript-eslint/quotes": ["error", "double", { ... }],
~~~

## Tip

You can use the template literal syntax in ES6 to get rid of escaping quote. For example:

~~~ javascript
// Instead of
const message = 'It\\'s a message';

// We can do this which is more convenient
const message = \`It\'s a message\`;
~~~
`}
/>
    );
};
