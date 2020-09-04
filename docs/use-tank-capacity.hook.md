# ```useTankCapacity```

This [React](https://reactjs.org/) hook propose an implementation of a misc algo: `tank capacity`. <br />
Wrapped in a `useMemo` hook.

### How to use it?
```tsx
import { useTankCapacity } from '@sugardarius/react-use-algos';

export function ComputeTankCapacity() {
    const capacity = useTankCapacity([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

    return (
        <span>
            {`Computed tank capacity: ${capacity}`}
        </span>
    );
}
```