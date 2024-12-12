import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressFieldInputSettings, FormMethods, FormState, MosaicFieldProps } from "@root/components";
import type { MosaicLabelValue } from "@root/types";

import AddressStateField from "@root/components/Field/FormFieldAddress/AddressStateField/AddressStateField";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";
import { defaultFormContextMethods, FormContext } from "@root/components/Form/FormContext";
import { getInitialState } from "@root/components/Form/useForm/initial";

async function setup(
	props: Partial<MosaicFieldProps<"dropdown", AddressFieldInputSettings, MosaicLabelValue>> = {},
	formMethods: Partial<FormMethods> = {},
	formState: Partial<FormState> = {},
) {
	const onChangeCbMock = props.onChange || vi.fn();

	function Base({ formState: formStateInner = {} }: {formState?: Partial<FormState>}) {
		return (
			<FormContext.Provider
				value={{
					state: {
						...getInitialState(),
						...formState,
						...formStateInner,
					},
					methods: { ...defaultFormContextMethods, ...formMethods },
				}}
			>
				<AddressStateField
					fieldDef={{
						name: "state",
						type: "dropdown",
						inputSettings: {
							getOptionsCountries,
							getOptionsStates,
						},
					}}
					onChange={onChangeCbMock}
					{...props}
				/>
			</FormContext.Provider>
		);
	}

	const renderResult = await act(async () => render(
		<Base />,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
		Base,
	};
}

describe(__dirname, () => {
	it("should render the address state field type", async () => {
		await setup();

		expect(screen.queryByRole("combobox")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Open" })).toBeInTheDocument();
	});

	it("should fetch a list of states based on the country currently in state", async () => {
		const { user } = await setup(undefined, undefined, {
			data: {
				country: {
					label: "United Kingdom",
					value: "GB",
				},
			},
		});

		const open = screen.queryByRole("button", { name: "Open" });
		expect(open).toBeInTheDocument();
		await user.click(open);
		expect(screen.queryByRole("option", { name: "Bolton" })).toBeInTheDocument();
	});

	it("should clear the state when the country is cleared", async () => {
		const setFieldValueMock = vi.fn();

		const { rerender, Base } = await setup({
			value: {
				label: "Bolton",
				value: "BOL",
			},
		},
		{
			setFieldValue: setFieldValueMock,
		},
		{
			data: {
				country: {
					label: "United Kingdom",
					value: "GB",
				},
			},
		});

		await act(async () => rerender(
			<Base
				formState={{
					data: {
						country: undefined,
					},
				}}
			/>,
		));

		expect(setFieldValueMock).toBeCalledWith({
			name: "state",
			path: undefined,
			value: undefined,
		});
	});
});
