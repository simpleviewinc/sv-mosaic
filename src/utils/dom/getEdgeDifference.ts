const edgeScrollMap = {
	top: "scrollTop",
	bottom: "scrollTop"
}

export function getViewportContentOffset(viewport: HTMLElement, target: HTMLElement, edge: keyof typeof edgeScrollMap, debug = 0) {
	const box1 = target.getBoundingClientRect();
	const box2 = viewport.getBoundingClientRect();

	const edge1 = box1[edge] + viewport[edgeScrollMap[edge]];
	const edge2 = box2[edge];


	if (debug) {
		console.log(viewport, target);
		console.log(box1, box2, box1[edge] - viewport[edgeScrollMap[edge]], box2[edge])
	}

	return Math.abs(edge1 - edge2);
}
