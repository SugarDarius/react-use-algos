import { renderHook } from '@testing-library/react-hooks';
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

	it('does not shuffle when input is empty', async () => {
		const { result, waitForNextUpdate } = setUp([]);
		const { shuffle } = result.current;

		shuffle();

		await waitForNextUpdate();

		expect(result.current.output).toEqual([]);
	});

	it('shuffles the input', async () => {
		const { result, waitForNextUpdate } = setUp([0, 1, 2, 3, 4]);
		const { shuffle } = result.current;

		shuffle();

		await waitForNextUpdate();

		expect(result.current.output).not.toEqual([0, 1, 2, 3, 4]);
	});

	it('uses and empty input as default value for items', async () => {
		const { result, waitForNextUpdate } = setUp();
		const { shuffle } = result.current;

		shuffle();

		await waitForNextUpdate();

		expect(result.current.output).toEqual([]);
	});
});
