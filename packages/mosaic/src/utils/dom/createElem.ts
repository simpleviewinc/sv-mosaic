type CreateElemParams<K extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[K]> & {
	appendTo?: HTMLElement;
	prependTo?: HTMLElement;
}

function createElem<K extends keyof HTMLElementTagNameMap>(tag: K, {
	appendTo,
	prependTo,
	...props
}: CreateElemParams<K> = {}): HTMLElementTagNameMap[K] {
	if (!document || !document.createElement) {
		throw new Error("Document is not available. This function should be run in a browser environment.");
	}

	const elem = document.createElement(tag);

	for (const [key, value] of Object.entries(props)) {
		elem[key] = value;
	}

	if (appendTo) {
		appendTo.append(elem);
	}

	if (prependTo) {
		prependTo.prepend(elem);
	}

	return elem;
}

export default createElem;
