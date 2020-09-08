import { act, renderHook } from '@testing-library/react-hooks';
import { useStack } from './use-stack.hook';

const setUp = (initialItems?: any[]) => {
	return renderHook(() => {
		return useStack(initialItems);
	});
};

describe('useStack test suite', () => {
	it('takes initial items', () => {
		const { result } = setUp([10, 20, 30]);
		const { size } = result.current;

		expect(size()).toEqual(3);
	});

	it('uses an empty array as default value for items', () => {
		const { result } = setUp();
		const { size } = result.current;

		expect(size()).toEqual(0);
	});

	it('pushes a new item', () => {
		const { result } = setUp([20]);

		act(() => {
			result.current.push(10);
		});

		expect(result.current.toArray()).toEqual([10, 20]);
	});

	it('pops the first item', () => {
		const { result } = setUp([10, 20, 30]);
		const { pop } = result.current;

		let popedItem: any;

		act(() => {
			popedItem = pop();
		});

		expect(popedItem).toEqual(10);
		expect(result.current.toArray()).toEqual([20, 30]);
	});

	it('peeks the first item', () => {
		const { result } = setUp([10, 20, 30]);
		const { peek } = result.current;

		let peekedItem: any;

		act(() => {
			peekedItem = peek();
		});

		expect(peekedItem).toEqual(10);
		expect(result.current.toArray()).toEqual([10, 20, 30]);
	});

	it('tells if is empty', () => {
		const { result } = setUp();

		expect(result.current.isEmpty()).toBe(true);
	});

	it('returns the size', () => {
		const { result } = setUp([10, 20, 30]);

		expect(result.current.size()).toEqual(3);
	});
});
