import * as React from 'react';
import { ReactElement, ChangeEvent, useState } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';
import RadioGroup from '@material-ui/core/RadioGroup';

// Components
import RadioButton from './RadioButton';

export default {
	title: 'Components/RadioButton',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => (
	<RadioButton
		label={text('Label', 'Label')}
		disabled={boolean('Disabled', false)}
		required={boolean('Required', false)}
	/>
);

export const Group = (): ReactElement => {
	const [value, setValue] = useState('female');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<RadioGroup
			aria-label='gender'
			name='gender1'
			value={value}
			onChange={handleChange}
		>
			<RadioButton
				label='Male'
				disabled={false}
				required={false}
				value='male'
			/>
			<RadioButton
				label='Female'
				disabled={false}
				required={false}
				value='female'
			/>
			<RadioButton
				label='(Disabled option)'
				disabled={true}
				required={false}
				value='disabled'
			/>
		</RadioGroup>
	);
};
