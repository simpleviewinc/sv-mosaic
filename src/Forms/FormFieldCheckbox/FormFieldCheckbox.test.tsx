import * as React from "react";
import { useState } from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

// Components
import FormFieldCheckbox from "./FormFieldCheckbox";

// Utils
import { checkboxOptions } from "./FormFieldCheckboxUtils";

afterEach(cleanup);

const { getAllByRole, getByText } = screen;

const FormFieldCheckboxExample = () => {
	const [checked, setChecked] = useState([]);

	const onChange = async (checked) => {
		setChecked(checked);
	}

	return (
		<FormFieldCheckbox
			fieldDef={{
				name: "formFieldCheckbox",
				label: "test",
				inputSettings: {
					options: checkboxOptions,
				},
			}}
			value={checked}
			onChange={onChange}
		/>
	);
};

describe("FormFieldCheckbox component", () => {
	beforeEach(() => {
		render(<FormFieldCheckboxExample />);
	})

	it("should display the list of options", () => {
		expect(getByText("Label 1")).toBeTruthy();
		expect(getByText("Label 2")).toBeTruthy();
		expect(getByText("Label 3")).toBeTruthy();
	});

	it("should check the clicked option", () => {
		const checkboxElements = getAllByRole("checkbox") as HTMLInputElement[];
		fireEvent.click(checkboxElements[0]);

		expect(checkboxElements[0].checked).toEqual(true);
		expect(checkboxElements[1].checked).toEqual(false);
		expect(checkboxElements[2].checked).toEqual(false);
	});
});
