import * as React from "react";
import { render, screen, cleanup, act, waitFor } from "@testing-library/react";

import FormFieldDropdown from "@root/components/Field/FormFieldDropdown";
import { getOptions } from "@root/utils/getOptions";
import { additionalOptions } from "@root/components/Field/FormFieldAdvancedSelection";

const topFilms = [
	{ label: "The Shawshank Redemption", value: "1994" },
	{ label: "The Godfather", value: "1972" },
	{ label: "The Godfather: Part II", value: "1974" },
	{ label: "The Dark Knight", value: "2008" },
];

const { getByRole } = screen;

afterEach(cleanup);

describe("Dropdown component", () => {
	it("should render on the screen", () => {
		render(
			<FormFieldDropdown
				fieldDef={{
					name: "dropdownSingleSelect",
					type: "dropdown",
					label: "Label test",
					inputSettings: {
						options: topFilms,
						placeholder: "Placeholder test",
					},
				}}
				value={topFilms[0]}
			/>,
		);

		/**
	 * Since the textfield is the inner-most component, looking if this
	 * is getting rendered will tell us by default if the dropdown is
	 * getting rendered too.
	 */
		const input = getByRole("combobox") as HTMLInputElement;
		expect(input.value).toEqual("The Shawshank Redemption");
	});
});

describe("Dropdown component as a form field", () => {
	beforeEach(() => {
		render(
			<FormFieldDropdown
				fieldDef={{
					name: "dropdownSingleSelect",
					type: "dropdown",
					label: "Label test",
					inputSettings: {
						options: topFilms,
						placeholder: "Placeholder test",
					},
				}}
			/>,
		);
	});

	it("should render a dropdown with a placeholder", () => {
		const input = getByRole("combobox") as HTMLInputElement;

		expect(input.placeholder).toEqual("Placeholder test");
	});
});

describe("Dropdown component with options from DB", () => {

	it("should render on the screen prepopulated with options from DB", async () => {
		await act( async () => {
			render(
				<FormFieldDropdown
					fieldDef={{
						name: "dropdownSingleSelect",
						type: "dropdown",
						label: "Label test",
						inputSettings: {
							getOptions,
							placeholder: "Placeholder test",
						},
					}}
					value={additionalOptions[7]}
				/>,
			);
		});
		await waitFor(() => {
			const inputDropdown = getByRole("combobox") as HTMLInputElement;
			expect(inputDropdown.value).toEqual(additionalOptions[7].label);
		}, { timeout: 3000 });
	});

	it("should render on the screen with options from DB", async () => {
		await act( async () => {
			render(
				<FormFieldDropdown
					fieldDef={{
						name: "dropdownSingleSelect",
						type: "dropdown",
						label: "Label test",
						inputSettings: {
							getOptions,
							placeholder: "Placeholder test",
						},
					}}
				/>,
			);
		});

		await act( async() => {
			const moreIconButton = screen.getByTestId("ExpandMoreIcon");
			moreIconButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
		});

		await waitFor(() => {
			const singleSelectOptions = screen.getAllByRole("option");
			expect(singleSelectOptions[0]).toHaveTextContent(additionalOptions[0].label);
		}, { timeout: 1000 });
	});
});
