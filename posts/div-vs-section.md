---
title: <div> vs <section>
category: HTML
tags:
  - posts
layout: layouts/post.njk
---

## Differences

1. The `div` element has no special meaning. It is often used as a block of children elements. 

    The `section` element introduced in HTML5 standard is used to group related elements, such as a subsection of a long article.

    In short, the `section` element provides more semantic syntax than the `div` element.

2. Other than the semantic differences, `div` has its own constructor interface `HTMLDivElement`.

    `section` and other HTML5 elements such as `article`, `footer`, `header`, `main`, `navbar` do not have this. In fact, their constructors are from `HTMLElement`.

    Assume that our page is organized as following:

    ```html
    <div id="root">
        <header></header>
        <section></section>
        <div></div>
        <footer></footer>
    </div>
    ```
        
    We can retrieve elements and print out the constructor for each of them:

    ```js
    document
        .getElementById('root')
        .querySelectorAll('*')
        .forEach(e => console.log(e.tagName, ':', e.constructor.name))

    // HEADER: HTMLElement
    // SECTION: HTMLElement
    // DIV: HTMLDivElement
    // FOOTER: HTMLElement
    ```

3. If your page has nested `sections`, then the `h1` elements of the inner sections will have smaller font-sizez than the `h1` elements of the outer sections.

    ```html
    <section>
        <h1>Heading</h1>

        <section>
            <h1>Heading of inner section</h1>
        </section>
    </section>
    ```

    The default CSS of browsers defines the font size for them. For example, [Chrome](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css#162) defines the different font sizes for `h1` at different levels of `section`:

    ```css
    /* First level */
    :-webkit-any(article,aside,nav,section) h1 {
        font-size: 1.5em;
    }

    /* Second level */
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) h1 {
        font-size: 1.17em;
    }

    /* Third level */
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) h1 {
        font-size: 1.00em;
    }

    /* Fourth level */
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) 
    :-webkit-any(article,aside,nav,section) h1 {
        font-size: .83em;
    }
    ```

    You can see the similar definitions in the default styles of [Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css#L139).

    This does not happen with the `div` elements. All the `h1` elements will have the same font size no matter how their `div` containers are structured.

## Good practice

Due to the semantic manner, the `section` elements are often used to build the outlines of the page. 
We should use the heading elements (`h1 - h6`) inside section to indicate the summary of section.

```html
<section>
    <h2>This section tells about</h2>
</section>

<section>
    <h2>Title of another section</h2>
</section>
```

## Good to know

Nowadays, HTML5 standard are supported in modern browsers. But in the old days when it is required to support non-HTML5 browsers such as IE 8, we have to do some additional tasks.

* By default, the unknown elements are styled as `display: inline`, hence we need to reset the value for HTML5 elements:

    ```css
    article, aside, footer, header, nav, section {
        display: block;
    }
    ```
    
    The CSS normalizing libraries, such as [normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css), add similar modifications:

    ```css
    /* Render the `main` element consistently in IE */
    main {
        display: block;
    }

    /* Add the correct display in Edge, IE 10+, and Firefox */
    details {
        display: block;
    }
    ```

* Plus, the older versions of IE do not support styling of unknown elements unless they are available in the DOM.

    As a result, we have to create them despite the fact that they are not used:

    ```js
    <!--[if lt IE 9]>
    <script>
    document.createElement("article");
    document.createElement("aside");
    document.createElement("footer");
    document.createElement("header");
    document.createElement("nav");
    document.createElement("section");
    </script>
    <![endif]-->
    ```