# ```useLerp```

This [React](https://reactjs.org/) hook propose an implementation of the precise [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) formula <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useLerp } from '@sugardarius/react-use-algos';

export function ComputeLerp() {
    const { value, compute } = useLerp(10, 20, 6);

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
                {value}
            </span>
        </div>
    );
}
```