import * as React from 'react';

export type UseMinReachJumpsReturnType = {
	minNumberOfJumps: number;
	compute: () => void;
};

export function useMinReachJumps(input: number[] = []): UseMinReachJumpsReturnType {
	const [minNumberOfJumps, setMinNumberOfJumps] = React.useState<number>(0);

	const compute = React.useCallback(
		(input: number[]): void => {
			let minNumberOfJumps = 0;

			const size: number = input.length;
			const lastIndex: number = size - 1;

			if (size > 0 && input[0] !== 0) {
				let maxReach: number = input[0];
				let step: number = input[0];
				let jump = 1;

				for (let i = 1; i < size; i++) {
					if (i === lastIndex) {
						minNumberOfJumps = jump;
						break;
					}

					maxReach = Math.max(maxReach, i + input[i]);
					step--;

					if (step === 0) {
						jump = jump + 1;

						if (i >= maxReach) {
							minNumberOfJumps = 0;
							break;
						}

						step = maxReach + 1;
					}
				}
			}

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
