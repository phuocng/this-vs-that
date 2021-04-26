---
title: Element vs Node
category: HTML
tags:
  - posts
layout: layouts/post.njk
---

export default () => {
    return (
<Markdown
    content={`
Imagine that a web page is constructed by a tree of nodes. Considering a common HTML page has a structure like this:

~~~ html
<!doctype html>
<html>
    <head>
        <meta ... />
        <title>...</title>
    </head>
    <body>
        ...
    </body>
</html>
~~~

The root node of tree is a document node which has two children, the \`doctype\` and the \`html\` tag. 
The \`html\` tag is constructed by its children, \`head\` and \`body\`, and so on.

Each node has a property named \`nodeType\` which is a number to identity its type. It can be used to distinguish 
the kind of node from other one. For example, the following \`div\` has only one child node whose value is \`Hello\`:

~~~ html
<div>Hello</div>
~~~

The \`div\` node is an element node, while its child node (\`Hello\`) is a text node. The following table taken from 
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType) shows the popular node types:

* \`Node.ELEMENT_NODE\` (1): An element node which is a HTML tag, such as \`<div>\`, \`<p>\` , etc.
* \`Node.TEXT_NODE\` (3): The actual text inside an element node
* \`Node.COMMENT_NODE\` (8): A comment node, such as \`<!-- ... -->\`
* \`Node.DOCUMENT_NODE\` (9): A document node
* \`Node.DOCUMENT_TYPE_NODE\` (10): A document type node, such as \`<!DOCTYPE html>\`

In a nutshell, a node represents a single node in the document tree, and an element is a particular type of node which is a HTML tag.
`}
/>
    );
};
