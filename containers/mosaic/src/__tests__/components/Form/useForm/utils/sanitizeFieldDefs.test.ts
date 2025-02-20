import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import type { FieldDef, SectionDef } from "@root/components";

import sanitizeFieldDefs from "@root/components/Form/useForm/utils/sanitizeFieldDefs";

const fieldObjects: FieldDef[] = [
	{
		name: "field1",
		label: "Field 1",
		type: "text",
	},
	{
		name: "field2",
		label: "Field 2",
		type: "text",
	},
	{
		name: "field3",
		label: "Field 3",
		type: "text",
	},
	{
		name: "group1",
		label: "Group 1",
		type: "group",
	},
	{
		name: "group2",
		label: "Group 2",
		type: "group",
	},
];

describe(__dirname, () => {
	type Test = {
		fields: FieldDef[];
		sections?: SectionDef[];
	} & ({
		error?: string | false;
	})

	const tests: TestDef<Test>[] = [
		{
			name: "should not throw an error if all of the fields references in sections exist in the list of field defs",
			args: {
				fields: [
					fieldObjects[0],
					fieldObjects[1],
					fieldObjects[2],
				],
				sections: [
					{
						title: "Fields 2 and 3",
						fields: [[["field2", "field3"]]],
					},
				],
				error: false,
			},
		},
		{
			name: "should throw an error if any of the fields referenced in sections do not exist in the list of field defs",
			args: {
				fields: [
					fieldObjects[0],
					fieldObjects[1],
					fieldObjects[2],
				],
				sections: [
					{
						title: "Field 2 and Field 99",
						fields: [[["field2", "field99"]]],
					},
				],
				error: "Section references field `field99`, which does not exist in list of field definitions.",
			},
		},
	];

	testArray(tests, ({ fields, sections, error }) => {
		if (error === false) {
			expect(() => sanitizeFieldDefs(fields, sections)).not.toThrowError();
		} else if (typeof error === "string") {
			expect(() => sanitizeFieldDefs(fields, sections)).toThrowError(error);
		}
	});
});
