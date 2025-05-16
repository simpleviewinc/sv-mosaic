import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { PhoneDropdownData, PhoneSelectionInputSettings } from "@root/components/Field/FormFieldPhone/FormFieldPhoneTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldPhone from "@root/components/Field/FormFieldPhone/FormFieldPhone";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"phone", PhoneSelectionInputSettings> = {
	name: "phone",
	label: "Phone",
	type: "phone",
};

async function setup(
	props: Partial<MosaicFieldProps<"phone", PhoneSelectionInputSettings, PhoneDropdownData>> = {},
	{
		stateful = false,
		userEventOptions,
	}: {
		stateful?: boolean;
		userEventOptions?: Parameters<typeof userEvent.setup>[0];
	} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldPhone}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(userEventOptions),
	};
}

describe(__dirname, () => {
	it("should render the phone form field", async () => {
		await setup();

		expect(screen.queryByRole("button")).toBeInTheDocument();
		expect(screen.queryByRole("textbox")).toBeInTheDocument();
	});

	it("should render country code in text field if international formatting is enabled", async () => {
		await setup({
			value: "+15205302271",
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					international: true,
				},
			},
		});

		const countryButton = screen.queryByRole("button", { name: "Phone number country" });
		expect(countryButton).toBeInTheDocument();
		expect(within(countryButton).queryByText("+1")).not.toBeInTheDocument();

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("+1 520 530 2271");
	});

	it("should render country code in country selection button if international formatting not enabled", async () => {
		await setup({
			value: "+15205302271",
		});

		const countryButton = screen.queryByRole("button", { name: "Phone number country" });
		expect(countryButton).toBeInTheDocument();
		expect(within(countryButton).queryByText("+1")).toBeInTheDocument();

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("(520) 530-2271");
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("button")).not.toBeInTheDocument();
		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
