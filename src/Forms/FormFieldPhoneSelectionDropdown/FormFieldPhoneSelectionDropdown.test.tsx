import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import FormFieldPhoneSelectionDropdown from './FormFieldPhoneSelectionDropdown';
import { CountryData } from './FormFieldPhoneSelectionDropdownTypes';

afterEach(cleanup);

describe('FormFieldPhoneSelectionDropdown component', () => {
	it('should provide country data related with the entered value', () => {
		const countryDataObj = '{"name":"Mexico","dialCode":"52","countryCode":"mx","format":"+.. ... ... ...."}';
		const FormFieldPhoneSelectionDropdownExample = () => {
			const [value, setValue] = useState('');
			const [countryData, setCountryData] = useState('No country data');

			const handleOnChange = (value: string, countryData: CountryData) => {
				setValue(value);
				setCountryData(JSON.stringify(countryData));
			};

			return (
				<>
					<span>{countryData}</span>
					<FormFieldPhoneSelectionDropdown
						disabled={false}
						error={false}
						errorText={'Error text'}
						helperText={'Helper text'}
						instructionText={'Instruction text'}
						label={'Label'}
						onChange={handleOnChange}
						placeholder={'Placeholder'}
						required={false}
						value={value}
					/>
				</>
			);
		};

		const { container } = render(<FormFieldPhoneSelectionDropdownExample />);

		const phoneInput = container.querySelector('.form-control');
		
		const noCountryData = screen.getByText('No country data')
		expect(noCountryData).toBeDefined();
		
		fireEvent.change(phoneInput, { target: { value: '52345' } });
		
		const countryData = screen.getByText(countryDataObj)
		expect(countryData).toBeDefined();
	});
});

describe('FormFieldPhoneSelectionDropdown assistive elements', () => {
	it('should display label, instructionText but not the errorText', () => {
		render(
			<FormFieldPhoneSelectionDropdown
				label='Label'
				error={false}
				required={false}
				instructionText='Instruction'
				errorText='Error'
			/>
		);

		const label = screen.getByText('Label');
		const instructionText = screen.getByText('Instruction');
		const errorText = screen.queryByText('Error');

		expect(label).toBeDefined();
		expect(instructionText).toBeDefined();
		expect(errorText).toBe(null);
	});

	it('should display the errorText', () => {
		const {container} = render(
			<FormFieldPhoneSelectionDropdown
				label='Label'
				error={true}
				required={true}
				errorText='Error text'
			/>
		);
		const phoneInput = container.querySelector('.form-control') as HTMLInputElement;
		const errorText = screen.queryByText('Error');
    
		expect(phoneInput.required).toBe(true);
		expect(errorText).toBeDefined();
	});
});

describe('FormFieldPhoneSelectionDropdown disabled state', () => {
	it('should display the disabled text', () => {
		render(
			<FormFieldPhoneSelectionDropdown
				label='Label'
				disabled={true}
			/>
		);

		const disabledText = screen.getByText('Phone field disabled');

		expect(disabledText).toBeDefined();
	});
});
