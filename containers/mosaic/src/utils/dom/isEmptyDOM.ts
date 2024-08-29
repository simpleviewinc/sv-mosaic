const blockLevels = [
	"block",
	"flex",
	"grid",
];

function isTextNode(el: Node): el is Text {
	return el.nodeType === Node.TEXT_NODE;
}

function isElement(el: Node): el is HTMLElement {
	return el.nodeType === Node.ELEMENT_NODE;
}

export function isEmptyDOM(parent: HTMLElement): boolean {
	if (parent.textContent.length) {
		return false;
	}

	const children = Array.from(parent.childNodes);
	if (!children.length) {
		return true;
	}

	const counters = {
		text: 0,
		totalElements: 0,
		inlineElements: 0,
		blockElements: 0,
	};

	for (let i = 0; i < children.length; i++) {
		const node = children[i];

		if (isElement(node)) {
			if (!isEmptyDOM(node)) {
				return false;
			}

			counters.totalElements++;

			const display = window.getComputedStyle(node, null).display;

			if (blockLevels.includes(display)) {
				counters.blockElements++;
			} else {
				counters.inlineElements++;
			}
		}

		if (isTextNode(node)) {
			counters.text++;
		}
	}

	if (counters.text) {
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
