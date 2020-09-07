import { renderHook } from '@testing-library/react-hooks';
import { useLerp } from './use-lerp.hook';

const setUp = (v0: number, v1: number, t: number) => {
	return renderHook(() => {
		return useLerp(v0, v1, t);
	});
};

describe('useLerp test suite', () => {
	it('computes linear interpolation', () => {
		const { result } = setUp(10, 20, 6);

		expect(result.current).toEqual(70);
	});
});
