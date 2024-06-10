import { MosaicToggle } from "@root/types";

function getToggle(toggle?: MosaicToggle, defaultToggle = true): boolean {
	const toggleDefined = toggle !== undefined ? toggle : defaultToggle;
	const conditions = Array.isArray(toggleDefined) ? toggleDefined : [toggleDefined];

	const callback: (condition: boolean | (() => boolean)) => boolean = condition => {
		if (typeof condition === "function") {
			return condition();
		} else {
			return condition;
		}
	};

	if (defaultToggle) {
		return conditions.every(callback);
	}

	return conditions.some(callback);
}

export default getToggle;
