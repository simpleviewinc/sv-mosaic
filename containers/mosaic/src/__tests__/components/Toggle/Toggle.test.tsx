import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import { useState } from "react";
import Toggle from "@root/components/Toggle";

afterEach(cleanup);

const { getByRole, getByText } = screen;

const ToggleExample = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = async (checked: boolean) => {
		setIsChecked(checked);
	};

	return (
		<Toggle
			label="Label test"
			disabled={false}
			onChange={handleChange}
			checked={isChecked}
		/>
	);
};

describe("Toggle component", () => {
	it("should check the Toggle", () => {
		render(<ToggleExample />);
		const toggle = getByRole("checkbox") as HTMLInputElement;

		expect(getByText("Label test")).toBeTruthy();
		expect(toggle.checked).toEqual(false);

		fireEvent.click(toggle);
		expect(toggle.checked).toEqual(true);
	});
});
