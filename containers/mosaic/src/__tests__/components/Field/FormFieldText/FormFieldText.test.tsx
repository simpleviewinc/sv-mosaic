import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { TextFieldData, TextFieldInputSettings } from "@root/components/Field/FormFieldText/FormFieldTextTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldText from "@root/components/Field/FormFieldText/FormFieldText";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"text", TextFieldInputSettings> = {
	name: "text",
	type: "text",
};

async function setup(
	props: Partial<MosaicFieldProps<"text", TextFieldInputSettings, TextFieldData>> = {},
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
			Component={FormFieldText}
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
	it("should render the number form field", async () => {
		await setup();

		expect(screen.queryByRole("textbox")).toBeInTheDocument();
	});

	it("should fire the on change handler when text is entered", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "A");
		expect(onChangeMock).toBeCalledWith("A");
	});

	it("should display a prefix adornment if a prefix is provided", async () => {
		await setup({ fieldDef: {
			...defaultFieldDef,
			inputSettings: { prefixElement: <>TestPrefix</> } },
		});

		expect(screen.queryByText("TestPrefix")).toBeInTheDocument();
	});

	it("should prevent using the number input type", async () => {
		await setup({ fieldDef: {
			...defaultFieldDef,
			inputSettings: { type: "number" } },
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "text");
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
