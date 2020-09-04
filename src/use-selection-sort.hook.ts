import * as React from 'react';

export type UseSelectionSortGreaterCompareFn<T> = (a: T, b: T) => boolean;

export type UseSelectionSortReturnType<T> = {
	sort: () => void;
	output: T[];
};

export function useSelectionSort<T>(input: T[], greaterCompareFn: UseSelectionSortGreaterCompareFn<T>): UseSelectionSortReturnType<T> {
	const [output, setOutput] = React.useState<T[]>(input);

	const sort = React.useCallback(
		(input: T[]): void => {
			const length = input.length;

			for (let i = 0; i < length; i++) {
				let min: number = i;

				for (let j: number = i + 1; j < length; j++) {
					if (greaterCompareFn(input[min], input[j])) {
						min = j;
					}
				}

				if (min !== i) {
					const temp = input[i];

					input[i] = input[min];
					input[min] = temp;
				}
			}

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
