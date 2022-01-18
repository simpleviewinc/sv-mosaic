import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import {
	boolean,
	withKnobs,
	text,
	number,
	select
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import Form from '../Form/Form';
import TextArea, { TextAreaDef } from '.';

// Helpers
import { Sizes } from '../../theme/sizes';
import Field, { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldTextArea',
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [value, setValue] = useState('');
	const onHandleChange = (val) => {
		setValue(val);
	};

	const label = text('Label', 'Label');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);

	return (
		<Field
			fieldDef={{
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
					value
				}
			}}
			error={text('Error text', '')}
			htmlFor={'text-input'}
			value={value}
		>
			<TextArea
				fieldDef={{
					label,
					disabled,
					inputSettings: {
						htmlFor: 'text-area',
						size,
						placeholder: text('Placeholder', 'placeholder'),
						maxCharacters: number('Max characters', 20),
						value
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
					type: "textArea",
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
				},
			] as FieldDef<TextAreaDef>[],
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
