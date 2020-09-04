# ```useMinReachJumps```

This [React](https://reactjs.org/) hook propose an implementation of a misc algo: `min jump`. <br />
It computes the min number of jumps you can do from the index 0 to reach the last index of the array. <br />
Wrapped in a `useMemo` hook.

### How to use it?
```tsx
import { useMinReachJumps } from '@sugardarius/react-use-algos';

export function ComputeMinReachJumps() {
    const minReachJumps = useMinReachJumps([0, 2, 1, 4]);

    return (
        <span>
            {`Computed min reach jumps: ${minReachJumps}`}
        </span>
    );
}
```