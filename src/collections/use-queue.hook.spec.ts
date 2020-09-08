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
		const { size } = result.current;

		expect(size()).toEqual(3);
	});

	it('uses an empty array as default value for items', () => {
		const { result } = setUp();
		const { size } = result.current;

		expect(size()).toEqual(0);
	});

	it('appends new item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);

		act(() => {
			result.current.add('forthCommand');
		});

		expect(result.current.toArray()).toEqual(['firstCommand', 'secondCommand', 'thirdCommand', 'forthCommand']);
	});

	it('removes first item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);
		let removedItem: any;

		act(() => {
			removedItem = result.current.remove();
		});

		expect(removedItem).toEqual('firstCommand');
		expect(result.current.toArray()).toEqual(['secondCommand', 'thirdCommand']);
	});

	it('returns the first item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);

		expect(result.current.first()).toEqual('firstCommand');
	});

	it('returns the last item', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);

		expect(result.current.last()).toEqual('thirdCommand');
	});

	it('tells if is empty', () => {
		const { result } = setUp();

		expect(result.current.isEmpty()).toBe(true);
	});

	it('returns the size', () => {
		const { result } = setUp(['firstCommand', 'secondCommand', 'thirdCommand']);

		expect(result.current.size()).toEqual(3);
	});
});
