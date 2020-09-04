# ```useShuffle```

This [React](https://reactjs.org/) hook propose an implementation of the `shuffle` algo. <br />
Wrapped in a `useState` hook, you can keep in sync your shuffled input with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useShuffle } from '@sugardarius/react-use-algos';

export function Shuffle() {
    const { list, shuffle } = useShuffle([2, 4, 6, 8]);

    return (
        <div>
            <button
                onClick={() => {
                    shuffle();
                }}
            >
                Shuffle it!
            </button>
            <pre>
                {JSON.stringify(list, null, 2)}
            </pre>
        </div>
    );
}
```