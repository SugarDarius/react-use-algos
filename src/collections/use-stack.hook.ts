import * as React from 'react';

export type UseStackReturnType<T> = {
	push: (item: T) => void;
	pop: () => T | undefined;
	peek: () => T | undefined;
	toArray: () => T[];
	isEmpty: () => boolean;
	size: () => number;
};

export function useStack<T>(initialItems: T[] = []): UseStackReturnType<T> {
	const [stack, setStack] = React.useState<T[]>(initialItems);

	return {
		push: (item: T): void => {
			setStack((stack: T[]): T[] => {
				return [item, ...stack];
			});
		},
		pop: (): T | undefined => {
			let item: T | undefined = undefined;

			setStack(([first, ...rest]: T[]): T[] => {
				item = first;

				return rest;
			});

			return item;
		},
		peek: (): T | undefined => {
			return stack[0];
		},
		toArray: (): T[] => {
			return [...stack];
		},
		isEmpty: (): boolean => {
			return stack.length === 0;
		},
		size: (): number => {
			return stack.length;
		}
	};
}
