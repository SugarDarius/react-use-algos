import { act, renderHook } from '@testing-library/react-hooks';
import { getLeftChildIndex, getRightChildIndex, hasLeftChild, hasRightChild, getParentIndex, hasParent, getParent, getLeftChild, getRightChild, swap, bubbleUp, useBinaryHeap, UseBinaryHeapMinOrMaxCompareFn, UseBinaryHeapEqualsCompareFn } from './use-binary-heap.hook';

const setUp = <T>(compareFn: UseBinaryHeapMinOrMaxCompareFn<T>) => {
	return renderHook(() => {
		return useBinaryHeap(compareFn);
	});
};

const maxHeapCompareFn: UseBinaryHeapMinOrMaxCompareFn<number> = (a: number, b: number): boolean => {
	return a >= b;
};

const minHeapCompareFn: UseBinaryHeapMinOrMaxCompareFn<number> = (a: number, b: number): boolean => {
	return a <= b;
};

const equalsCompareFn: UseBinaryHeapEqualsCompareFn<number> = (a: number, b: number): boolean => {
	return a === b;
};

describe('useBinaryHeap test suite', () => {
	it('computes the good output - fn getLeftChildIndex', () => {
		expect(getLeftChildIndex(0)).toEqual(1);
		expect(typeof getLeftChildIndex(0)).toBe('number');
	});

	it('computes the good output - fn getRightChildIndex', () => {
		expect(getRightChildIndex(0)).toEqual(2);
		expect(typeof getRightChildIndex(0)).toBe('number');
	});

	it('computes the good output - fn hasLeftChild', () => {
		expect(hasLeftChild(0, 4)).toBe(true);
	});

	it('computes the good output - fn hasRightChild', () => {
		expect(hasRightChild(0, 4)).toBe(true);
	});

	it('computes the good output - fn getParentIndex', () => {
		expect(getParentIndex(4)).toEqual(1);
		expect(typeof getParentIndex(4)).toBe('number');
	});

	it('computes the good output - fn hasParent', () => {
		expect(hasParent(4)).toBe(true);
	});

	it('computes the good output - fn getParent', () => {
		expect(getParent(1, [10, 20, 30])).toEqual(10);
	});

	it('computes the good output - fn getLeftChild', () => {
		expect(getLeftChild(0, [10, 20, 30])).toEqual(20);
	});

	it('computes the good output - fn getRightChild', () => {
		expect(getRightChild(0, [10, 20, 30])).toEqual(30);
	});

	it('computes the good output - fn swap', () => {
		expect(swap(1, 2, [10, 20, 30])).toEqual([10, 30, 20]);
	});

	it('computes the good output - fn bubbleUp - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];
		let heap: number[] = [];

		for (const item of items) {
			heap = bubbleUp([...heap, item], minHeapCompareFn);
		}

		expect(heap).toEqual([2, 6, 8, 67, 50, 45, 34]);
	});

	it('computes the good output - fn bubbleUp - max heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];
		let heap: number[] = [];

		for (const item of items) {
			heap = bubbleUp([...heap, item], maxHeapCompareFn);
		}

		expect(heap).toEqual([67, 50, 45, 2, 6, 34, 8]);
	});

	it('adds an item and bubble up the heap - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);
	});

	it('removes an item and bubble the heap - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);

		act(() => {
			result.current.remove(8, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([2, 6, 34, 67, 50, 45]);
	});

	it('removes an item and bubble the heap - min heap - non existing item case', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);

		act(() => {
			result.current.remove(80, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);
	});

	it('removes an item and bubble the heap - min heap - last index item item case', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);

		act(() => {
			result.current.remove(34, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45]);
	});

	it('removes an item and bubble the heap - min heap - first index item case', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([2, 6, 8, 67, 50, 45, 34]);

		act(() => {
			result.current.remove(2, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([6, 34, 8, 67, 50, 45]);
	});

	it('removes an item and bubble the heap - min heap - one item case', () => {
		const items = [6, 34, 8, 67, 50, 45];
		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([6, 34, 8, 67, 50, 45]);

		act(() => {
			result.current.remove(8, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([6, 34, 45, 67, 50]);
	});

	it('removes and item and bubble the heap - min heap - many item case', () => {
		const items = [6, 34, 8, 67, 50, 45, 6, 90];
		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.toArray()).toEqual([6, 34, 6, 67, 50, 45, 8, 90]);

		act(() => {
			result.current.remove(6, equalsCompareFn);
		});

		expect(result.current.toArray()).toEqual([8, 34, 45, 67, 50, 90]);
	});

	it('peeks the first item - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.peek()).toEqual(2);
	});

	it('polls the first item - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];

		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		let polledItem: any;

		act(() => {
			polledItem = result.current.poll();
		});

		expect(polledItem).toEqual(2);
		expect(result.current.toArray()).toEqual([6, 34, 8, 67, 50, 45]);
	});

	it('polls the first item - min heap - empty heap case', () => {
		const { result } = setUp(minHeapCompareFn);
		let polledItem: any;

		act(() => {
			polledItem = result.current.poll();
		});

		expect(polledItem).toBeUndefined();
		expect(result.current.toArray()).toEqual([]);
	});

	it('polls the first item - min heap - one item in heap case', () => {
		const { result } = setUp(minHeapCompareFn);
		let polledItem: any;

		act(() => {
			result.current.add(10);
		});

		act(() => {
			polledItem = result.current.poll();
		});

		expect(polledItem).toEqual(10);
		expect(result.current.toArray()).toEqual([]);
	});

	it('finds an item - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];
		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		let foundIndices: number[] = [];

		act(() => {
			foundIndices = result.current.find(6, equalsCompareFn);
		});

		expect(foundIndices).toEqual([1]);
	});

	it('does not find an item - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];
		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		let foundIndices: number[] = [];

		act(() => {
			foundIndices = result.current.find(80, equalsCompareFn);
		});

		expect(foundIndices).toEqual([]);
	});

	it('tells if is empty - min heap', () => {
		const { result } = setUp(minHeapCompareFn);

		expect(result.current.isEmpty()).toBe(true);
	});

	it('returns the size - min heap', () => {
		const items = [50, 2, 45, 67, 6, 34, 8];
		const { result } = setUp(minHeapCompareFn);

		for (const item of items) {
			act(() => {
				result.current.add(item);
			});
		}

		expect(result.current.size()).toEqual(7);
	});
});
