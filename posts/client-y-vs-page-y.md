---
title: clientY vs pageY
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
Given a point in the page, \`clientY\` and \`pageY\` are the distances in pixels from the point to the top of viewport and page.

Here, _page_ is the whole rendered page which may have the scrollbars, whereas _viewport_ is the visible part of the page.  

~~~ html
┌─────────────────────────────┬─┐◀︎─── Web page      ▲
|                             | |                   |
|                             | |                   |
|                             | |                   |
|                             | |                   |
|                             | |                   |
|                             | |                   |
|                             | |                 pageY
|                             | |                   |
├=============================┼─┤       ▲           |           ▲
|                             | |       |           |           |
|                             | |       |           |           |
|       Scroll bar ──────────▶︎| |       |           |        clientY 
|                             | |     Browser       |           |
|                             | |     window        |           |
|       ● Point               | |       |           ▼           ▼
|                             | |       |
|                             | |       |
├=============================┼─┤       ▼
|                             | |
|                             | |
|                             | |
└─────────────────────────────┴─┘
~~~

## More

* [clientHeight vs offsetHeight vs scrollHeight](/client-height-vs-offset-height-vs-scroll-height)
`}
/>
    );
};
