import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import { FormFieldChipSingleSelectDef } from ".";
import { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldChipSingleSelect',
	decorators: [withKnobs],
} as Meta;

export const Playground = (): ReactElement => {
	const { 
		state, 
		dispatch, 
		events, 
		registerFields, 
		registerOnSubmit,
	} = useForm();
	
	
	const options = useMemo( ()=> [
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
	
	const label = text('Label', 'Label');
	const helperText = text('Helper Text', 'Helper Text');
	const instructionText = text('Instruction text', 'Instruction text');
	const required = boolean('Required', false);
	const disabled = boolean('Disabled', false);
	
	const fields = useMemo(
		() =>
			[
				{
					label,
					helperText,
					instructionText,
					required,
					disabled,
					name: "Form Field Chip Single Select",
					type: "chip",
					inputSettings: {
						options
					},
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
		[label, helperText, instructionText, required, disabled]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback((data) => {
		alert('Form submitted with the following data: ' + JSON.stringify(data, null, "  "));
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

export const KitchenSink = (): ReactElement => {
	const { 
		state, 
		dispatch, 
		events, 
		registerFields, 
		registerOnSubmit 
	} = useForm();

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
					name: "chipRegular",
					label: "Regular example",
					type: "chip",
					required: false,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text'
				},
				{
					name: "chipDisable",
					label: "Disable example",
					type: "chip",
					required: false,
					disabled: true,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text'
				},
				{
					name: "chipRequired",
					label: "Required example",
					type: "chip",
					required: true,
					disabled: false,
					inputSettings: {
						options,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text'
				}
			] as FieldDef<FormFieldChipSingleSelectDef>[],
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
				title='Form Regular Example'
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
