import { isElement, isTextNode } from "./guards";

export type TraverseHtmlCallback = (params: {
	node: Node;
	index: number;
	elem?: HTMLElement;
	text?: Text;
	parent: HTMLElement;
	siblings: ChildNode[];
}) => void;

export function traverseHtml(parent: HTMLElement, callback: TraverseHtmlCallback) {
	const children = Array.from(parent.childNodes);

	children.forEach((node, index) => {
		const elem = isElement(node) ? node : undefined;
		const text = isTextNode(node) ? node : undefined;

		callback({
			node,
			index,
			parent,
			elem,
			text,
			siblings: children,
		});

		if (elem) {
			traverseHtml(elem, callback);
		}
	});
}
