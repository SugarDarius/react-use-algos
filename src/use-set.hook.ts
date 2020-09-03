import * as React from 'react';

export type UseSetStableMethods<T> = {
	add: (item: T) => void;
	remove: (item: T) => void;
	toggle: (item: T) => void;
	reset: () => void;
};

export type UseSetUnstableMethods<T> = {
	has: (item: T) => boolean;
};

export type UseSetMethods<T> = UseSetStableMethods<T> & UseSetUnstableMethods<T>;

export type UseSetReturnType<T> = [Set<T>, UseSetMethods<T>];

export function useSet<T>(initialItems: T[] = []): UseSetReturnType<T> {
	const [set, setSet] = React.useState<Set<T>>(new Set(initialItems));

	const stableMethods = React.useMemo<UseSetStableMethods<T>>(() => {
		return {
			add: (item: T): void => {
				setSet(
					(set: Set<T>): Set<T> => {
						return new Set<T>([...Array.from(set), item]);
					}
				);
			},
			remove: (item: T): void => {
				setSet(
					(set: Set<T>): Set<T> => {
						return new Set<T>(
							Array.from(set).filter((i: T): boolean => {
								return i !== item;
							})
						);
					}
				);
			},
			toggle: (item: T): void => {
				setSet(
					(set: Set<T>): Set<T> => {
						return set.has(item)
							? new Set<T>(
									Array.from(set).filter((i: T): boolean => {
										return i !== item;
									})
							  )
							: new Set<T>([...Array.from(set), item]);
					}
				);
			},
			reset: (): void => {
				setSet(new Set(initialItems));
			}
		};
	}, [setSet]);

	const unstableMethods: UseSetUnstableMethods<T> = {
		has: React.useCallback(
			(item: T): boolean => {
				return set.has(item);
			},
			[set]
		)
	};

	const methods: UseSetMethods<T> = {
		...stableMethods,
		...unstableMethods
	};

	return [set, methods];
}
