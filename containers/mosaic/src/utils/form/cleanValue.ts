export const cleanValue = (value: any) => {
	if (value === "" || (Array.isArray(value) && value.length === 0)) {
		return undefined;
	}

	return value;
};

export default cleanValue;
