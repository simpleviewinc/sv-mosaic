import { RGBAToHexA } from "@root/components/Field/FormFieldColor/colorUtils";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import type { RGBColor } from "react-color";

describe(__filename, () => {
	interface Test {
		input: RGBColor;
		result: string;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should convert a rgb color into a hexidecimal representation without alpha",
			args: {
				input: { r: 245, g: 92, b: 222 },
				result: "#f55cde",
			},
		},
		{
			name: "should convert a rgb color into a hexidecimal representation with alpha",
			args: {
				input: { r: 245, g: 92, b: 222, a: 0.5 },
				result: "#f55cde80",
			},
		},
	];

	testArray(tests, ({ input, result }) => expect(RGBAToHexA(input)).toBe(result));
});
