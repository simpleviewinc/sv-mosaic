import * as React from "react";
import { useState, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text,
	select
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldAddLink from '.';
import { Sizes } from '@root/theme/sizes';

export default {
	title: "Forms|FormFieldAddLink",
	decorators: [withKnobs],
} as Meta;

export const example = (): ReactElement => {
	const [linkValue, setLinkValue] = useState('');

	const onChange = (event) => {
		setLinkValue(event.target.value);
	};

	return (
		<FormFieldAddLink
			disabled={boolean('Disabled', false)}
			label={text('Label', 'Label')}
			inputSettings={{ placeholder: text('Placeholder', 'www.hello.com') }}
			htmlFor='text-input'
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			onChange={onChange}
			required={boolean('Required', false)}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			value={linkValue}
		/>
	)
}