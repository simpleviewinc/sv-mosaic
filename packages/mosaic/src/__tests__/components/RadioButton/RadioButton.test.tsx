import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as React from "react";
import RadioButton from "@root/components/RadioButton";

afterEach(cleanup);

describe("RadioButton component", () => {
	it("should check the RadioButton", () => {
		render(
			<RadioButton label="Label test" disabled={false} required={false} />,
		);
		const radioButton = screen.getByRole("radio") as HTMLInputElement;

		expect(radioButton.checked).toEqual(false);

		fireEvent.click(radioButton);

		expect(radioButton.checked).toBe(true);
	});

	it("should test the disabled state", () => {
		render(<RadioButton label="Label test" disabled={true} required={false} />);

		const radioButton = screen.getByRole("radio") as HTMLInputElement;

		expect(radioButton.disabled).toBe(true);
	});

	it("should name the input from the label and hide the duplicate visible text", () => {
		render(<RadioButton label="Label test" />);

		expect(screen.getByRole("radio", { name: "Label test" })).toHaveAttribute("aria-label", "Label test");
		expect(screen.getByText("Label test")).toHaveAttribute("aria-hidden", "true");
	});

	it("should check the RadioButton when the visible label is clicked", () => {
		render(<RadioButton label="Label test" />);

		fireEvent.click(screen.getByText("Label test"));

		expect((screen.getByRole("radio") as HTMLInputElement).checked).toBe(true);
	});

	it("should test that the RadioButton is required", () => {
		render(<RadioButton label="Label test" disabled={false} required={true} />);

		const radioButton = screen.getByRole("radio") as HTMLInputElement;

		expect(radioButton.required).toBe(true);
	});
});
