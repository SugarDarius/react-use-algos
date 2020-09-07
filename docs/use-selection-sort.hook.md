# ```useSelectionSort```

This [React](https://reactjs.org/) hook propose an implementation of the `selection sort` algo. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useSelectionSort } from '@sugardarius/react-use-algos';

export function SelectionSort() {
    const { output, sort } = useSelectionSort([54, 2, 36, 42, 8], (a: number, b: number): boolean => {
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