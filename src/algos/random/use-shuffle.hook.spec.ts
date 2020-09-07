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
		const { output } = result.current;

		expect(output).toEqual([]);
	});

	it('does not shuffle when input is empty', () => {
		const { result } = setUp([]);
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.output).toEqual([]);
	});

	it('shuffles the input', () => {
		const { result } = setUp([0, 1, 2, 3, 4]);
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.output).not.toEqual([0, 1, 2, 3, 4]);
	});

	it('uses and empty input as default value for items', () => {
		const { result } = setUp();
		const { shuffle } = result.current;

		act(() => {
			shuffle();
		});

		expect(result.current.output).toEqual([]);
	});
});
