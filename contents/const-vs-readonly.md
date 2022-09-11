---
title: const vs readonly
category: TypeScript
layout: layouts/post.njk
---

### Differences

1. `const` is used for variables

    ```js
    const message = 'Hello';

    // Does not work
    message = 'World';
    ```

    While `readonly` is used for properties. The properties can be declared as a member of class

    ```js
    class Triangle {
        public readonly numberOfVertices = 3;
    }

    const triangle = new Triangle();

    // Does not work
    triangle.numberOfVertices = 4;
    ```

    or `type`, `interface`:

    ```js
    interface Person {
        firstName: string;
        lastName: string;
        readonly fullName: string;
    }
    ```

2. `const` declarations have to be initialized, and you can't reassign their values. The `readonly` properties can be reassigned in the constructor function.

    ```js
    class Square {
        readonly numberOfVertices: number;

        constructor() {
            this.numberOfVertices = 4;
        }
    }
    ```

    The `readonly` properties could be changed if we don't pass their class or interface directly but passing an alias.

    Let's take a look at the `Person` interface above, and assume that we have the following function to update the person information:

    ```js
    const updatePerson = (person: { firstName: string, lastName: string, fullName: string }) => {
        person.fullName = `\${firstName}, \${lastName}`;
    };
    ```

    We can update the `fullName` property because it's an property of `person` parameter:

    ```js
    let person: Person = {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
    };

    updatePerson(person);

    person.fullName; // `Foo, Bar`
    ```

    Of course, the compiler will throw an error if we pass the original type `Person`:

    ```js
    const updatePerson = (person: Person) => {
        // Error: Cannot assign to 'fullName' because it is a read only property
        person.fullName = `\${person.firstName}, \${person.lastName}`;
    };
    ```

### Good to know

1. In a given class, if a property has only getter method and doesn't come with setter method, it will be treated as read only.

    ```js
    class Square {
        side: number = 0;

        get area() {
            return this.side * this.side;
        }
    }

    const s = new Square();
    ```

    Setting `s.area = 100` will throw an error because `area` is a ready only property.

2. In the React library, we don't change the props and state of a component directly. Because the props are immutable and the state could be updated via `setState()` method.

    React [type definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts) wrap the props and state in read only type.

    ```js
    // P, S represents the props and state respectively
    class Component<P, S> {
        constructor(props: Readonly<P>);

        readonly props: Readonly<P> & Readonly<{ children?: ReactNode }>;
        state: Readonly<S>;
    }
    ```
