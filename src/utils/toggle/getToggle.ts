import { MosaicToggle } from "@root/types";

function getToggle(toggle?: MosaicToggle, defaultToggle = true): boolean {
	const toggleDefined = toggle !== undefined ? toggle : defaultToggle;
	const conditions = Array.isArray(toggleDefined) ? toggleDefined : [toggleDefined];

	return conditions.every(condition => {
		if (typeof condition === "function") {
			return condition();
		} else {
			return condition;
		}
	});
}

export default getToggle;
