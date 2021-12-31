import * as React from "react";
import { useState, ReactElement } from "react";
import {
	boolean,
	withKnobs,
	text,
	select
} from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import { Sizes } from '@root/theme/sizes';

// Components
import FormFieldAddLink from '.';
import Field from '@root/components/Field';

export default {
	title: "Forms|FormFieldAddLink",
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [linkValue, setLinkValue] = useState('');

	const onChange = (val) => {
		setLinkValue(val);
	};

	return (
		<Field
			label={text('Label', 'Label')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			value={linkValue}
		>
			<FormFieldAddLink
				disabled={boolean('Disabled', false)}
				label={text('Label', 'Label')}
				inputSettings={{
					size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
					placeholder: text('Placeholder', 'www.hello.com'),
					value: linkValue
				}}
				error={text('Error text', '')}
				onChange={onChange}
				size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			/>
		</Field>
	)
}
