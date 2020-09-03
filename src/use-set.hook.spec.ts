import { act, renderHook } from '@testing-library/react-hooks';
import { useSet } from './use-set.hook';

const setUp = <T>(initialItems?: T[]) => {
	return renderHook(() => {
		return useSet(initialItems);
	});
};

describe('useSet test suite', () => {
	it('takes initial items', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { has }] = result.current;

		expect(has('user_0')).toBeTruthy();
		expect(has('user_1')).toBeTruthy();
	});

	it('resets to initial provided items', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { add, reset }] = result.current;

		act(() => {
			add('user_2');
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1', 'user_2']));

		act(() => {
			reset();
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1']));
	});

	it('adds a new item', () => {
		const { result } = setUp(['user_0']);
		const [, { add }] = result.current;

		act(() => {
			add('user_1');
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1']));
	});

	it('adds a a new item on toggle', () => {
		const { result } = setUp(['user_0']);
		const [, { toggle }] = result.current;

		act(() => {
			toggle('user_1');
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1']));
	});

	it('removes an existing item on toggle', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { toggle }] = result.current;

		act(() => {
			toggle('user_1');
		});

		expect(result.current[0]).toEqual(new Set(['user_0']));
	});

	it('do nothing when adding an existing item', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { add }] = result.current;

		act(() => {
			add('user_1');
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1']));
	});

	it('do nothing when trying to remove a non-existing item', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { remove }] = result.current;

		act(() => {
			remove('user_2');
		});

		expect(result.current[0]).toEqual(new Set(['user_0', 'user_1']));
	});

	it('uses an empty array as default value for items', () => {
		const { result } = setUp<string>();

		const [set] = result.current;

		expect(set.size).toEqual(0);
	});

	it('memoizes its methods', () => {
		const { result } = setUp(['user_0', 'user_1']);
		const [, { add, remove, reset, toggle }] = result.current;

		act(() => {
			add('user_2');
		});

		expect(result.current[1].add).toBe(add);
		expect(result.current[1].remove).toBe(remove);
		expect(result.current[1].reset).toBe(reset);
		expect(result.current[1].toggle).toBe(toggle);
	});
});
