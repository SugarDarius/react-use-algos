import { renderHook } from '@testing-library/react-hooks';
import { useGCD } from './use-gcd.hook';

const setUp = (a: number, b: number) => {
	return renderHook(() => {
		return useGCD(a, b);
	});
};

describe('useGCD test suite', () => {
	it('returns 0 by default', () => {
		const { result } = setUp(0, 0);

		expect(result.current.gcd).toEqual(0);
	});

	it('computes good output - (a: 0, b: 0)', () => {
		const { result } = setUp(0, 0);
		const { compute } = result.current;

		compute();

		expect(result.current.gcd).toEqual(0);
	});

	it('computes good output - (a: 1, b: 2)', async () => {
		const { result, waitForNextUpdate } = setUp(1, 2);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.gcd).toEqual(1);
	});

	it('computes good output - (a: 2, b: 1)', async () => {
		const { result, waitForNextUpdate } = setUp(2, 1);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.gcd).toEqual(1);
	});

	it('computes good output - (a: 60, b: 24)', async () => {
		const { result, waitForNextUpdate } = setUp(60, 24);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.gcd).toEqual(12);
	});

	it('computes good output - (a: 24, b: 60)', async () => {
		const { result, waitForNextUpdate } = setUp(24, 60);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.gcd).toEqual(12);
	});
});
