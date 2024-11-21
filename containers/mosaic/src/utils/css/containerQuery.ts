import { BREAKPOINTS, CONTAINERS } from "@root/theme/theme";

/**
 * Helper to construct a media query. Defaults to a min-width query
 * if the first parameter is a valid breakpoint. Otherwise the first
 * parameter is the full media query to use
 *
 * @param minWidth Either a valid breakpoint for minimum width, or an entire media query
 * @param containerName If applicable, the container name to target
 */
function containerQuery(query: (keyof typeof BREAKPOINTS | string), containerName?: keyof typeof CONTAINERS): string;
function containerQuery(query: string, containerName = "") {
	const resolvedQuery = Object.keys(BREAKPOINTS).includes(query) ? `(min-width: ${BREAKPOINTS[query]})` : query;

	return `@container ${containerName ? `${CONTAINERS[containerName]} ` : ""}${resolvedQuery}`;
}

export default containerQuery;
