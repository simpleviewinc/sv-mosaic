import isValidDate from "./isValidDate";

function dateToTimeString(date: Date): string {
	if (!isValidDate(date)) {
		throw new Error("Date provided to dateToTimeString is invalid.");
	}

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	return `${hours}:${minutes}`;
}

export default dateToTimeString;
