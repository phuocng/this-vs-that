---
title: event.preventDefault vs return false
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

`preventDefault()` and `return false` are the different ways to prevent the default event from happening. 

For example, when user clicks on an external link, we should display a confirmation modal that asks user for redirecting to the external website or not:

```js
hyperlink.addEventListener('click', function(e) {
    // Don't redirect user to the link
    e.preventDefault();
});
```

Or we don't want to submit the form when clicking its submit button. Instead, we want to validate the form first:

```js
submitButton.addEventListener('click', function(e) {
    // Don't submit the form when clicking a submit
    e.preventDefault();
});
```

## Differences

1. `return false` doesn't have any effect on the default behavior if you use the `addEventListener` method to handle an event.
    It only works when the event handler is declared as an element's attribute:

    ```js
    hyperlink.addEventListener('click', function(e) {
        // Does NOT work
        return false;
    });

    // Work
    hyperlink.onclick = function(e) {
        return false;
    };
    ```

2. According to the [HTML 5 specifications](https://www.w3.org/TR/2017/REC-html52-20171214/webappapis.html#the-event-handler-processing-algorithm), `return false` will cancel the event except the `mouseover` event.

## Good practices

1. It's recommended to use the `preventDefault` method instead of `return false` inside an event handler. 
    Because the later only works with using the `onclick` attribute which will remove other handlers for the same event.

2. If you're using jQuery to manage the events, then you're able to use `return false` within the event handler:

    ```js
    $(element).on('click', function(e) {
        return false;
    });
    ```

    Before returning the value of `false`, the handler would do something else.  The problem is that if there's any runtime error occurring in the handler, we will not reach the `return false` statement at the end. 
    
    In that case, the default behavior will be taken:

    ```js
    $(element).on('click', function(e) {
        // Do something here, but if there's error at runtime
        // ...
        return false;
    });
    ```

    We can avoid this situation by using the `preventDefault` method before performing any custom handler:

    ```js
    $(element).on('click', function(e) {
        e.preventDefault();

        // Do something here
        // The default behavior is prevented regardless errors at runtime
        // ...
    });
    ```

## Good to know

If you're using jQuery to manage the event, then `return false` will behave same as the `preventDefault()` and `stopPropagation()` methods:

```js
$(element).on('click', function(e) {
    // Prevent the deault event from happenning and 
    // prevent the event from bubbling up to the parent element
    return false;
});
```

## More

* [event bubbling vs capturing](/event-bubbling-vs-capturing)
* [stopImmediatePropagation vs stopPropagation](/stop-immediate-propagation-vs-stop-propagation)