import * as React from 'react';
import { useState, ChangeEvent, ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldRadioButtonGroup from '.';

export default {
	title: 'Forms|FormFieldRadio',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [value, setValue] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	const options = [
		{
			label: 'Label 1',
			value: 'label_1',
		},
		{
			label: 'Label 2',
			value: 'label_2',
		},
		{
			label: 'Label 3',
			value: 'label_3',
		},
	];

	return (
		<>
			<span>Selected option: {value}</span>
			<FormFieldRadioButtonGroup
				label={text('Label', 'Label')}
				required={boolean('Required', false)}
				disabled={boolean('Disabled', false)}
				error={boolean('Error', false)}
				instructionText={text('Instruction text', 'Instruction text')}
				errorText={text('Error text', 'Error text')}
				options={options}
				onChange={handleChange}
				value={value}
			/>
		</>
	);
};
