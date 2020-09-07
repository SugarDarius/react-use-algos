import * as React from 'react';

export type UseShuffleReturnType<T> = {
	shuffle: () => void;
	output: T[];
};

export function useShuffle<T>(input: T[] = []): UseShuffleReturnType<T> {
	const [output, setOutput] = React.useState<T[]>([]);

	const shuffle = React.useCallback(
		(list: T[]): void => {
			const length = list.length;
			const shuffledList = [...list];

			if (length > 0) {
				let index = -1;
				const lastIndex = length - 1;

				while (++index < length) {
					const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
					const value = shuffledList[rand];

					shuffledList[rand] = shuffledList[index];
					shuffledList[index] = value;
				}

				setOutput(shuffledList);
			}
		},
		[input]
	);

	return {
		shuffle: () => {
			shuffle(input);
		},
		output
	};
}
