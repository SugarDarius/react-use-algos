# ```useGCD```

This [React](https://reactjs.org/) hook propose an implementation of the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) to compute iteratively the greatest common divisor (GCD).<br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useGCD } from '@sugardarius/react-use-algos';

export function ComputeGCD() {
    const { gcd, compute } = useGCD(60, 24);

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
                {`GCD: ${gcd}`}
            </span>
        </div>
    );
}
```