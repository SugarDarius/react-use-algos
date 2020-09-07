import { act, renderHook } from '@testing-library/react-hooks';
import { useMap } from './use-map.hook';

const setUp = <T extends object = any>(initialMap?: T) => {
	return renderHook(() => {
		return useMap(initialMap);
	});
};

describe('useMap test suite', () => {
	it('takes initial map', () => {
		const { result } = setUp({
			user_0: true,
			user_1: true
		});

		const [, { get }] = result.current;

		expect(get('user_0')).toEqual(true);
		expect(get('user_1')).toEqual(true);
	});

	it('resets to initial provided map', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { set, reset }] = result.current;

		act(() => {
			set('user_3', false);
		});

		expect(result.current[0]).toEqual({
			user_0: true,
			user_1: true,
			user_3: false
		});

		act(() => {
			reset();
		});

		expect(result.current[0]).toEqual({
			user_0: true,
			user_1: true
		});
	});

	it('sets a new item', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { set }] = result.current;

		act(() => {
			set('user_2', false);
		});

		expect(result.current[0]).toEqual({
			user_0: true,
			user_1: true,
			user_2: false
		});
	});

	it('replaces an existing item', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { set }] = result.current;

		act(() => {
			set('user_1', false);
		});

		expect(result.current[0]).toEqual({
			user_0: true,
			user_1: false
		});
	});

	it('sets all', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { setAll }] = result.current;

		act(() => {
			setAll({
				user_2: false,
				user_3: false
			});
		});

		expect(result.current[0]).toEqual({
			user_2: false,
			user_3: false
		});
	});

	it('removes an item', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { remove }] = result.current;

		act(() => {
			remove('user_1');
		});

		expect(result.current[0]).toEqual({
			user_0: true
		});
	});

	it('gets an item', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { get }] = result.current;

		let item: any;
		act(() => {
			item = get('user_0');
		});

		expect(item).toBe(true);
	});

	it('uses an empty map as default value', () => {
		const { result } = setUp<any>();

		const [, { get }] = result.current;

		let item: any;
		act(() => {
			item = get('user_0');
		});

		expect(item).toBeUndefined();
	});

	it('memoizes his methods', () => {
		const { result } = setUp<any>({
			user_0: true,
			user_1: true
		});

		const [, { set, setAll, remove, reset }] = result.current;

		act(() => {
			set('user_2', false);
		});

		expect(result.current[1].set).toBe(set);
		expect(result.current[1].setAll).toBe(setAll);
		expect(result.current[1].remove).toBe(remove);
		expect(result.current[1].reset).toBe(reset);
	});
});
