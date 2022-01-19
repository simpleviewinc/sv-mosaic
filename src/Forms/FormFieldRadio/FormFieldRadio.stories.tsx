import * as React from 'react';
import { useState, ReactElement, useMemo, useCallback } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import { useForm } from '../Form/formUtils';

// Components
import FormFieldRadioButtonGroup, { FormFieldRadioDef } from '.';
import Field, { FieldDef } from '@root/components/Field';
import Form from '@root/forms/Form/Form';

export default {
	title: 'Forms|FormFieldRadio',
	decorators: [withKnobs],
} as Meta;

const options = [
	{
		label: 'Label 1',
		value: 'label_1',
	},
	{
		label: 'Label 2',
		value: 'label_2',
	},
	{
		label: 'Label 3',
		value: 'label_3',
	},
];

export const Playground = (): ReactElement => {
	const [value, setValue] = useState('');

	const handleChange = (value) => {
		setValue(value);
	};

	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const errorText = text('Error text', '');

	return (
		<>
			<span>Selected option: {value}</span>
			<Field
				fieldDef={{
					name: 'radioSelect',
					disabled,
					helperText: text('Helper text', ''),
					instructionText: text('Instruction text', 'Instruction text'),
					label,
					required
				}}
				error={errorText}
			>
				<FormFieldRadioButtonGroup
					fieldDef={{
						name: 'radioSelect',
						label,
						disabled,
						inputSettings: {
							options
						}
					}}
					onChange={handleChange}
					value={value}
				/>
			</Field>
		</>
	);
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const fields = useMemo(
		() =>
			[
				{
					name: "radio",
					label: "Regular example",
					type: "radio",
					required: false,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
				{
					name: "radio-disabled",
					label: "Disabled example",
					type: "radio",
					required: false,
					disabled: true,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as FieldDef<FormFieldRadioDef>[],
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

	return (
		<>
			<pre>{JSON.stringify(state, null, "  ")}</pre>
			<Form
				title='Form Title'
				description='This is a description example'
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
