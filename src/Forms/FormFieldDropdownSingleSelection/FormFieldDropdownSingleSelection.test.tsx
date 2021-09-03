import * as React from "react";
import {
	render,
	screen,
	cleanup,
} from "@testing-library/react";

import DropdownSingleSelection from "./FormFieldDropdownSingleSelection";

const topFilms = [
	{ title: "The Shawshank Redemption", year: 1994 },
	{ title: "The Godfather", year: 1972 },
	{ title: "The Godfather: Part II", year: 1974 },
	{ title: "The Dark Knight", year: 2008 },
	{ title: "12 Angry Men", year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: "Pulp Fiction", year: 1994 },
	{ title: "The Lord of the Rings: The Return of the King", year: 2003 },
	{ title: "The Good, the Bad and the Ugly", year: 1966 },
	{ title: "Fight Club", year: 1999 },
	{ title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
	{ title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
	{ title: "Forrest Gump", year: 1994 },
	{ title: "Inception", year: 2010 },
	{ title: "The Lord of the Rings: The Two Towers", year: 2002 },
	{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ title: "Goodfellas", year: 1990 },
	{ title: "The Matrix", year: 1999 },
	{ title: "Seven Samurai", year: 1954 },
	{ title: "Star Wars: Episode IV - A New Hope", year: 1977 },
	{ title: "City of God", year: 2002 },
	{ title: "Se7en", year: 1995 },
];

afterEach(cleanup);

describe("Dropdown Single Selection", function() {
	it("should render on the screen", () => {
		const { getByTestId } = render(
			<DropdownSingleSelection
				label="Example label"
				options={topFilms}
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

	it("should render a dropdown with a label", () => {
		render(
			<DropdownSingleSelection
				label="Label test"
				options={topFilms}
			/>
		);

		expect(screen.getByText("Label test")).toBeDefined();
	});

	it("should render a dropdown with a helper text", () => {
		render(
			<DropdownSingleSelection
				label="Example label"
				options={topFilms}
				helperText="Helper text test"
			/>
		);

		expect(screen.getByText("Helper text test")).toBeDefined();
	});

	it("should render a dropdown with an instructional text", () => {
		render(
			<DropdownSingleSelection
				label="Example label"
				options={topFilms}
				instructionText="Instruction text test"
			/>
		);

		expect(screen.getByText("Instruction text test")).toBeDefined();
	});

	it("should render a dropdown with a placeholder", () => {
		const { getByRole } = render(
			<DropdownSingleSelection
				label="Example label"
				options={topFilms}
				placeholder="Placeholder test"
			/>
		);

		const input = getByRole("textbox") as HTMLInputElement;

		expect(input.placeholder).toEqual("Placeholder test");
	});

	it("should render a dropdown disabled with no option selected by default", () => {
		render(
			<DropdownSingleSelection
				label="Label test"
				options={topFilms}
				disabled={true}
				placeholder='placeholder'
			/>
		);

		expect(screen.getByText('placeholder')).toBeDefined();
	});

	it("should show as error when clicking outside of it without anything selected and only when being required", () => {
		const { getByTestId } = render(
			<DropdownSingleSelection
				label="Example label"
				placeholder="Placeholder"
				options={topFilms}
				required={true}
				errorText="Error text test"
			/>
		);

		const autocomplete = getByTestId("autocomplete-test-id");

		screen.getByRole("textbox").focus();
		expect(autocomplete.classList.contains('Mui-focused')).toBe(true);

		screen.getByRole("textbox").blur();
		expect(autocomplete.classList.contains('Mui-focused')).toBe(false);

		const errorMessage = getByTestId("error-message-test-id");
		expect(errorMessage).toBeDefined();
	});
});
