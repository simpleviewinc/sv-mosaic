import type merge from "lodash/fp/mergeWith";

const mergeWithUndefined: Parameters<typeof merge>[0] = (objValue, srcValue, key, obj) => {
	if (objValue !== srcValue && typeof srcValue === "undefined") {
		return {
			...obj,
			[key]: srcValue,
		};
	}
};

export default mergeWithUndefined;
