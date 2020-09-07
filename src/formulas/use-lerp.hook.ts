import * as React from 'react';

export type UseLerpReturnType = {
	value: number;
	compute: () => void;
};

export function useLerp(v0: number, v1: number, t: number): UseLerpReturnType {
	const [value, setValue] = React.useState<number>(0);

	const compute = React.useCallback(
		(v0: number, v1: number, t: number): void => {
			setValue((1 - t) * v0 + t * v1);
		},
		[v0, v1, t]
	);

	return {
		compute: (): void => {
			compute(v0, v1, t);
		},
		value
	};
}
