import * as React from 'react';

export type UseLinearSearchEqualsCompareFn<T> = (a: T, b: T) => boolean;
export type UseLinearSearchReturnType = {
	indices: number[];
	search: () => void;
};

export function useLinearSearch<T>(input: T[], seekedItem: T, equalsCompareFn: UseLinearSearchEqualsCompareFn<T>): UseLinearSearchReturnType {
	const [indices, setIndices] = React.useState<number[]>([]);

	const search = React.useCallback(
		(input: T[], seekedItem: T): void => {
			Promise.resolve().then((): void => {
				let idcs: number[] = [];

				for (let i = 0; i < input.length; i++) {
					if (equalsCompareFn(input[i], seekedItem)) {
						idcs = [...idcs, i];
					}
				}

				setIndices(idcs);
			});
		},
		[input, seekedItem]
	);

	return {
		indices,
		search: () => {
			search(input, seekedItem);
		}
	};
}
