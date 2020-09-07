# ```useBubbleSort```

This [React](https://reactjs.org/) hook propose an implementation of the `bubble sort` algo. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useBubbleSort } from '@sugardarius/react-use-algos';

export function BubbleSort() {
    const { output, sort } = useBubbleSort([54, 2, 36, 42, 8], (a: number, b: number): boolean => {
        return a > b;
    });

    return (
        <div>
            <button
                onClick={() => {
                    sort();
                }}
            >
                Sort it!
            </button>
            <pre>
                {JSON.stringify(output, null, 2)}
            </pre>
        </div>
    );
}
```