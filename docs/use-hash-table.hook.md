# ```useHashTable```

This [React](https://reactjs.org/) hook propose an implementation of the [Hash Table](https://en.wikipedia.org/wiki/Hash_table) data structure <br />.
It's really use when you need to manage some data with associative arrays, indexing or caches.

### How to use it?
```tsx
import { useHashTable } from '@sugardarius/react-use-algos';

export function AddressBook() {
    const {
        put,
        get,
        has,
        delete,
    } = useHashTable(64); // default size of the table cannot be 0

    return (
        <div>
            <button
                onClick={() => {
                    put('aurelien', 'sugardaius');
                }}
            >
                Put Aurelien's GitHub profile username into the address book
            </button>
            <button
                onClick={() => {
                    delete('aurelien');
                }}
            >
                Delete Aurelien's GitHub profile username from the address book
            </button>
            <span>
                {`Aurelien's GitHub profile username: ${get('aurelien')}`}
            </span>
            <span>
                {`Is Aurelien's GitHub profile username in the address book: ${has('aurelien')}`}
            </span>
        </div>
    );
}
```