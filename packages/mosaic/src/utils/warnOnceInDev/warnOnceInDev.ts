const warnedKeys = new Set<string>();

/**
 * Logs `console.warn` once per session (module lifetime) for each distinct `key`.
 * No-op when `NODE_ENV === "production"`.
 */
function warnOnceInDev(key: string, message: string) {
	if (process.env.NODE_ENV === "production") {
		return;
	}

	if (warnedKeys.has(key)) {
		return;
	}

	warnedKeys.add(key);
	console.warn(message);
}

export default warnOnceInDev;
