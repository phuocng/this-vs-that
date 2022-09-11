---
title: const vs let vs var
category: JavaScript
layout: layouts/post.njk
---

There are three keywords to declare a variable:

-   `var`
-   `let` and `const` which are only available in ES6

## Differences

1. It's not possible to access the `let` variable outside of the nearest enclosing block where it is declared.

    ```js
    {
        let foo;
    }

    // ReferenceError: foo is not defined
    console.log(foo);
    ```

    The sample code above works if we replace the `let` with `var` declaration.

2. A `let` variable can't be used before it's declared. The sample code below throws a `ReferenceError`:

    ```js
    {
        foo = 'hello';
        let foo;
        console.log(foo);
    }
    // ReferenceError: Cannot access 'foo' before initialization
    ```

    We will see `hello` in the Console if we use `var` in the sample code above.

3. It's not possible to re-declare variables with `let`.

    ```js
    // There is no problems if variables are re-declared with the same name
    var foo, foo;
    var bar;
    var bar;

    let baz;
    let baz;
    // Throw the following error
    // SyntaxError: Identifier 'baz' has already been declared
    ```

4. At the top level, global `let` variables aren't attached to the global `window` object.

    ```js
    let foo = 'hello';
    window.foo; // undefined

    var bar = 'world';
    window.bar; // 'world'
    ```

5. Using `let` can avoid the problem with closures that `var` has.

    To demonstrate the problem, let's assume that we have a list of rows. In each row, we have a button for removing the associate item in the row.

    We loop over the items, and handle the `click` event of the button in each row:

    ```js
    for (var i = 0; i < 10; i++) {
        document.getElementById(`button-\${i}`).addEventListener('click', function () {
            // Remove the item
            console.log(i);
        });
    }
    ```

    It doesn't work as we expect. We always see the last item index (`9` in this case) in the Console when clicking any button.
    The variable `i` in the closure of event handler will refer to the same object, which is the last index when looping over the indexes.

    The problem can be fixed by using `let`:

    ```js
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button-\${i}`).addEventListener('click', function () {
            // It's safe to use the index `i` here
            console.log(i);
        });
    }
    ```

6. The `const` keyword behaves same as `let`, except the variable can't be changed.

    ```js
    // Throw the following error
    // SyntaxError: Missing initializer in const declaration
    const a;
    ```

    You also have to specific a value for a constant.

    ```js
    const a = 'hello';

    // Throw the following error
    // TypeError: Assignment to constant variable
    a = 'world';
    ```

    It's worth noting that using `const` doesn't mean that the variable is immutable. You can change the properties of an object:

    ```js
    const person = {};
    person.age = 20;
    ```

    And add more items to an array:

    ```js
    const arr = [];
    arr.push('foo');
    arr[1] = 'bar';
    console.log(arr); // ['foo', 'bar']
    ```

## Good practice

Don't use `var` unless you have to support old browsers which don't support `let` and `const` keywords.

## Good to know

Each programming language use different keywords to declare a variable and constant.
The following table list out some examples:

| Language | Variable declaration | Constant declaration       |
| -------- | -------------------- | -------------------------- |
| C#       | `string s = "hello"` | `const string s = "hello"` |
| Java     | `String s = "hello"` | `final String s = "Hello"` |
| Scala    | `var s = "hello"`    | `val s = "hello"`          |
| Swift    | `var s = "hello"`    | `let s = "hello"`          |
