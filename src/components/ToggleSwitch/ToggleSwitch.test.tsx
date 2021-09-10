import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import ToggleSwitch from './ToggleSwitch';

afterEach(cleanup);

describe('ToggleSwitch component', () => {
	it('should check the ToggleSwitch', () => {
		const ToggleSwitchExample = () => {
			const [isChecked, setIsChecked] = useState(false);

			const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
				setIsChecked(e.target.checked);
			};
			return (
				<ToggleSwitch
					label='Label test'
					disabled={false}
					onChange={handleChange}
					checked={isChecked}
				/>
			);
		};

		render(<ToggleSwitchExample />);
		const toggleSwitch = screen.getByRole('checkbox') as HTMLInputElement;
		const label = screen.getByText('Label test');

		expect(label).toBeDefined();
		expect(toggleSwitch.checked).toEqual(false);

		fireEvent.click(toggleSwitch);
		expect(toggleSwitch.checked).toEqual(true);
	});
});
