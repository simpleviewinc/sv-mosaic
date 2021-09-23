import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import Button from './Button';
import AddIcon from '@material-ui/icons/Add';

afterEach(cleanup);

describe('Button component', () => {
	it('should render button with icon and fire onClick callback', () => {
		const handleClick = jest.fn();
		render(
			<Button disabled={false} icon={AddIcon} onClick={handleClick}>
        Test button
			</Button>
		);

		const button = screen.getByRole('button');
		const children = screen.getByText('Test button');
		const icon = screen.getByTestId('icon-test');

		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(children).toBeDefined();
		expect(icon).toBeDefined();
		expect(handleClick).toHaveBeenCalled();
	});

	it('should not fire onClick callback since button is disabled', () => {
		const handleClick = jest.fn();
		render(
			<Button disabled={true} onClick={handleClick}>
        Test button
			</Button>
		);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(handleClick).not.toHaveBeenCalled();
	});
});
