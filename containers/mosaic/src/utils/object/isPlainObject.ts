function isPlainObject(value: unknown): value is Record<PropertyKey, unknown> {
	return Object.prototype.toString.call(value) === "[object Object]";
}

export default isPlainObject;
