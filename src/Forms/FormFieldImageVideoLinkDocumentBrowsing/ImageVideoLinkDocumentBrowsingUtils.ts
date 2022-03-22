// Utils
import { actions } from '../Form/formUtils';
import { UseImageVideoLinkDocumentBrowsingReturn } from './ImageVideoLinkDocumentBrowsingTypes';

export const imageVideoSrc = 'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg';

export const imageAssetExample = [
	{
		label: 'Title',
		value: 'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail',
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
];

export const videoAssetExample = [
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
];

[
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
		value: '333 bytes',
	},
	{
		label: 'Size on disk',
		value: '0 bytes',
	},
];

export const documentExample = [
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
		value: '333 bytes',
	},
	{
		label: 'Size on disk',
		value: '0 bytes',
	},
];

export const linkExample = [
	{
		label: 'Title',
		value: 'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
	},
	{
		label: 'Type',
		value: 'Asset Library - Image',
	},
	{
		label: 'URL',
		value: 'https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/santafenm/maxresdefault_97d9460d-0bb1-4870-9be8-2b9af118360e.jpg',
	},
]

/**
 * Custom hook that abstracts the logic of setting an asset type.
 * @param dispatch function used to set form field values
 * @param fieldName serves as a reference to know to know which 
 * field of the form the setFieldValue action is going to be apllied to.
 * @returns setters funcion for each respective asset type.
 */
export const useImageVideoLinkDocumentBrowsing = (
	dispatch: (action: unknown) => void,
	fieldName : string
) : UseImageVideoLinkDocumentBrowsingReturn => {
	const setImage = async () => {
		await dispatch(
			actions.setFieldValue({
				name: fieldName,
				value: imageAssetExample,
			})
		);
		alert('Set image is called');
	};

	const setVideo = async () => {
		await dispatch(
			actions.setFieldValue({
				name: fieldName,
				value: videoAssetExample,
			})
		);
		alert('Set video is called');
	};

	const setDocument = async () => {
		await dispatch(
			actions.setFieldValue({
				name: fieldName,
				value: documentExample,
			})
		);
		alert('Set document is called');
	};

	const setLink = async () => {
		await dispatch(
			actions.setFieldValue({
				name: fieldName,
				value: linkExample
			})
		);
		alert('Set Link has been called');
	};

	const handleRemove = () => {
		dispatch(
			actions.setFieldValue({
				name: fieldName,
				value: [],
			})
		);
	};

	return {
		setImage,
		setVideo,
		setDocument,
		setLink,
		handleRemove
	}
};
