import { renderHook } from '@testing-library/react-hooks';
import { useRadianToDegrees } from './use-radian-to-degrees.hook';

const setUp = (radian: number) => {
	return renderHook(() => {
		return useRadianToDegrees(radian);
	});
};

describe('useRadianToDegrees test suite', () => {
	it('takes initial input', () => {
		const { result } = setUp(10);
		const { degrees } = result.current;

		expect(degrees).toEqual(null);
	});

	it('computes the good output - Math.PI / 4 -> 45', async () => {
		const { result, waitForNextUpdate } = setUp(Math.PI / 4);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.degrees).toEqual(45);
	});

	it('computes the good output - Math.PI -> 180', async () => {
		const { result, waitForNextUpdate } = setUp(Math.PI);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.degrees).toEqual(180);
	});
});
