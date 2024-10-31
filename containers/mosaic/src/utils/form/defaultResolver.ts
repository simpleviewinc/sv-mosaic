import cleanValue from "./cleanValue";

export function defaultResolver(value: any) {
	return { internalValue: value, value: cleanValue(value) };
}

export default defaultResolver;
