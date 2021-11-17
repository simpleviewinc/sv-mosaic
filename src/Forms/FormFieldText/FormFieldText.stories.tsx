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
	const onHandleChange = (val) => {
		setInputValue(val);
	};

	return (
		<TextField
			label={text('Label', 'Label')}
			inputSettings={{
				htmlFor: 'text-input',
				size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
				placeholder: text('Placeholder', 'placeholder'),
				maxCharacters: number('Max characters', 20),		
				value: inputValue
			}}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			required={boolean('Required', false)}
		/>
	);
};

export const multiline = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (val) => {
		setInputValue(val);
	};

	return (
		<TextField
			label={text('Label', 'Multiline')}
			inputSettings={{
				size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
				placeholder: text('Placeholder', 'placeholder'),
				maxCharacters: number('Max characters', 200),		
				value: inputValue,
				multiline: boolean('Multiline', true),
			}}
			placeholder={text('Placeholder', 'placeholder')}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			required={boolean('Required', false)}
		/>
	);
};

export const withIcon = (): ReactElement => {
	const [inputValue, setInputValue] = useState('');
	const onHandleChange = (val) => {
		setInputValue(val);
	};

	return (
		<TextField
			label={text('Label', 'With Icon')}
			inputSettings={{
				htmlFor: 'text-input',
				size: select('Size', [Sizes.xs, Sizes.sm, Sizes.md, Sizes.lg], Sizes.sm),
				placeholder: text('Placeholder', 'placeholder'),
				maxCharacters: number('Max characters', 100),		
				value: inputValue,
				icon: <AccountCircle />,
				multiline: boolean('Multiline', false),
			}}
			helperText={text('Helper text', '')}
			instructionText={text('Instructional text', '')}
			error={text('Error text', '')}
			disabled={boolean('Disabled', false)}
			onChange={onHandleChange}
			placeholder={text('Placeholder', 'placeholder')}
			required={boolean('Required', false)}
		/>
	);
};
