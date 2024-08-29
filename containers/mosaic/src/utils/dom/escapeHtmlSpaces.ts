import { traverseHtml } from "./traverseHtml";
import { isElement } from "./guards";

export function escapeHtmlSpaces(html: string, entity = "&nbsp"): string {
	const parser = new DOMParser();
	const dom = parser.parseFromString(html, "text/html");

	traverseHtml(dom.body, ({ parent, siblings, text }) => {
		const parentTagName = parent.tagName.toLowerCase();
		if (parentTagName === "script" || parentTagName === "style") {
			return;
		}

		const elementSiblings = siblings.filter(isElement);
		if (
			text &&
			text.textContent &&
			(text.textContent.match(/[^\s]/) || !elementSiblings.length)
		) {
			const newText = text.textContent.replace(
				/\s(?:\s+)/g,
				(a) => ` ${entity.repeat(a.length - 1)}`,
			);
			const fragment = document.createRange().createContextualFragment(newText);
			text.replaceWith(fragment);
		}
	});

	return dom.body.innerHTML;
}
