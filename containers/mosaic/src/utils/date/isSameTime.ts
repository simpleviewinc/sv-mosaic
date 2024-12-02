function isSameTime(first: Date, second: Date): boolean {
	return (
		first.getHours() === second.getHours() &&
		first.getMinutes() === second.getMinutes() &&
		first.getSeconds() === second.getSeconds() &&
		first.getMilliseconds() === second.getMilliseconds()
	);
}

export default isSameTime;
