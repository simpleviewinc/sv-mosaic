import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import ImageUpload from './FormFieldImageUpload';
import Field, { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { useForm } from '../Form/formUtils';
import { ImageUploadDef } from '.';

export default {
	title: 'Forms|ImageUpload',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	const [fileLoaded, setFileLoaded] = useState({});
	const [imageHeight, setImageHeight] = useState(null);
	const [imageWidth, setimageWidth] = useState(null);
	const [imageCoordinates, setImageCoordinates] = useState({ x: null, y: null });

	const uploadImage = (files) => {
		setFileLoaded(files);
	};

	const setImgHeight = (imgHeight) => {
		setImageHeight(imgHeight);
	};

	const setImgWidth = (imgWidth) => {
		setimageWidth(imgWidth);
	};

	const handleImageCoordinates = (mouseCoordinates) => {
		setImageCoordinates(mouseCoordinates);
	};

	const handleSetFocus = () => {
		alert('Set focus is called');
	};

	const handleEdit = () => {
		alert('Edit clicked');
	};

	const handleTranslate = () => {
		alert('Translate clicked');
	};

	const options = [
		{
			label: 'Edit',
			action: handleEdit,
		},
		{
			label: 'Translate',
			action: handleTranslate,
		},
	];

	const disabled = boolean('Disabled', false);
	const label = text('Label', 'Label');
	console.log('File loaded :', fileLoaded);

	return (
		<>
			<Field
				fieldDef={{
					name: 'imageUpload',
					label,
					required: boolean('Required', false),
					disabled,
					instructionText: text('Instruction text', 'Instruction text'),
					helperText: text('Helper text', 'Helper text'),
					type: 'imageUpload'
				}}
				error={text('Error text', '')}
			>
				<ImageUpload
					fieldDef={{
						name: 'imageUpload',
						label,
						disabled,
						inputSettings: {
							handleSetFocus,
							handleImageCoordinates,
							options,
							uploadImage,
						}
					}}
				/>
			</Field>
			<p>Height: {imageHeight}</p>
			<p>Width: {imageWidth}</p>
			<p>Mouse position: {imageCoordinates.x} , {imageCoordinates.y}</p>
		</>
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
					name: "imageUpload",
					label: "Image Upload Example",
					type: "imageUpload",
					required,
					disabled,
					helperText: 'Helper text',
					instructionText: 'Instruction text',
				}
			] as FieldDef<ImageUploadDef>[],
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
