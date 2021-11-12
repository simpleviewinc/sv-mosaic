import * as React from 'react';
import { ReactElement, useState, ChangeEvent } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import FormFieldToggleSwitch from './FormFieldToggleSwitch';

export default {
	title: 'Forms|FormFieldToggleSwitch',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	return (
		<>
			<span>Is toggle checked? {`${isChecked}`}</span>
			<FormFieldToggleSwitch
				label={text('Label', 'Label')}
				required={boolean('Required', false)}
				disabled={boolean('Disabled', false)}
				error={text('Error text', 'Error text')}
				instructionText={text('Instruction text', 'Instruction text')}
				onChange={handleChange}
				inputSettings={{
					toggleLabel: text('Toggle label', 'Toggle label')
				}}
			/>
		</>
	);
};
