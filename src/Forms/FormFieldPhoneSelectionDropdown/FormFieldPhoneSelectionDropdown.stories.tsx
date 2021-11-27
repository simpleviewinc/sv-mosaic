import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';

import FormFieldPhoneSelectionDropdown from './FormFieldPhoneSelectionDropdown';
import { CountryData } from './FormFieldPhoneSelectionDropdownTypes';
import Field, { FieldDefProps } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldPhoneSelectionDropdown',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	const [value, setValue] = useState('');
	const [countryData, setCountryData] = useState({});

	const handleOnChange = (value: string, data: {} | CountryData, event: any, formattedValue: string): void => {
		setValue(value);
		setCountryData(data);
	};

	return (
		<>
			<p>{`Phone value: ${value}`}</p>
			<p>{`Country data: ${JSON.stringify(countryData)}`}</p>
			<Field
				label={text('Label', 'Label')}
				required={boolean('Required', false)}
				disabled={boolean('Disabled', false)}
				helperText={text('Helper text', '')}
				instructionText={text('Instruction text', 'Instruction text')}
				error={text('Error text', '')}
			>
			<FormFieldPhoneSelectionDropdown
				label={text('Label', 'Label')}
				disabled={boolean('Disabled', false)}
				inputSettings={{
					autoFormat: boolean('Autoformat', true),
					country: text('Country code (e.g., us, mx, etc.)', ''),
					placeholder: text('Placeholder', 'Placeholder')
				}}
				error={text('Error text', 'Error text')}
				onChange={handleOnChange}
				value={value}
			/>
			</Field>
		</>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const autoFormat = boolean('Autoformat', true);
	const country = text('Country code (e.g., us, mx, etc.)', '');
	const placeholder = text('Placeholder', 'Placeholder');

	const fields = useMemo(
		() =>
			[
				{
					name: "phone",
					label: "Regular example",
					type: "phone",
					required,
					disabled,
					inputSettings: {
						disabled,
						autoFormat,
						country,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDefProps[],
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
