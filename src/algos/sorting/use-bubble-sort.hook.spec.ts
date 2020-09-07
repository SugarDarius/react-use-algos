import { renderHook } from '@testing-library/react-hooks';
import { useBubbleSort, UseBubbleSortGreaterCompareFn } from './use-bubble-sort.hook';

const setUp = <T>(input: T[], greaterCompareFn: UseBubbleSortGreaterCompareFn<T>) => {
	return renderHook(() => {
		return useBubbleSort(input, greaterCompareFn);
	});
};

const greaterCompareFn: UseBubbleSortGreaterCompareFn<number> = (a: number, b: number) => {
	return a > b;
};

describe('useBubbleSort test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp([54, 2, 36, 42, 8], greaterCompareFn);
		const { output } = result.current;

		expect(output).toEqual([]);
	});

	it('sort the input', async () => {
		const { result, waitForNextUpdate } = setUp([54, 2, 36, 42, 8], greaterCompareFn);
		const { sort } = result.current;

		sort();

		await waitForNextUpdate();

		expect(result.current.output).toEqual([2, 8, 36, 42, 54]);
	});
});
