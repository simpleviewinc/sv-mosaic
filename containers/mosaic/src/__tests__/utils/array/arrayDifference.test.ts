import { testArray, type TestDef } from "@simpleview/mochalib";
import { arrayDifference } from "@root/utils/array";

describe(__dirname, () => {
	interface Test {
		first: any[];
		second: any[];
		by?: (first: any, second: any) => boolean;
		result: any[];
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should return items that appear in first array but not the second",
			args: {
				first: ["cat", "dog", "rabbit"],
				second: ["dog", "cat"],
				result: ["rabbit"],
			},
		},
		{
			name: "should return items that appear in second array but not the first",
			args: {
				first: ["cat", "dog"],
				second: ["dog", "cat", "squirrel"],
				result: ["squirrel"],
			},
		},
		{
			name: "should return items that appear one array but not the other",
			args: {
				first: ["cat", "dog", "toad"],
				second: ["cow", "dog", "cat", "squirrel"],
				result: ["toad", "cow", "squirrel"],
			},
		},
		{
			name: "should return items that appear one array but not the other by comparing them with a custom function",
			args: {
				first: [
					{ label: "physical", value: "Physical" },
					{ label: "shipping", value: "Shipping" },
				],
				second: [
					{ label: "physical", value: "Physical" },
				],
				by: (first, second) => (first.value === second.value),
				result: [{ label: "shipping", value: "Shipping" }],
			},
		},
	];

	testArray(tests, (test) => expect(arrayDifference(test.first, test.second, test.by)).toStrictEqual(test.result));
});
