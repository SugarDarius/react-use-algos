import * as React from 'react';

export type UseRangeReturnType = {
	range: number[];
	generate: () => void;
};

export function useRange(min: number, max: number): UseRangeReturnType {
	const [range, setRange] = React.useState<number[]>([]);

	const generate = React.useCallback(
		(min: number, max: number): void => {
			Promise.resolve().then((): void => {
				let rg: number[] = [];

				if (min === max) {
					rg = [min];
				} else {
					for (let i: number = min; i <= max; i++) {
						rg = [...rg, i];
					}
				}

				setRange(rg);
			});
		},
		[min, max]
	);

	return {
		range,
		generate: (): void => {
			generate(min, max);
		}
	};
}
