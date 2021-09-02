import * as React from 'react';
import { useState } from 'react';
import { boolean, withKnobs, text, number, select } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Material UI
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components
import TextField from '.';
import { ReactElement } from 'react';
import { Sizes } from '@root/theme/sizes';

export default {
	title: 'Forms|FormFieldText',
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
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			instructionalText={text('Instructional text', '')}
			errorText={text('Error text', '')}
			error={boolean('Error', false)}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			maxCharacters={number('Max characters', 20)}
			value={inputValue}
			required={boolean('Required', false)}
		/>
	);
};

export const multiline = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<TextField
			label={text('Label', 'Multiline')}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			instructionalText={text('Instructional text', '')}
			errorText={text('Error text', '')}
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
			helperText={text('Helper text', '')}
			instructionalText={text('Instructional text', '')}
			errorText={text('Error text', '')}
			error={boolean('Error', false)}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			size={select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm)}
			placeholder={text('Placeholder', 'placeholder')}
			icon={<AccountCircle />}
			value={inputValue}
			multiline={boolean('Multiline', false)}
			maxCharacters={number('Max characters', 100)}
			required={boolean('Required', false)}
		/>
	);
};
