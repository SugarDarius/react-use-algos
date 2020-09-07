import { act, renderHook } from '@testing-library/react-hooks';
import { useTankCapacity } from './use-tank-capacity.hook';

const setUp = (input?: number[]) => {
	return renderHook(() => {
		return useTankCapacity(input);
	});
};

describe('useTankCapacity test suite', () => {
	it('taks an empty array as default input', () => {
		const { result } = setUp();

		expect(result.current.capacity).toEqual(0);
	});

	it('returns 0 if the input is empty', () => {
		const { result } = setUp([]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.capacity).toEqual(0);
	});

	it('computes a tank capacity', () => {
		const { result } = setUp([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.capacity).toEqual(6);
	});
});
