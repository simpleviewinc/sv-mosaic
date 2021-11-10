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
	const onHandleChange = (val) => {
		setValue(val);
	};

	return (
		<TextArea
			label={text('Label', 'Label')}
			inputSettings={{
				htmlFor: 'text-area',
				size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
				placeholder: text('Placeholder', 'placeholder'),
				maxCharacters: number('Max characters', 200),
				value
			}}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			required={boolean('Required', true)}
		/>
	);
};
