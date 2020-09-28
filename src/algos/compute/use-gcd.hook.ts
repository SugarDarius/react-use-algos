import * as React from 'react';

export type UseGCDReturnType = {
	gcd: number;
	compute: () => void;
};

export function useGCD(a: number, b: number) {
	const [gcd, setGCD] = React.useState<number>(0);

	const compute = React.useCallback(
		(a: number, b: number): void => {
			Promise.resolve().then((): void => {
				let absA: number = Math.abs(a);
				let absB: number = Math.abs(b);

				while (absA && absB && absA !== absB) {
					[absA, absB] = absA > absB ? [absA - absB, absB] : [absA, absB - absA];
				}

				setGCD(absA || absB);
			});
		},
		[a, b]
	);

	return {
		gcd,
		compute: (): void => {
			compute(a, b);
		}
	};
}
