import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text, select } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldDropdownMultipleSelection from './FormFieldDropdownMultipleSelection';
import { Sizes } from '@root/theme/sizes';

export default {
	title: 'Forms|FormFieldDropdownMultipleSelection',
	decorators: [withKnobs],
} as Meta;

const options = [
	{
		label: 'The Shawshank Redemption',
		value: 'label_1',
	},
	{
		label: 'The Godfather',
		value: 'label_2',
	},
	{
		label: 'The Godfather: Part II',
		value: 'label_3',
	},
	{
		label: 'The Dark Knight',
		value: 'label_4',
	},
	{
		label: '12 Angry Men',
		value: 'label_5',
	},
	{
		label: 'Star Wars: Episode IV - A New Hope',
		value: 'label_6',
	},
	{
		label: 'Back to the Future',
		value: 'label_7',
	},
	{
		label: 'Terminator 2: Judgment Day',
		value: 'label_8',
	},
	{
		label: 'Sunset Boulevard',
		value: 'label_9',
	},
];

export const Example = (): ReactElement => {
	return (
		<FormFieldDropdownMultipleSelection
			label={text('Label', 'Label')}
			placeholder={text('Placeholder', 'placeholder')}
			required={boolean('Required', false)}
			disabled={boolean('Disabled', false)}
			helperText={text('Helper text', 'Some helper text')}
			instructionText={text('Instructional text', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
			error={boolean('Error', false)}
			errorText={text('Error text', '')}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.md)}
			options={options}
		/>
	);
};
