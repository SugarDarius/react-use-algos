import { renderHook, act } from '@testing-library/react-hooks';
import { hashKey, useHashTable } from './use-hash-table.hook';

const setUp = (size?: number) => {
	return renderHook(() => {
		return useHashTable(size);
	});
};

describe('useHashTable test suite', () => {
	it('computes the good hash', () => {
		expect(hashKey('aurelien', 64)).toEqual(21);
		expect(hashKey('nicolas', 64)).toEqual(41);
	});

	it('takes initial size', () => {
		const { result } = setUp(64);

		expect(result.current.size()).toEqual(64);
	});

	it('takes default size', () => {
		const { result } = setUp();

		expect(result.current.size()).toEqual(32);
	});

	it('cannot have a size equals to 0', () => {
		const { result } = setUp(0);

		expect(result.current.size()).toEqual(32);
	});

	it('puts and gets an item', () => {
		const { result } = setUp(64);
		const { put } = result.current;

		act(() => {
			put('aurelien', 'sugardarius');
		});

		expect(result.current.get('aurelien')).toEqual('sugardarius');
	});

	it('tells if an item exists', () => {
		const { result } = setUp(64);
		const { put } = result.current;

		act(() => {
			put('aurelien', 'sugardarius');
		});

		expect(result.current.has('aurelien')).toBe(true);
	});

	it('deletes an item', () => {
		const { result } = setUp(64);

		act(() => {
			result.current.put('aurelien', 'sugardarius');
		});

		expect(result.current.has('aurelien')).toBe(true);

		act(() => {
			result.current.delete('aurelien');
		});

		expect(result.current.has('aurelien')).toBe(false);
	});
});
