# ```useRange```

This [React](https://reactjs.org/) hook propose an implementation for the generation of a range of integers. <br />
Wrapped in a `useState` hook, you can keep in sync your range with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useRange } from '@sugardarius/react-use-algos';

export function Range() {
    const { range, generate } = useRange(0, 100);

    return (
        <div>
            <button
                onClick={() => {
                    generate();
                }}
            >
                Generate it!
            </button>
            <pre>
                {JSON.stringify(lirangest, null, 2)}
            </pre>
        </div>
    );
}