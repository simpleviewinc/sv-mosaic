/**
 * WebKit only announces a programmatically focused text field's label and
 * invalid state when the field's wrapper held focus first. Blink and Gecko
 * announce the control itself, and moving focus through the wrapper there
 * makes screen readers read the whole field contents before the control.
 *
 * Detected through the WebKit-only `webkitConvertPointFromNodeToPage` function
 * rather than the user agent string, so iPadOS Safari (which reports a macOS
 * user agent) is covered and Chrome's user agent is not.
 */
export function needsWrapperFocusForAnnouncement(win: Window | null | undefined): boolean {
	if (!win) {
		return false;
	}

	return typeof (win as unknown as Record<string, unknown>).webkitConvertPointFromNodeToPage === "function";
}
