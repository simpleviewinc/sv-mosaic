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
import TextArea from '.';

// Helpers
import { Sizes } from '../../theme/sizes';
import Field, { FieldDefProps } from '@root/components/Field';
import { useForm } from '../Form/formUtils';
import Form from '../Form/Form';

export default {
	title: 'Forms|FormFieldTextArea',
	decorators: [withKnobs],
} as Meta;

export const Default = () : ReactElement => {
	const [value, setValue] = useState('');
	const onHandleChange = (val) => {
		setValue(val);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			maxCharacters={number('Max characters', 20)}
			htmlFor={'text-input'}
			value={value}
		>
			<TextArea
				label={text('Label', 'Label')}
				disabled={boolean('Disabled', false)}
				inputSettings={{
					htmlFor: 'text-area',
					size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
					placeholder: text('Placeholder', 'placeholder'),
					maxCharacters: number('Max characters', 200),
					value
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
						disabled,
						maxCharacters,
						size,
						placeholder,
					},
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				},
			] as unknown as FieldDefProps[],
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
