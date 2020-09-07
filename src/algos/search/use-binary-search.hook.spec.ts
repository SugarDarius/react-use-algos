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
		const { result } = setUp([2, 8, 36, 42, 54], 36, compareFns);
		const { index } = result.current;

		expect(index).toEqual(-1);
	});

	it('search a seeked item - middle', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 36, compareFns);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(2);
	});

	it('search a seeked item - end', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 54, compareFns);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(4);
	});

	it('search a seeked item - start', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 8, compareFns);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(1);
	});
});
