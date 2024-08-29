import { isElement, isTextNode } from "./guards";

type TraverseHtmlCallback = (params: {
	node: Node;
	elem?: HTMLElement;
	text?: Text;
	parent: HTMLElement;
	siblings: ChildNode[];
}) => void;

export function traverseHtml(parent: HTMLElement, callback: TraverseHtmlCallback) {
	const children = Array.from(parent.childNodes);

	for (let i = 0; i < children.length; i++) {
		const node = children[i];

		const elem = isElement(node) ? node : undefined;
		const text = isTextNode(node) ? node : undefined;

		callback({
			node: node,
			parent,
			elem,
			text,
			siblings: children,
		});

		if (elem) {
			traverseHtml(elem, callback);
		}
	}
}
