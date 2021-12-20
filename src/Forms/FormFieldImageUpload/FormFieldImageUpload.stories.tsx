import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import ImageUpload from './FormFieldImageUpload';
import Field from '@root/components/Field';

export default {
	title: 'Forms|ImageUpload',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const [fileLoaded, setFileLoaded] = useState({});
	const [imageHeight, setImageHeight] = useState(null);
	const [imageWidth, setimageWidth] = useState(null);
	const [mouseCoordinates, setMouseCoordinates] = useState({x: null, y: null});

	const uploadImage = (files) => {
		setFileLoaded(files);
	};

	const setImgHeight = (imgHeight) => {
		setImageHeight(imgHeight);
	};

	const setImgWidth = (imgWidth) => {
		setimageWidth(imgWidth);
	};

	const mousePosition = (mouseCoordinates) => {
		setMouseCoordinates(mouseCoordinates);
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
	console.log('File loaded :', fileLoaded);

	return (
		<>
			<Field
				label={text('Label', 'Label')}
				error={boolean('Error', false)}
				errorText={text('Error text', '')}
				required={boolean('Required', false)}
				disabled={disabled}
				instructionText={text('Instruction text', 'Instruction text')}
				helperText={text('Helper text', 'Helper text')}
				type='imageUpload'
			>
				<ImageUpload
					disabled={disabled}
					handleSetFocus={handleSetFocus}
					mousePosition={mousePosition}
					options={options}
					setImgHeight={setImgHeight}
					setImgWidth={setImgWidth}
					uploadImage={uploadImage}
				/>
			</Field>
			<p>Height: {imageHeight}</p>
			<p>Width: {imageWidth}</p>
			<p>Mouse position: {mouseCoordinates.x} , {mouseCoordinates.y}</p>
		</>
	);
};
