import type { TestDef } from "@simpleview/mochalib";

import { testArray } from "@simpleview/mochalib";

import type { MosaicLabelValue } from "@root/types";

import toggle from "@root/utils/array/toggle";

describe(`${__dirname} - Basic`, () => {
	interface Test {
		first: string[];
		second: string[];
		result: string[];
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should produce an array with all items if none are common between input arrays",
			args: {
				first: ["option1", "option2"],
				second: ["option3"],
				result: ["option1", "option2", "option3"],
			},
		},
		{
			name: "should produce an array with all items except those that exist in both arrays",
			args: {
				first: ["option1", "option2", "option3"],
				second: ["option3"],
				result: ["option1", "option2"],
			},
		},
	];

	testArray<Test>(tests, (test) => expect(toggle(test.first, test.second)).toEqual(test.result));
});

describe(`${__dirname} - With predicate`, () => {
	interface Test {
		first: MosaicLabelValue[];
		second: MosaicLabelValue[];
		result: MosaicLabelValue[];
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should produce an array with all items if none are common between input arrays based on a predicate",
			args: {
				first: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }],
				second: [{ value: "option3", label: "Option 3" }],
				result:  [
					{ value: "option1", label: "Option 1" },
					{ value: "option2", label: "Option 2" },
					{ value: "option3", label: "Option 3" },
				],
			},
		},
		{
			name: "should produce an array with all items if none are common between input arrays based on a predicate",
			args: {
				first: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }],
				second: [{ value: "option3", label: "Option 3" }],
				result:  [
					{ value: "option1", label: "Option 1" },
					{ value: "option2", label: "Option 2" },
				],
			},
		},
	];

	testArray<Test>(tests, (test) => expect(toggle(test.first, test.second, (item) => item.value)).toEqual(test.result));
});
