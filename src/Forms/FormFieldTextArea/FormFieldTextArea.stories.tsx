import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import {
	boolean,
	withKnobs,
	text,
	number,
	select,
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import Form from '../Form/Form';
import { TextAreaDef } from '.';

// Helpers
import { Sizes } from '../../theme/sizes';
import { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|FormFieldTextArea',
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

	const size = select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm);
	const placeholder = text('Placeholder', 'placeholder');
	const maxCharacters = number('Max characters', 20);
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const helperText = text('Helper text', 'Helper text');
	const instructionText = text('Instruction text', 'Instruction text');
	const label = text('Label', 'Label');

	const fields = useMemo(
		() =>
			[
				{
					name: 'regular',
					label,
					type: 'textArea',
					required,
					disabled,
					maxCharacters,
					size,
					inputSettings: {
						maxCharacters,
						size,
						placeholder,
					},
					helperText,
					instructionText,
				},
			] as FieldDef<TextAreaDef>[],
		[
			required,
			disabled,
			maxCharacters,
			size,
			placeholder,
			helperText,
			instructionText,
			label,
		]
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
		name: 'regular',
		label: 'Regular example',
		type: 'textArea',
		size: Sizes.md,
		inputSettings: {
			size: Sizes.md,
			placeholder: 'placeholder'
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'withMaxChar',
		label: 'Established with a max chars',
		type: 'textArea',
		maxCharacters: 20,
		size: Sizes.md,
		inputSettings: {
			maxCharacters: 20,
			size: Sizes.md,
			placeholder: 'placeholder',
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'disabledExample',
		label: 'Disabled',
		type: 'textArea',
		disabled: true,
		size: Sizes.md,
		inputSettings: {
			size: Sizes.md,
			placeholder: 'placeholder',
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'xsSize',
		label: 'Size xs',
		type: 'textArea',
		size: Sizes.xs,
		inputSettings: {
			size: Sizes.xs,
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'smSize',
		label: 'Size sm',
		type: 'textArea',
		size: Sizes.sm,
		inputSettings: {
			size: Sizes.sm,
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'mdSize',
		label: 'Size md',
		type: 'textArea',
		size: Sizes.md,
		inputSettings: {
			size: Sizes.md,
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
	{
		name: 'lgSize',
		label: 'Size lg',
		type: 'textArea',
		size: Sizes.lg,
		inputSettings: {
			size: Sizes.lg,
		},
		helperText: 'Helper text',
		instructionText: 'Instruction text',
	},
] as FieldDef<TextAreaDef>[];

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
				title='Form title'
				description='Form description'
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
