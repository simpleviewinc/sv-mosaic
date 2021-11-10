// import * as React from 'react';
// import { render, cleanup, screen, fireEvent } from '@testing-library/react';
// import "@testing-library/jest-dom/extend-expect";
// import FormFieldChipSingleSelect from './FormFieldChipSingleSelect';

// afterEach(cleanup);

// const options = [
// 	{
// 		label: 'Option 1',
// 		value: 'Option_1',
// 	},
// 	{
// 		label: 'Option 2',
// 		value: 'Option_2',
// 	},
// 	{
// 		label: 'Option 3',
// 		value: 'Option_3',
// 	},
// ];

// describe('FormFieldChipSingleSelect', () => {
// 	it("should allow users to select options", () => {
// 		let clicked = false;
// 		const onSelect = () => {
// 			clicked = true;
// 		};

// 		render(
// 			<FormFieldChipSingleSelect 
// 				label={'Testing Chip Field'}
// 				options={options}
// 				onSelect={onSelect}
// 			/>
// 		);

// 		const chips = screen.queryAllByRole('button');
// 		expect(clicked).toBe(false);

// 		fireEvent.click(chips[0]);
// 		expect(clicked).toBe(true);
// 	});

// 	it("should not allow users to select options when disabled", () => {

// 		render(
// 			<FormFieldChipSingleSelect 
// 				label={'Testing Chip Field'}
// 				options={options}
// 				disabled={true}
// 			/>
// 		);

// 		const chips = screen.queryAllByRole('button');
// 		expect(chips[0]).toHaveAttribute("aria-disabled")
// 	});
// });