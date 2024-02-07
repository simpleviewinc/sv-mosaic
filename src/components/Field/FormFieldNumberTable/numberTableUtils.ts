import { Row, Col } from "./FormFieldNumberTableTypes";

export const rows: Row[] = [
	{ name: "2023_02_10", title: "Shoulder Before" },
	{ name: "2023_02_11", title: "Day 1", subtitle: "Thu, Jan 05 2023" },
	{ name: "2023_02_12", title: "Day 2", subtitle: "Fri, Jan 06 2023" },
	{ name: "2023_02_13", title: "Day 3", subtitle: "Sat, Jan 07 2023" },
];

export const columns: Col[] = [
	{ name: "single", title: "Single" },
	{ name: "double", title: "Double" },
	{ name: "queen", title: "Queen" },
	{ name: "king", title: "King" },
	{ name: "suite", title: "Suite" },
	{ name: "any", title: "Any" },
];

export const numberTableDefaultValue = {
	"2023_02_10": {
		single: "12",
		double: "13",
		queen: "14",
		king: "15",
		suite: "16",
		any: "17",
	},
	"2023_02_11": {
		single: "18",
		double: "19",
		queen: "20",
		king: "21",
		suite: "22",
		any: "23",
	},
	"2023_02_12": {
		single: "12",
		double: "13",
		queen: "14",
		king: "15",
		suite: "16",
		any: "20",
	},
	"2023_02_13": {
		single: "1",
		double: "1",
		queen: "1",
		king: "1",
		suite: "1",
		any: "1",
	},
};

export const isValidRowCol = (rowCol: string, rowsCols: Col[] | Row[]) => {
	return rowsCols.map(rowValue => rowValue.name).includes(rowCol);
};
