import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { boolean, withKnobs, text, number, select } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Material UI
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components
import TextField, { TextFieldDef } from '.';
import Field, { FieldDef } from '@root/components/Field';
import { ReactElement } from 'react';
import { Sizes } from '@root/theme/sizes';
import { useForm } from '../Form/formUtils';
import Form from '../Form/Form';

export default {
	title: 'Forms|FormFieldText',
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (val) => {
		setInputValue(val);
	};

	const label = text('Label', 'Label');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);

	return (
		<Field
			fieldDef={{
				name: 'textField',
				label,
				disabled,
				required,
				helperText: text('Helper text', ''),
				instructionText: text('Instruction text', ''),
				inputSettings: {
					htmlFor: 'text-input',
					size,
					placeholder: text('Placeholder', 'placeholder'),
					maxCharacters: number('Max characters', 20),
					value: inputValue
				}
			}}
			error={text('Error text', '')}
			htmlFor={'text-input'}
			value={inputValue}
		>
			<TextField
				fieldDef={{
					name: 'textField',
					label,
					disabled,
					inputSettings: {
						htmlFor: 'text-input',
						size,
						placeholder: text('Placeholder', 'placeholder'),
						maxCharacters: number('Max characters', 20),
						value: inputValue
					}
				}}
				error={text('Error text', '')}
				onChange={onHandleChange}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
	const placeholder = text('Placeholder', 'placeholder');
	const maxCharacters = number('Max characters', 20);
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() =>
			[
				{
					name: "regular",
					label: "Regular example",
					type: "text",
					required,
					disabled,
					maxCharacters,
					size,
					inputSettings: {
						maxCharacters,
						size,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					// validators: [requiredValidator]
				} as FieldDef<TextFieldDef>,
				{
					name: "multiline",
					label: "Multiline example",
					type: "text",
					required,
					disabled,
					maxCharacters,
					size,
					inputSettings: {
						multiline: true,
						maxCharacters,
						size,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					// validators: [requiredValidator]
				},
				{
					name: "icon",
					label: "Field with Icon example",
					type: "text",
					required,
					disabled,
					maxCharacters,
					size,
					inputSettings: {
						prefixElement: <AccountCircle />,
						maxCharacters,
						size,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
					// validators: [requiredValidator]
				},
			] as FieldDef<TextFieldDef>[],
		[required, disabled, maxCharacters, size, placeholder]
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
