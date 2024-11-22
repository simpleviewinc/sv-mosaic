import type { TraverseHtmlCallback } from "./traverseHtml";
import { traverseHtml } from "./traverseHtml";

type ReduceHtmlCallback<T> = (accumulator: T, params: Parameters<TraverseHtmlCallback>[0]) => T | undefined;

export function reduceHtml<T>(html: string, callback: ReduceHtmlCallback<T>, initialValue: T) {
	const parser = new DOMParser();
	const dom = parser.parseFromString(html, "text/html");

	let accumulator = initialValue;

	traverseHtml(dom.body, (props) => {
		const newValue = callback(accumulator, props);

		if (newValue !== undefined) {
			accumulator = newValue;
		}
	});

	return accumulator;
}
