import * as React from 'react';
import { ReactElement, useCallback, useMemo } from 'react';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

// Components
import { ImageVideoDocumentLinkBrowsingDef, } from '.';
import { FieldDef } from '@root/components/Field';
import Form from '../Form/Form';

// Utils
import { useForm } from '../Form/formUtils';
import { menuOptions } from '@root/forms/MenuFormFieldCard/MenuFormFieldUtils';
import { useImageVideoLinkDocumentBrowsing, imageVideoSrc } from './ImageVideoLinkDocumentBrowsingUtils';

export default {
	title: 'Forms|FormFieldImageVideoLinkDocumentBrowsing',
	decorators: [withKnobs],
};

const onCancel = () => {
	alert('Cancelling form, going back to previous site');
};

export const Playground = (): ReactElement => {
	const { state, dispatch, events, registerFields, registerOnSubmit } = useForm();
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, 'imageVideoLinkDocumentBrowsing');

	const label = text('Label', 'Label');
	const disabled = boolean('Disabled', false);
	const required = boolean('Required', false);
	const withVideoOption = boolean('Show video browsing option', false);
	const withDocumentOption = boolean('Show document browsing option', false);
	const withImageOption = boolean('Show image browsing option', true);
	const withLinkOption = boolean('Show link browsing option', false);
	const withImage = boolean('Show image', true);

	const fields = useMemo(
		() =>
			[
				{
					name: "imageVideoLinkDocumentBrowsing",
					label,
					type: "imageVideoDocumentLink",
					required,
					disabled,
					inputSettings: {
						options: menuOptions,
						handleSetImage: withImageOption ? setImage : undefined,
						handleSetDocument: withDocumentOption ? setDocument : undefined,
						handleSetVideo: withVideoOption ? setVideo : undefined,
						handleSetLink: withLinkOption ? setLink : undefined,
						handleRemove,
						src: withImage && imageVideoSrc
					},
				}
			] as FieldDef<ImageVideoDocumentLinkBrowsingDef>[],
		[label, required, disabled, menuOptions, setImage, withLinkOption, setLink, withDocumentOption, setDocument, withVideoOption, setVideo]
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
	const { setImage, setVideo, setDocument, setLink, handleRemove } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseAllOptions');
	const { setImage: browseImage, handleRemove: removeImage } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseImage');
	const { setVideo: browseVideo, handleRemove: removeVideo } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseVideo');
	const { setDocument: browseDocument, handleRemove: removeDocument } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseDocument');
	const { setLink: browseLink, handleRemove: removeLink } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseLink');
	const { setVideo: setVideoWithoutSrc, setImage: setImageWithoutSrc, handleRemove: removeImageOrVideo } = useImageVideoLinkDocumentBrowsing(dispatch, 'browseImageOrVideo');
	const { setImage: setImageDisabled } = useImageVideoLinkDocumentBrowsing(dispatch, 'disabledExample');

	const fields = useMemo(
		() =>
			[
				{
					name: 'browseAllOptions',
					label: 'Example with all types of browsing options (document, link, video and image) enabled',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImage,
						handleSetDocument: setDocument,
						handleSetVideo: setVideo,
						handleSetLink: setLink,
						handleRemove,
						src: imageVideoSrc
					},
				},
				{
					name: 'browseImageOrVideo',
					label: 'Browsing and image or video without a src image specified',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setVideoWithoutSrc,
						handleSetVideo: setImageWithoutSrc,
						handleRemove: removeImageOrVideo
					},
				},
				{
					name: 'browseImage',
					label: 'Browsing an image',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetImage: browseImage,
						handleRemove: removeImage,
						src: imageVideoSrc
					},
				},
				{
					name: 'browseVideo',
					label: 'Browsing a video',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetVideo: browseVideo,
						handleRemove: removeVideo,
						src: imageVideoSrc,
					},
				},
				{
					name: 'browseDocument',
					label: 'Browsing a document',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetDocument: browseDocument,
						handleRemove: removeDocument
					},
				},
				{
					name: 'browseLink',
					label: 'Browsing a link',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
						handleSetLink: browseLink,
						handleRemove: removeLink
					},
				},
				{
					name: 'withoutAnyBrowsingOption',
					label: 'Without any browsing option',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: false,
					inputSettings: {
						options: menuOptions,
					},
				},
				{
					name: 'disabledExample',
					label: 'Disabled example',
					type: 'imageVideoDocumentLink',
					required: false,
					disabled: true,
					inputSettings: {
						options: menuOptions,
						handleSetImage: setImageDisabled
					},
				},
			] as FieldDef<ImageVideoDocumentLinkBrowsingDef>[],
		[menuOptions, setImage, setVideo, setDocument, handleRemove]
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
