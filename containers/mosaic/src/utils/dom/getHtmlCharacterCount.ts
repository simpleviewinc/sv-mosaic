import { getTextLength } from "../string";
import { isBlockElement } from "./isBlockElement";
import { isTextContent } from "./isTextContent";
import { reduceHtml } from "./reduceHtml";

export function getHtmlCharacterCount(html: string): number {
	return reduceHtml(html, (acc, { index, parent, siblings, text, elem }) => {
		if (
			text &&
			isTextContent(text, siblings[index - 1], siblings[index + 1])
		) {
			const parentTagName = parent.tagName.toLowerCase();

			// Text content of any script or style tags don't count
			if (parentTagName !== "script" && parentTagName !== "style") {
				const container = document.createElement("div");
				container.appendChild(text.cloneNode());

				// Collapse whitespace to single spaces
				const textContent = container.innerHTML.replace(/\s+/g, " ");

				// Now we can parse any HTML entitites
				container.innerHTML = textContent;

				return acc + getTextLength(container.textContent || "");
			}
		}

		if (elem) {
			const elemTagName = elem.tagName.toLowerCase();

			if (elemTagName !== "script" && elemTagName !== "style") {
				// Block level elements that are not first
				// born are to be considered one character
				// regardless of their content.
				if (elem !== siblings[0]) {
					const returnValue = acc + (isBlockElement(elem) ? 1 : 0);

					return returnValue;
				}
			}
		}
	}, 0);
}
