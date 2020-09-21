import { renderHook } from '@testing-library/react-hooks';
import { useInterpolationSearch } from './use-interpolation-search.hook';

const setUp = (sortedInput: number[], seekedItem: number) => {
	return renderHook(() => {
		return useInterpolationSearch(sortedInput, seekedItem);
	});
};

describe('useInterpolationSearch test suite', () => {
	it('takes initial sorted input', () => {
		const { result } = setUp([2, 8, 36, 42, 54], 36);
		const { index } = result.current;

		expect(index).toEqual(-1);
	});

	it('search a seeked item - start', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 2);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(0);
	});

	it('search a seeked item - end', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 54);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(4);
	});

	it('search a seeked item - left', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 8);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(1);
	});

	it('search a seeked item - right', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 42);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(3);
	});

	it('search a seeked item - mid', async () => {
		const { result, waitForNextUpdate } = setUp([2, 8, 36, 42, 54], 36);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(2);
	});

	it('search a seeked item - rangeDelta equals to 0 with found index', async () => {
		const { result, waitForNextUpdate } = setUp([1], 1);
		const { search } = result.current;

		search();

		await waitForNextUpdate();

		expect(result.current.index).toEqual(0);
	});

	it('search a seeked item - rangeDelta equals to 0 with no found index', () => {
		const { result } = setUp([1], 2);
		const { search } = result.current;

		search();

		expect(result.current.index).toEqual(-1);
	});

	it('search a seeked item - valueDelta less than 0', () => {
		const { result } = setUp([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 600);
		const { search } = result.current;

		search();

		expect(result.current.index).toEqual(-1);
	});

	it('search a seeked item - no seeked items exists', () => {
		const { result } = setUp([2, 8, 36, 42, 54], 88);
		const { search } = result.current;

		search();

		expect(result.current.index).toEqual(-1);
	});
});
