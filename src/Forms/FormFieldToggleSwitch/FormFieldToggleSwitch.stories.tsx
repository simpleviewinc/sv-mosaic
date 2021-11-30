import * as React from 'react';
import { ReactElement, useState, ChangeEvent, useMemo, useCallback } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldToggleSwitch from './FormFieldToggleSwitch';
import Form from '../Form/Form';
import Field, { FieldDefProps } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldToggleSwitch',
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (value) => {
		setIsChecked(value);
	};

	return (
		<>
			<span>Is toggle checked? {`${isChecked}`}</span>
			<Field
				label={text('Label', 'Label')}
				required={boolean('Required', false)}
				disabled={boolean('Disabled', false)}
				helperText={text('Helper text', '')}
				instructionText={text('Instruction text', 'Instruction text')}
				error={text('Error text', '')}
			>
				<FormFieldToggleSwitch
					label={text('Label', 'Label')}
					disabled={boolean('Disabled', false)}
					inputSettings={{
						toggleLabel: text('Toggle label', 'Toggle label')
					}}
					error={text('Error text', 'Error text')}
					onChange={handleChange}
				/>
			</Field>
		</>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const toggleLabel = text('Toggle label', 'Toggle label');

	const fields = useMemo(
		() =>
			[
				{
					name: "toggleSwitch",
					label: "Regular example",
					type: "toggleSwitch",
					required,
					disabled,
					inputSettings: {
						disabled,
						toggleLabel,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDefProps[],
		[required, disabled, toggleLabel]
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
