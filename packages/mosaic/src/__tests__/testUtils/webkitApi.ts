export const webkitOnlyApiKey = "webkitConvertPointFromNodeToPage";

function setWebkitApi(present: boolean, value?: unknown) {
	if (present) {
		(window as unknown as Record<string, unknown>)[webkitOnlyApiKey] = value;
	} else {
		Reflect.deleteProperty(window, webkitOnlyApiKey);
	}
}

/**
 * Runs `fn` with the WebKit-only API present, then restores the previous value.
 * Used to exercise the WebKit focus path in a jsdom (Blink/Gecko-like) run.
 * Async callbacks keep the API in place until the promise settles.
 */
export function withWebkitApi<T>(fn: () => T): T {
	const had = Object.prototype.hasOwnProperty.call(window, webkitOnlyApiKey);
	const previous = (window as unknown as Record<string, unknown>)[webkitOnlyApiKey];

	(window as unknown as Record<string, unknown>)[webkitOnlyApiKey] = () => ({});

	let result: T;

	try {
		result = fn();
	} catch (e) {
		setWebkitApi(had, previous);
		throw e;
	}

	if (result instanceof Promise) {
		return result.finally(() => setWebkitApi(had, previous)) as T;
	}

	setWebkitApi(had, previous);

	return result;
}
