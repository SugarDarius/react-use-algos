import { renderHook } from '@testing-library/react-hooks';
import { useLinearSearch, UseLinearSearchEqualsCompareFn } from './use-linear-search.hook';

const setUp = <T>(input: T[], seekedItem: T, equalsCompareFn: UseLinearSearchEqualsCompareFn<T>) => {
	return renderHook(() => {
		return useLinearSearch(input, seekedItem, equalsCompareFn);
	});
};

const equalsCompareFn: UseLinearSearchEqualsCompareFn<number> = (a: number, b: number) => {
	return a === b;
};

describe('useBubbleSort test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp([54, 2, 36, 42, 8], 36, equalsCompareFn);
		const { indices } = result.current;

		expect(indices).toEqual([]);
	});

	it('search a seeked item', async () => {
		const { result, waitForNextUpdate } = setUp([54, 2, 36, 42, 8], 36, equalsCompareFn);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.indices).toEqual([2]);
	});
});
