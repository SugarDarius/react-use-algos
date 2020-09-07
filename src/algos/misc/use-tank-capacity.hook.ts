import * as React from 'react';

export type UseTankCapacityReturnType = {
	capacity: number;
	compute: () => void;
};

export function useTankCapacity(input: number[] = []): UseTankCapacityReturnType {
	const [capacity, setCapactiy] = React.useState<number>(0);

	const compute = React.useCallback(
		(input: number[]): void => {
			const stack: number[] = [];

			let capacity = 0;
			let current = 0;

			if (input.length > 0) {
				while (current < input.length) {
					while (stack.length > 0 && input[current] > input[stack[stack.length - 1]]) {
						const top = stack[stack.length - 1];
						stack.pop();

						if (stack.length === 0) {
							break;
						}

						const distance = current - stack[stack.length - 1] - 1;
						const boundHeight = Math.min(input[current], input[stack[stack.length - 1]]) - input[top];

						capacity = capacity + distance * boundHeight;
					}

					stack.push(current++);
				}
			}

			setCapactiy(capacity);
		},
		[input]
	);

	return {
		compute: (): void => {
			compute(input);
		},
		capacity
	};
}
