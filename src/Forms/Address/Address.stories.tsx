import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import Address from './Address';
import Form from '../Form/Form';
import { FieldDef } from '../../components/Field';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|Address',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	return (
		<>
			{/* <pre>{JSON.stringify(state, null, "  ")}</pre> */}
			<Address fieldDef={{ name: 'fieldTest', label: text('Label', 'Label') }} />
		</>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const fields = useMemo(
		() => (
			[
				{
					name: "a",
					label: "a",
					type: 'address',
				},
			] as FieldDef[]
		),
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