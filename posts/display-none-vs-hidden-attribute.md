---
title: "display: none vs [hidden]"
category: CSS
tags:
  - posts
layout: layouts/post.njk
---

HTML5 adds the `hidden` attribute which has the same affect as the CSS `display: none` declaration. 
An element will not be displayed if the `hidden` attribute is used regardless of its value:

```html
<div hidden>
    <!-- This will disappear from the screen --> 
</div>
```

Both hides the content from the screen reader as well.

## Differences

1. Both `display: none` declaration and `hidden` attribute work in the same way. But the `hidden` attribute provides better semantic. 
2. `display: none` works in the old browsers, but `hidden` [isn't supported](https://caniuse.com/#feat=hidden) natively in IE 10 and below.

To get around the problem, we can simply set

```css
[hidden] {
    display: none;
}
```

It's included in modern CSS normalizing libraries such as [Normalize.css](https://necolas.github.io/normalize.css).

Changing the value of `display` property to something else (such as `display: flex`) will override the behavior of the `hidden` attribute. 

Popular libraries prevent it from being overridden by using `!important`:

```css
[hidden] {
    display: none !important;
}
```

The implementation can be found in Bootstrap 4's [Reboot](https://getbootstrap.com/docs/4.1/content/reboot/#html5-hidden-attribute), [PureCSS](https://purecss.io/base/).