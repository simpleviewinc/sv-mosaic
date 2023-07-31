function validateDate(date: Date | null) {
	if (!date) {
		return;
	}

	const timestamp = date.getTime();
	const isInvalidDate = timestamp !== timestamp;

	if (isInvalidDate) {
		return;
	}

	return date;
}

export default validateDate;
