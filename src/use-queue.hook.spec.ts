import { act, renderHook } from '@testing-library/react-hooks';
import { useQueue } from './use-queue.hook';

const setUp = (initialItems?: any[]) => {
	return renderHook(() => {
		return useQueue(initialItems);
	});
};

describe('useQueue test suite', () => {
	it('takes initial items', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);
		const { first, last, size } = result.current;

		expect(first()).toEqual('firstCommand');
		expect(last()).toEqual('thirdCommand');
		expect(size()).toEqual(3);
	});

	it('appends new item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);

		act(() => {
			result.current.add('forthCommand');
		});

		const { first, last, size } = result.current;

		expect(first()).toEqual('firstCommand');
		expect(last()).toEqual('forthCommand');
		expect(size()).toEqual(4);
	});

	it('removes first item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);
		let removedItem: any;

		act(() => {
			removedItem = result.current.remove();
		});

		const { first, last, size } = result.current;

		expect(removedItem).toEqual('firstCommand');
		expect(first()).toEqual('secondCommand');
		expect(last()).toEqual('thirdCommand');
		expect(size()).toEqual(2);
	});

	it('tells if the queue is empty', () => {
		const { result } = setUp([]);

		const { first, last, size, isEmpty } = result.current;

		expect(first()).toBeUndefined();
		expect(last()).toBeUndefined();
		expect(size()).toEqual(0);
		expect(isEmpty()).toBeTruthy();
	});

	it('uses an empty array as default value for items', () => {
		const { result } = setUp();

		const { first, last, size, isEmpty } = result.current;

		expect(first()).toBeUndefined();
		expect(last()).toBeUndefined();
		expect(size()).toEqual(0);
		expect(isEmpty()).toBeTruthy();
	});
});
