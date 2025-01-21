function toggle<T>(
	first: T[],
	second: T[],
	by: (item: T) => any = (item) => item,
): T[] {
	const result: T[] = [];

	for (const firstItem of first) {
		if (!second.some(secondItem => by(firstItem) === by(secondItem))) {
			result.push(firstItem);
		}
	}

	for (const secondItem of second) {
		if (!first.some(firstItem => by(secondItem) === by(firstItem))) {
			result.push(secondItem);
		}
	}

	return result;
}

export default toggle;
