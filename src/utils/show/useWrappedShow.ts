import { useMemo } from "react";
import { MosaicShow } from "@root/types";

import wrapShow from "./wrapShow";
import useShow from "./useShow";

function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T[],
	params: P,
): (Omit<T, "show"> & { show?: MosaicShow })[]
function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T,
	params: P,
): boolean
function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T | T[],
	params: P,
): (Omit<T, "show"> & { show?: MosaicShow })[] | boolean {
	const result = useMemo(() => {
		const isArray = Array.isArray(items);
		const itemsAsArray = isArray ? items : [items];

		const wrappedItems = itemsAsArray.map((item) => {
			return {
				...item,
				show: wrapShow(item.show, params),
			};
		});

		if (isArray) {
			return wrappedItems;
		}

		return wrappedItems[0];
	}, [items, params]);

	/**
	 * Removing this redundant statement makes TS throw up.
	 * Maybe this can be solved with some "typeof useShow" magic.
	 */
	if (Array.isArray(result)) {
		return useShow(result);
	}

	return useShow(result);
}

export default useWrappedShow;
