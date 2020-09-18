import * as React from 'react';

export type UseBubbleSortGreaterCompareFn<T> = (a: T, b: T) => boolean;

export type UseBubbleSortReturnType<T> = {
	sort: () => void;
	output: T[];
};

export function useBubbleSort<T>(input: T[], greaterCompareFn: UseBubbleSortGreaterCompareFn<T>): UseBubbleSortReturnType<T> {
	const [output, setOutput] = React.useState<T[]>([]);

	const sort = React.useCallback(
		(input: T[]): void => {
			Promise.resolve().then((): void => {
				const inputToSort: T[] = [...input];
				const length = inputToSort.length;
				let swapped: boolean;

				do {
					swapped = false;
					for (let i = 0; i < length; i++) {
						if (greaterCompareFn(inputToSort[i], inputToSort[i + 1])) {
							const temp = inputToSort[i];

							inputToSort[i] = inputToSort[i + 1];
							inputToSort[i + 1] = temp;

							swapped = true;
						}
					}
				} while (swapped);

				setOutput(inputToSort);
			});
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
