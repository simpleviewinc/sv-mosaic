import isPlainObject from "./isPlainObject";

interface MergeOptions<T, U> {
	by?: (first: T, second: U, key: PropertyKey) => boolean;
}

/**
 * Simple recursive merging technique for two objects,
 * including explicitely undefined values.
 */
function merge<T extends object, U extends object>(first: T, second: U, {
	by = (first, second, key) => (key in second),
}: MergeOptions<T, U> = {}): T & U {
	const firstEntries = Object.entries(first);
	const secondEntries = Object.entries(second);

	return {
		...Object.fromEntries(firstEntries.map(([key, value]) => {
			if (!by(first, second, key)) {
				return [key, value];
			}

			if (isPlainObject(value) && isPlainObject(second[key])) {
				return [key, merge(value, second[key])];
			}

			return [
				key,
				second[key],
			];
		})),
		...Object.fromEntries(secondEntries.filter(
			([secondKey]) => !firstEntries.map(([firstKey]) => firstKey).includes(secondKey),
		)),
	} as T & U;
}

export default merge;
