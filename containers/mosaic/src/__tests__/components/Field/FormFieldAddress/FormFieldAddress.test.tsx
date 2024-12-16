import { render, screen, waitFor } from "@testing-library/react";
import React, { act, useState } from "react";
import type { UserEvent } from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

import type { AddressData, AddressFieldInputSettings, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldAddress from "@root/components/Field/FormFieldAddress/FormFieldAddress";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";
import { mockAddresses } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"address", AddressFieldInputSettings> = {
	name: "address",
	type: "address",
	inputSettings: {
		getOptionsCountries,
		getOptionsStates,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"address", AddressFieldInputSettings, AddressData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const Stateless = () => (
		<FormFieldAddress
			fieldDef={defaultFieldDef}
			onChange={async (addresses) => onChangeMock(addresses)}
			{...props}
		/>
	);

	const Stateful = () => {
		const [addresses, setAddresses] = useState<AddressData>([]);
		const onChangeMock = setAddresses || vi.fn();

		return (
			<FormFieldAddress
				fieldDef={defaultFieldDef}
				value={addresses}
				onChange={async (addresses) => onChangeMock(addresses)}
				{...props}
			/>
		);
	};

	const renderResult = await act(async () => render(
		stateful ? <Stateful /> : <Stateless />,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

function createAddressDrawerContext(user: UserEvent) {
	return {
		open: async () => {
			await user.click(screen.queryByRole("button", { name: "Add Address" }));
		},
		populate: async (mockAddress: AddressData[number], type: string) => {
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
			await user.click(screen.queryByRole("checkbox", { name: type }));
		},
		save: async () => {
			const save = screen.queryByRole("button", { name: "Save" });
			await user.click(save);
		},
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
				...mockAddresses[0],
			} as unknown as AddressData,
			// Right now the address field's data type
			// doesn't allow for a single address object, but
			// we want to make sure we support that in the future
		}))
			.not
			.toThrow();
	});

	it("should default type allowances to 1 of each if no type limits are provided", { timeout: 50_000 }, async () => {
		const { user } = await setup(undefined, { stateful: true });

		const types = ["Physical", "Billing", "Shipping"];
		const { open, populate, save } = createAddressDrawerContext(user);

		for (let i = 0; i < types.length; i++) {
			await open();
			await populate(mockAddresses[0], types[i]);

			for (const otherType of types.slice(0, i)) {
				expect(screen.queryByRole("checkbox", { name: otherType })).toBeNull();
			}

			await save();
		}

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});

	it("should allow up to the number of amounts per type for each type if provided", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					amountPerType: 2,
				},
			},
		}, { stateful: true });

		const types = ["Physical", "Billing", "Shipping"];
		const { open, populate, save } = createAddressDrawerContext(user);

		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < types.length; j++) {
				await open();
				await populate(mockAddresses[0], types[j]);

				// This is the second round of addresses being added, so there should no longer
				// be the option to select previously added types because there are already two
				if (i < 0) {
					for (const otherType of types.slice(0, j)) {
						expect(screen.queryByRole("checkbox", { name: otherType })).toBeNull();
					}
				}

				await save();
			}
		}

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});

	it("should allow up to the number of amounts of a specific type if provided", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					amountBilling: 2,
				},
			},
		}, { stateful: true });

		const { open, populate, save } = createAddressDrawerContext(user);

		for (let i = 0; i < 2; i++) {
			await open();
			await populate(mockAddresses[0], "Billing");
			await save();
		}

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});

	it("should not display redundant checkboxes if the input settings mean only one type is allowed", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					amountBilling: 1,
				},
			},
		}, { stateful: true });

		const { open } = createAddressDrawerContext(user);
		await open();
		expect(screen.queryByRole("checkbox", { name: "Physical" })).toBeNull();
		expect(screen.queryByRole("checkbox", { name: "Billing" })).toBeNull();
		expect(screen.queryByRole("checkbox", { name: "Shipping" })).toBeNull();
	});

	it("should allow varied amounts of specified address types", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					amountBilling: 1,
					amountShipping: 2,
				},
			},
		}, { stateful: true });

		const { open, populate, save } = createAddressDrawerContext(user);
		await open();
		expect(screen.queryByRole("checkbox", { name: "Physical" })).toBeNull();
		await populate(mockAddresses[0], "Billing");
		await save();
		await open();
		expect(screen.queryByRole("checkbox", { name: "Billing" })).toBeNull();
		await populate(mockAddresses[0], "Shipping");
		await save();
		await open();
		await populate(mockAddresses[0], "Shipping");
		await save();
		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});

	it("should allow specific types to be limited and default the rest to amounts per type", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					amountPerType: 1,
					amountShipping: 2,
				},
			},
		}, { stateful: true });

		const { open, populate, save } = createAddressDrawerContext(user);
		await open();
		expect(screen.queryByRole("checkbox", { name: "Physical" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Shipping" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Billing" })).toBeInTheDocument();
		await populate(mockAddresses[0], "Physical");
		await save();
		await open();
		expect(screen.queryByRole("checkbox", { name: "Physical" })).toBeNull();
		await populate(mockAddresses[0], "Billing");
		await save();
		await open();
		expect(screen.queryByRole("checkbox", { name: "Billing" })).toBeNull();
		await open();
		await populate(mockAddresses[0], "Shipping");
		await save();
		await open();
		await populate(mockAddresses[0], "Shipping");
		await save();
		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
	});

	it("should fire the on change handler when a remove button is clicked with the corresponding address removed", { timeout: 50_000 }, async () => {
		const onChangeMock = vi.fn();
		const { user } = await setup({
			value: mockAddresses,
			onChange: onChangeMock,
		});

		const allRemoveButtons = screen.queryAllByRole("button", { name: "Remove" });
		expect(allRemoveButtons).toHaveLength(3);
		const [remove] = allRemoveButtons;
		expect(remove).toBeInTheDocument();
		await user.click(remove);
		const confirm = screen.queryByRole("button", { name: "Yes, remove it" });
		expect(confirm).toBeInTheDocument();
		await user.click(confirm);
		expect(onChangeMock).toBeCalledWith([mockAddresses[1], mockAddresses[2]]);
	});

	it("should doing nothing except close the dialog when a remove confirmation is cancelled", { timeout: 50_000 }, async () => {
		const onChangeMock = vi.fn();
		const { user } = await setup({
			value: mockAddresses,
			onChange: onChangeMock,
		});

		const allRemoveButtons = screen.queryAllByRole("button", { name: "Remove" });
		expect(allRemoveButtons).toHaveLength(3);
		const [remove] = allRemoveButtons;
		expect(remove).toBeInTheDocument();
		await user.click(remove);
		const cancel = screen.queryByRole("button", { name: "No, keep it" });
		expect(cancel).toBeInTheDocument();
		await user.click(cancel);
		expect(onChangeMock).not.toBeCalled();
		await waitFor(() => expect(screen.queryByRole("button", { name: "No, keep it" })).toBeNull());
	});

	it("should fire the on blur handler when an address is removed", { timeout: 50_000 }, async () => {
		const onBlurMock = vi.fn();
		const { user } = await setup({
			value: [mockAddresses[0]],
			onBlur: onBlurMock,
		});

		const remove = screen.queryByRole("button", { name: "Remove" });
		expect(remove).toBeInTheDocument();
		await user.click(remove);
		const confirm = screen.queryByRole("button", { name: "Yes, remove it" });
		expect(confirm).toBeInTheDocument();
		await user.click(confirm);
		expect(onBlurMock).toBeCalled();
	});

	it("should prompt the user when they attempt to exit if unsaved changes have been made and close drawer if confirmed", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			value: [mockAddresses[0]],
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const address = screen.queryByLabelText("Address*");
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(address).toBeInTheDocument();
		expect(cancel).toBeInTheDocument();
		await user.type(address, "Modification");
		await user.click(cancel);
		const confirm = screen.queryByRole("button", { name: "Yes, leave" });
		expect(confirm).toBeInTheDocument();
		await user.click(confirm);
		await waitFor(() => expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull());
	});

	it("should prevent the drawer from closing if the user cancels the close confirmation prompt", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			value: [mockAddresses[0]],
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const address = screen.queryByLabelText("Address*");
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(address).toBeInTheDocument();
		expect(cancel).toBeInTheDocument();
		await user.type(address, "Modification");
		await user.click(cancel);
		const stay = screen.queryByRole("button", { name: "No, stay" });
		expect(stay).toBeInTheDocument();
		await user.click(stay);
		expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeInTheDocument();
	});

	it("should close the drawer when the user saves", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			value: [mockAddresses[0]],
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const save = screen.queryByRole("button", { name: "Save" });
		expect(save).toBeInTheDocument();
		await user.click(save);
		await waitFor(() => expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull());
	});

	it("should fire the on blur handler when the user saves", { timeout: 50_000 }, async () => {
		const onBlurMock = vi.fn();
		const { user } = await setup({
			value: [mockAddresses[0]],
			onBlur: onBlurMock,
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const save = screen.queryByRole("button", { name: "Save" });
		expect(save).toBeInTheDocument();
		await user.click(save);
		expect(onBlurMock).toBeCalled();
	});

	it("should close the drawer immediately if the user cancels with no changes", { timeout: 50_000 }, async () => {
		const { user } = await setup({
			value: [mockAddresses[0]],
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(cancel).toBeInTheDocument();
		await user.click(cancel);
		await waitFor(() => expect(screen.queryByTestId(testIds.DRAWER_BACKDROP)).toBeNull());
	});

	it("should fire the on blur handler when the user cancels", { timeout: 50_000 }, async () => {
		const onBlurMock = vi.fn();
		const { user } = await setup({
			value: [mockAddresses[0]],
			onBlur: onBlurMock,
		});

		const edit = screen.queryByRole("button", { name: "Edit" });
		expect(edit).toBeInTheDocument();
		await user.click(edit);
		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(cancel).toBeInTheDocument();
		await user.click(cancel);
		expect(onBlurMock).toBeCalled();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("button", { name: "Add Address" })).toBeNull();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
