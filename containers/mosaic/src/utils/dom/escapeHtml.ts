import { isElement } from "./guards";
import { mutateHtml } from "./mutateHtml";

export function escapeHtml(html: string, entity = "&nbsp"): string {
	return mutateHtml(html, ({ parent, siblings, text }) => {
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
			)
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;");

			const fragment = document.createRange().createContextualFragment(newText);
			text.replaceWith(fragment);
		}
	});
}
