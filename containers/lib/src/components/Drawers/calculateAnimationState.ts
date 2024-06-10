/**
 * Calculates the animation state of each drawer based on the booleans array and whether the system is animating
 */
export default function calculateAnimationState(
	bools: boolean[],
	animating: boolean,
): string[] {
	if (bools.length === 0) {
		return [];
	}

	const lastValue = bools[bools.length - 1];

	return bools.map((val, i) => {
		const isLastValue = i === bools.length - 1;
		const isSecondToLastValue = i === bools.length - 2;

		const className =
		// If we are the last value and false and animating, the only time this happens is if we are closing
		isLastValue && val === false && animating
			? "closing"
			: // If we're the last value and true, then we're animating in
			isLastValue && val === true && animating
				? "opening"
				: // If we're not opening, and no closing, then we're just open
				isLastValue && val === true
					? "open"
					: // If we are the second to last value, and the last value is true then it's opening, and therefore we're stacking
					isSecondToLastValue && lastValue === true && animating
						? "stacking"
						: // If w are the second to last value, the last value is false, then it's closing, and therefore we're unstacking
						isSecondToLastValue && lastValue === false && animating
							? "unstacking"
							: // All other cases accounted for, we must be stacked
							"stacked";
		return className;
	});
}
