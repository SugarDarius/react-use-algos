import * as React from 'react';

export type UseQueueReturnType<T> = {
	add: (item: T) => void;
	remove: () => T | undefined;
	first: () => T | undefined;
	last: () => T | undefined;
	toArray: () => T[];
	isEmpty: () => boolean;
	size: () => number;
};

export function useQueue<T>(initialItems: T[] = []): UseQueueReturnType<T> {
	const [queue, setQueue] = React.useState<T[]>(initialItems);

	return {
		add: (item: T): void => {
			setQueue((queue: T[]): T[] => {
				return [...queue, item];
			});
		},
		remove: (): T | undefined => {
			let item: T | undefined = undefined;

			setQueue(([first, ...rest]: T[]): T[] => {
				item = first;

				return rest;
			});

			return item;
		},
		first: (): T | undefined => {
			return queue[0];
		},
		last: (): T | undefined => {
			return queue[queue.length - 1];
		},
		toArray: (): T[] => {
			return [...queue];
		},
		isEmpty: (): boolean => {
			return queue.length === 0;
		},
		size: (): number => {
			return queue.length;
		}
	};
}
