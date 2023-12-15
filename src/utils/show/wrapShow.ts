import { MosaicShow } from "@root/types";

function wrapShow<T>(show: MosaicShow<T> = true, params: T): MosaicShow {
	const arr = Array.isArray(show) ? show : [show];

	return arr.map((item) => {

		if (item instanceof Function) {
			return item(params);
		} else {
			return item;
		}
	});
}

export default wrapShow;
