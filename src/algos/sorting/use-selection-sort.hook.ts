import * as React from 'react';

export type UseSelectionSortGreaterCompareFn<T> = (a: T, b: T) => boolean;

export type UseSelectionSortReturnType<T> = {
	sort: () => void;
	output: T[];
};

export function useSelectionSort<T>(input: T[], greaterCompareFn: UseSelectionSortGreaterCompareFn<T>): UseSelectionSortReturnType<T> {
	const [output, setOutput] = React.useState<T[]>([]);

	const sort = React.useCallback(
		async (input: T[]): Promise<void> => {
			const sortedInput = await new Promise<T[]>((resolve) => {
				const inputToSort: T[] = [...input];
				const length = input.length;

				for (let i = 0; i < length; i++) {
					let min: number = i;

					for (let j: number = i + 1; j < length; j++) {
						if (greaterCompareFn(inputToSort[min], inputToSort[j])) {
							min = j;
						}
					}

					if (min !== i) {
						const temp = inputToSort[i];

						inputToSort[i] = inputToSort[min];
						inputToSort[min] = temp;
					}
				}

				resolve(inputToSort);
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
