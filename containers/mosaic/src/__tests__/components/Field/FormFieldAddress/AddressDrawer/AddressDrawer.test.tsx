import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressDrawerProps } from "@root/components/Field/FormFieldAddress";

import AddressDrawer from "@root/components/Field/FormFieldAddress/AddressDrawer";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";

async function setup(props: Partial<AddressDrawerProps> = {}) {
	const onSaveMock = props.onSave || vi.fn();
	const onHandleCloseMock = props.handleClose || vi.fn();

	const renderResult = await act(async () => render(
		<AddressDrawer
			getOptionsCountries={getOptionsCountries}
			getOptionsStates={getOptionsStates}
			googleMapsApiKey=""
			onSave={onSaveMock}
			handleClose={onHandleCloseMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the address drawer and its components", async () => {
		await setup();

		expect(screen.queryByRole("heading", { name: "Address Information" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Cancel" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Save" })).toBeInTheDocument();
		expect(screen.queryByLabelText("Address*")).toBeInTheDocument();
		expect(screen.queryByLabelText("Country*")).toBeInTheDocument();
		expect(screen.queryByLabelText("City*")).toBeInTheDocument();
		expect(screen.queryByLabelText("State")).toBeInTheDocument();
		expect(screen.queryByLabelText("Postal Code*")).toBeInTheDocument();
	});

	it("should fire the unsaved changes handler if one has been provided with the correct parameter", async () => {
		const handleUnsavedChangesMock = vi.fn();

		const { user } = await setup({ handleUnsavedChanges: handleUnsavedChangesMock });

		expect(handleUnsavedChangesMock).toBeCalledWith(false);
		handleUnsavedChangesMock.mockReset();
		const address = screen.queryByLabelText("Address*");
		expect(address).toBeInTheDocument();
		await user.type(address, "A");
		expect(handleUnsavedChangesMock).toBeCalledWith(true);
		handleUnsavedChangesMock.mockReset();
		await user.click(address);
		await user.keyboard("{Backspace}");
		expect(handleUnsavedChangesMock).toBeCalledWith(false);
	});

	it("should fire the on save handler when the form is submitted", async () => {
		const onSaveMock = vi.fn();
		const { user } = await setup({ onSave: onSaveMock });

		const save = screen.queryByRole("button", { name: "Save" });
		const address = screen.queryByLabelText("Address*");
		const country = screen.queryByLabelText("Country*");
		const city = screen.queryByLabelText("City*");
		const state = screen.queryByLabelText("State");
		const postalCode = screen.queryByLabelText("Postal Code*");

		expect(save).toBeInTheDocument();
		expect(address).toBeInTheDocument();
		expect(country).toBeInTheDocument();
		expect(city).toBeInTheDocument();
		expect(state).toBeInTheDocument();
		expect(postalCode).toBeInTheDocument();

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
		await user.click(save);
		expect(onSaveMock).toBeCalledWith({
			address1: "81 Sussex Gardens",
			address2: undefined,
			address3: undefined,
			city: "Stackville",
			country: {
				label: "United Kingdom",
				value: "GB",
			},
			postalCode: "GL1 1AB",
			state: {
				label: "Bolton",
				value: "BOL",
			},
			types: undefined,
		});
	});

	it("should render address types field if types are provided", async () => {
		await setup({ addressTypes: [{ value: "shipping", label: "Shipping" }, { value: "billing", label: "Billing" }] });

		expect(screen.queryByLabelText("Shipping")).toBeInTheDocument();
		expect(screen.queryByLabelText("Billing")).toBeInTheDocument();
	});

	it("should render the types of the address currently being edited even if they are not provided as address types", async () => {
		await setup({
			addressTypes: [
				{
					value: "shipping",
					label: "Shipping",
				},
			],
			addressToEdit: {
				address1: "81 Sussex Gardens",
				city: "Stackville",
				state: {
					label: "Bolton",
					value: "BOL",
				},
				postalCode: "GL1 1AB",
				country: {
					label: "United Kingdom",
					value: "GB",
				},
				types: [
					{
						label: "Physical",
						value: "physical",
					},
				],
			},
		});

		expect(screen.queryByLabelText("Shipping")).toBeInTheDocument();
		const physical = screen.queryByLabelText("Physical");
		expect(physical).toBeInTheDocument();
		expect(physical).toBeChecked();
	});

	it("should fire the on save function with an undefined types key if there are no address types", async () => {
		const onSaveMock = vi.fn();
		const { user } = await setup({
			onSave: onSaveMock,
			addressToEdit: {
				address1: "81 Sussex Gardens",
				city: "Stackville",
				state: {
					label: "Bolton",
					value: "BOL",
				},
				postalCode: "GL1 1AB",
				country: {
					label: "United Kingdom",
					value: "GB",
				},
				types: [],
			},
		});

		const save = screen.queryByRole("button", { name: "Save" });
		expect(save).toBeInTheDocument();
		await user.click(save);
		expect(onSaveMock).toBeCalledWith({
			address1: "81 Sussex Gardens",
			city: "Stackville",
			state: {
				label: "Bolton",
				value: "BOL",
			},
			postalCode: "GL1 1AB",
			country: {
				label: "United Kingdom",
				value: "GB",
			},
			types: undefined,
		});
	});

	it("should fire the handle close handler when the cancel button is clicked", async () => {
		const onCloseMock = vi.fn();
		const { user } = await setup({ handleClose: onCloseMock });

		const cancel = screen.queryByRole("button", { name: "Cancel" });
		expect(cancel).toBeInTheDocument();
		await user.click(cancel);
		expect(onCloseMock).toBeCalled();
	});
});
