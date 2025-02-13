import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";

import { transformScriptTags } from "@root/components/Field/FormFieldTextEditor/Extensions/Script";

describe(__filename, () => {
	interface Test {
		input: string;
		result: string;
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should transform any span elements with the correct data-type attribute to script tags",
			args: {
				input: "<div><span data-type=\"script\">alert(\"Test\");</span></div>",
				result: "<div><script>alert(\"Test\");</script></div>",
			},
		},
		{
			name: "should bail early with the input if no script tags are detected",
			args: {
				input: "<div>Test</div>",
				result: "<div>Test</div>",
			},
		},
		{
			name: "should skip any non-element based nodes",
			args: {
				input: "<div><span data-type=\"script\">Test</span>Test</div>",
				result: "<div><script>Test</script>Test</div>",
			},
		},
		{
			name: "should skip any elements that are not span elements",
			args: {
				input: "<div><div data-type=\"script\">Test</div>Test</div>",
				result: "<div><div data-type=\"script\">Test</div>Test</div>",
			},
		},
		{
			name: "should skip any span elements whose data-type attribute is not script",
			args: {
				input: "<div><span data-type=\"test\">Test</span><span data-type=\"script\">Test</span></div>",
				result: "<div><span data-type=\"test\">Test</span><script>Test</script></div>",
			},
		},
	];

	testArray(tests, ({ input, result }) => expect(transformScriptTags(input)).toBe(result));
});
