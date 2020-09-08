# ```useBinaryHeap```

This [React](https://reactjs.org/) hook propose a implementation of the [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap) (max or min) data structure.<br />
It's really useful when you need to store data with prioruty and remove the highest / lowest element.

### How to use it?
```tsx
import { useBinaryHeap } from '@sugardarius/react-use-algos';

export function MinBinaryHeap() {
    const {
        add,
        remove,
        peek,
        poll,
        find,
        toArray,
        isEmpty,
        size,
    } = useBinaryHeap((a: number, b: number): boolean => { 
        // for a max heap you can use a >= b
        return a <= b;
    });

    return (
        <div>
            <button
                onClick={() => {
                    add(34);
                }}
            >
                Add the element `34`
            </button>
            <button
                onClick={() => {
                    add(6);
                }}
            >
                Add the element `6`
            </button>
            <button
                onClick={() => {
                    add(8);
                }}
            >
                Add the element `8`
            </button>
            <button
                onClick={() => {
                    remove(6);
                }}
            >
                Remove the element `6`
            </button>
            <span>
                {`Is the element 8 exist? ${find(6)}`}
            </span>
            <span>
                {`Binary heap peek: ${peek()}`}
            </span>
             <span>
                {`Binary heap polled element: ${poll()}`}
            </span>
            <span>
                {`Binary heap is empty?: ${isEmpty()}`}
            </span>
            <span>
                {`Binary heap's size: ${size()}`}
            </span>
            <pre>
                {JSON.stringify(toArray(), null, 2)}
            </pre>
        </div>
    );
}
```