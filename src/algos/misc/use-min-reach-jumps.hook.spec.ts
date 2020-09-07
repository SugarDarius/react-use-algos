import { renderHook } from '@testing-library/react-hooks';
import { useMinReachJumps } from './use-min-reach-jumps.hook';

const setUp = (input?: number[]) => {
	return renderHook(() => {
		return useMinReachJumps(input);
	});
};

describe('useMinReachJumps test suite', () => {
	it('taks an empty array as default input', () => {
		const { result } = setUp();

		expect(result.current.minNumberOfJumps).toEqual(-1);
	});

	it('returns 0 if the input is empty', async () => {
		const { result, waitForNextUpdate } = setUp([]);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.minNumberOfJumps).toEqual(0);
	});

	it('returns 0 if the first element of the input is 0', async () => {
		const { result, waitForNextUpdate } = setUp([0, 2, 1, 4]);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.minNumberOfJumps).toEqual(0);
	});

	it('computes a min number of jumps', async () => {
		const { result, waitForNextUpdate } = setUp([2, 3, 1, 1, 4]);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.minNumberOfJumps).toEqual(2);
	});

	it('returns 0 if no min jump', async () => {
		const { result, waitForNextUpdate } = setUp([1, 0, 1, 1, 4]);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.minNumberOfJumps).toEqual(0);
	});
});
