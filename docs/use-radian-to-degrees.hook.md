# ```useRadianToDegrees```

This [React](https://reactjs.org/) hook propose an implementation to compute an angle as radian in degrees.<br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useRadianToDegrees } from '@sugardarius/react-use-algos';

export function ComputeRadianToDegrees() {
    const { degrees, compute } = useRadianToDegrees(Math.PI);

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
                {degrees}
            </span>
        </div>
    );
}
```