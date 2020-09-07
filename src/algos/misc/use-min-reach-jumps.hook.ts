import * as React from 'react';

export function useMinReachJumps(input: number[] = []): number {
	return React.useMemo((): number => {
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

		return minNumberOfJumps;
	}, [input]);
}
