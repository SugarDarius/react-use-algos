# ```useInterpolationSearch```

This [React](https://reactjs.org/) hook propose an implementation of the [`interpolation search`](https://en.wikipedia.org/wiki/Interpolation_search) algo. <br />
Wrapped in a `useState` hook, you can keep in sync your input with your [React](https://reactjs.org/) component's lifecycles.

> Note: this hook is not generic on purpose. Interpolation search is made and better for use only with numerical key values.

### How to use it?
```tsx
import { useInterpolationSearch } from '@sugardarius/react-use-algos';

export function InterpolationSearch() {
    // Mandatory: the input must be sorted
    const { index, search } = useInterpolationSearch([2, 8, 36, 42, 54], 36);

    return (
        <div>
            <button
                onClick={() => {
                    search();
                }}
            >
                Search it!
            </button>
            <pre>
                {JSON.stringify(index, null, 2)}
            </pre>
        </div>
    );
}
```