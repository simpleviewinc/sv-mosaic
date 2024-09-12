export const defaultAllowedProtocols = ["https", "http"];

export function sanitizeUrl(url?: string, allowedProtocols: string[] = defaultAllowedProtocols): string {
	if (!url) {
		return "";
	}

	const [defaultProtocol = ""] = allowedProtocols;

	for (const protocol of allowedProtocols) {
		if (url.substring(0, protocol.length + 3) === `${protocol}://`) {
			return url;
		}
	}

	return `${defaultProtocol}://${url}`;
}
