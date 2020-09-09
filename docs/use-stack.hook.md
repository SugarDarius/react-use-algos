# ```useStack```

This [React](https://reactjs.org/) hook propose an implementation of the [Stack](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues#Stacks) data structure in [LIFO](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting#LIFO) method.<br />.
It's really use when you need to manage some data objects.

### How to use it?
```tsx
import { useStack } from '@sugardarius/react-use-algos';

export function Commands() {
    const {
        push,
        pop,
        peek,
        toArray,
        isEmpty,
        size,
    } = useStack();

    return (
        <div>
            <button
                onClick={() => {
                    push('command_0');
                }}
            >
                Push the command 0
            </button>
            <button
                onClick={() => {
                    push('command_1');
                }}
            >
                Push the command 1
            </button>
            <span>
                {`Last asked command: ${pop()}`}
            </span>
            <span>
                {`Last command pushed in the stack: ${peek()}`}
            </span>
            <span>
                {`Stack is empty?: ${isEmpty()}`}
            </span>
            <span>
                {`Stack's size: ${size()}`}
            </span>
            <pre>
                {JSON.stringify(toArray(), null, 2)}
            </pre>
        </div>
    );
}
```