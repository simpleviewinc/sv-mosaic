import { useMemo } from "react";
import { MosaicToggle } from "@root/types";

import wrapToggle from "./wrapToggle";
import useToggle from "./useToggle";

function useWrappedToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle<P> }, P>(
	items: T[],
	params: P,
	key: K,
	defaultToggle?: boolean
): (Omit<T, K> & { [key in K]?: MosaicToggle })[]
function useWrappedToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle<P> }, P>(
	items: T,
	params: P,
	key: K,
	defaultToggle?: boolean
): boolean
function useWrappedToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle<P> }, P>(
	items: T | T[],
	params: P,
	key: K,
	defaultToggle = true
): (Omit<T, K> & { [key in K]?: MosaicToggle })[] | boolean {
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
	}, [items, params]);

	/**
	 * Removing this redundant statement makes TS throw up.
	 * Maybe this can be solved with some "typeof useToggle" magic.
	 */
	if (Array.isArray(result)) {
		return useToggle(result, key);
	}

	return useToggle(result, key);
}

export default useWrappedToggle;
