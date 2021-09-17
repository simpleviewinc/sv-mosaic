import * as React from 'react';
import { ReactElement, useState } from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';

import FormFieldPhoneSelectionDropdown from './FormFieldPhoneSelectionDropdown';
import { CountryData } from './FormFieldPhoneSelectionDropdownTypes';

export default {
	title: 'Forms|FormFieldPhoneSelectionDropdown',
	decorators: [withKnobs],
};

export const Example = (): ReactElement => {
	const [value, setValue] = useState('');
	const [countryData, setCountryData] = useState({});

	const handleOnChange = (value: string, countryData: CountryData) => {
		setValue(value);
		setCountryData(countryData);
	};

	return (
		<>
			<p>{`Phone value: ${value}`}</p>
			<p>{`Country data: ${JSON.stringify(countryData)}`}</p>
			<FormFieldPhoneSelectionDropdown
				autoFormat={boolean('Autoformat', true)}
				country={text('Country code (e.g., us, mx, etc.)', '')}
				disabled={boolean('Disabled', false)}
				error={boolean('Error', false)}
				errorText={text('Error text', 'Error text')}
				helperText={text('Helper text', 'Helper text')}
				instructionText={text(
					'Instruction text',
					'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				)}
				label={text('Label', 'Label')}
				onChange={handleOnChange}
				placeholder={text('Placeholder', 'Placeholder')}
				required={boolean('Required', false)}
				value={value}
			/>
		</>
	);
};
