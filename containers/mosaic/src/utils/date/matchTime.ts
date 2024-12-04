import type { TimeString, TimeTuple } from "@root/components/Field";
import { parseTime } from "./parseTime";

function matchTime(date: Date, time: Date | TimeTuple | TimeString) {
	const clone = new Date(date.getTime());
	const [hr, min, sec] =
		typeof time === "string"
			? parseTime(time)
			: Array.isArray(time) ? time
			: [
				time.getHours(),
				time.getMinutes(),
				time.getSeconds(),
			]
	;

	clone.setHours(hr, min, sec, 0);

	return clone;
}

export default matchTime;
