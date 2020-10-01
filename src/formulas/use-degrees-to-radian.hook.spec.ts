import { renderHook } from '@testing-library/react-hooks';
import { useDegreesToRadian } from './use-degrees-to-radian.hook';

const setUp = (degrees: number) => {
	return renderHook(() => {
		return useDegreesToRadian(degrees);
	});
};

describe('useDegreesToRadian test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp(0);
		const { radian } = result.current;

		expect(radian).toEqual(null);
	});

	it('computes the good output - 45 -> Math.PI / 4', async () => {
		const { result, waitForNextUpdate } = setUp(45);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.radian).toEqual(Math.PI / 4);
	});

	it('computes the good output - 180 -> Math.PI', async () => {
		const { result, waitForNextUpdate } = setUp(180);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.radian).toEqual(Math.PI);
	});
});
