// React
import * as React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

// Components
import FormFieldDropdownMultipleSelection from "./FormFieldDropdownMultipleSelection";

// Utils
import { Sizes } from "../../theme/sizes";

afterEach(cleanup);

const options = [
	{
		label: "The Shawshank Redemption",
		value: "label_1",
	},
	{
		label: "The Godfather",
		value: "label_2",
	},
	{
		label: "The Godfather: Part II",
		value: "label_3",
	},
	{
		label: "The Dark Knight",
		value: "label_4",
	},
	{
		label: "12 Angry Men",
		value: "label_5",
	},
	{
		label: "Star Wars: Episode IV - A New Hope",
		value: "label_6",
	},
	{
		label: "Back to the Future",
		value: "label_7",
	},
	{
		label: "Terminator 2: Judgment Day",
		value: "label_8",
	},
	{
		label: "Sunset Boulevard",
		value: "label_9",
	},
];

describe("FormFieldDropdownMultipleSelection component", () => {
	beforeEach(() => {
		render(
			<FormFieldDropdownMultipleSelection
				label='Label test'
				placeholder='placeholder'
				required={false}
				disabled={false}
				helperText='Helper text'
				instructionText='Instructive text'
				error={false}
				errorText=''
				size={Sizes.md}
				options={options}
			/>
		);
	});

	it("should open dropdown, select and option and display the chip component", () => {
		document.createRange = () => ({
			setStart: jest.fn(),
			setEnd: jest.fn(),
			// The types of the common Ancestor Container object in the following line
			// are ignored just for practical purposes to run the test.
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			commonAncestorContainer: {
				nodeName: "BODY",
				ownerDocument: document,
			},
		});

		const autocomplete = screen.getByTestId("autocomplete-test");
		const input = screen.getByRole("textbox") as HTMLInputElement;

		autocomplete.focus();
		fireEvent.change(input, { target: { value: "The Godfather" } });
		fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
		fireEvent.keyDown(autocomplete, { key: "Enter" });

		const optionSelected = screen.getByText("The Godfather");

		expect(optionSelected).toBeDefined();
	});

	it("should display label, helper text, instruction text and placeholder", () => {
		const helperText = screen.getByText("Helper text");
		const label = screen.getByText("Label test");
		const instructionText = screen.getByText("Instructive text");
		const input = screen.getByRole("textbox") as HTMLInputElement;

		expect(input.placeholder).toEqual("placeholder");
		expect(helperText).toBeDefined();
		expect(instructionText).toBeDefined();
		expect(label).toBeDefined();
	});
});

describe("FormFieldDropdownMultipleSelection component disabled state", () => {
	it("should display the placeholder when is disabled and any option has been selected", () => {
		render(
			<FormFieldDropdownMultipleSelection
				label='Label test'
				placeholder='placeholder'
				required={false}
				disabled={true}
				options={options}
			/>
		);

		const placeholderText = screen.getByText("placeholder");

		expect(placeholderText).toBeDefined();
	});
});
