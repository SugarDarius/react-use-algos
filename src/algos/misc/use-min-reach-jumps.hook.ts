import * as React from 'react';

export type UseMinReachJumpsReturnType = {
	minNumberOfJumps: number;
	compute: () => void;
};

export function useMinReachJumps(input: number[] = []): UseMinReachJumpsReturnType {
	const [minNumberOfJumps, setMinNumberOfJumps] = React.useState<number>(-1);

	const compute = React.useCallback(
		async (input: number[]): Promise<void> => {
			const minNumberOfJumps = await new Promise<number>((resolve): void => {
				let mnoj = 0;

				const size: number = input.length;
				const lastIndex: number = size - 1;

				if (size > 0 && input[0] !== 0) {
					let maxReach: number = input[0];
					let step: number = input[0];
					let jump = 1;

					for (let i = 1; i < size; i++) {
						if (i === lastIndex) {
							mnoj = jump;
							break;
						}

						maxReach = Math.max(maxReach, i + input[i]);
						step--;

						if (step === 0) {
							jump = jump + 1;

							if (i >= maxReach) {
								mnoj = 0;
								break;
							}

							step = maxReach + 1;
						}
					}
				}

				resolve(mnoj);
			});
			setMinNumberOfJumps(minNumberOfJumps);
		},
		[input]
	);

	return {
		compute: (): void => {
			compute(input);
		},
		minNumberOfJumps
	};
}
