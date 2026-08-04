import { useMemo } from "react";
import type { MosaicToggle } from "@root/types";

import wrapToggle from "./wrapToggle";
import useToggle from "./useToggle";

/**
 * The same as `useToggle` but also accepts a context against which
 * to test any toggle callbacks. The context will be provided as the
 * first parameter to the toggle callbacks at the time of each test.
 *
 * @param items The item or items containing the show property
 * @param params The context to be provided to any toggle callbacks
 * @param key The property that holds a valid toggle boolean/callback/array
 * @param defaultToggle What the result should fall back to when the toggle property is undefined. Default `true`.
 */
function useWrappedToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle<P>>>, P>(
	items: T[],
	params: P,
	key: K,
	defaultToggle?: boolean
): (Omit<T, K> & Partial<Record<K, MosaicToggle>>)[];
function useWrappedToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle<P>>>, P>(
	items: T,
	params: P,
	key: K,
	defaultToggle?: boolean
): boolean;
function useWrappedToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle<P>>>, P>(
	items: T | T[],
	params: P,
	key: K,
	defaultToggle = true,
): (Omit<T, K> & Partial<Record<K, MosaicToggle>>)[] | boolean {
	const result = useMemo(() => {
		const isArray = Array.isArray(items);
		const itemsAsArray = isArray ? items : [items];

		const wrappedItems = itemsAsArray.map((item) => {
			return {
				...item,
				[key]: wrapToggle(item[key], params, defaultToggle),
			};
		});

		if (isArray) {
			return wrappedItems;
		}

		return wrappedItems[0];
	}, [defaultToggle, items, key, params]);

	/**
	 * Removing this redundant statement makes TS throw up.
	 * Maybe this can be solved with some "typeof useToggle" magic.
	 */
	if (Array.isArray(result)) {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		return useToggle(result, key);
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useToggle(result, key);
}

export default useWrappedToggle;
