import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import { useState } from "react";
import FormFieldToggle from "@root/components/Field/FormFieldToggle";

afterEach(cleanup);

const { getByRole, getByText } = screen;

const FormFieldToggleExample = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = async (value) => {
		setIsChecked(value);
	};

	return (
		<FormFieldToggle
			fieldDef={{
				label: "Field label",
				type: "toggle",
				name: "toggle",
				inputSettings: {
					toggleLabel: "Toggle switch label",
				},
			}}
			disabled
			onChange={handleChange}
			value={isChecked}
		/>
	);
};

describe("FormFieldToggle component", () => {
	it("should check the FormFieldToggle", () => {
		render(<FormFieldToggleExample />);

		const toggle = getByRole("checkbox") as HTMLInputElement;

		expect(toggle.checked).toEqual(false);

		fireEvent.click(toggle);

		expect(toggle.checked).toEqual(true);
	});

	it("should contain the disabled attribute", () => {
		render(<FormFieldToggleExample />);

		const toggle = getByRole("checkbox") as HTMLInputElement;

		expect(toggle.disabled).toBeTruthy();
	});

	it("should display the toggle switch label", () => {
		render(<FormFieldToggleExample />);

		expect(getByText("Toggle switch label")).toBeTruthy();
	});
});
