import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';

import FormFieldPhoneSelectionDropdown from './FormFieldPhoneSelectionDropdown';

export default {
	title: 'Forms|FormFieldPhoneSelectionDropdown',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	return (
		<FormFieldPhoneSelectionDropdown
			autoFormat={boolean('Autoformat', true)}
			country={text('Country code (e.g., us, mx, etc.)', 'us')}
			disabled={boolean('Disabled', false)}
			error={boolean('Error', false)}
			errorText={text('Error text', 'Error text')}
			helperText={text('Helper text', 'Helper text')}
			instructionText={text('Instruction text', 'Instruction text')}
			label={text('Label', 'Label')}
			placeholder={text('Placeholder', 'Placeholder')}
			required={boolean('Required', false)}
			value={text('Phone number', '')}
		/>
	);
};
