import * as React from 'react';
import { ReactElement, useState } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import ImageVideoDocumentSetUp from './ImageVideoDocumentSetUp';

export default {
	title: 'Components/ImageVideoDocumentSetUp',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const label = text('Label', 'Label');
	const [assetObject, setAssetObject] = useState([]);

	const handleSetImage = () => {
		setAssetObject([
			{
				label: 'Title',
				value:
          'Video Thumbnail - YouTube - Visit Santa Fe, New Mexico Video Thumbnail - YouTube - Visit Santa Fe, New Mexico',
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

	const handleRemove = () => {
		setAssetObject([]);
	};

  
	const handleBrowse = () => {
		alert('Browse clicked');
	};

	return (
		<ImageVideoDocumentSetUp
			assetObject={assetObject}
			handleBrowse={handleBrowse}
			handleSetImage={handleSetImage}
			handleRemove={handleRemove}
			label={label}
			src={
				'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg'
			}
		/>
	);
};
