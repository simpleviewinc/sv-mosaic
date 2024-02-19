import { useMemo } from "react";
import { MosaicToggle } from "@root/types";
import getToggle from "./getToggle";

/**
 * A way of conditionally rendering an item or items based on their
 * "show" condition.
 *
 * Takes a single item or array of items containing a show property that
 * is of type MosaicToggle. It returns either true or false if a single item
 * is provided, or the filtered array if an array is provided.
 *
 * @param items The item or items containing the show property
 */
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T[], key: K, defaultToggle?: boolean): T[];
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T, key: K, defaultToggle?: boolean): boolean;
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T | T[], key: K, defaultToggle = true): boolean | T[] {
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
