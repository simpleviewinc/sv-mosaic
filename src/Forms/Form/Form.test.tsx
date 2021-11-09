import * as React from 'react';
import { render, cleanup, fireEvent, screen, findByText } from '@testing-library/react';
import testArray from "../../utils/testArray";
import * as assert from "assert";
import { useForm, actions, generateLayout } from "./formUtils";
import { FieldDefProps } from "@root/components/Field";
import Form from './Form';
import { useCallback, useMemo } from 'react';

afterEach(cleanup);

describe('Layout logic', () => {
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
			name: 'Ignore empty positions',
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
		{
			name: 'No sections',
			args: {
				type: 'sections',
				data: [
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						]
					},
					{
						fields: [
							// row 1
							[[], [], []],
							// row 2
							[[], [], []],
							[[]],
						]
					}
				],
				result: [
					{
						fields: []
					},
					{
						fields: []
					},
				]
			}
		}
	];

	testArray(tests, test => {
		let result: unknown;
		test.type === 'fields' ?
			result = generateLayout({ fields })
			:
			result = generateLayout({ fields, sections: test.data })
		
		assert.deepStrictEqual(result, test.result);
	});
});

const FormExample = () => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
				},
				{
					name: "text2",
					label: "Email",
					type: "text",
				},
				{
					name: "text3",
					label: "Age",
					type: "text",
				},
				{
					name: "text4",
					label: "City",
					type: "text"
				}
			] as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const changeValue = (field, newValue) => {
		dispatch(
			actions.setFieldValue({
				name: field,
				value: newValue,
				validate: false,
			})
		);
	}

	// const submitForm = useCallback((data) => {
	// 	alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	// }, [state.validForm]);

	// useMemo(() => {
	// 	registerOnSubmit(submitForm);
	// }, [submitForm, registerOnSubmit]);


	return (
		<>
			<div>{JSON.stringify(state.data, null, "  ")}</div>
			<Form
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
			/>
			<button onClick={() => changeValue('text1', 'abc')}>Change text1 value</button>
			<button onClick={() => changeValue('text2', 'def')}>Change text2 value</button>
		</>
	);
};

describe('Reducer logic', () => {
	it('Set value to field through buttons', async () => {
		const { getByText, findByText } = render(<FormExample/>);
		const changeText1 = getByText('Change text1 value');
		const changeText2 = getByText('Change text2 value');

		fireEvent.click(changeText1);
		const text1Data = await findByText(`"text1": "abc"`, {exact: false});
		expect(text1Data.innerHTML).toEqual('{\n  "text1": "abc"\n}');

		fireEvent.click(changeText2);
		const text2Data = await findByText(`"text2": "def"`, {exact: false});
		expect(text2Data.innerHTML).toEqual('{\n  "text1": "abc",\n  "text2": "def"\n}');
	});

	it('Set value to field through typing', async () => {
		const { getByLabelText, findByText } = render(<FormExample/>);
		const fullNameInput = getByLabelText('Full Name');

		fireEvent.change(fullNameInput, { target: { value: 'abc'}});
		const text1Data = await findByText(`"text1": "abc"`, {exact: false});
		expect(text1Data.innerHTML).toEqual('{\n  "text1": "abc"\n}');
	});
});