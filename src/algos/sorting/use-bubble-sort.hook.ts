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
			const length = input.length;
			let swapped: boolean;

			do {
				swapped = false;
				for (let i = 0; i < length; i++) {
					if (greaterCompareFn(input[i], input[i + 1])) {
						const temp = input[i];

						input[i] = input[i + 1];
						input[i + 1] = temp;

						swapped = true;
					}
				}
			} while (swapped);

			setOutput(input);
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
