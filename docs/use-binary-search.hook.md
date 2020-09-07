# ```useBinarySearch```

This [React](https://reactjs.org/) hook propose an implementation of the `binary search` algo. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useBinarySearch } from '@sugardarius/react-use-algos';

export function BinarySearch() {
    const { index, search } = useBinarySearch([54, 2, 36, 42, 8], 36, {
        lessCompareFn: (a: number, b: number): boolean => {
            return a < b;
        },
        equalCompareFn: (a: number, b: number): boolean => {
            return a === b;
        },
    });

    return (
        <div>
            <button
                onClick={() => {
                    search();
                }}
            >
                Search it!
            </button>
            <span>
                {index}
            </span>
        </div>
    );
}
```