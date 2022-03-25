import * as React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

// Components
import IconButton from './IconButton';

// Material UI
import MoreVertIcon from '@material-ui/icons/MoreVert';

afterEach(cleanup);

describe('IconButton component', () => {
	it('should render icon button and fire onClick callback', () => {
		const handleClick = jest.fn();
		render(
			<IconButton
				disabled={false}
				tooltipText='Tooltip text'
				icon={MoreVertIcon}
				onClick={handleClick}
			/>
		);
		const button = screen.getByRole('button');
		const icon = screen.getByTestId('icon-button-test');
		const tooltip = screen.getByTitle('Tooltip text');

		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(icon).toBeDefined();
		expect(tooltip).toBeDefined();
		expect(handleClick).toHaveBeenCalled();
	});
});

describe('Disabled IconButton component', () => {
	const handleClick = jest.fn();
	beforeEach(() => {
		render(
			<IconButton
				disabled={true}
				tooltipText='Tooltip text'
				icon={MoreVertIcon}
				onClick={handleClick}
			/>
		);
	});

	it('should not fire onClick callback', () => {
		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('should not show the tooltip', () => {
		const tooltip = screen.queryByTitle('Tooltip text');

		expect(tooltip).toBe(null);
	});
});
