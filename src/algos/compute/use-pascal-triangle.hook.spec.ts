import { renderHook } from '@testing-library/react-hooks';
import { usePascalTriangle } from './use-pascal-triangle.hook';

const setUp = (triangleRowIndex: number) => {
	return renderHook(() => {
		return usePascalTriangle(triangleRowIndex);
	});
};

describe('usePascalTriangle test suite', () => {
	it('returns an empty triangle by default', () => {
		const { result } = setUp(10);

		expect(result.current.triangleRow).toEqual([]);
	});

	it('computes the good outputs - triangle row index 0', async () => {
		const { result, waitForNextUpdate } = setUp(0);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.triangleRow).toEqual([1]);
	});

	it('computes the good outputs - triangle row index 1', async () => {
		const { result, waitForNextUpdate } = setUp(1);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.triangleRow).toEqual([1, 1]);
	});

	it('computes the good outputs - triangle row index 2', async () => {
		const { result, waitForNextUpdate } = setUp(2);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.triangleRow).toEqual([1, 2, 1]);
	});

	it('computes the good outputs - triangle row index 3', async () => {
		const { result, waitForNextUpdate } = setUp(3);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.triangleRow).toEqual([1, 3, 3, 1]);
	});

	it('computes the good outputs - triangle row index 4', async () => {
		const { result, waitForNextUpdate } = setUp(4);
		const { compute } = result.current;

		compute();

		await waitForNextUpdate();

		expect(result.current.triangleRow).toEqual([1, 4, 6, 4, 1]);
	});
});
