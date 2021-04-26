---
title: <b>, <i> vs <strong>, <em>
category: HTML
tags:
  - posts
layout: layouts/post.njk
---

The `b` and `strong` tags by default make text bold.

The `i` and `em` tags by default make text italicized.

Each browser has its own default styles, but result in similar appearances.

Here is how they are styled in the popular browsers:

[Chrome](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css):

```css
strong, b {
    font-weight: bold
}
i, cite, em, var, address, dfn {
    font-style: italic
}
```

[Firefox](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css):

```css
b, strong {
    font-weight: bolder;
}

i, cite, em, var, dfn {
    font-style: italic;
}
```

[Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css):

```css
strong, b {
    font-weight: bold;
}
i, cite, em, var, address, dfn {
    font-style: italic;
}
```

Despite the fact that their appearances are similar, the `strong` and `em` tags add extra semantic meaning to the enclosed text, whereas `b` and `i` are purely visual.

According to the HTML 5 specifications, the [`strong`](https://dev.w3.org/html5/spec-LC/text-level-semantics.html#the-strong-element) and [`em`](https://dev.w3.org/html5/spec-LC/text-level-semantics.html#the-em-element) tags indicate importance and emphasis respectively.

As far as accessibility goes, while a particular screen reading software may or may not pronounce it differently, using `<strong>` or `<em>` at least opens the possibility, whereas a screen reader will never pronounce text within `<b>` or `<i>` differently.