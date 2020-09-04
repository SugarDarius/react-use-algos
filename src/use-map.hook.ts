import * as React from 'react';

export type UseMapStableMethods<T extends object> = {
	set: <K extends keyof T>(key: K, value: T[K]) => void;
	setAll: (nmap: T) => void;
	remove: <K extends keyof T>(key: K) => void;
	reset: () => void;
};

export type UseMapUntableMethods<T extends object> = {
	get: <K extends keyof T>(key: K) => T[K];
};

export type UseMapMethods<T extends object> = UseMapStableMethods<T> & UseMapUntableMethods<T>;

export type UseMapReturnType<T extends object> = [T, UseMapMethods<T>];

export function useMap<T extends object = any>(initialMap: T = {} as T): UseMapReturnType<T> {
	const [map, setMap] = React.useState<T>(initialMap);

	const stableMethods = React.useMemo<UseMapStableMethods<T>>(() => {
		return {
			set: <K extends keyof T>(key: K, value: T[K]): void => {
				setMap(
					(map: T): T => {
						return {
							...map,
							[key]: value
						};
					}
				);
			},
			setAll: (nmap: T): void => {
				setMap(nmap);
			},
			remove: <K extends keyof T>(key: K): void => {
				setMap(
					(map: T): T => {
						const { [key]: ommmitedKeyValue, ...rest } = map;

						return { ...rest } as T;
					}
				);
			},
			reset: (): void => {
				setMap(initialMap);
			}
		};
	}, [setMap]);

	const unstableMethods: UseMapUntableMethods<T> = {
		get: React.useCallback(
			<K extends keyof T>(key: K): T[K] => {
				return map[key];
			},
			[map]
		)
	};

	const methods: UseMapMethods<T> = {
		...stableMethods,
		...unstableMethods
	};

	return [map, methods];
}
