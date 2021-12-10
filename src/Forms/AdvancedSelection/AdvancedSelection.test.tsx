import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

// Components
import AdvancedSelection from './AdvancedSelection';

afterEach(cleanup);

const options = [
	{
		category: 'Category 1',
		label: 'Option 1',
		value: 'option_1-cat_1',
	},
	{
		category: 'Category 2',
		label: 'Option 2',
		value: 'option_2-cat_1',
	},
	{
		label: 'Option 3',
		value: 'option3_without_category',
	},
	{
		label: 'Option 4',
		value: 'option4_without_category',
	},
	{
		label: 'Option 5',
		value: 'option5_without_category',
	},
	{
		label: 'Option 6',
		value: 'option6_without_category',
	},
	{
		label: 'Option 7',
		value: 'option7_without_category',
	},
	{
		label: 'Option 8',
		value: 'option8_without_category',
	},
	{
		label: 'Option 9',
		value: 'option9_without_category',
	},
];

describe('AdvancedSelection component', () => {
	beforeEach(() => {
		render(
			<AdvancedSelection
				label='Label'
				error={''}
				required={false}
				instructionText='Instruction text'
				helperText='Helper text'
				disabled={false}
				modalTitle='Modal title'
				checkboxOptions={options}
				groupByCategory={true}
				onChange={() => jest.fn}
			/>
		);
	});

	it('should select some options', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));

		expect(screen.getByText('Modal title')).toBeTruthy();
		expect(screen.getByText('Category 1')).toBeTruthy();
		expect(screen.getByText('Category 2')).toBeTruthy();

		const option1 = screen.getByText('Option 1');
		const option2 = screen.getByText('Option 2');
		fireEvent.click(option1);
		fireEvent.click(option2);
		fireEvent.click(screen.getByText('Save'));

		expect(screen.getByText('Label')).toBeTruthy();
		expect(screen.getByText('Instruction text')).toBeTruthy();
		expect(screen.getByText('Helper text')).toBeTruthy();
		expect(option1).toBeTruthy();
		expect(option2).toBeTruthy();
	});

	it('should remove a selected option', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));
		const option1 = screen.getByText('Option 1');
		const option2 = screen.getByText('Option 2');
		fireEvent.click(option1);
		fireEvent.click(option2);
		fireEvent.click(screen.getByText('Save'));

		const chipsDeleteIcon = screen.getAllByTestId('delete-icon-test-id');
		expect(chipsDeleteIcon.length).toBe(4);
		fireEvent.click(chipsDeleteIcon[0]);

		const remainingChips = screen.getAllByTestId('delete-icon-test-id');
		expect(remainingChips.length).toBe(2);
	});

	it('should filter the options', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));
		const inputNode = screen.getByPlaceholderText('Search...');
		fireEvent.change(inputNode, { target: { value: 'Option 2' } });

		expect(screen.queryByText('Option 1')).toBe(null);
	});

	it('should create a new options', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));
		const inputNode = screen.getByPlaceholderText('Search...');
		fireEvent.change(inputNode, { target: { value: 'New option' } });
		fireEvent.click(screen.getByText('Create'));

		expect(screen.queryByText('New option')).toBeTruthy();
	});

	it('should display "X more" when the selected options are more than 8', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));

		// Select all options
		for (let i = 0; i < options.length; i++) {
			const option = screen.getByText(options[i].label);
			fireEvent.click(option);
		}

		const showMoreElement = screen.queryByText('1 more');
		expect(showMoreElement).toBeTruthy();

		fireEvent.click(showMoreElement);
		expect(screen.getByText('Hide')).toBeTruthy();
		expect(screen.getAllByText('Option 9').length).toBe(2);
	});

	it('should not select any option when the modal is closed', () => {
		fireEvent.click(screen.getByText('ADD ELEMENT'));
		fireEvent.click(screen.getByText('Option 1'));

		expect(screen.getAllByText('Option 1').length).toBe(2)
		fireEvent.click(screen.getByText('Cancel'));

		expect(screen.getAllByText('Option 1').length).toBe(1)
	});
});
