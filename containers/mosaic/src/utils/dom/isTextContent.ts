import { isElement } from "./guards";
import { isBlockElement } from "./isBlockElement";

export function isTextContent(text: Text, previous?: ChildNode, next?: ChildNode): boolean {
	const previousIsBlock = previous && isElement(previous) && isBlockElement(previous);
	const nextIsBlock = next && isElement(next) && isBlockElement(next);
	const isBetweenBlocks = previousIsBlock && nextIsBlock;

	return text.textContent && !isBetweenBlocks;
}
