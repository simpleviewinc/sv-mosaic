import dateToTimeString from "@root/utils/date/dateToTimeString";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

describe(__filename, () => {
	type Test = {
		input: Date;
	} & ({
		result: string;
	} | {
		error: string;
	})

	const tests: TestDef<Test>[] = [
		{
			name: "should return a valid 24-hr time string from a given date object",
			args: {
				input: new Date(2025, 2, 31, 15, 31),
				result: "15:31",
			},
		},
		{
			name: "should return a valid 24-hr time with padded time parts",
			args: {
				input: new Date(2025, 2, 31, 3, 9),
				result: "03:09",
			},
		},
		{
			name: "should throw an error if the date object provided is invalid",
			args: {
				input: new Date("Foo"),
				error: "Date provided to dateToTimeString is invalid.",
			},
		},
	];

	testArray(tests, ({ input, ...rest }) => {
		if ("error" in rest) {
			expect(() => dateToTimeString(input)).toThrowError(rest.error);
		} else {
			expect(dateToTimeString(input)).toBe(rest.result);
		}
	});
});
