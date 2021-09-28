---
title: 'display: none vs opacity: 0 vs visibility: hidden'
category: CSS
---

There are three common CSS properties to make an element invisible:

-   `display: none`
-   `opacity: 0`
-   `visibility: hidden`

### Differences

1. `display: none` doesn't take space when the element is rendered. The other ways still take the space normally.

2. The browser will not response to any events of element which uses either `display: none` or `visibility: hidden`.
   The `visibility: hidden` style behaves like a combination of `opacity: 0` and `pointer-events: none`.

3. Regarding the accessibility, `opacity: 0` is the only property which makes the element accessible in the tab order, and the element's content can be read by screen readers.

4. Applying `display: none` or `opacity: 0` will effect on child elements. `visibility: hidden`, on the other hand, doesn't change the visibility of any children.

5. It's worth noting that if you want to measure the size of element, then you can't use `display: none` at all.

As mentioned in the first difference, an element with `display: none` doesn't take any space on the page. Hence, all properties related to the element size, such as `clientHeight`, `clientWidth`, `height`, `offsetHeight`, `offsetWidth`, `scrollHeight`, `scrollWidth` and `width` are zero.

All properties returned by the `getBoundingClientRect()` method are zero as well.

Similarly, an element with `visibility: hidden` will have empty inner text (equivalent with the `innerText` property).

### Tip

With Chrome DevTools, you can hide any element in the page by right clicking the element, and then click _Hide element_.

![Hide element with Chrome DevTools](/assets/hide-element-chrome.png)

In order to do that without breaking the layout, Chrome adds a CSS class named `__web-inspector-hide-shortcut__` to the element:

```css
.__web-inspector-hide-shortcut__ {
    visibility: hidden !important;
}
```

As mentioned above, applying the visibility style to an element doesn't effect on any children, so Chrome adds a following style to make all children invisible:

```css
.__web-inspector-hide-shortcut__ * {
    visibility: hidden !important;
}
```

### Good to know

Nowadays, it's very easy for us to set the opacity for given element and its children with a single line of CSS:

```css
.overlay {
    opacity: 0.75;
}
```

Many years ago, when the web developers have to deal with the old browsers such as Internet Explorer 6, 7, 8, here is what we have to do in order to support various browsers:

```css
.overlay {
    /* For IE 5, 6, 7 */
    filter: alpha(opacity=75);

    /* For IE 8 */
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=75)';

    /* For Netscape */
    -moz-opacity: 0.75;

    /* For Safari 1.x */
    -khtml-opacity: 0.75;

    /* Our good friends */
    opacity: 0.75;
}
```
