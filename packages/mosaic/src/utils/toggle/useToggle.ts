import { useMemo } from "react";
import type { MosaicToggle } from "@root/types";
import getToggle from "./getToggle";

/**
 * A way of conditionally rendering an item or items based on their
 * toggle condition.
 *
 * Takes a single item or array of items containing a toggle property that
 * is of type `MosaicToggle`. It returns either true or false if a single item
 * is provided, or the filtered array if an array is provided.
 *
 * If an array MosaicToggle is provided, the resulting toggle is based on whether
 * or not the `defaultToggle` property is true or false. If `true`, the resulting
 * toggle will be `true` if **all** of the evaluated array items are true. If `false`,
 * that will be inverted and the resulting toggle will be `true` if **at least one**
 * of the evaluated array items are true.
 *
 * @param items The item or items containing the show property
 * @param key The property that holds a valid toggle boolean/callback/array
 * @param defaultToggle What the result should fall back to when the toggle property is undefined. Default `true`.
 */
function useToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle>>>(items: T[], key: K, defaultToggle?: boolean): T[];
function useToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle>>>(items: T, key: K, defaultToggle?: boolean): boolean;
function useToggle<K extends keyof T, T extends Partial<Record<K, MosaicToggle>>>(items: T | T[], key: K, defaultToggle = true): boolean | T[] {
	const isArray = Array.isArray(items);

	const itemsAsArray = useMemo(() => isArray ? items : [items], [isArray, items]);

	const filteredItems = useMemo(() => itemsAsArray.filter((item) => {
		return getToggle(item[key], defaultToggle);
	}), [defaultToggle, itemsAsArray, key]);

	if (isArray) {
		return filteredItems;
	}

	return filteredItems.length > 0;
}

export default useToggle;
