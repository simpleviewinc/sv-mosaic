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

	it("should name the input directly and hide the duplicate visible text", () => {
		render(<ToggleExample />);

		const toggle = getByRole("checkbox", { name: "Label test" });

		expect(toggle).toHaveAttribute("aria-label", "Label test");
		expect(toggle.closest("label")).toBeNull();
		expect(getByText("Label test")).toHaveAttribute("aria-hidden", "true");
		expect(getByText("Label test").closest("label")).toBeNull();
	});

	it("should check the Toggle when the visible label is clicked", () => {
		render(<ToggleExample />);

		fireEvent.click(getByText("Label test"));

		expect((getByRole("checkbox") as HTMLInputElement).checked).toEqual(true);
	});
});
