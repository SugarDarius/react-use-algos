import * as React from 'react';

export type UseLinearSearchEqualsCompareFn<T> = (a: T, b: T) => boolean;
export type UseLinearSearchReturnType = {
	indices: number[];
	search: () => void;
};

export function useLinearSearch<T>(input: T[], seekedItem: T, equalsCompareFn: UseLinearSearchEqualsCompareFn<T>): UseLinearSearchReturnType {
	const [indices, setIndices] = React.useState<number[]>([]);

	const search = React.useCallback(
		(input: T[]): void => {
			let indices: number[] = [];
			for (let i = 0; i < input.length; i++) {
				if (equalsCompareFn(input[i], seekedItem)) {
					indices = [...indices, i];
				}
			}

			setIndices(indices);
		},
		[input]
	);

	return {
		indices,
		search: () => {
			search(input);
		}
	};
}
