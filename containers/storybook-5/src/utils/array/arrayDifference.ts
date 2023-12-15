/**
 * Constructs an array containing all of the items that exist in the left array but not in the right array.
 *
 * @param left The source array
 * @param right The comparison array
 * @returns An array containg the items that exist in the left array but not in the right array
 */
function arrayDifference<T>(left: T[], right: T[]): T[] {
	const difference: T[] = [];

	for (const item of left) {
		if (!right.includes(item)) {
			difference.push(item);
		}
	}

	return difference;
}

export default arrayDifference;
