import { mutateHtml } from "./mutateHtml";
import { isTextContent } from "./isTextContent";

interface HtmlEntities {
	space?: string;
	lt?: string;
	gt?: string;
}

export function escapeHtml(html: string, {
	space = "&nbsp;",
	lt = "&lt;",
	gt = "&gt;",
}: HtmlEntities = {}): string {
	return mutateHtml(html, ({ index, parent, siblings, text }) => {
		const parentTagName = parent.tagName.toLowerCase();
		if (parentTagName === "script" || parentTagName === "style") {
			return;
		}

		if (
			text &&
			isTextContent(text, siblings[index - 1], siblings[index + 1])
		) {
			const newText = text.textContent.replace(
				/\s(?:\s+)/g,
				(a) => ` ${space.repeat(a.length - 1)}`,
			)
				.replace(/</g, lt)
				.replace(/>/g, gt);

			const fragment = document.createRange().createContextualFragment(newText);
			text.replaceWith(fragment);
		}
	});
}
