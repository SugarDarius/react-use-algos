# ```usePascalTriangle```

This [React](https://reactjs.org/) hook propose an implementation of the [Pascal Triangle](https://en.wikipedia.org/wiki/Linear_interpolation) algorithm <br />
It will the given row index input of a the triangle to compute as output the triangle row as an array of integers.<br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { usePascalTriangle } from '@sugardarius/react-use-algos';

export function ComputePascalTriangleRow() {
    const { triangleRow, compute } = usePascalTriangle(4);

    return (
        <div>
            <button
                onClick={() => {
                    compute();
                }}
            >
                Compute it!
            </button>
            <pre>
                {JSON.stringify(triangleRow, null, 2)}
            </pre>
        </div>
    );
}
```