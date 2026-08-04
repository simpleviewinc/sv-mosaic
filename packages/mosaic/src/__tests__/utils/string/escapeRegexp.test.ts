import { escapeRegexp } from "@root/utils/string/escapeRegexp";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

describe(__filename, function () {
	interface Test {
		input: string;
		escaped: string;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should escape characters that have special meaning in a regular expression",
			args: {
				input: "T^h$i\\s .i*s +m?y( )s [tr]i{n|g}",
				escaped: "T\\^h\\$i\\\\s \\.i\\*s \\+m\\?y\\( \\)s \\[tr\\]i\\{n\\|g\\}",
			},
		},
		{
			name: "should not escape characters that are not special regex characters",
			args: {
				input: "My Test",
				escaped: "My Test",
			},
		},
	];

	testArray(tests, ({ input, escaped }) => {
		const result = escapeRegexp(input);
		expect(result).toBe(escaped);
	});
});
