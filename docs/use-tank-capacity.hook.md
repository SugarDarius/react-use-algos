# ```useTankCapacity```

This [React](https://reactjs.org/) hook propose an implementation of a misc algo: `tank capacity`. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useTankCapacity } from '@sugardarius/react-use-algos';

export function ComputeTankCapacity() {
    const { capacity, compute } = useTankCapacity([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

    return (
        <div>
            <button
                onClick={() => {
                    compute();
                }}
            >
                Compute it!
            </button>
            <span>
                {capacity}
            </span>
        </div>
    );
}
```