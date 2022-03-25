import * as React from 'react';
import { useMemo, useCallback, ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import { FormFieldCheckboxDef } from '.';
import { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';

// Utils
import { checkboxOptions } from './FormFieldCheckboxUtils';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldCheckbox',
	decorators: [withKnobs],
} as Meta;

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const label = text('Label', 'Label');
	const instructionText = text('Instruction Text', 'Instruction Text');
	const helperText = text('Helper Text', 'Helper Text');

	const fields = useMemo(
		() =>
			[
				{
					name: 'checkbox',
					label,
					type: 'checkbox',
					required,
					disabled,
					inputSettings: {
						options: checkboxOptions,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<FormFieldCheckboxDef>[],
		[required, disabled, label, instructionText, helperText]
	);

	useMemo(() => {
		registerFields(fields);
	}, [fields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				'Form submitted with the following data: ' +
          JSON.stringify(data, null, ' ')
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, '  ')}</pre>
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

const kitchenSinkFields = [
	{
		name: 'checkbox',
		label: 'Regular example',
		type: 'checkbox',
		required: false,
		disabled: false,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: 'Helper Text',
		instructionText: 'InstructionText',
	},
	{
		name: 'disabledCheckbox',
		label: 'Disabled example',
		type: 'checkbox',
		required: false,
		disabled: true,
		inputSettings: {
			options: checkboxOptions,
		},
		helperText: 'Helper Text',
		instructionText: 'InstructionText',
	},
	/* Should inputSettings be an optional prop?
	{
		name: 'withoutOptions',
		label: 'Without options',
		type: 'checkbox',
		required: false,
		disabled: false,
		helperText: 'Helper Text',
		instructionText: 'InstructionText',
	}, */
] as FieldDef<FormFieldCheckboxDef>[];

export const KitchenSink = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit,
	} = useForm();

	useMemo(() => {
		registerFields(kitchenSinkFields);
	}, [kitchenSinkFields, registerFields]);

	const onSubmit = useCallback(
		(data) => {
			alert(
				'Form submitted with the following data: ' +
          JSON.stringify(data, null, ' ')
			);
		},
		[state.validForm]
	);

	useMemo(() => {
		registerOnSubmit(onSubmit);
	}, [onSubmit, registerOnSubmit]);

	return (
		<>
			<pre>{JSON.stringify(state, null, '  ')}</pre>
			<Form
				title='Form Title'
				description='This is a description example'
				state={state}
				fields={kitchenSinkFields}
				dispatch={dispatch}
				events={events}
				onCancel={onCancel}
				onSubmit={onSubmit}
			/>
		</>
	);
};
