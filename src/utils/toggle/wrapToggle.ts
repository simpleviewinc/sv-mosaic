import { MosaicToggle } from "@root/types";

function wrapToggle<T>(toggle: MosaicToggle<T>, params: T, defaultToggle = true): MosaicToggle {
	const toggleDefined = toggle !== undefined ? toggle : defaultToggle;
	const arr = Array.isArray(toggleDefined) ? toggleDefined : [toggleDefined];

	return arr.map((item) => {
		if (item instanceof Function) {
			return item(params);
		} else {
			return item;
		}
	});
}

export default wrapToggle;
