import * as React from 'react';
import { ReactElement, useState } from 'react';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

// Components
import ImageVideoDocumentSetUp from './ImageVideoDocumentSetUp';

export default {
	title: 'Components/ImageVideoDocumentSetUp',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const label = text('Label', 'Label');
	const withVideoHandler = boolean('Show video set up', false);
	const withDocumentHandler = boolean('Show document set up', false);
	const withImage = boolean('Show component with image', true);

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
	};

	const handleVideo = () => {
		setAssetProperties([
			{
				label: 'Title',
				value:
          'Video Example - This is a video example',
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
		)
	}

	const handleRemove = () => {
		setAssetProperties([]);
	};

	const handleBrowse = () => {
		alert('Browse clicked');
	};

	const handleEdit = () => {
		alert('Edit clicked');
	};

	const handleTranslate = () => {
		alert('Translate clicked');
	};

	return (
		<ImageVideoDocumentSetUp
			assetProperties={assetProperties}
			handleBrowse={handleBrowse}
			handleEdit={handleEdit}
			handleTranslate={handleTranslate}
			handleSetImage={handleSetImage}
			handleSetDocument={withDocumentHandler && handleSetImage}
			handleSetVideo={withVideoHandler && handleVideo}
			handleRemove={handleRemove}
			label={label}
			src={withImage &&
				'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg'
			}
		/>
	);
};
