import * as React from 'react';

export type UseBinarySearchLessCompareFn<T> = (a: T, b: T) => boolean;
export type UseBinarySearchEqualCompareFn<T> = (a: T, b: T) => boolean;

export type UseBinarySearchCompareFns<T> = {
	lessCompareFn: UseBinarySearchLessCompareFn<T>;
	equalCompareFn: UseBinarySearchEqualCompareFn<T>;
};

export type UseBinarySearchReturnType<T> = {
	search: () => void;
	index: number;
};

export function useBinarySearch<T>(input: T[], seekedItem: T, compareFns: UseBinarySearchCompareFns<T>): UseBinarySearchReturnType<T> {
	const [index, setIndex] = React.useState<number>(-1);

	const search = React.useCallback(
		(input: T[], seekedItem: T): void => {
			Promise.resolve().then((): void => {
				let startIndex = 0;
				let endIndex = input.length - 1;
				let foundIndex = -1;

				while (startIndex <= endIndex) {
					const midIndex: number = startIndex + Math.floor((endIndex - startIndex) / 2);

					if (compareFns.equalCompareFn(input[midIndex], seekedItem)) {
						foundIndex = midIndex;
						break;
					}

					if (compareFns.lessCompareFn(input[midIndex], seekedItem)) {
						startIndex = midIndex + 1;
					} else {
						endIndex = midIndex - 1;
					}
				}

				setIndex(foundIndex);
			});
		},
		[input, seekedItem]
	);

	return {
		search: (): void => {
			search(input, seekedItem);
		},
		index
	};
}
