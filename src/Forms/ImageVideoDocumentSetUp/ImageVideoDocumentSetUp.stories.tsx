import * as React from 'react';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

// Components
import ImageVideoDocumentSetUp, { ImageVideoDocumentSetUpDef } from '.';
import Field, { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';
import { actions, useForm } from '../Form/formUtils';

export default {
	title: 'Forms|ImageVideoDocumentSetUp',
	decorators: [withKnobs],
};

export const Default = (): ReactElement => {
	const [assetProperties, setAssetProperties] = useState([]);

	const handleSetImage = () => {
		setAssetProperties([
			{
				label: 'Title',
				value:
					'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail',
			},
			{
				label: 'Type',
				value: 'Image Video Thumbnail',
			},
			{
				label: 'Alt',
				value: '-',
			},
			{
				label: 'Size',
				value: '1280x720',
			},
			{
				label: 'Focus',
				value: 'No',
			},
			{
				label: 'Locales',
				value: '-',
			},
		]);
		alert('Set image is called');
	};

	const handleVideo = () => {
		setAssetProperties([
			{
				label: 'Title',
				value: 'Video Example - This is a video example',
			},
			{
				label: 'Type',
				value: 'Video',
			},
			{
				label: 'Alt',
				value: '-',
			},
			{
				label: 'Size',
				value: '1280x720',
			},
			{
				label: 'Locales',
				value: 'es, en & in',
			},
		]);
		alert('Set video is called');
	};

	const handleDocument = () => {
		setAssetProperties([
			{
				label: 'Title',
				value: 'Document example',
			},
			{
				label: 'Type',
				value: 'Document',
			},
			{
				label: 'Size',
				value: '333 bytes'
			},
			{
				label: 'Size on disk',
				value: '0 bytes',
			},
		]);
		alert('Set document is called');
	};

	const handleRemove = () => {
		setAssetProperties([]);
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

	const label = text('Label', 'Label');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const withVideoHandler = boolean('Show video set up', false);
	const withDocumentHandler = boolean('Show document set up', false);

	return (
		<Field
			fieldDef={{
				label,
				disabled,
				required,
				helperText: text('Helper text', ''),
				instructionText: text('Instruction text', 'Instruction text')
			}}
			error={text('Error text', '')}
		>
			<ImageVideoDocumentSetUp
				fieldDef={{
					label,
					inputSettings: {
						handleSetImage,
						handleSetDocument: withDocumentHandler && handleDocument,
						handleSetVideo: withVideoHandler && handleVideo,
						handleRemove,
						options,
						src: 'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg',
					}
				}}
				value={assetProperties}
			/>
		</Field>
	);
};

export const FormExample = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();

	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const withVideoHandler = boolean('Show video set up', false);
	const withDocumentHandler = boolean('Show document set up', false);

	const handleSetImage = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value:
							'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail',
					},
					{
						label: 'Type',
						value: 'Image Video Thumbnail',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Focus',
						value: 'No',
					},
					{
						label: 'Locales',
						value: '-',
					},
				]
			})
		);
		alert('Set image is called');
	};

	const handleVideo = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Video Example - This is a video example',
					},
					{
						label: 'Type',
						value: 'Video',
					},
					{
						label: 'Alt',
						value: '-',
					},
					{
						label: 'Size',
						value: '1280x720',
					},
					{
						label: 'Locales',
						value: 'es, en & in',
					},
				]
			})
		);
		alert('Set video is called');
	};

	const handleDocument = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: [
					{
						label: 'Title',
						value: 'Document example',
					},
					{
						label: 'Type',
						value: 'Document',
					},
					{
						label: 'Size',
						value: '333 bytes'
					},
					{
						label: 'Size on disk',
						value: '0 bytes',
					},
				]
			})
		);
		alert('Set document is called');
	};

	const handleRemove = () => {
		dispatch(
			actions.setFieldValue({
				name: 'imageVideoDocument',
				value: []
			})
		);
	};

	const handleEdit = () => {
		alert('Edit clicked');
	};

	const handleTranslate = () => {
		alert('Translate clicked');
	};

	const options = useMemo(() => [
		{
			label: 'Edit',
			action: handleEdit,
		},
		{
			label: 'Translate',
			action: handleTranslate,
		},
	], []);

	const fields = useMemo(
		() =>
			[
				{
					name: "imageVideoDocument",
					label: "Regular example",
					type: "imageVideoDocument",
					required,
					disabled,
					inputSettings: {
						options,
						handleSetImage,
						handleSetDocument: withDocumentHandler ? handleDocument : undefined,
						handleSetVideo: withVideoHandler ? handleVideo : undefined,
						handleRemove,
						src: 'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg'
					},
				}
			] as FieldDef<ImageVideoDocumentSetUpDef>[],
		[required, disabled, options, handleSetImage, withDocumentHandler, handleDocument, withVideoHandler, handleVideo]
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
