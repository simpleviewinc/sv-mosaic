import { useMemo } from "react";
import { MosaicShow } from "@root/types";

import wrapShow from "./wrapShow";

function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T,
	params: P,
): (Omit<T, "show"> & { show?: MosaicShow })
function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T[],
	params: P,
): (Omit<T, "show"> & { show?: MosaicShow })[]
function useWrappedShow<T extends { show?: MosaicShow<P> }, P>(
	items: T | T[],
	params: P,
): (Omit<T, "show"> & { show?: MosaicShow }) | ((Omit<T, "show"> & { show?: MosaicShow })[]) {
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

	return result;
}

export default useWrappedShow;
