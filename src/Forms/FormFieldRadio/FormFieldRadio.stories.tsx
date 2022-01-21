import * as React from 'react';
import { ReactElement, useMemo, useCallback } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import { useForm } from '../Form/formUtils';

// Components
import { FormFieldRadioDef } from '.';
import { FieldDef } from '@root/components/Field';
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
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const instructionText = text('Instruction text', '');
	const helperText = text('Helper text', '');

	const fields = useMemo(
		() =>
			[
				{
					name: "radio",
					label,
					type: "radio",
					required,
					disabled,
					inputSettings: {
						options,
					},
					helperText,
					instructionText,
				}
			] as FieldDef<FormFieldRadioDef>[],
		[label, required, disabled, instructionText, helperText]
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
				title={text('Form Title', 'Form Title')}
				description={text('Form Description', 'This is a description example')}
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
