# ```useMinReachJumps```

This [React](https://reactjs.org/) hook propose an implementation of a misc algo: `min jump`. <br />
It computes the min number of jumps you can do from the index 0 to reach the last index of the array. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useMinReachJumps } from '@sugardarius/react-use-algos';

export function ComputeMinReactJumps() {
    const { minNumberOfJumps, compute } = useMinReachJumps(10, 20, 6);

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
                {minNumberOfJumps}
            </span>
        </div>
    );
}
```
```