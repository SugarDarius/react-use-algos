import { renderHook } from '@testing-library/react-hooks';
import { useLerp } from './use-lerp.hook';

const setUp = (v0: number, v1: number, t: number) => {
	return renderHook(() => {
		return useLerp(v0, v1, t);
	});
};

describe('useLerp test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp(10, 20, 6);
		const { value } = result.current;

		expect(value).toEqual(0);
	});

	it('computes a linear interpolation', async () => {
		const { result, waitForNextUpdate } = setUp(10, 20, 6);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.value).toEqual(70);
	});
});
