import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldChipSingleSelect from ".";

export default {
	title: 'Forms|FormFieldChipSingleSelect',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const options = [
		{
			label: 'Option 1',
			value: 'Option_1',
		},
		{
			label: 'Option 2',
			value: 'Option_2',
		},
		{
			label: 'Option 3',
			value: 'Option_3',
		},
	];

	return (
		<FormFieldChipSingleSelect
			inputSettings={{options}}
			label={text('Label', 'Label')}
			error={text('Error text', '')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', 'Some helper text')}
			instructionText={text('Instructional text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
		/>
	);
};