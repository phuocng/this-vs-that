import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
There are two ways to define a method in an interface.

* Declare as a property whose type is function

~~~ javascript
interface Logger {
    log: (message: string) => void;
}
~~~

* Declare as a normal function

~~~ javascript
interface Logger {
    log(message: string): void;
}
~~~

## Differences

1. If the method is declared as a interface function, then it's possible for you to add more overload versions.

    ~~~ javascript
    interface Logger {
        log(message: string): void;
    }

    // In other places
    interface Logger {
        log(message: string, level: string): void;
    }
    ~~~

    Declaring method as a property, on the other hand, prevents you from duplicating the property declarations which have different types:

    ~~~ javascript
    interface Logger {
        log: (message: string) => void;
    }

    // Does not work
    interface Logger {
        log: (message: string, level: string) => void;
    }
    ~~~

2. The \`readonly\` modifier only has effect with the property declaration.

    ~~~ javascript
    interface Person {
        firstName: string;
        lastName: string;

        readonly fullName: () => string;

        // Doesn't work
        // readonly fullName(): string;
    }
    ~~~

3. TypeScript generates different output for a class that implements the interface methods.

    Assume that we have a class \`ConsoleLogger\` that simply logs the message in the _Console_ window.

    For the first approach:

    ~~~ javascript
    interface Logger {
        log: (message: string) => void;
    }

    class ConsoleLogger implements Logger {
        log = (message: string) => {
            console.log(message);
        }
    }

    // Generated JavaScript code:
    // 
    // class ConsoleLogger {
    //    constructor() {
    //        this.log = (message) => {
    //            console.log(message);
    //        };
    //    }
    // }
    ~~~

    For the second approach:

    ~~~ javascript
    interface Logger {
        log(message: string): void;
    }

    class ConsoleLogger implements Logger {
        log(message: string) {
            console.log(message);
        }
    }

    // Generated JavaScript code:
    //
    // class ConsoleLogger {
    //    log(message) {
    //        console.log(message);
    //    }
    // }
    ~~~

    Looking at the generated JavaScript codes, you'll see the different outputs. 
    
    The first approach produces a property \`log\` in the constructor. It means that \`log\` will be created every time you create a new instance of class.
    
    While the second approach produces the \`log\` method, and it exists in all instances of class. The \`log\` method also is a member of class prototype,
    so we can extend the class to override the method if needed:

    ~~~ javascript
    class ConsoleLogger implements Logger {
        log(message: string) {
            console.log(message);
        }
    }

    class ConsoleLoggerWithColor extends ConsoleLogger {
        // Override the \`log\` method
        log(message: string) {
            // Display the message in white color and blue background area
            console.log("%c%s", 'color: white; background: blue', message);
        }
    }
    ~~~

    See the [differences](/method-in-class-constructor-vs-prototype) between declaring methods in class constructor and prototype for more details.
`}
/>
    );
};
