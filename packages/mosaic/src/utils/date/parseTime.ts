import type { TimeString, TimeTuple } from "@root/components";

export function parseTime(time: TimeString | TimeTuple): TimeTuple {
	if (Array.isArray(time)) {
		return time;
	}

	const [first, last] = time.split(":");

	if (!first || first.length !== 2 || !last || last.length !== 2) {
		throw new Error(`${time} is not a valid 24hr time. It must contain hour and minute components separated by a colon.`);
	}

	const hr = Number(first);
	const min = Number(last);

	if (
		hr !== hr || hr < 0 || hr > 23 ||
		min !== min || min < 0 || min > 59
	) {
		throw new Error(`${time} is not a valid 24hr time`);
	}

	return [hr, min, 0, 0];
}
