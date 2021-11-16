// import { render, screen, cleanup, fireEvent } from '@testing-library/react';
// import * as React from 'react';
// import { useState, ChangeEvent } from 'react';
// import FormFieldToggleSwitch from './FormFieldToggleSwitch';

// afterEach(cleanup);

// describe('FormFieldToggleSwitch component', () => {
// 	it('should check the FormFieldToggleSwitch', () => {
// 		const FormFieldToggleSwitchExample = () => {
// 			const [isChecked, setIsChecked] = useState(false);

// 			const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 				setIsChecked(e.target.checked);
// 			};
// 			return (
// 				<FormFieldToggleSwitch
// 					label='Label'
// 					error={false}
// 					instructionText='Instruction text'
// 					errorText='Error text'
// 					disabled={false}
// 					onChange={handleChange}
// 					checked={isChecked}
// 				/>
// 			);
// 		};

// 		render(<FormFieldToggleSwitchExample />);
// 		const toggleSwitch = screen.getByRole('checkbox') as HTMLInputElement;
// 		expect(toggleSwitch.checked).toEqual(false);

// 		fireEvent.click(toggleSwitch);
// 		expect(toggleSwitch.checked).toEqual(true);
// 	});
// });

// describe('FormFieldToggleSwitch assistive elements', () => {
// 	it('should display label, instructionText but not the errorText', () => {
// 		render(
// 			<FormFieldToggleSwitch
// 				label='Label'
// 				error={false}
// 				required={false}
// 				instructionText='Instruction'
// 				errorText='Error'
// 			/>
// 		);

// 		const label = screen.getByText('Label');
// 		const instructionText = screen.getByText('Instruction');
// 		const errorText = screen.queryByText('Error');

// 		expect(label).toBeDefined();
// 		expect(instructionText).toBeDefined();
// 		expect(errorText).toBe(null);
// 	});

// 	it('should display the errorText', () => {
// 		render(
// 			<FormFieldToggleSwitch
// 				label='Label'
// 				error={true}
// 				required={true}
// 				errorText='Error text'
// 			/>
// 		);
// 		const toggleSwitch = screen.getByRole('checkbox') as HTMLInputElement;
// 		const errorText = screen.queryByText('Error');
    
// 		expect(toggleSwitch.required).toBe(true);
// 		expect(errorText).toBeDefined();
// 	});
// });
