import * as React from 'react';

export type UseHashTableReturnType<T> = {
	put: (key: string, value: T) => void;
	get: (key: string) => T | undefined;
	has: (key: string) => boolean;
	delete: (key: string) => void;
	size: () => number;
};

export const hashKey = (key: string, size: number): number => {
	let charCodesSum = 0;

	for (let i = 0; i < key.length; i++) {
		charCodesSum = charCodesSum + key.charCodeAt(i);
	}

	return charCodesSum % size;
};

const DEFAULT_SIZE = 32;

export function useHashTable<T>(size: number = DEFAULT_SIZE): UseHashTableReturnType<T> {
	const [table, setTable] = React.useState<(T | undefined)[]>(new Array<T | undefined>(size || DEFAULT_SIZE));

	return {
		put: (key: string, value: T): void => {
			setTable((table: (T | undefined)[]): (T | undefined)[] => {
				const ntable = [...table];

				ntable[hashKey(key, size)] = value;

				return ntable;
			});
		},
		get: (key: string): T | undefined => {
			return table[hashKey(key, size)];
		},
		has: (key: string): boolean => {
			return table[hashKey(key, size)] !== undefined;
		},
		delete: (key: string): void => {
			setTable((table: (T | undefined)[]): (T | undefined)[] => {
				const ntable = [...table];

				ntable[hashKey(key, size)] = undefined;

				return ntable;
			});
		},
		size: (): number => {
			return table.length;
		}
	};
}
