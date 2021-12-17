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

	const updateUploadedFiles = (files) => {
		setFileLoaded(files);
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

	console.log('File loaded: ', fileLoaded);

	return (
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
				options={options}
				updateFilesCb={updateUploadedFiles}
			/>
		</Field>
	);
};
