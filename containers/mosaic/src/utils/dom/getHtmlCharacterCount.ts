import { getTextLength } from "../string";
import { isElement } from "./guards";
import { traverseHtml } from "./traverseHtml";

export function getHtmlCharacterCount(html: string): number {
	const parser = new DOMParser();
	const dom = parser.parseFromString(html, "text/html");

	let result = 0;

	traverseHtml(dom.body, ({ parent, siblings, text, elem }) => {
		if (
			text &&
			text.textContent &&
			(!siblings.filter(isElement).length || text.textContent.match(/[^\s]/))
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

				result += getTextLength(container.textContent || "");
			}
		}

		if (elem) {
			const elemTagName = elem.tagName.toLowerCase();

			if (elemTagName !== "script" && elemTagName !== "style") {
				// Block level elements that are not first
				// born are to be considered one character
				// regardless of their content.
				if (elem !== siblings[0]) {
					// Chromium browsers will not calculate computed
					// styles when the element is not inside the DOM.
					// So we append it to the body, get its display
					// type, then remove it.
					const clone = elem.cloneNode() as HTMLElement;
					document.body.appendChild(clone);
					const styles = window.getComputedStyle(clone, "");

					if (styles && styles.display === "block") {
						result++;
					}

					document.body.removeChild(clone);
				}
			}
		}
	});

	return result;
}
