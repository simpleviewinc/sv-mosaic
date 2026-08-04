import cleanValue from "./cleanValue";

export function externalToInternalValue(value: any) {
	return value;
}

export function internalToExternalValue(value: any) {
	return cleanValue(value);
}
