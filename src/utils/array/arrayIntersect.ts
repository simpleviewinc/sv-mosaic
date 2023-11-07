/**
 *
 * Creates an array returning items that are common between two arrays
 *
 * @param left The left array
 * @param right The right array
 * @returns The array containing common items
 */
function arrayIntersect<T>(left: T[], right: T[]): T[] {
	const intersection: T[] = [];

	for (const item of left) {
		if (right.includes(item)) {
			intersection.push(item);
		}
	}

	return intersection;
}

export default arrayIntersect;
