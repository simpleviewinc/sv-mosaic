import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import LinkSetup from './LinkSetup';
import Field from '@root/components/Field';

export default {
	title: 'Forms|LinkSetup',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
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
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={disabled}
			instructionText={text('Instruction text', 'Instruction text')}
			helperText={text('Helper text', 'Helper text')}
			type='linkSetup'
		>
			<LinkSetup
				disabled={disabled}
				link={link}
				handleSetLink={handleSetLink}
				handleRemove={handleRemove}
			/>
		</Field>
	);
};
