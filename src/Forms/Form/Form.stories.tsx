import * as React from 'react';
import { ReactElement, useEffect, useMemo, useState, useCallback } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import { useForm, actions } from "./formUtils";
import { validateEmail, validateSlow, required } from "./validators";

// Components
import Form from './Form';
import { FieldDefProps } from '@root/components/Field';
import Modal from '@root/components/Modal';
import { TextFieldProps } from '@root/forms/FormFieldText';
import { FormFieldCheckboxProps } from '@root/forms/FormFieldCheckbox';

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
					name: "textField",
					label: "Simple Text",
					type: "text",
				},
				{
					name: "textArea",
					label: "Text Area",
					type: "textArea",
				},
				{
					name: "check",
					label: "Checkbox",
					type: "checkbox",
					inputSettings: {
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
				},
				{
					name: "chipSelect",
					label: "Chip single select",
					type: "chip",
					inputSettings: {
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
				},
				{
					name: "dropdownSingle",
					label: "Dropdown single select",
					type: "dropdown",
					inputSettings: {
						options: [
							{ title: 'The Shawshank Redemption', year: 1994 },
							{ title: 'The Godfather', year: 1972 },
							{ title: 'The Godfather: Part II', year: 1974 },
							{ title: 'The Dark Knight', year: 2008 },
							{ title: '12 Angry Men', year: 1957 },
							{ title: "Schindler's List", year: 1993 },
							{ title: 'Pulp Fiction', year: 1994 },
							{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
							{ title: 'The Good, the Bad and the Ugly', year: 1966 },
							{ title: 'Fight Club', year: 1999 },
							{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
							{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
							{ title: 'Forrest Gump', year: 1994 },
							{ title: 'Inception', year: 2010 },
							{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
							{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
							{ title: 'Goodfellas', year: 1990 },
							{ title: 'The Matrix', year: 1999 },
							{ title: 'Seven Samurai', year: 1954 },
							{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
							{ title: 'City of God', year: 2002 },
							{ title: 'Se7en', year: 1995 },
						],
					},
				},
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					inputSettings: {
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
					}
				},
				{
					name: 'toggleSwitch',
					label: 'Toggle field',
					type: 'toggleSwitch',
					inputSettings: {
						toggleLabel: 'To the side'
					}
				}
			] as unknown as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
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

export const PerformanceWithSubmit = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const hundredFields = [];

	for (let i = 0; i < 100; i++) {
		hundredFields.push({
			name: `text${i}`,
			label: `Simple Text ${i}`,
			type: "text",
			instructionText: 'testing',
			validators: [required]
		})
	}

	const fields = useMemo(
		() => hundredFields as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} onSubmit={onSubmit} />
		</>
	);
};

export const SubmitExternalButtons = (): ReactElement => {
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

	const clickHandler = () => {
		dispatch(
			actions.submitForm()
		);
	}

	const submitForm = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(submitForm);
	}, [submitForm, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<p>Here is the form</p>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<button onClick={clickHandler}>Submit</button>
		</>
	);
};

export const SubmitInternalButtons = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
					validators: [required],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
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
					validators: [required]
				},
				{
					name: "chip",
					label: "Text that receives copy",
					type: "chip",
					inputSettings: {
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
					validators: [required],
				},
				{
					name: "dropdownsingle",
					label: "Dropdown single select",
					type: "dropdown",
					inputSettings: {
						options: [
							{ title: 'The Shawshank Redemption', year: 1994 },
							{ title: 'The Godfather', year: 1972 },
							{ title: 'The Godfather: Part II', year: 1974 },
							{ title: 'The Dark Knight', year: 2008 },
							{ title: '12 Angry Men', year: 1957 },
							{ title: "Schindler's List", year: 1993 },
							{ title: 'Pulp Fiction', year: 1994 },
							{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
							{ title: 'The Good, the Bad and the Ugly', year: 1966 },
							{ title: 'Fight Club', year: 1999 },
							{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
							{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
							{ title: 'Forrest Gump', year: 1994 },
							{ title: 'Inception', year: 2010 },
							{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
							{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
							{ title: 'Goodfellas', year: 1990 },
							{ title: 'The Matrix', year: 1999 },
							{ title: 'Seven Samurai', year: 1954 },
							{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
							{ title: 'City of God', year: 2002 },
							{ title: 'Se7en', year: 1995 },
						],
					},
					validators: [required],
				},
				{
					name: "phoneSelect",
					label: "Phone selection",
					type: "phone",
					validators: [required]
				},
				{
					name: "radio",
					label: "Radio selection",
					type: "radio",
					inputSettings: {
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
					validators: [required],
				},
				{
					name: 'toggleSwitch',
					label: 'Toggle field',
					type: 'toggleSwitch',
					inputSettings: {
						toggleLabel: 'To the side'
					},
					validators: [required],
				}
			] as unknown as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		alert('Cancelling form, going back to previous site');
	};

	const cancelButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text1 === false,
	}), [state.data.text1]);

	const submitButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text2 === false,
		children: state?.data?.text2,
		smallerButton: true,
	}), [state.data.text2]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={state}
				fields={fields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				cancelButtonAttrs={cancelButtonAttrs}
				onSubmit={onSubmit}
				submitButtonAttrs={submitButtonAttrs}
			/>
		</>
	);
};

export const GenericModal = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const [open, setOpen] = useState(false); 

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
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
					validators: [required]
				},
			] as unknown as FieldDefProps[],
		[]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		setOpen(false);
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [state.validForm]);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	const onCancel = () => {
		setOpen(false);
		alert('Cancelling form, going back to previous site');
	};

	const cancelButtonAttrs = useMemo(() => ({
		disabled: !!state.data.text1 === false,
	}), [state.data.text1]);

	const submitButtonAttrs = useMemo(() => ({
		children: state?.data?.text2,
		smallerButton: true,
	}), [state.data.text2]);

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Modal
				title={'yes'}
				state={state}
				dispatch={dispatch}
				fields={fields}
				open={open}
				onCancel={onCancel}
				cancelButtonAttrs={cancelButtonAttrs}
				onSubmit={onSubmit}
				submitButtonAttrs={submitButtonAttrs}
			/>
			<button onClick={() => setOpen(true)}>Open modal</button>
		</>
	);
};

export const FormAndModal = (): ReactElement => {
	const formReducer = useForm();
	const modalReducer = useForm();

	const [open, setOpen] = useState(false); 

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Full Name",
					type: "text",
					instructionText: 'testing',
					validators: [required, validateEmail],
				},
				{
					name: "text2",
					label: "age",
					type: "text",
					validators: [required],
				},
				{
					name: "check1",
					label: "Text that copies to the next input",
					type: "checkbox",
					inputSettings: {
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
					validators: [required]
				},
			] as unknown as FieldDefProps[],
		[]
	);

	useMemo(() => {
		formReducer.registerFields(fields);
		modalReducer.registerFields(fields);
	}, [fields, formReducer.registerFields, modalReducer.registerFields]);

	const onSubmit = useCallback((data) => {
		setOpen(false);
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, " "));
	}, [formReducer.state.validForm, modalReducer.state.validForm]);

	useMemo(() => {
		formReducer.registerOnSubmit(onSubmit);
		modalReducer.registerOnSubmit(onSubmit);
	}, [onSubmit, formReducer.registerOnSubmit, modalReducer.registerOnSubmit]);

	const onCancel = () => {
		setOpen(false);
		alert('Cancelling form, going back to previous site');
	};

	return (
		<>
			<pre>Form data: {JSON.stringify(formReducer.state, null, "  ")}</pre>
			<Form
				title={text('Title', 'Form Title')}
				description={text('Description', 'This is a description example')}
				state={formReducer.state}
				fields={fields}
				dispatch={formReducer.dispatch}
				events={formReducer.events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
			<pre>Modal data: {JSON.stringify(modalReducer.state, null, "  ")}</pre>
			<Modal
				title={'yes'}
				state={modalReducer.state}
				dispatch={modalReducer.dispatch}
				fields={fields}
				open={open}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
			<button onClick={() => setOpen(true)}>Open modal</button>
		</>
	);
};

export const CustomFields = (): ReactElement => {
	const { state, dispatch, events, registerFields } = useForm();

	const CustomText = (props: TextFieldProps & HTMLInputElement) => {
		return <input type='text' {...props} />
	}

	const CustomTextArea = (props: TextFieldProps & HTMLInputElement) => {
		return <textarea rows='4' cols='20' {...props} />
	}

	const CustomCheckbox = (props) => {
		return (
			<>
				<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={props.onChange} />
				<label htmlFor="vehicle1"> I have a bike</label><br />
			</>
		)
	}

	const fields = useMemo(
		() =>
			[
				{
					name: "text1",
					label: "Custom Text",
					type: CustomText,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
				{
					name: "textarea",
					label: "Custom textArea",
					type: CustomTextArea,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
				{
					name: "checkbox",
					label: "Custom checkbox",
					type: CustomCheckbox,
					instructionText: 'testing',
					helperText: 'helper text bottom',
					validators: [required]
				},
			] as FieldDefProps[],
		[]
	);

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

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form state={state} fields={fields} dispatch={dispatch} events={events} />
			<div>
				<button onClick={setText1Value}>Set Text1 Value</button>
			</div>
		</>
	);
};
