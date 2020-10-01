import * as React from 'react';

export type UseDegreesToRadianReturnType = {
	radian: number | null;
	compute: () => void;
};

export function useDegreesToRadian(degrees: number): UseDegreesToRadianReturnType {
	const [radian, setRadian] = React.useState<number | null>(null);

	const compute = React.useCallback(
		(degrees: number): void => {
			Promise.resolve().then((): void => {
				setRadian(degrees * (Math.PI / 180));
			});
		},
		[degrees]
	);

	return {
		compute: (): void => {
			compute(degrees);
		},
		radian
	};
}
