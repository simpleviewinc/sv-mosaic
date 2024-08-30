import { isElement, isTextNode } from "./guards";

export type TraverseHtmlCallback = (params: {
	node: Node;
	elem?: HTMLElement;
	text?: Text;
	parent: HTMLElement;
	siblings: ChildNode[];
}) => void;

export function traverseHtml(parent: HTMLElement, callback: TraverseHtmlCallback) {
	const children = Array.from(parent.childNodes);

	children.forEach((node) => {
		const elem = isElement(node) ? node : undefined;
		const text = isTextNode(node) ? node : undefined;

		callback({
			node,
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
