import * as React from 'react';
import { ReactElement } from 'react';
import { useState } from 'react';
import {
	boolean,
	withKnobs,
	text,
	number,
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import TextArea from '../TextArea';

export default {
	title: 'Components|TextArea',
	decorators: [withKnobs],
} as Meta;

export const Default = () : ReactElement => {
	const [value, setValue] = useState('');
	const onHandleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<TextArea
			label={text('Label', 'Label')}
			htmlFor='text-area'
			width={text('Width', '200px')}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			instructionalText={text('Instructional text', '')}
			errorText={text('Error text', '')}
			error={boolean('Error', false)}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			maxCharacters={number('Max characters', 200)}
			value={value}
			required={boolean('Required', true)}
		/>
	);
};
