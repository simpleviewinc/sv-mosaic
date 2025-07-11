import { classnames } from "@root/utils/string";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

describe(__filename, function () {
	interface Test {
		input: Parameters<typeof classnames>;
		result: string;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should return a single classname",
			args: {
				input: ["foo"],
				result: "foo",
			},
		},
		{
			name: "should return multiple classnames separated by a string",
			args: {
				input: ["foo", "bar", "baz"],
				result: "foo bar baz",
			},
		},
		{
			name: "should omit a classname if the parameter is false",
			args: {
				input: ["foo", false, "baz"],
				result: "foo baz",
			},
		},
		{
			name: "should omit a classname if the parameter is undefined",
			args: {
				input: ["foo", undefined, "baz"],
				result: "foo baz",
			},
		},
	];

	testArray(tests, ({ input, result }) => {
		expect(classnames(...input)).toBe(result);
	});
});
