import * as React from 'react';

export type UseBinaryHeapMinOrMaxCompareFn<T> = (a: T, b: T) => boolean;
export type UseBinaryHeapEqualsCompareFn<T> = (a: T, b: T) => boolean;

export const getLeftChildIndex = (parentIndex: number): number => {
	return 2 * parentIndex + 1;
};

export const getRightChildIndex = (parentIndex: number): number => {
	return 2 * parentIndex + 2;
};

export const hasLeftChild = (parentIndex: number, heapSize: number): boolean => {
	return getLeftChildIndex(parentIndex) < heapSize;
};

export const hasRightChild = (parentIndex: number, heapSize: number): boolean => {
	return getRightChildIndex(parentIndex) < heapSize;
};

export const getParentIndex = (childIndex: number): number => {
	return Math.floor((childIndex - 1) / 2);
};

export const hasParent = (childIndex: number): boolean => {
	return getParentIndex(childIndex) >= 0;
};

export const getParent = <T>(childIndex: number, heap: T[]): T | undefined => {
	return heap[getParentIndex(childIndex)];
};

export const getLeftChild = <T>(parentIndex: number, heap: T[]): T => {
	return heap[getLeftChildIndex(parentIndex)];
};

export const getRightChild = <T>(parentIndex: number, heap: T[]): T => {
	return heap[getRightChildIndex(parentIndex)];
};

export const pairIsInCorrecOrder = <T>(a: T, b: T, compareFn: UseBinaryHeapMinOrMaxCompareFn<T>): boolean => {
	return compareFn(a, b);
};

export const swap = <T>(firstIndex: number, secondIndex: number, heap: T[]): T[] => {
	const temp = heap[secondIndex];

	heap[secondIndex] = heap[firstIndex];
	heap[firstIndex] = temp;

	return heap;
};

export const bubbleUp = <T>(heap: T[], compareFn: UseBinaryHeapMinOrMaxCompareFn<T>, startIndex?: number): T[] => {
	let index: number = startIndex || heap.length - 1;
	let nheap: T[] = [...heap];

	while (hasParent(index) && !pairIsInCorrecOrder(getParent(index, nheap)!, nheap[index], compareFn)) {
		nheap = swap(index, getParentIndex(index), nheap);
		index = getParentIndex(index);
	}

	return nheap;
};

export const bubbleDown = <T>(heap: T[], compareFn: UseBinaryHeapMinOrMaxCompareFn<T>, startIndex?: number): T[] => {
	let index: number = startIndex || 0;
	let nheap: T[] = [...heap];
	let nextIndex: number | null = null;

	while (hasLeftChild(index, nheap.length)) {
		if (hasRightChild(index, nheap.length) && pairIsInCorrecOrder(getRightChild(index, nheap), getLeftChild(index, nheap), compareFn)) {
			nextIndex = getRightChildIndex(index);
		} else {
			nextIndex = getLeftChildIndex(index);
		}

		if (pairIsInCorrecOrder(nheap[index], nheap[nextIndex], compareFn)) {
			break;
		}

		nheap = swap(index, nextIndex, nheap);
		index = nextIndex;
	}

	return nheap;
};

export const findFn = <T>(item: T, equalsCompareFn: UseBinaryHeapEqualsCompareFn<T>, heap: T[]): number[] => {
	let indices: number[] = [];

	for (let i = 0; i < heap.length; i++) {
		if (equalsCompareFn(item, heap[i])) {
			indices = [...indices, i];
		}
	}

	return indices;
};

export type UseBinaryHeapReturnType<T> = {
	add: (item: T) => void;
	remove: (item: T, equalsCompareFn: UseBinaryHeapEqualsCompareFn<T>) => void;
	peek: () => T | undefined;
	poll: () => T | undefined;
	find: (item: T, equalsCompareFn: UseBinaryHeapEqualsCompareFn<T>) => number[];
	toArray: () => T[];
	isEmpty: () => boolean;
	size: () => number;
};

export function useBinaryHeap<T>(compareFn: UseBinaryHeapMinOrMaxCompareFn<T>): UseBinaryHeapReturnType<T> {
	const [heap, setHeap] = React.useState<T[]>([]);

	return {
		add: (item: T): void => {
			setHeap((heap: T[]): T[] => {
				const nheap = [...heap, item];

				return bubbleUp(nheap, compareFn);
			});
		},
		remove: (item: T, equalsCompareFn: UseBinaryHeapEqualsCompareFn<T>): void => {
			setHeap((heap: T[]): T[] => {
				let nheap = [...heap];
				const indices = findFn(item, equalsCompareFn, nheap);

				if (indices.length > 0) {
					for (let i = 0; i < indices.length; i++) {
						const nindices = findFn(item, equalsCompareFn, nheap);
						const index = nindices[nindices.length - 1];

						if (index === heap.length - 1) {
							nheap = [...nheap.slice(0, -1)];
						} else {
							const lastItem = nheap.pop();
							nheap[index] = lastItem!;

							const parentItem = getParent(index, nheap);

							if (hasLeftChild(index, nheap.length) && (!parentItem || pairIsInCorrecOrder(parentItem, nheap[index], compareFn))) {
								nheap = bubbleDown(nheap, compareFn, index);
							} else {
								nheap = bubbleUp(nheap, compareFn, index);
							}
						}
					}
				}

				return nheap;
			});
		},
		peek: (): T | undefined => {
			return heap[0];
		},
		poll: (): T | undefined => {
			let item: T | undefined = undefined;

			const nheap = [...heap];

			if (nheap.length > 0) {
				item = nheap[0];

				if (nheap.length === 1) {
					setHeap([]);
				} else {
					nheap[0] = nheap.pop()!;
					setHeap(bubbleDown(nheap, compareFn));
				}
			}

			return item;
		},
		find: (item: T, equalsCompareFn: UseBinaryHeapEqualsCompareFn<T>): number[] => {
			return findFn(item, equalsCompareFn, heap);
		},
		toArray: (): T[] => {
			return [...heap];
		},
		isEmpty: (): boolean => {
			return heap.length === 0;
		},
		size: (): number => {
			return heap.length;
		}
	};
}
