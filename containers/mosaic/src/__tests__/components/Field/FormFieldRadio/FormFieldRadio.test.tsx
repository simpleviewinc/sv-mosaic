import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { RadioData, RadioInputSettings } from "@root/components/Field/FormFieldRadio/FormFieldRadioTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldRadio from "@root/components/Field/FormFieldRadio/FormFieldRadio";
import { getOptions, mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"radio", RadioInputSettings> = {
	name: "radio",
	label: "Radio",
	type: "radio",
	inputSettings: {
		options: mockOptions,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"radio", RadioInputSettings, RadioData>> = {},
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
			Component={FormFieldRadio}
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
	it("should render the radio form field", async () => {
		await setup();

		expect(screen.queryByRole("radio", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("radio", { name: "Cat" })).toBeInTheDocument();
	});

	it("should not throw if input settings are undefined", async () => {
		expect(() => setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: undefined,
			},
		}))
			.not
			.toThrow();
	});

	it("should render the radio items when options provided is an asynchronous function", async () => {
		await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: getOptions,
				},
			},
		});

		await waitFor(() => {
			expect(screen.queryByRole("radio", { name: "Dog" })).toBeInTheDocument();
			expect(screen.queryByRole("radio", { name: "Cat" })).toBeInTheDocument();
		});
	});

	it("should provide an additional option to the useOptions hook if the value is defined", async () => {
		await setup({
			value: { value: "Turnip", label: "Turnip" },
		});

		expect(screen.queryByRole("radio", { name: "Turnip" })).toBeInTheDocument();
	});

	it("should fire the on change handler with the label-value pair if a radio is selected", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const radio = screen.queryByRole("radio", { name: "Dog" });
		expect(radio).toBeInTheDocument();
		await user.click(radio);
		expect(onChangeMock).toBeCalledWith({ label: "Dog", value: "dog" });
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("radio", { name: "Dog" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
