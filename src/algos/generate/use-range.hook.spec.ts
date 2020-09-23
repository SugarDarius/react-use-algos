import { renderHook } from '@testing-library/react-hooks';
import { useRange } from './use-range.hook';

const setUp = (min: number, max: number) => {
	return renderHook(() => {
		return useRange(min, max);
	});
};

describe('useRange test suite', () => {
	it('returns an empty range', () => {
		const { result } = setUp(0, 10);
		expect(result.current.range.length).toEqual(0);
	});

	it('returns a range of 1 element', async () => {
		const { result, waitForNextUpdate } = setUp(1, 1);
		const { generate } = result.current;

		generate();

		await waitForNextUpdate();

		expect(result.current.range).toEqual([1]);
	});

	it('returns a range', async () => {
		const { result, waitForNextUpdate } = setUp(1, 5);
		const { generate } = result.current;

		generate();

		await waitForNextUpdate();

		expect(result.current.range).toEqual([1, 2, 3, 4, 5]);
	});
});
