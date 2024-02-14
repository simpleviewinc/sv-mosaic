export default function clamp(n: number, { min, max }: { min?: number; max?: number }) {
	if (min !== undefined && n < min ) {
		return min;
	}

	if (max !== undefined && n > max) {
		return max;
	}

	return n;
}
