import { act, renderHook } from '@testing-library/react-hooks';
import { useMinReachJumps } from './use-min-reach-jumps.hook';

const setUp = (input?: number[]) => {
	return renderHook(() => {
		return useMinReachJumps(input);
	});
};

describe('useMinReachJumps test suite', () => {
	it('taks an empty array as default input', () => {
		const { result } = setUp();

		expect(result.current.minNumberOfJumps).toEqual(0);
	});

	it('returns 0 if the input is empty', () => {
		const { result } = setUp([]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.minNumberOfJumps).toEqual(0);
	});

	it('returns 0 if the first element of the input is 0', () => {
		const { result } = setUp([0, 2, 1, 4]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.minNumberOfJumps).toEqual(0);
	});

	it('computes a tank capacity', () => {
		const { result } = setUp([2, 3, 1, 1, 4]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.minNumberOfJumps).toEqual(2);
	});

	it('returs 0 if no min jump', () => {
		const { result } = setUp([1, 0, 1, 1, 4]);
		const { compute } = result.current;

		act(() => {
			compute();
		});

		expect(result.current.minNumberOfJumps).toEqual(0);
	});
});
