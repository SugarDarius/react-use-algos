# ```useMap```

This [React](https://reactjs.org/) hook propose a tracking of a map (here as [literal object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)) wrapped in a ```useState``` hook.<br />.
So you can keep in sync your map changes with your [React](https://reactjs.org/) component's lifecycles.

### How to use it?
```tsx
import { useMap } from '@sugardarius/react-use-algos';

export function Users() {
    const [
        map,
        {
            set,
            setAll,
            remove,
            reset,
            get,
        }
    ] = useMap({
        'user_0': true,
        'user_1': true,
    });

    return (
        <div>
            <button
                onClick={() => {
                   set('user_2', true);
                }}
            >
                Set user 3
            </button>
            <span>
                {`Is user 3 active? ${get('user_2')}`}
            </span>
             <button
                onClick={() => {
                   remove('user_2',);
                }}
            >
                Remove user 3
            </button>
            <button
                onClick={() => {
                   setAll({
                       'user_3': true,
                       'user_4': true,
                   });
                }}
            >
                Set All
            </button>
             <button
                onClick={() => {
                   reset();
                }}
            >
                Reset
            </button>
        </div>
    );
}
```

> Note: this hooks is based on [react-use](https://github.com/streamich/react-use/blob/master/docs/useMap.md) useMap hook.