---
title: Normalize vs Reset CSS
category: CSS
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (        
<Markdown
    content={`
Each browser provides a set of default styles which are applied for every web pages it renders. 
The default style sheet is also known as the user-agent style sheet.

You can take a look at the default styles provided by:
* [Chrome](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
* [Firefox](https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css)
* [Safari](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)

Since the default styles are not the same, causing a web page will have different look and feel on each browser. 
Both normalizing and resetting CSS aim to fix that problem.

1. Resetting CSS, as the name suggests, will reset all the built-in styles.

    The most popular CSS reset library is Meyer's reset.css which you can see the complete code [here](https://meyerweb.com/eric/tools/css/reset/reset.css).
    For example, it resets the \`margin\` for \`body\` to 0:

    ~~~ css
    body {
        margin: 0;
    }
    ~~~

    If you use the _Developer Tool_ of Chrome browser, and inspect the body element of any web page, 
    you will see that it has the margin of 8px by default which we often don't want to have at all:

    ~~~ css
    body {
        margin: 8px;
    }
    ~~~

2. Normalizing CSS is another alternative to resetting CSS.

    The most popular library in this area is [normalize.css](https://necolas.github.io/normalize.css/).
    It tries to make built-in browser styling consistent across browsers.
    More than that, the library also:

    * Makes some elements look like what we expect. 

    For example, the Chrome, Firefox and Safari browsers use the following styles for the \`sub\` and \`sup\` tags:

    ~~~ css
    sub {
        vertical-align: sub;
        font-size: smaller;
    }
    sup {
        vertical-align: super;
        font-size: smaller;
    }
    ~~~

    It's not easy for us to distinguish these tags with normal one visually. normalize.css improves by declaring the position for these tags:

    ~~~ css
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    ~~~

    * Fix display bugs across browsers.

    You can look at its [source code](https://github.com/necolas/normalize.css/blob/master/normalize.css) 
    to see there are lot of bug fixes for different browsers such as Internet Explorer, Edge, Firefox, etc.

You don't need to include normalize.css if you use popular CSS libraries. It's already included in:

* [Bootstrap's reboot](https://github.com/twbs/bootstrap/blob/master/scss/_reboot.scss#L3)
* [Tachyons](https://github.com/tachyons-css/tachyons/blob/master/src/_normalize.css)
* [Tailwindcss](https://unpkg.com/tailwindcss@1.1.4/dist/base.css)

## Resources

1. [water.css](https://github.com/kognise/water.css) adds more visual styles for common tags
2. [minireset](https://github.com/jgthms/minireset.css) is another tiny modern CSS reset
3. [This website](https://browserdefaultstyles.com) allows us to get the default styles of various rendering engines for particular element
`}
/>
    );
};
