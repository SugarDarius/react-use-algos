# ```useDegreesToRadian```

This [React](https://reactjs.org/) hook propose an implementation to compute an angle as degrees in radian.<br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useDegreesToRadian } from '@sugardarius/react-use-algos';

export function ComputeRadianToDegrees() {
    const { radian, compute } = useDegreesToRadian(180);

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
                {radian}
            </span>
        </div>
    );
}
```