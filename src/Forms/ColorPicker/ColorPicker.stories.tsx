import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import ColorPicker from './ColorPicker';
import Field, { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';

export default {
	title: 'Forms|ColorPicker',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	const disabled = boolean('Disabled', false);
	const [color, setColor] = useState({
		r: 0,
		g: 141,
		b: 168,
		a: 1,
	});

	const handleColorChange = (color) => {
		setColor(color.rgb);
	};

	return (
		<Field
			fieldDef={{
				label: text('Label', 'Label'),
				required: boolean('Required', false),
				disabled,
				instructionText: text('Instruction text', 'Instruction text'),
				helperText: text('Helper text', 'Helper text'),
				type: 'color',
			}}
			error={text('Error text', '')}
		>
			<ColorPicker
				value={color}
				fieldDef={{ label: '', disabled }}
				onChange={handleColorChange}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);

	const fields = useMemo(
		() =>
			[
				{
					name: "color",
					label: "Regular example",
					type: "color",
					required,
					disabled,
				},
			] as FieldDef[],
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