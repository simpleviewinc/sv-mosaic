import { MosaicToggle } from "@root/types";

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
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T[], key: K): T[]
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T, key: K): boolean
function useToggle<K extends keyof T, T extends { [key in K]?: MosaicToggle }>(items: T | T[], key: K): boolean | T[] {
	const isArray = Array.isArray(items);
	const itemsAsArray = isArray ? items : [items];

	const filteredItems = itemsAsArray.filter((item) => {
		const toggle = item[key] !== undefined ? item[key] : true;
		const conditions = Array.isArray(toggle) ? toggle : [toggle];

		return conditions.every(condition => {
			if (typeof condition === "function") {
				return condition();
			} else {
				return condition;
			}
		});

	});

	if (isArray) {
		return filteredItems;
	}

	return filteredItems.length > 0;
}

export default useToggle;
