import format from "date-fns/format";
import isValid from "date-fns/isValid";
import parse from "date-fns/parse";

function textIsValidDate(text: string, dateFormat: string) {
	const date = parse(text, dateFormat, new Date());
	return isValid(date) && format(date, dateFormat) === text;
}

export default textIsValidDate
