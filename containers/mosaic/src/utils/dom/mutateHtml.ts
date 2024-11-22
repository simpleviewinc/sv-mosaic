import type { TraverseHtmlCallback } from "./traverseHtml";
import { traverseHtml } from "./traverseHtml";

export function mutateHtml(html: string, callback: TraverseHtmlCallback): string {
	const parser = new DOMParser();
	const dom = parser.parseFromString(html, "text/html");

	traverseHtml(dom.body, callback);

	return dom.body.innerHTML;
}
