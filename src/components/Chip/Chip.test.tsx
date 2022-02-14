import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import Chip from './Chip';

afterEach(cleanup);

describe('Chip component', () => {
	beforeEach(() => {
		render(
			<Chip
				label='Label test'
				disabled={false}
				selected={false}
			/>
		);
	});

	it('should display Chip label', () => {
		const labelElement = screen.getByText('Label test');

		expect(labelElement).toBeDefined();
	});
});

describe('The deletable Chip component', () => {
	it('should display the delete icon an execute the handleDelete function', () => {
		const handleDelete = jest.fn();
		const DeletableChip = () => {
			return (
				<Chip
					label='Label test'
					disabled={false}
					onDelete={handleDelete}
				/>
			);
		};

		render(<DeletableChip />);
		const deleteIcon = screen.getByTestId('delete-icon-test-id');
		fireEvent.click(deleteIcon);

		expect(deleteIcon).toBeDefined();
		expect(handleDelete).toHaveBeenCalled();
	});
});

describe('A selected Chip component', () => {
	it('should be able to select a chip', () => {
		const handleClick = jest.fn();

		render(
			<Chip
				onClick={handleClick}
				label='Label'
				disabled={false}
				selected={true}
			/>
		);

		const chipElement = screen.getByRole('button');
		fireEvent.click(chipElement);

		expect(handleClick).toHaveBeenCalled();
	});
});
