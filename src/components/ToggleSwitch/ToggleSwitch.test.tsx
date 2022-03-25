import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

afterEach(cleanup);

const { getByRole, getByText } = screen;

const ToggleSwitchExample = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (checked) => {
		setIsChecked(checked);
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

describe('ToggleSwitch component', () => {
	it('should check the ToggleSwitch', () => {
		render(<ToggleSwitchExample />);
		const toggleSwitch = getByRole('checkbox') as HTMLInputElement;

		expect(getByText('Label test')).toBeTruthy();
		expect(toggleSwitch.checked).toEqual(false);

		fireEvent.click(toggleSwitch);
		expect(toggleSwitch.checked).toEqual(true);
	});
});
