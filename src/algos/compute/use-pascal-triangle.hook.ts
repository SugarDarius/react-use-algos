import * as React from 'react';

export type UsePascalTriangleReturnType = {
	triangleRow: number[];
	compute: () => void;
};

export function usePascalTriangle(triangleRowIndex: number): UsePascalTriangleReturnType {
	const [triangleRow, setTriangleRow] = React.useState<number[]>([]);

	const compute = React.useCallback(
		(triangleRowIndex: number): void => {
			Promise.resolve().then((): void => {
				const triangleRowLength: number = triangleRowIndex + 1;
				const triangleRow: number[] = [1];

				for (let i = 1; i < triangleRowLength; i++) {
					triangleRow[i] = (triangleRow[i - 1] * (triangleRowIndex - i + 1)) / i;
				}

				setTriangleRow(triangleRow);
			});
		},
		[triangleRowIndex]
	);

	return {
		triangleRow,
		compute: (): void => {
			compute(triangleRowIndex);
		}
	};
}
