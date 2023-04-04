import * as React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

// Components
import FormFieldPhoneSelectionDropdown from "./FormFieldPhoneSelectionDropdown";

afterEach(cleanup);

const { getByText, getByTitle } = screen;

const FormFieldPhoneSelectionDropdownExample = () => {
	const [value, setValue] = useState("No value");

	const handleOnChange = async (value: string) => {
		setValue(value);
	};

	return (
		<>
			<span>{value}</span>
			<FormFieldPhoneSelectionDropdown
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
					disabled: false,
				}}
				error={"Error text"}
				onChange={handleOnChange}
				value={value}
			/>
		</>
	);
};

describe("FormFieldPhoneSelectionDropdown component", () => {
	let phoneSelectionContainer;
	beforeEach(() => {
		const { container } = render(<FormFieldPhoneSelectionDropdownExample />);
		phoneSelectionContainer = container;
	});

	it("should not change the country data when a value is entered", () => {
		const phoneInput = phoneSelectionContainer.querySelector(".form-control");

		expect(getByText("No value")).toBeDefined();

		fireEvent.change(phoneInput, { target: { value: "52345" } });

		const countryCode = getByTitle("United States: + 1");

		expect(countryCode).toBeDefined();
	});
});

describe("FormFieldPhoneSelectionDropdown disabled state", () => {
	it('should display "Phone field disabled" when no value is passed', () => {
		render(
			<FormFieldPhoneSelectionDropdown
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
					disabled: true,
				}}
			/>
		);

		expect(getByText("Disabled field")).toBeDefined();
	});

	it('should display "Phone value:" text plus the value', () => {
		render(
			<FormFieldPhoneSelectionDropdown
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
					disabled: true,
				}}
				value='345'
			/>
		);

		expect(getByText("345")).toBeDefined();
	});
});

describe("FormFieldPhoneSelectionDropdown country code prop", () => {
	it("should display US phone number prefix when no country code is provided ", () => {
		const { container } = render(
			<FormFieldPhoneSelectionDropdown
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
				}}
			/>
		);

		const phoneInput = container.querySelector(
			".form-control"
		) as HTMLInputElement;

		expect(phoneInput.value).toBe("+1");
	});

	it("should display the phone number prefix of the country code provided", () => {
		const { container } = render(
			<FormFieldPhoneSelectionDropdown
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
					inputSettings: {
						country: "mx",
					},
				}}
			/>
		);

		const phoneInput = container.querySelector(
			".form-control"
		) as HTMLInputElement;

		expect(phoneInput.value).toBe("+52");
	});
});
