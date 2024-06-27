function isTextNode(el: Node): el is Text {
	return el.nodeType === Node.TEXT_NODE;
}

function isElement(el: Node): el is HTMLElement {
	return el.nodeType === Node.ELEMENT_NODE;
}

function getElementTexts(el: Node): string[] {
	const texts: string[] = [];
	const children = Array.from(el.childNodes);

	for (let i = 0; i < children.length; i++) {
		const child = children[i];

		if (isTextNode(child)) {
			// Create a temporary container for the text node
			// so that we don't lost HTML entities whilst
			// collapsing white space.
			const container = document.createElement("div");
			container.appendChild(child.cloneNode());
			const textContent = container.innerHTML
				// Collapse whitespace to single spaces
				.replace(/\s+/g, " ")
				// Remove leading white space
				.replace(/^\s+/g, "");

			// Now we can parse any HTML entitites
			container.innerHTML = textContent;

			if (container.textContent) {
				texts.push(container.textContent);
			}

			continue;
		}

		if (isElement(child)) {
			if (child.tagName === "SCRIPT" || child.tagName === "STYLE") {
				continue;
			}

			// Block level elements that are not first
			// born are to be considered one character
			// regardless of their content.
			if (child.tagName !== "BODY" && i > 0) {
				// Chromium browsers will not calculate computed
				// styles when the element is not inside the DOM.
				// So we append it to the body, get its display
				// type, then remove it.

				// We know that child and therefore its clone is
				// an HTMLElement by now.
				const clone = child.cloneNode() as HTMLElement;
				document.body.appendChild(clone);
				const styles = window.getComputedStyle(clone, "");

				if (styles && styles.display === "block") {
					texts.push(" ");
				}

				document.body.removeChild(clone);
			}

			texts.push(...getElementTexts(child));
			continue;
		}
	}

	return texts;
}

export function getHtmlText(html: string): string {
	const doc = new DOMParser().parseFromString(html, "text/html");
	const texts = getElementTexts(doc);
	return texts.join("");
}
