---
title: <> vs React.Fragment
category: React
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
\`<>\` is the shorthand tag for \`React.Fragment\` which allows us to group a list of elements without wrapping them in a new node.

So we can do something like

~~~ javascript
render() {
    return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
}
~~~
    
The only difference between them is that the shorthand version does not support the \`key\` attribute.

Here is a common example that inserts new line (\`br\`) tags in a multiple lines string:

~~~ javascript
{
    str.split('\\n').map((item, index) => {
        return (
            <Fragment key={index}>
                {item}
                <br/>
            </Fragment>
        )
    })
}
~~~  
`}
/>
    );
};
