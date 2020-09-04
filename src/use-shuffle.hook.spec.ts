import { act, renderHook } from '@testing-library/react-hooks';
import { useShuffle } from './use-shuffle.hook';

const setUp = <T>(input?: T[]) => {
	return renderHook(() => {
		return useShuffle(input);
	});
};

describe('useShuffle test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp([0, 1, 2, 3, 4]);
		const { list } = result.current;

		expect(list).toEqual([0, 1, 2, 3, 4]);
	});

	it('does not shuffle when input is empty', () => {
		const { result } = setUp([]);
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.list).toEqual([]);
	});

	it('shuffles the input', () => {
		const { result } = setUp([0, 1, 2, 3, 4]);
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.list).not.toEqual([0, 1, 2, 3, 4]);
	});

	it('uses and empty input as default value for items', () => {
		const { result } = setUp();
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.list).toEqual([]);
	});
});
