import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressData, AddressFieldInputSettings, MosaicFieldProps } from "@root/components";

import FormFieldAddress from "@root/components/Field/FormFieldAddress/FormFieldAddress";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";

async function setup(props: Partial<MosaicFieldProps<"address", AddressFieldInputSettings, AddressData>> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldAddress
			fieldDef={{
				name: "address",
				type: "address",
				inputSettings: {
					getOptionsCountries,
					getOptionsStates,
				},
			}}
			onChange={onChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the address form field", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeInTheDocument();
	});

	it("should transform a non array address object into an array containing the object", async () => {
		expect(() => setup({
			value: {
				address1: "81 Sussex Gardens",
				country: {
					label: "United Kingdom",
					value: "GB",
				},
				city: "Stansville",
				state: {
					label: "Bolton",
					value: "BOL",
				},
				postalCode: "GL1 1AB",
				types: [],
			// Right now the address field's data type
			// doesn't allow for a single address object, but
			// we want to make sure we support that in the future
			} as unknown as AddressData,
		}))
			.not
			.toThrow();
	});

	it("should default type allowances to 1 of each if no type limits are provided", { timeout: 10_000 }, async () => {
		const { user } = await setup();

		const types = ["Physical", "Billing", "Shipping"];

		const addAddress = screen.queryByRole("button", { name: "Add Address" });
		expect(addAddress).toBeInTheDocument();

		for (let i = 0; i < types.length; i++) {
			await user.click(addAddress);
			const save = screen.queryByRole("button", { name: "Save" });
			const address = screen.queryByLabelText("Address*");
			const country = screen.queryByLabelText("Country*");
			const city = screen.queryByLabelText("City*");
			const state = screen.queryByLabelText("State");
			const postalCode = screen.queryByLabelText("Postal Code*");
			const type = screen.queryByRole("checkbox", { name: types[i] });

			expect(save).toBeInTheDocument();
			expect(address).toBeInTheDocument();
			expect(country).toBeInTheDocument();
			expect(city).toBeInTheDocument();
			expect(state).toBeInTheDocument();
			expect(postalCode).toBeInTheDocument();
			expect(type).toBeInTheDocument();

			await user.type(address, "81 Sussex Gardens");
			await user.click(country);
			await user.keyboard("United Kingdom");
			const uk = screen.queryByRole("option", { name: "United Kingdom" });
			expect(uk).toBeInTheDocument();
			await user.click(uk);
			await user.type(city, "Stackville");
			await user.click(state);
			await user.keyboard("Bolton");
			const bolton = screen.queryByRole("option", { name: "Bolton" });
			expect(bolton).toBeInTheDocument();
			await user.click(bolton);
			await user.type(postalCode, "GL1 1AB");
			await user.click(type);

			for (const otherType of types.slice(0, i)) {
				console.log(types[i], otherType);
				expect(screen.queryByRole("checkbox", { name: otherType })).toBeNull();
			}

			await user.click(save);
		}

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});
});
