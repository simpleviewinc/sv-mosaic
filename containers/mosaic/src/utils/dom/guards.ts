export function isTextNode(el: Node): el is Text {
	return el.nodeType === Node.TEXT_NODE;
}

export function isElement(el: Node): el is HTMLElement {
	return el.nodeType === Node.ELEMENT_NODE;
}
