import * as React from "react";
import {
	render,
	screen,
	cleanup,
} from "@testing-library/react";

import DropdownSingleSelection from "./FormFieldDropdownSingleSelection";
import Field from '@root/components/Field';

const topFilms = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
]

const { getByText, getByTestId, getByRole } = screen;

afterEach(cleanup);

describe('DropdownSingleSelection component', () => {
	it("should render on the screen", () => {
		render(
			<DropdownSingleSelection
				label="Example label"
				inputSettings={{ 
					options: topFilms	
				}}
				value={topFilms[0]}
			/>
		);

		/**
		 * Since the textfield is the inner-most component, looking if this
		 * is getting rendered will tell us by default if the dropdown is
		 * getting rendered too.
		 */

		const textfield = getByTestId("textfield-test-id");
		expect(textfield).toBeTruthy();
	});

	it('should show as error when clicking outside of it without anything selected and only when being required', () => {
		render(
			<Field
				label='Label'
				required={true}
				error='Error text'
		  >
				<DropdownSingleSelection
					label="Example label"
					placeholder="Placeholder"
					inputSettings={{ 
						options: topFilms	
					}}
					required={true}
					value={null}
					error='Error text'
				/>
			</Field>
		);

		const autocomplete = getByTestId("autocomplete-test-id");

		getByRole("textbox").focus();
		expect(autocomplete.classList.contains('Mui-focused')).toBe(true);

		getByRole("textbox").blur();
		expect(autocomplete.classList.contains('Mui-focused')).toBe(false);

		expect(getByText('Error text')).toBeDefined();
	});
});

describe('DropdownSingleSelection disabled state', () => {
	it("should render a dropdown disabled with no option selected by default", () => {
		render(
			<DropdownSingleSelection
				label="Example label"
				disabled
				inputSettings={{ 
					options: topFilms,
					placeholder: 'placeholder'
				}}
				value={null}
			/>
		);

		expect(getByText('placeholder')).toBeDefined();
	});
})

describe('DropdownSingleSelection component as a form field', () => {
	beforeEach(() => {
		render(
			<Field
				label='Label test'        
				helperText='Helper text test'
				instructionText='Instruction text test'
			>
				<DropdownSingleSelection
					label='Label test'
					inputSettings={{ 
						options: topFilms,
						placeholder: 'Placeholder test',
					}}
					value={null}
				/>
			</Field>
		)
	});

	it("should render a dropdown with a label", () => {
		expect(getByText("Label test")).toBeDefined();
	});

	it("should render a dropdown with a helper text", () => {
		expect(getByText("Helper text test")).toBeDefined();
	});

	it("should render a dropdown with an instructional text", () => {
		expect(getByText("Instruction text test")).toBeDefined();
	});

	it("should render a dropdown with a placeholder", () => {
		const input = getByRole("textbox") as HTMLInputElement;

		expect(input.placeholder).toEqual("Placeholder test");
	});
});
