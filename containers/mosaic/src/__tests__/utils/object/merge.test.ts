import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import merge from "@root/utils/object/merge";

describe(__dirname, () => {
	interface Profile {
		name?: string;
		age?: number;
		size?: {
			height?: number;
			weight?: number;
		};
	}

	interface Test {
		first: Profile;
		second: Profile;
		result: Profile;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should merge two objects with defined values",
			args: {
				first: {
					name: "George",
					age: 23,
				},
				second: {
					name: "Lance",
				},
				result: {
					name: "Lance",
					age: 23,
				},
			},
		},
		{
			name: "should merge two objects where the latter has explicit undefined values",
			args: {
				first: {
					name: "George",
					age: 23,
				},
				second: {
					age: undefined,
				},
				result: {
					name: "George",
					age: undefined,
				},
			},
		},
		{
			name: "should merge two objects recursively where nested properties are both objects",
			args: {
				first: {
					name: "George",
					size: {
						height: 185,
						weight: 90,
					},
				},
				second: {
					size: {
						weight: 95,
					},
				},
				result: {
					name: "George",
					size: {
						height: 185,
						weight: 95,
					},
				},
			},
		},
		{
			name: "should override a nested object with undefined value",
			args: {
				first: {
					name: "George",
					size: {
						height: 185,
						weight: 90,
					},
				},
				second: {
					size: undefined,
				},
				result: {
					name: "George",
					size: undefined,
				},
			},
		},
		{
			name: "should merge nested objects and override nested properties",
			args: {
				first: {
					name: "George",
					size: {
						height: 185,
						weight: 90,
					},
				},
				second: {
					size: {
						height: undefined,
					},
				},
				result: {
					name: "George",
					size: {
						height: undefined,
						weight: 90,
					},
				},
			},
		},
		{
			name: "should merge items from the second object into first object where their key does not exist",
			args: {
				first: {
					size: {
						height: 185,
						weight: 90,
					},
				},
				second: {
					name: "George",
				},
				result: {
					name: "George",
					size: {
						height: 185,
						weight: 90,
					},
				},
			},
		},
	];

	testArray<Test>(tests, (test) => expect(merge(test.first, test.second)).toEqual(test.result));
});
