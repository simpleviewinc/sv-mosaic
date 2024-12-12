/**
 * Constructs an array containing the difference between the given arrays
 *
 * @param array1 The source array
 * @param array2 The comparison array
 * @returns An array containg the items that exist in either array1 but not array2 and vise versa
 */
function arrayDifference<T>(array1: T[], array2: T[], by: (first: T, second: T) => boolean = (first, second) => (first === second)): T[] {
	const set1 = new Set(array1);
	const set2 = new Set(array2);

	const difference1 = [...array1].filter(item => ![...set2].find(innerItem => by(item, innerItem)));
	const difference2 = [...array2].filter(item => ![...set1].find(innerItem => by(item, innerItem)));

	const result = [...difference1, ...difference2];

	return result;
}

export default arrayDifference;
