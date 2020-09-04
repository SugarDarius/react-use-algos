# ```useSet```

This [React](https://reactjs.org/) hook propose a tracking of a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) wrapped in a ```useState``` hook.<br />
So you can keep in sync your Set changes with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useSet } from '@sugardarius/react-use-algos';

export function Commands() {
    const [
        set,
        {
            add,
            remove,
            toggle,
            reset,
            has,
        }
    ] = useSet([
        'firstCommand',
        'secondCommand',
    ]);

    return (
        <div>
            <button
                onClick={() => {
                    add('thirdCommand')
                }}
            >
                Add third command
            </button>
            <button
                onClick={() => {
                    remove('thirdCommand')
                }}
            >
                Remove third command
            </button>
            <button
                onClick={() => {
                    reset()
                }}
            >
                Reset
            </button>
            <button
                onClick={() => {
                    toggle('thirdCommand')
                }}
            >
                toggle third command
            </button>
            <span>{`Has third command: ${has('thirdCommand')}`}</span>
            <pre>
                {JSON.stringify(Array.from(set), null, 2)}
            </pre>
        </div>
    );
}
```

> Note: this hooks is based on [react-use](https://github.com/streamich/react-use/blob/master/docs/useSet.md) useSet hook.