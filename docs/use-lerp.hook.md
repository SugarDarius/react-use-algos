# ```useLerp```

This [React](https://reactjs.org/) hook propose an implementation of the precise [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) formula <br />
Wrapped in a `useMemo` hook.

### How to use it?
```tsx
import { useLerp } from '@sugardarius/react-use-algos';

export function ComputeLerp() {
    const lerp = useLerp(10, 20, 6);

    return (
        <span>
            {`Computed lerp: ${lerp}`}
        </span>
    );
}
```