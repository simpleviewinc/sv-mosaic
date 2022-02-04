import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldChipSingleSelect, { FormFieldChipSingleSelectDef } from ".";
import Field, { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldChipSingleSelect',
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const options = [
		{
			label: 'Option 1',
			value: 'Option_1',
		},
		{
			label: 'Option 2',
			value: 'Option_2',
		},
		{
			label: 'Option 3',
			value: 'Option_3',
		},
	];

	const label = text('Label', 'Label');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	const errorText = text('Error text', '');

	return (
		<Field
			fieldDef={{
				name: 'formFieldChipSingleSelect',
				disabled,
				helperText: text('Helper text', ''),
				instructionText: text('Instruction text', 'Instruction text'),
				label,
				required,
				type: 'chip'
			}}
			error={errorText}
		>
			<FormFieldChipSingleSelect
				fieldDef={{
					name: 'formFieldChipSingleSelect',
					label,
					disabled,
					inputSettings: {
						options
					}
				}}
				error={errorText}
			/>
		</Field>
	);
};

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const options = useMemo(() => [
		{
			label: 'Option 1',
			value: 'Option_1',
		},
		{
			label: 'Option 2',
			value: 'Option_2',
		},
		{
			label: 'Option 3',
			value: 'Option_3',
		},
	], []);

	const fields = useMemo(
		() =>
			[
				{
					name: "chip",
					label: "Regular example",
					type: "chip",
					required,
					disabled,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
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
