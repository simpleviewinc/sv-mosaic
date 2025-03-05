import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { AddressFieldInputSettings, FormMethods, FormState, MosaicFieldProps } from "@root/components";
import type { MosaicLabelValue } from "@root/types";

import AddressStateField from "@root/components/Field/FormFieldAddress/AddressStateField/AddressStateField";
import { getOptionsCountries, getOptionsStates } from "@root/mock/options";
import { defaultFormContextMethods, FormContext } from "@root/components/Form/FormContext";
import { getInitialState } from "@root/components/Form/useForm/initial";
import FormFieldTestType from "components/Field/FormFieldTestType";

async function setup(
	props: Partial<MosaicFieldProps<"dropdown", AddressFieldInputSettings, MosaicLabelValue>> = {},
	formMethods: Partial<FormMethods> = {},
	formState: Partial<FormState> = {},
) {
	const onChangeCbMock = props.onChange || vi.fn();
	const addHookMock = vi.fn();

	const renderResult = await act(async () => render(
		<FormContext.Provider
			value={{
				state: {
					...getInitialState(),
					...formState,
				},
				methods: {
					...defaultFormContextMethods,
					addHook: addHookMock,
					...formMethods,
				},
			}}
		>
			<FormFieldTestType
				Component={AddressStateField}
				fieldDef={{
					name: "state",
					label: "State",
					type: "dropdown",
					inputSettings: {
						getOptionsCountries,
						getOptionsStates,
					},
				}}
				onChange={onChangeCbMock}
				{...props}
			/>
		</FormContext.Provider>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
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

	// it("should clear the state when the country is cleared", async () => {
	// 	const setFieldValueMock = vi.fn<FormMethods["setFieldValue"]>();
	// 	const addHookMock = vi.fn();

	// 	await setup({
	// 		value: {
	// 			label: "Bolton",
	// 			value: "BOL",
	// 		},
	// 	},
	// 	{
	// 		addHook: addHookMock,
	// 		setFieldValue: setFieldValueMock,
	// 	},
	// 	{
	// 		data: {
	// 			country: {
	// 				label: "United Kingdom",
	// 				value: "GB",
	// 			},
	// 		},
	// 	});

	// 	addHookMock.mockReset();
	// 	await act(async () => setFieldValueMock({
	// 		name: "country",
	// 		value: undefined,
	// 	}));

	// 	expect(addHookMock).toBeCalled();
	// });
});
