/**
 *
 * @param parts The parts to be joined together
 * @param separator How to join leading parts
 * @param and How to join the final two parts
 */

function joinAnd(parts: string[], separator = ", ", and = " and ") {
	if (parts.length < 3) {
		return parts.join(and);
	}

	const first = parts.slice(0, parts.length - 1).join(separator);
	const last = parts[parts.length - 1];

	return `${first}${and}${last}`;
}

export default joinAnd;
