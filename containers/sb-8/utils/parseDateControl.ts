import { isValidDate } from "#mosaic/utils/date";

export function parseDateControl(input: string): string | Date | undefined {
	if (!input) {
		return;
	}

	const match = input.match(/^(?:(\d{4})-(\d{2})-(\d{2})-)?(\d{2})-(\d{2})?$/);
	if (!match) {
		return;
	}

	const parts = match.slice(1).filter(Boolean).map(Number);
	if (parts.length === 2) {
		return `${parts[0]}:${parts[1]}`;
	}

	const date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
	if (!isValidDate(date)) {
		return;
	}

	return date;
}
