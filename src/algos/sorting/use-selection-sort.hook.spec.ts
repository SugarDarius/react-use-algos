import { renderHook } from '@testing-library/react-hooks';
import { useSelectionSort, UseSelectionSortGreaterCompareFn } from './use-selection-sort.hook';

const setUp = <T>(input: T[], greaterCompareFn: UseSelectionSortGreaterCompareFn<T>) => {
	return renderHook(() => {
		return useSelectionSort(input, greaterCompareFn);
	});
};

const greaterCompareFn: UseSelectionSortGreaterCompareFn<number> = (a: number, b: number) => {
	return a > b;
};

describe('useSelectionSort test suite', () => {
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
