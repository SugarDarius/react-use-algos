import * as React from 'react';

export type UseQuickSortLessCompareFn<T> = (a: T, b: T) => boolean;
export type UseQuickSortEqualCompareFn<T> = (a: T, b: T) => boolean;

export type UseQuickSortCompareFns<T> = {
	lessCompareFn: UseQuickSortLessCompareFn<T>;
	equalCompareFn: UseQuickSortEqualCompareFn<T>;
};

export type UseQuickSortReturnType<T> = {
	sort: () => void;
	output: T[];
};

// @unstable
export function useQuickSort<T>(input: T[], compareFns: UseQuickSortCompareFns<T>): UseQuickSortReturnType<T> {
	const [output, setOutput] = React.useState<T[]>([]);

	const sort = React.useCallback(
		async (input: T[]): Promise<void> => {
			const sortedInput = await new Promise<T[]>((resolve): void => {
				const inputToSort: T[] = [...input];
				const fn = (input: T[]): T[] => {
					if (input.length > 1) {
						let left: T[] = [],
							right: T[] = [];
						const pivot: T | undefined = input.shift();

						let center: T[] = [pivot!];

						while (input.length > 0) {
							const item: T | undefined = input.shift();

							if (compareFns.equalCompareFn(item!, pivot!)) {
								center = [...center, item!];
							} else if (compareFns.lessCompareFn(item!, pivot!)) {
								left = [...left, item!];
							} else {
								right = [...right, item!];
							}
						}

						const leftSorted = fn(left);
						const rightSorted = fn(right);

						return [...leftSorted, ...center, ...rightSorted];
					}

					return input;
				};

				resolve(fn(inputToSort));
			});

			setOutput(sortedInput);
		},
		[input]
	);

	return {
		sort: (): void => {
			sort(input);
		},
		output
	};
}
