# ```useQueue```

This [React](https://reactjs.org/) hook propose a [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) queue.<br />
It's really useful when you need to queue data for excuting commands, or interpretings user inputs after they made them.

### How to use it?
```tsx
import { useQueue } from '@sugardarius/react-use-algos';

export function Commands() {
    const {
        add,
        remove,
        first,
        last,
        isEmpty,
        size,
    } = useQueue([
        'firstCommand',
        'secondCommand',
    ]);

    return (
        <div>
            <div>
                <span>{first()}</span>
                <span>{last()}</span>
                <span>{isEmpty()}</span>
                <span>{size()}</span>
            </div>
            <button
                onClick={() => {
                    add('thirdCommand')
                }}
            >
                Add third command
            </button>
            <button
                onClick={() => {
                    remove()
                }}
            >
                Remove
            </button>
        </div>
    );
}
```

> Note: this hooks is based on [react-use](https://github.com/streamich/react-use/blob/master/docs/useQueue.md) useQueue hook.