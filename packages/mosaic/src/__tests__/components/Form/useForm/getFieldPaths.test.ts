import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import type { FieldObj, FieldPath } from "@root/components";

import defaultHasValue from "@root/utils/form/defaultHasValue";
import { externalToInternalValue, internalToExternalValue } from "@root/utils/form/defaultValueTransform";
import getFieldPaths from "@root/components/Form/useForm/utils/getFieldPaths";

const fieldObjects: FieldObj[] = [
	{
		name: "field1",
		label: "Field 1",
		type: "text",
		externalToInternalValue,
		internalToExternalValue,
		hasValue: defaultHasValue,
		order: 1,
	},
	{
		name: "field2",
		label: "Field 2",
		type: "text",
		externalToInternalValue,
		internalToExternalValue,
		hasValue: defaultHasValue,
		order: 1,
	},
	{
		name: "field3",
		label: "Field 3",
		type: "text",
		externalToInternalValue,
		internalToExternalValue,
		hasValue: defaultHasValue,
		order: 1,
	},
	{
		name: "group1",
		label: "Group 1",
		type: "group",
		externalToInternalValue,
		internalToExternalValue,
		hasValue: defaultHasValue,
		order: 1,
	},
	{
		name: "group2",
		label: "Group 2",
		type: "group",
		externalToInternalValue,
		internalToExternalValue,
		hasValue: defaultHasValue,
		order: 1,
	},
];

describe(__dirname, () => {
	interface Test {
		fields: Record<string, FieldObj>;
		result: FieldPath[];
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should return a list of field paths for a single dimensional field store",
			args: {
				fields: {
					field1: fieldObjects[0],
					field2: fieldObjects[1],
					field3: fieldObjects[2],
				},
				result: [
					["field1"],
					["field2"],
					["field3"],
				],
			},
		},
		{
			name: "should return a list of field paths for each sub field in a group",
			args: {
				fields: {
					group1: {
						...fieldObjects[3],
						fields: {
							field1: fieldObjects[0],
							field2: fieldObjects[1],
						},
					},
					field3: fieldObjects[2],
				},
				result: [
					["group1"],
					["group1", "field1"],
					["group1", "field2"],
					["field3"],
				],
			},
		},
		{
			name: "should return a list of field paths for fields in deeply nested groups",
			args: {
				fields: {
					group1: {
						...fieldObjects[3],
						fields: {
							field1: fieldObjects[0],
							field2: fieldObjects[1],
							group2: {
								...fieldObjects[4],
								fields: {
									field3: fieldObjects[2],
								},
							},
						},
					},
				},
				result: [
					["group1"],
					["group1", "field1"],
					["group1", "field2"],
					["group1", "group2"],
					["group1", "group2", "field3"],
				],
			},
		},
	];

	testArray(tests, ({ fields, result }) => expect(getFieldPaths(fields)).toStrictEqual(result));
});
