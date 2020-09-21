import * as React from 'react';

export type UseInterpolationSearchReturnType = {
	search: () => void;
	index: number;
};

export function useInterpolationSearch(sortedInput: number[], seekedItem: number): UseInterpolationSearchReturnType {
	const [index, setIndex] = React.useState(-1);

	const search = React.useCallback(
		(sortedInput: number[], seekedItem: number): void => {
			Promise.resolve().then((): void => {
				let startIndex = 0;
				let endIndex = sortedInput.length - 1;
				let foundIndex = -1;

				while (startIndex <= endIndex) {
					const rangeDelta = sortedInput[endIndex] - sortedInput[startIndex];
					const valueDelta = seekedItem - sortedInput[startIndex];

					if (valueDelta < 0) {
						break;
					}

					if (rangeDelta === 0) {
						foundIndex = sortedInput[startIndex] === seekedItem ? startIndex : -1;
						break;
					}

					const indexDelta = endIndex - startIndex;
					const midIndex = startIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

					if (sortedInput[midIndex] === seekedItem) {
						foundIndex = midIndex;
						break;
					}

					if (sortedInput[midIndex] < seekedItem) {
						startIndex = midIndex + 1;
					} else {
						endIndex = midIndex - 1;
					}
				}

				setIndex(foundIndex);
			});
		},
		[sortedInput, seekedItem]
	);

	return {
		search: (): void => {
			search(sortedInput, seekedItem);
		},
		index
	};
}
