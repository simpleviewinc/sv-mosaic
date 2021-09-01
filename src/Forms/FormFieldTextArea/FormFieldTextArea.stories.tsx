import * as React from 'react';
import { ReactElement, useState } from 'react';
import {
	boolean,
	withKnobs,
	text,
	number,
	select
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import TextArea from '.';

// Helpers
import { Sizes } from '../../theme/sizes';

export default {
	title: 'Forms|FormFieldTextArea',
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
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
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
