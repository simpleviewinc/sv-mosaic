import { MosaicToggle } from "@root/types";

function wrapToggle<T>(show: MosaicToggle<T> = true, params: T): MosaicToggle {
	const arr = Array.isArray(show) ? show : [show];

	return arr.map((item) => {

		if (item instanceof Function) {
			return item(params);
		} else {
			return item;
		}
	});
}

export default wrapToggle;
