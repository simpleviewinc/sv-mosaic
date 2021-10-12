import * as React from 'react';
import { ReactElement, useEffect, useMemo } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { useForm, actions } from "./formUtils";
import { validateEmail, validateSlow, required } from "./validators";

// Components
import Form from './Form';
import { FieldDefProps } from '@root/components/Field';

export default {
	title: 'Forms|Form',
	decorators: [withKnobs],
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					inputSettings: {
						maxCharacters: 20,
						value: state.data.text1, //THIS IS SUPPOSED TO BE DEFAULTVALUE
					},
					instructionText: 'testing',
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "textArea",
					helperText: state.data.text2,
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "checkbox",
					checked: [],
					options: [
						{
							label: "Label 1",
							value: "label_1"
						},
						{
							label: "Label 2",
							value: "label_2"
						},
						{
							label: "Label 3",
							value: "label_3"
						}
					],
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				},
			] as FieldDefProps[],
		[]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};

export const FormWithLayout = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: 'Instruction text text1',
					validators: [validateEmail, validateSlow],
					layout: { section: 0, row: 1, col: 0 }
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					instructionText: 'Instruction text text2',
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text",
					instructionText: 'Instruction text text3',
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text",
					instructionText: 'Instruction text text1'
				}
			] as FieldDefProps[],
		// [state.data.text2]
		[]
	);

	const sections = useMemo(() => [
		{
			title: "Section 1",
			description: "Description for section 1",
			fields: [
				// row 1
				[["text1"], ["text2"], ["text3"]],
				// row 2
				[["text3"], ["text4"], ["text1"]],
				[[]],
				// row 3
				[["text3"], ["text4"]]
			]
		}
	], [fields]);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form sections={sections} state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
}

export const CodesandboxExample = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Simple Text",
					type: "text",
					instructionText: 'testing',
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text2",
					label: "Text with validators and dynamic help",
					type: "text",
					help: state.data.text2,
					validators: [validateEmail, validateSlow]
				},
				{
					name: "text3",
					label: "Text that copies to the next input",
					type: "text"
					// onChange: function () {
					//   dispatch(actions.copyFieldToField({ from: "text3", to: "text4" }));
					// }
				},
				{
					name: "text4",
					label: "Text that receives copy",
					type: "text"
				}
			] as FieldDefProps[],
		// [state.data.text2]
		[]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};

export const PerformanceTest = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: 'testing',
			validators: [validateEmail, validateSlow]
		})
	}

	const fields = useMemo(
		() => hundredFields as FieldDefProps[],
		[]
	);

	useEffect(() => {
		dispatch(
			actions.setFieldValue({
				name: "text4",
				value: state.data.text3
			})
		);
	}, [state.data.text3]);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const setText1Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text1",
				value: "My New Value"
			})
		);
	};

	const setText2Value = function () {
		dispatch(
			actions.setFieldValue({
				name: "text2",
				value: "notanemail"
			})
		);
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<p>
					Here are some buttons that are not part of the form, but can change
					values in the form proving communication between in/out of the form.
					Notice that settext2 runs the validation after setting the value.
				</p>
				<button onClick={setText1Value}>Set Text1 Value</button>
				<button onClick={setText2Value}>Set Text2 Value</button>
			</div>
		</>
	);
};

export const SubmitExternalButtons = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

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
					validators: [validateEmail]
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

	const submitForm = () => {
		alert('Form submitted with the following data: ' + JSON.stringify(state.data, null, " "));
	};

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<button onClick={submitForm}>Submit</button>
		</>
	);
};

export const SubmitInternalButtons = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

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
					validators: [required, validateEmail]
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

	// const submitForm = () => {
	// 	alert('Form submitted with the following data: ' + JSON.stringify(state.data, null, " "));
	// };
	const submitForm = (data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	};

	// const formMetadata = useMemo(() => ({
	// 	onSubmit: submitForm
	// }), []);

	// const formMetadata = {
	// 	onSubmit: submitForm
	// };

	const formMetadata = useMemo(() => ({
		onSubmit: submitForm
	}), []);

	const onSubmit = React.useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, []);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				formMetadata={formMetadata}
				onSubmit={onSubmit}
			/>
		</>
	);
};
