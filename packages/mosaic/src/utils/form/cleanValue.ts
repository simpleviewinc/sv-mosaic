import isPlainObject from "../object/isPlainObject";

export const cleanValue = (value: any) => {
	if (value === "" || (Array.isArray(value) && value.length === 0)) {
		return undefined;
	}

	if (isPlainObject(value) && !Object.values(value).filter(val => val !== undefined).length) {
		return undefined;
	}

	return value;
};

export default cleanValue;
