import { format, isValid, parse } from "date-fns";

function textIsValidDate(text: string, dateFormat: string) {
	const date = parse(text, dateFormat, new Date());
	return isValid(date) && format(date, dateFormat) === text;
}

export default textIsValidDate
