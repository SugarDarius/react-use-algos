import { renderHook } from '@testing-library/react-hooks';
import { useBinarySearch, UseBinarySearchCompareFns } from './use-binary-search.hook';

const setUp = <T>(input: T[], seekedItem: T, equalsCompareFn: UseBinarySearchCompareFns<T>) => {
	return renderHook(() => {
		return useBinarySearch(input, seekedItem, equalsCompareFn);
	});
};

const compareFns: UseBinarySearchCompareFns<number> = {
	lessCompareFn: (a: number, b: number): boolean => {
		return a < b;
	},
	equalCompareFn: (a: number, b: number): boolean => {
		return a === b;
	}
};

describe('useBinarySearch test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp([54, 2, 36, 42, 8], 36, compareFns);
		const { index } = result.current;

		expect(index).toEqual(-1);
	});

	it('search a seeked item', async () => {
		const { result, waitForNextUpdate } = setUp([54, 2, 36, 42, 8], 36, compareFns);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(2);
	});
});
