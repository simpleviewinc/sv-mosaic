import { isElement, isTextNode } from "./guards";
import { isBlockElement } from "./isBlockElement";

const voidElements = [
	"embed",
	"hr",
	"img",
	"input",
	"link",
];

export function isEmptyDOM(parent: HTMLElement): boolean {
	if (parent.textContent.length) {
		return false;
	}

	const children = Array.from(parent.childNodes);
	if (!children.length) {
		return true;
	}

	const counters = {
		content: 0,
		totalElements: 0,
		inlineElements: 0,
		blockElements: 0,
	};

	for (let i = 0; i < children.length; i++) {
		const node = children[i];

		if (isElement(node)) {
			if (voidElements.includes(node.tagName.toLowerCase())) {
				counters.content++;
				continue;
			}

			if (!isEmptyDOM(node)) {
				return false;
			}

			counters.totalElements++;

			if (isBlockElement(node)) {
				counters.blockElements++;
			} else {
				counters.inlineElements++;
			}
		}

		if (isTextNode(node)) {
			counters.content++;
		}
	}

	if (counters.content) {
		return false;
	}

	if (counters.totalElements === counters.inlineElements) {
		return true;
	}

	if (counters.totalElements > 1 && counters.blockElements) {
		return false;
	}

	return true;
}
