import * as React from 'react';
import { useState } from 'react';
import { boolean, withKnobs, text, number } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Material UI
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components
import TextField from '../TextField';
import { ReactElement } from 'react';

export default {
	title: 'Components|TextField',
	decorators: [withKnobs],
} as Meta;

export const Default = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<TextField
			label={text('Label', 'Label')}
			htmlFor='text-input'
			width={text('Width', '150px')}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			error={boolean('Error', false)}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			maxCharacters={number('Max characters', 20)}
			value={inputValue}
			required={boolean('Required', false)}
		/>
	);
};

export const multilineInput = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<TextField
			label={text('Label', 'Multiline')}
			width={text('Width', '150px')}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			error={boolean('Error', false)}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			maxCharacters={number('Max characters', 200)}
			value={inputValue}
			required={boolean('Required', false)}
			multiline={boolean('Multiline', true)}
		/>
	);
};

export const withIcon = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<TextField
			label={text('Label', 'With Icon')}
			onChange={onHandleChange}
			width={text('Width', '150px')}
			placeholder='With icon'
			icon={<AccountCircle />}
			value={inputValue}
			multiline={boolean('Multiline', false)}
			maxCharacters={number('Max characters', 0)}
		/>
	);
};
