import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import LinkSetup from './LinkSetup';
import Field, { FieldDefProps } from '@root/components/Field';
import Form from '../Form/Form';
import { actions, useForm } from '../Form/formUtils';

export default {
	title: 'Forms|LinkSetup',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const [link, setLink] = useState({});

	const handleSetLink = () => {
		setLink({
			title:
				'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
			type:
				'Asset Library - Image',
			url:
				'https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg',
		});
		alert('Set Link has been called');
	};

	const handleRemove = () => {
		setLink({});
	};

	return (
		<Field
			label={text('Label', 'Label')}
			error={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
			type='linkSetup'
		>
			<LinkSetup
				disabled={disabled}
				inputSettings={{
					handleSetLink,
					handleRemove
				}}
				value={link}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const toggleLabel = text('Toggle label', 'Toggle label');

	const handleSetLink = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: {
					title:
						'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
					type:
						'Asset Library - Image',
					url:
						'https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg',
				},
			})
		);
		alert('Set Link has been called');
	};

	const handleRemove = () => {
		dispatch(
			actions.setFieldValue({
				name: 'linkSetup',
				value: {},
			})
		);
	};

	const fields = useMemo(
		() =>
			[
				{
					name: "linkSetup",
					label: "Regular example",
					type: "linkSetup",
					required,
					disabled,
					inputSettings: {
						disabled,
						handleSetLink,
						handleRemove,
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