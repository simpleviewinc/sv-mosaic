import * as assert from "assert";
import type { TestDef } from "@simpleview/mochalib";
import { testArray } from "@simpleview/mochalib";
import type { FieldDef } from "@root/components/Field";
import { generateLayout } from "@root/components/Form/Layout/layoutUtils";
import type { SectionDef } from "@root/components/Form";

type Test = ({
	type: "fields";
	data: FieldDef[];
} | {
	type: "sections";
	data: SectionDef[];
}) & {
	result: SectionDef[];
};

describe("Layout logic", () => {
	const fields: FieldDef[] = [
		{
			name: "text1",
			label: "Simple Text",
			type: "text",
		},
		{
			name: "text2",
			label: "Text with validators and dynamic help",
			type: "text",
		},
		{
			name: "text3",
			label: "Text that copies to the next input",
			type: "text",
		},
		{
			name: "text4",
			label: "Text that receives copy",
			type: "text",
		},
	];

	const sections = [
		{
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
			],
		},
		{
			fields: [
				// row 1
				[[], ["text2"], ["text3"]],
				// row 2
				[[], [], []],
				[[]],
			],
		},
	];

	const tests: TestDef<Test>[] = [
		{
			name: "Create layout with only fields",
			args: {
				type: "fields",
				data: fields,
				result: [
					{
						fields: [[["text1"]], [["text2"]], [["text3"]], [["text4"]]],
					},
				],
			},
		},
		{
			name: "Ignore empty positions",
			args: {
				type: "sections",
				data: sections,
				result: [
					{
						fields: [
							[["text1"], ["text2"], ["text3"]],
							[["text3"], ["text4"], ["text1"]],
						],
					},
					{
						fields: [
							[[], ["text2"], ["text3"]],
						],
					},
				],
			},
		},
		{
			name: "No sections",
			args: {
				type: "sections",
				data: [
					{
						fields: [
							// row 1
							[[], ["text1"], []],
							// row 2
							[[], [], []],
							[[]],
						],
					},
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						],
					},
				],
				result: [
					{
						fields: [
							[[], ["text1"], []],
						],
					},
					{
						fields: [],
					},
				],
			},
		},
	];

	testArray(tests, test => {
		const result = test.type === "fields" ?
			generateLayout({ fields }) :
			generateLayout({ fields, sections: test.data as SectionDef[] });

		assert.deepStrictEqual(result, test.result);
	});
});
