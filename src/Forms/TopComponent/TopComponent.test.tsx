import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';

// Components
import TopComponent from './TopComponent';

afterEach(cleanup);

const cancelCallback = jest.fn();
const saveCallback = jest.fn();

const sections = [
	{
		name: 'Account Profile',
		id: 'section1',
	},
	{
		name: 'Account Information',
		id: 'section2',
	},
	{
		name: 'Contact Information',
		id: 'section3',
	},
];

const TopComponentExample = () => {
	return (
		<TopComponent
			description='Description'
			formTitle='Form title'
			handleCancelButton={cancelCallback}
			handleSaveButton={saveCallback}
			sections={sections}
			showActive={true}
			tooltipInfo={'Tooltip info'}
		>
			<div>
				<div id='section1'>
					<h1>Account Profile</h1>
					<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
					</p>
				</div>
				<div id='section2'>
					<h1>Account Information</h1>
					<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
					</p>
				</div>
				<div id='section3'>
					<h1>Contact Information</h1>
					<p>
            Try to scroll this section and look at the navigation bar while
            scrolling! Try to scroll this section and look at the navigation bar
            while scrolling!
					</p>
				</div>
			</div>
		</TopComponent>
	);
};

describe('TopComponent component', () => {
	it('should trigger cancel and save onClick callback', () => {
		render(<TopComponentExample />);

		const saveButton = screen.getByText('Save');
		const cancelButton = screen.getByText('Cancel');

		fireEvent.click(saveButton);
		fireEvent.click(cancelButton);

		expect(cancelCallback).toHaveBeenCalled();
		expect(saveCallback).toHaveBeenCalled();
	});
});
