function defaultHasValue({ value }: { value: any; internalValue: any }): boolean {
	if (
		value === undefined ||
		(typeof value === "string" && !value.trim().length) ||
		(Array.isArray(value) && !value.length) ||
		value === false
	) {
		return false;
	}

	return true;
}

export default defaultHasValue;
