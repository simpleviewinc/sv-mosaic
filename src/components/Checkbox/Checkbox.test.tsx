import * as React from "react";
import { useState } from "react";
import {
	render,
	screen,
	fireEvent,
	cleanup
} from "@testing-library/react";

import Checkbox from "./Checkbox";

afterEach(cleanup);

describe("Checkbox", function() {
	it("should render on the screen", () => {
		const { getByRole } = render(<Checkbox
			label="Test checkbox"
			checked={false}
		/>);

		const checkbox = getByRole("checkbox") as HTMLInputElement;

		expect(checkbox).toBeTruthy();
	});

	it("should render a checkbox with a label", () => {
		render(<Checkbox
			label="Label test"
			checked={false}
		/>);

		expect(screen.getByText("Label test")).toBeDefined();
	});

	it("should render a checkbox with a helper text", () => {
		render(<Checkbox
			label="Test checkbox"
			checked={false}
			helperText="Helper text test"
		/>);

		expect(screen.getByText("Helper text test")).toBeDefined();
	});

	it("should render a checkbox disabled and unchecked", () => {
		const { getByRole } = render(<Checkbox
			label="Example label"
			checked={false}
			disabled={true}
		/>);

		const checkbox = getByRole("checkbox") as HTMLInputElement;

		expect(checkbox.disabled).toBe(true);
		expect(checkbox.checked).toBe(false);
	});

	it("should render a checkbox disabled and checked", () => {
		const { getByRole } = render(<Checkbox
			label="Example label"
			checked={true}
			disabled={true}
		/>);

		const checkbox = getByRole("checkbox") as HTMLInputElement;

		expect(checkbox.disabled).toBe(true);
		expect(checkbox.checked).toBe(true);
	});

	it("should render a checkbox enabled and indeterminate", () => {
		const { getByTestId } = render(<Checkbox
			label="Example label"
			checked={false}
			indeterminate={true}
		/>);

		const checkbox = getByTestId("checkbox-test-id") as HTMLInputElement;

		expect(checkbox.classList.contains("MuiCheckbox-indeterminate")).toBe(true);
	});

	it("should render a checkbox disabled and indeterminate", () => {
		const { getByTestId, getByRole } = render(<Checkbox
			label="Example label"
			checked={false}
			disabled={true}
			indeterminate={true}
		/>);

		const checkboxByRole = getByRole("checkbox") as HTMLInputElement;
		const checkboxTestId = getByTestId("checkbox-test-id") as HTMLInputElement;

		expect(checkboxByRole.disabled).toBe(true);
		expect(checkboxTestId.classList.contains("MuiCheckbox-indeterminate")).toBe(true);
	});

	it("should check with onClick", () => {
		const C = () => {
			const [checked, setChecked] = useState(false);

			const onClick = function() {
				setChecked(!checked);
			}

			return (
				<Checkbox
					checked={checked}
					onClick={onClick}
					label="Test checkbox"
				/>
			)
		}

		const { getByRole } = render(<C/>);
	
		const checkbox = getByRole("checkbox") as HTMLInputElement;

		expect(checkbox.checked).toEqual(false);
	
		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(true);
	});
});