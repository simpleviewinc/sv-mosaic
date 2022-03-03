import * as React from 'react';
import { ReactElement, useMemo, useCallback } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { FieldDef } from '@root/components/Field';
import { useForm } from '@root/forms/Form/formUtils';

// Components
import Form from '../../Form/Form';

export default {
	title: 'Forms|TimeInput',
	decorators: [withKnobs],
};

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

export const Playground = (): ReactElement => {
	const {
		state,
		dispatch,
		events,
		registerFields,
		registerOnSubmit
	} = useForm();

	const label = text('Label', 'Time input');
	const placeholder = text('Placeholder', 'Placeholder');
	const helperText = text('Helper text', 'Helper text');
	const instructionText = text('Instruction text', 'Instruction text');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() => [
			{
				label,
				required,
				disabled,
				helperText,
				instructionText,
				name: "time",
				type: "time",
				inputSettings: {
					placeholder,
				},
			}
		] as FieldDef[],
		[label, required, disabled, helperText, instructionText, placeholder]
	)

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