import type { TimeTuple } from "@root/components/Field";

function matchTime(date: Date, time: Date | TimeTuple) {
	const clone = new Date(date.getTime());
	const [hr, min, sec] = Array.isArray(time) ? time : [
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
	];

	clone.setHours(hr, min, sec, 0);

	return clone;
}

export default matchTime;
