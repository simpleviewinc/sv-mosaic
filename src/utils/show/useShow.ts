import { MosaicShow } from "@root/types";

/**
 * A way of conditionally rendering an item or items based on their
 * "show" condition.
 *
 * Takes a single item or array of items containing a show property that
 * is of type MosaicShow. It returns either true or false if a single item
 * is provided, or the filtered array if an array is provided.
 *
 * @param items The item or items containing the show property
 */
function useShow<T extends { show?: MosaicShow }>(items: T[]): T[]
function useShow<T extends { show?: MosaicShow }>(items: T): boolean
function useShow<T extends { show?: MosaicShow }>(items: T | T[]): boolean | T[] {
	const isArray = Array.isArray(items);
	const itemsAsArray = isArray ? items : [items];

	const filteredItems = itemsAsArray.filter(({ show = true }) => {
		const conditions = Array.isArray(show) ? show : [show];

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

export default useShow;
