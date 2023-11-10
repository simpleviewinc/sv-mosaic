import { TimeTuple } from "@root/components/Field";

function matchTime(date: Date, time: Date | TimeTuple) {
	const [hr, min, sec, ms] = Array.isArray(time) ? time : [
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
		time.getMilliseconds()
	];

	date.setHours(hr, min, sec, ms);

	return date;
}

export default matchTime
