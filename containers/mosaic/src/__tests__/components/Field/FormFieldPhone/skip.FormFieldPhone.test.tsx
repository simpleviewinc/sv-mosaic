import * as React from "react";
import { render, cleanup } from "@testing-library/react";

// Components
import FormFieldPhone from "@root/components/Field/FormFieldPhone";

afterEach(cleanup);

describe("FormFieldPhone country code prop", () => {
	it("should display US phone number prefix when no country code is provided ", () => {
		const { container } = render(
			<FormFieldPhone
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
				}}
			/>,
		);

		const phoneInput = container.querySelector(
			".form-control",
		) as HTMLInputElement;

		expect(phoneInput.value).toBe("+1");
	});

	it("should display the phone number prefix of the country code provided", () => {
		const { container } = render(
			<FormFieldPhone
				fieldDef={{
					name: "phoneSelectDropdown",
					type: "phone",
					label: "Label",
					inputSettings: {
						country: "mx",
					},
				}}
			/>,
		);

		const phoneInput = container.querySelector(
			".form-control",
		) as HTMLInputElement;

		expect(phoneInput.value).toBe("+52");
	});
});
