# ```useLinearSearch```

This [React](https://reactjs.org/) hook propose an implementation of the `linear search` algo. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useLinearSearch } from '@sugardarius/react-use-algos';

export function LinearSearh() {
    const { indices, search } = useLinearSearch([54, 2, 36, 42, 8], 36, (a: number, b: number): boolean => {
        return a === b;
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
            <pre>
                {JSON.stringify(indices, null, 2)}
            </pre>
        </div>
    );
}
```