import * as React from "react";
import { useState, useMemo, useCallback, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldCheckbox, { FormFieldCheckboxDef } from '.';
import Field, { FieldDef } from "@root/components/Field";
import Form from "../Form/Form";
import { useForm } from "../Form/formUtils";

export default {
	title: "Forms|FormFieldCheckbox",
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [checked, setChecked] = useState([]);

	const onChange = useCallback(value => {
		setChecked(value);
	}, [setChecked]);

	const options = useMemo(() => [
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
	], []);

	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const errorText = text('Error text', '');

	return (
		<>
			<span>Checked: {JSON.stringify(checked)}</span>
			<Field
				fieldDef={{
					disabled,
					helperText: text('Helper text', ''),
					instructionText: text('Instruction text', 'Instruction text'),
					label,
					required,
				}}
				error={errorText}
			>
				<FormFieldCheckbox
					fieldDef={{
						label,
						disabled,
						inputSettings: {
							options,
						}
					}}
					value={checked}	
					error={errorText}
					onChange={onChange}
				/>
			</Field>
		</>
	)
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const options = useMemo(() => [
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
	], []);

	const fields = useMemo(
		() =>
			[
				{
					name: "checkbox",
					label: "Regular example",
					type: "checkbox",
					required,
					disabled,
					inputSettings: {
						disabled,
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDef<FormFieldCheckboxDef>[],
		[required, disabled]
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
				onSubmit={onSubmit}
			/>
		</>
	);
};
