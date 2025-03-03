import { render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DropdownData, DropdownInputSettings, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldDropdown from "@root/components/Field/FormFieldDropdown/FormFieldDropdown";
import { getOptions, mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"dropdown", DropdownInputSettings> = {
	name: "dropdown",
	label: "Dropdown",
	type: "dropdown",
	inputSettings: {
		options: mockOptions,
	},
};

async function setup(
	props: Partial<MosaicFieldProps<"dropdown", DropdownInputSettings, DropdownData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldDropdown}
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			stateful={stateful}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the dropdown form field", async () => {
		await setup();

		expect(screen.queryByRole("combobox")).toBeInTheDocument();
	});

	it("should fetch options based on the synchronous options array", async () => {
		const { user } = await setup();

		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		await user.click(input);

		expect(screen.queryByRole("option", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Horse" })).toBeInTheDocument();
	});

	it("should fetch options based on the asynchronous get options callback", async () => {
		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					options: getOptions,
				},
			},
		});

		const skeleton = screen.queryByTestId(testIds.FORM_FIELD_SKELETON);
		expect(skeleton).toBeInTheDocument();
		await waitFor(() => expect(skeleton).not.toBeInTheDocument(), { timeout: 1000 });
		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		await user.click(input);

		expect(screen.queryByRole("option", { name: "Cat" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Dog" })).toBeInTheDocument();
		expect(screen.queryByRole("option", { name: "Horse" })).toBeInTheDocument();
	});

	it("should append the current value item as an option if it doesn't already exist in the options fetched", async () => {
		// We expect a warning from MUI, because the value isn't in the options
		// at the time that the combobox is rendered. Probably we should avoid
		// rendering the combo box until all options have been resolved.
		vi.spyOn(console, "warn").mockImplementation(() => null);

		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					getOptions: async () => mockOptions,
				},
			},
			value: { label: "Ferret", value: "ferret" },
		});

		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		expect(screen.queryByRole("option", { name: "Ferret" })).toBeInTheDocument();
	});

	it("should assign the reference of the embedded input field to the input ref", async () => {
		const inputRef = { current: null };

		await setup({ inputRef });

		expect(inputRef.current).not.toBeNull();
	});

	it("should fire the on change handler with the label value object that has been selected", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		const option = screen.queryByRole("option", { name: "Cat" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith({
			label: "Cat",
			value: "cat",
		});
	});

	it("should fire the on change handler with undefined if the value is cleared", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			value: {
				label: "Ferret",
				value: "",
			},
		});

		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("Ferret");
		await user.click(input);
		await user.keyboard("{Backspace}");
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on blur handler when the dropdown's text field loses focus", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const input = screen.queryByRole("combobox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("{Tab}");
		expect(onBlurMock).toBeCalled();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
