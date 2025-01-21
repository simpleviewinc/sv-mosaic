import * as React from "react";
import { act, useState } from "react";
import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";

import { getOptions, optionsLibrary } from "@root/mock";
import FormFieldCheckbox from "@root/components/Field/FormFieldCheckbox";

afterEach(cleanup);

const { getAllByRole, getByText } = screen;

const FormFieldCheckboxExample = (props: { fromDB?: boolean }) => {
	const [checked, setChecked] = useState([]);

	const onChange = async (checked) => {
		setChecked(checked);
	};

	return (
		<>
			{!props.fromDB ? (
				<FormFieldCheckbox
					fieldDef={{
						name: "formFieldCheckbox",
						type: "checkbox",
						label: "test",
						inputSettings: {
							options: optionsLibrary,
						},
					}}
					value={checked}
					onChange={onChange}
				/>
			) : (
				<FormFieldCheckbox
					fieldDef={{
						name: "formFieldCheckbox",
						type: "checkbox",
						label: "test",
						inputSettings: {
							options: getOptions,
						},
					}}
					value={checked}
					onChange={onChange}
				/>
			)}
		</>
	);
};

describe("FormFieldCheckbox component", () => {
	beforeEach(() => {
		render(<FormFieldCheckboxExample fromDB={false} />);
	});

	it("should display the list of options", () => {
		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
		expect(getByText("Option 3")).toBeTruthy();
	});

	it("should check the clicked option", () => {
		const checkboxElements = getAllByRole("checkbox") as HTMLInputElement[];
		fireEvent.click(checkboxElements[0]);

		expect(checkboxElements[0].checked).toEqual(true);
		expect(checkboxElements[1].checked).toEqual(false);
		expect(checkboxElements[2].checked).toEqual(false);
	});
});

describe("FormFieldCheckbox component with options from DB", () => {
	it("should display the list of options from DB", async () => {
		await act( async() => {
			render(<FormFieldCheckboxExample fromDB={true} />);
		});

		await waitFor(() => {
			expect(getByText("Option 1")).toBeTruthy();
			expect(getByText("Option 2")).toBeTruthy();
			expect(getByText("Option 3")).toBeTruthy();
			expect(getByText("Option 4")).toBeTruthy();
		}, { timeout: 3000 });
	});
});
