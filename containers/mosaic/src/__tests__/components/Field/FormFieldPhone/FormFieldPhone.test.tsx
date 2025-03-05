import { render, screen } from "@testing-library/react";
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

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("button")).not.toBeInTheDocument();
		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
