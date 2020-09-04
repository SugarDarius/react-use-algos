import * as React from 'react';

export function useLerp(v0: number, v1: number, t: number): number {
	return React.useMemo((): number => {
		return (1 - t) * v0 + t * v1;
	}, [v0, v1, t]);
}
