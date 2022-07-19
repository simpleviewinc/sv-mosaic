const sortDatesAsc = (arr: string[]): string[] => {
	return arr.sort(
		(a, b): number => new Date(a).getTime() - new Date(b).getTime());
}

const sortDatesDesc = (arr: string[]): string[] => {
	return arr.sort(
		(a, b): number => new Date(b).getTime() - new Date(a).getTime());
}

const randomIntFromInterval = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getMonthFromString = (mon: string): number => {
	return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1
}

const addQuotes = (word: string): string => {
	return "\"" + word + "\"";
}

const addComma = (words: string[]): string => {
	let result = ""
	const itemNumber = words.length;
	for (let i = 0; i < itemNumber; i++) {
		if (i == itemNumber - 1) {
			result = result + words[i];
		} else {
			result = result + words[i] + ", ";
		}
	}
	return result;
}

const isACorrentDateRange = (dates: string[], start: string, end: string): string[] => {
	const startDate = new Date(start).getTime();
	const endDate = new Date(end).getTime();
	const incorrectRange = [];
	for (const date of dates) {
		const current = new Date(date).getTime();
		if (current <= startDate && current >= endDate) {
			incorrectRange.push(current);
		}
	}
	return incorrectRange;
}

const randomNumber = (max: number): number => {
	return Math.floor(Math.random() * (max - 0 + 1) + 0);
}

const getDateFormatted = (date: Date) : string => {
	const dd = String(date.getDate()).padStart(2, "0");
	const mm = String(date.getMonth() + 1).padStart(2, "0");
	const yyyy = date.getFullYear();
	const dateFormatted = mm + "/" + dd + "/" + yyyy;
	return dateFormatted;
}

const generateRandomId = (length: number): string => {
	let newId = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		newId += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return newId;
}

export { sortDatesAsc, sortDatesDesc, randomIntFromInterval, getMonthFromString, addQuotes, addComma, isACorrentDateRange, randomNumber, getDateFormatted, generateRandomId }