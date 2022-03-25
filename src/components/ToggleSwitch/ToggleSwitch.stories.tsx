import * as React from 'react';
import { ReactElement, useState, ChangeEvent } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/addon-docs/blocks';

// Components
import ToggleSwitch from './ToggleSwitch';

export default {
	title: 'Components/ToggleSwitch',
	decorators: [withKnobs],
} as Meta;

export const Example = (): ReactElement => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};
	return (
		<>
			<p>Is toggle checked? {`${isChecked}`}</p>
			<ToggleSwitch
				label={text('Label', 'Label')}
				disabled={boolean('Disabled', false)}
				required={boolean('Required', false)}
				onChange={handleChange}
				checked={isChecked}
			/>
		</>
	);
};
