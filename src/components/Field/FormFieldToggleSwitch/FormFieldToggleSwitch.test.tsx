import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import { useState } from "react";
import FormFieldToggleSwitch from "./FormFieldToggleSwitch";

afterEach(cleanup);

const { getByRole, getByText } = screen;

const FormFieldToggleSwitchExample = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = async (value) => {
		setIsChecked(value);
	};

	return (
		<FormFieldToggleSwitch
			fieldDef={{
				label: "Field label",
				type: "toggleSwitch",
				name: "toggleSwitch",
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

describe("FormFieldToggleSwitch component", () => {
	it("should check the FormFieldToggleSwitch", () => {
		render(<FormFieldToggleSwitchExample />);

		const toggleSwitch = getByRole("checkbox") as HTMLInputElement;

		expect(toggleSwitch.checked).toEqual(false);

		fireEvent.click(toggleSwitch);

		expect(toggleSwitch.checked).toEqual(true);
	});

	it("should contain the disabled attribute", () => {
		render(<FormFieldToggleSwitchExample />);

		const toggleSwitch = getByRole("checkbox") as HTMLInputElement;

		expect(toggleSwitch.disabled).toBeTruthy();
	});

	it("should display the toggle switch label", () => {
		render(<FormFieldToggleSwitchExample />);

		expect(getByText("Toggle switch label")).toBeTruthy();
	});
});
