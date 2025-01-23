import type { UserEvent } from "@testing-library/user-event";

import { screen } from "@testing-library/react";

import type { AddressData } from "@root/components";

function createAddressDrawerContext(user: UserEvent) {
	return {
		open: async () => {
			await user.click(screen.queryByRole("button", { name: "Add Address" }));
		},
		populate: async (mockAddress: AddressData[number], type?: string) => {
			// Address 1
			await user.type(screen.queryByLabelText("Address*"), mockAddress.address1);

			// Country
			await user.click(screen.queryByLabelText("Country*"));
			await user.keyboard(mockAddress.country.label);
			await user.click(screen.queryByRole("option", { name: mockAddress.country.label }));

			// City
			await user.type(screen.queryByLabelText("City*"), mockAddress.city);

			// State
			await user.click(screen.queryByLabelText("State"));
			await user.keyboard(mockAddress.state.label);
			await user.click(screen.queryByRole("option", { name: mockAddress.state.label }));

			// Postcode
			await user.type(screen.queryByLabelText("Postal Code*"), mockAddress.postalCode);

			// Type
			if (type) {
				await user.click(screen.queryByRole("checkbox", { name: type }));
			}
		},
		save: async () => {
			const save = screen.queryByRole("button", { name: "Save" });
			await user.click(save);
		},
	};
}

export default createAddressDrawerContext;
