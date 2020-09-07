import { act, renderHook } from '@testing-library/react-hooks';
import { useQuickSort, UseQuickSortCompareFns } from './use-quick-sort.hook';

const setUp = <T>(input: T[], compareFns: UseQuickSortCompareFns<T>) => {
	return renderHook(() => {
		return useQuickSort(input, compareFns);
	});
};

const compareFns: UseQuickSortCompareFns<number> = {
	lessCompareFn: (a: number, b: number): boolean => {
		return a < b;
	},
	equalCompareFn: (a: number, b: number): boolean => {
		return a === b;
	}
};

describe('useQuickSort test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp([54, 2, 36, 42, 8], compareFns);
		const { output } = result.current;

		expect(output).toEqual([]);
	});

	it('sort the input', () => {
		const { result } = setUp([54, 54, 2, 36, 42, 8], compareFns);
		const { sort } = result.current;

		act(() => {
			sort();
		});

		expect(result.current.output).toEqual([2, 8, 36, 42, 54, 54]);
	});
});
