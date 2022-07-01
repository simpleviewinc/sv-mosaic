const sortDatesAsc = (arr: string[]): string[] => {
	return arr.sort(
		(a, b): number => new Date(a).getTime() - new Date(b).getTime());
}

const sortDatesDesc = (arr: string[]): string[] => {
	return arr.sort(
		(a, b): number => new Date(b).getTime() - new Date(a).getTime());
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

const randomNumber = (max: number): number => {
	return Math.floor(Math.random() * (max - 0 + 1) + 0);
}

export { sortDatesAsc, sortDatesDesc, addQuotes, addComma, randomNumber }