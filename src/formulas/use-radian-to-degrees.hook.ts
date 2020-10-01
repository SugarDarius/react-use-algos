import * as React from 'react';

export type UseRadianToDegreesReturnType = {
	degrees: number | null;
	compute: () => void;
};

export function useRadianToDegrees(radian: number): UseRadianToDegreesReturnType {
	const [degrees, setDegrees] = React.useState<number | null>(null);

	const compute = React.useCallback(
		(radian: number): void => {
			Promise.resolve().then((): void => {
				setDegrees(radian * (180 / Math.PI));
			});
		},
		[radian]
	);

	return {
		compute: (): void => {
			compute(radian);
		},
		degrees
	};
}
