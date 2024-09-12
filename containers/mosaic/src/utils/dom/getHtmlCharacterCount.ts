import { getTextLength } from "../string";
import { isElement } from "./guards";
import { reduceHtml } from "./reduceHtml";

function elementIsBlock(elem: HTMLElement): boolean {
	// Chromium browsers will not calculate computed
	// styles when the element is not inside the DOM.
	// So we append it to the body, get its display
	// type, then remove it.
	const clone = elem.cloneNode() as HTMLElement;
	document.body.appendChild(clone);

	const styles = window.getComputedStyle(clone, "");

	const result = styles && styles.display === "block";

	document.body.removeChild(clone);

	return result;
}

export function getHtmlCharacterCount(html: string): number {
	return reduceHtml(html, (acc, { index, parent, siblings, text, elem }) => {
		const previousElement = siblings[index - 1];
		const nextElement = siblings[index + 1];

		if (
			text &&
			text.textContent &&
			(
				!siblings.filter(isElement).length ||
				text.textContent.match(/[^\s]/) ||
				(
					previousElement && isElement(previousElement) && !elementIsBlock(previousElement) &&
					nextElement && isElement(nextElement) && !elementIsBlock(nextElement)
				)
			)
		) {
			const parentTagName = parent.tagName.toLowerCase();

			// Text content of any script or style tags don't count
			if (parentTagName !== "script" && parentTagName !== "style") {
				const container = document.createElement("div");
				container.appendChild(text.cloneNode());

				// Collapse whitespace to single spaces
				let textContent = container.innerHTML.replace(/\s+/g, " ");

				// Remove leading white space if it's the first
				// of it's siblings
				if (text === siblings[0]) {
					textContent = textContent.replace(/^\s+/g, "");
				}

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
					const returnValue = acc + (elementIsBlock(elem) ? 1 : 0);

					return returnValue;
				}
			}
		}
	}, 0);
}
