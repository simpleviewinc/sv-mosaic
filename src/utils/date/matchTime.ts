
function matchTime(date: Date, time: Date) {
	date.setHours(
		time.getHours(),
		time.getMinutes(),
		time.getSeconds(),
		time.getMilliseconds()
	);

	return date;
}

export default matchTime
