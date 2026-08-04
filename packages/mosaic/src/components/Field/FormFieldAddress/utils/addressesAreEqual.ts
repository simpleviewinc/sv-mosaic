import { arrayDifference } from "@root/utils/array";
import type { IAddress } from "../AddressTypes";

/**
 * Implements an algorithm to calculate whether or not two things
 * are equal addresses or not
 *
 * @param first The first address
 * @param second Another address
 * @returns Whether or not the addresses are considered equal
 */
function addressesAreEqual(first?: IAddress, second?: IAddress): boolean {
	// If they're the same object or both undefined, they're equal
	if (first === second) {
		return true;
	}

	// If either is undefined and the other is an object with all undefined
	// values, then they're considered equal
	if (
		first === undefined && Object.values(second).every(item => item === undefined) ||
		second === undefined && Object.values(first).every(item => item === undefined)
	) {
		return true;
	}

	// By now, if either one is undefined, they can't be equal
	if (!first || !second) {
		return false;
	}

	const typesAreEqual = (
		first.types === second.types ||
		!arrayDifference(
			first.types || [],
			second.types || [],
			(first, second) => first.value === second.value,
		).length
	);

	// For the string parts of the address, empty strings and
	// undefined are considered equal
	return (
		String(first.address1) === String(second.address1) &&
		String(first.address2) === String(second.address2) &&
		String(first.address3) === String(second.address3) &&
		String(first.city) === String(second.city) &&
		String(first.state?.value) === String(second.state?.value) &&
		String(first.postalCode) === String(second.postalCode) &&
		String(first.country?.value) === String(second.country?.value) &&
		typesAreEqual
	);
}

export default addressesAreEqual;
