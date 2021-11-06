import testArray from "../../utils/testArray";
import * as assert from "assert";
import { useForm, actions } from "./formUtilsTest";
import { FieldDefProps } from "@root/components/Field";
import { generateLayout } from "./formUtils";

describe('Reducer logic', () => {
	// const { state, dispatch, events, registerFields } = useForm();

	// const fields = [
	// 	{
	// 		name: "text1",
	// 		label: "Simple Text",
	// 		type: "text",
	// 		inputSettings: {
	// 			maxCharacters: 20,
	// 		},
	// 		instructionText: 'testing',
	// 	},
	// ];

	// registerFields(fields);

	// const tests = [
	// 	{
	// 		name: 'Set field value',
	// 		args: {
	// 			data: state?.data?.text1,
	// 			result: 'abc'
	// 		}
	// 	},
	// ];

	// testArray(tests, async (test) => {
	// 	await dispatch(
	// 		actions.setFieldValue({
	// 			name: 'text1',
	// 			value: 'abc'
	// 		})
	// 	);
	// 	const result = state.data.text1;
	// 	assert.strictEqual(result, test.result);
	// });

	const fields = [
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
			type: "text"
		},
		{
			name: "text4",
			label: "Text that receives copy",
			type: "text"
		}
	] as FieldDefProps[];

	const sections = [
		{
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
			]
		},
		{
			fields: [
				// row 1
				[[], ["text2"], ["text3"]],
				// row 2
				[[], [], []],
				[[]],
			]
		}
	]

	const tests = [
		{
			name: 'Create layout with only fields',
			args: {
				type: 'fields',
				data: fields,
				result: [
					{
						fields: [[['text1']]]
					},
					{
						fields: [[['text2']]]
					},
					{
						fields: [[['text3']]]
					},
					{
						fields: [[['text4']]]
					},
				]
			}
		},
		{
			name: 'Ignore empty layouts',
			args: {
				type: 'sections',
				data: sections,
				result: [
					{
						fields: [
							[['text1'], ['text2'], ['text3']],
							[['text3'],['text4'],['text1']]
						]
					},
					{
						fields: [
							[['text2'], ['text3']],
						]
					},
				]
			}
		},
	];

	testArray(tests, test => {
		let result: unknown;
		test.type === 'fields' ?
			result = generateLayout({ fields })
			:
			result = generateLayout({ fields, sections })
		
		assert.deepStrictEqual(result, test.result);
	});

});