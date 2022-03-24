// BUG TO BE FIXED
import * as React from 'react';
import { useCallback, useMemo, ReactElement } from 'react';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import Form from '../Form/Form';
import { FieldDef } from '@root/components/Field';
import { useForm } from '../Form/formUtils';
import { TextEditorDef } from './TextEditorTypes';

export default {
	title: 'Forms|FormFieldTextEditor',
	decorators: [withKnobs],
};

export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const label = text('Label', 'Label');
	const helperText = text('Helper text', 'Helper Text');
	const instructionText = text('Instruction text', 'Instruction text');
	const required = boolean('Required', false);
	const toggleLabel = text('Toggle label', 'Toggle label');
	const spellcheck = boolean('Spellcheck', false);
	const direction = select('Direction', ['ltr', 'rtl'], 'ltr');
	const language = text('Language', 'en');
	const maxCharacters = number('Max Characters', 100);

	const fields = useMemo(
		() =>
			[
				{
					name: "textEditor",
					label,
					type: "textEditor",
					required,
					inputSettings: {
						spellcheck,
						direction,
						language,
						maxCharacters,
					},
					disabled,
					helperText,
					instructionText,
				},
			] as FieldDef<TextEditorDef>[],
		[
			required,
			disabled,
			toggleLabel,
			label,
			helperText,
			instructionText,
			maxCharacters,
			spellcheck,
			language
		]
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

export const KitchenSink = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() =>
			[
				{
					name: "spellCheck",
					label: 'Text editor with spellcheck active',
					type: "textEditor",
					required: false,
					inputSettings: {
						spellcheck: true,
					},
				},
				{
					name: "ltr",
					label: 'Text editor with left to right direction',
					type: "textEditor",
					required: false,
					inputSettings: {
						direction: 'ltr',
					},
				},
				{
					name: "rtl",
					label: 'Text editor with right to left direction',
					type: "textEditor",
					required: false,
					inputSettings: {
						direction: 'rtl',
					},
				},
				{
					name: "german",
					label: 'Text editor in german (de) language',
					type: "textEditor",
					required: false,
					inputSettings: {
						language: 'de',
					},
				},
				{
					name: "maxChars",
					label: 'Text editor with max character limit',
					type: "textEditor",
					required: false,
					inputSettings: {
						maxCharacters: 20,
					},
				},
				{
					name: "disabled",
					label: 'Disabled text editor',
					type: "textEditor",
					required: false,
					disabled: true,
				},
			] as FieldDef<TextEditorDef>[],
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
				title='Text Editor Kitchen Sink'
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