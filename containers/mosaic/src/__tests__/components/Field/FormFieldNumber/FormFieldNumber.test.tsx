import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { NumberFieldData, NumberFieldInputSettings } from "@root/components/Field/FormFieldNumber/FormFieldNumberTypes";
import type { FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldNumber from "@root/components/Field/FormFieldNumber/FormFieldNumber";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"number", NumberFieldInputSettings> = {
	name: "number",
	type: "number",
};

async function setup(
	props: Partial<MosaicFieldProps<"number", NumberFieldInputSettings, NumberFieldData>> = {},
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
			Component={FormFieldNumber}
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
	afterEach(() => {
		vi.useRealTimers();
	});

	it("should render the number form field", async () => {
		await setup();

		expect(screen.queryByRole("textbox")).toBeInTheDocument();
	});

	it("should fire the on change handler", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("123");
		expect(onChangeMock).toBeCalledWith("123");
	});

	it("should fire the on change handler with undefined if the entry is an empty string", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			value: "1",
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.type(input, "{Backspace}");
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with undefined if the field loses focus containing only a negative sign", async () => {
		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock }, { stateful: true });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("-");
		expect(onChangeMock).toBeCalledWith("-");
		onChangeMock.mockReset();
		await user.keyboard("{Tab}");
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with undefined if the field loses focus containing only a positive sign", async () => {
		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock }, { stateful: true });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("+");
		expect(onChangeMock).toBeCalledWith("+");
		onChangeMock.mockReset();
		await user.keyboard("{Tab}");
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with the integral number if field loses focus with a trailing decimal", async () => {
		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock }, { stateful: true });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("1");
		expect(onChangeMock).toBeCalledWith("1");
		onChangeMock.mockReset();
		await user.keyboard(".");
		expect(onChangeMock).toBeCalledWith("1.");
		onChangeMock.mockReset();
		await user.keyboard("{Tab}");
		expect(onChangeMock).toBeCalledWith("1");
	});

	it("should not fire the on change handler and show a tooltip that is automatically dismissed on invalid entry", async () => {
		vi.useFakeTimers();

		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock }, {
			userEventOptions: { advanceTimers: vi.advanceTimersByTime },
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("A");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a numerical value.");
		await user.click(input);
		await user.paste("B");
		expect(vi.getTimerCount()).toBe(1);
		await act(() => vi.advanceTimersByTime(3000));
		expect(tooltip).not.toBeInTheDocument();
	});

	it("should not fire the on change handler with a positive sign if only a negative integer is allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					sign: "negative",
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("+123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a negative numerical value.");
	});

	it("should not fire the on change handler with no sign if only a negative integer is allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					sign: "negative",
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("+123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a negative numerical value.");
	});

	it("should not fire the on change handler with a negative sign if only a positive integer is allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					sign: "positive",
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("-123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a positive numerical value.");
	});

	it("should not fire the on change handler with decimal places if only a whole number is allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					decimalPlaces: 0,
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("123.123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a whole number.");
	});

	it("should not fire the on change handler for multiple decimal places where only 1 is allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					decimalPlaces: 1,
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("123.123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a numerical value with a maximum of 1 decimal place.");
	});

	it("should not fire the on change handler more decimal places than has been allowed", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					...defaultFieldDef.inputSettings,
					decimalPlaces: 2,
				},
			},
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.paste("123.123");
		expect(onChangeMock).not.toBeCalled();
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Must be a numerical value with a maximum of 2 decimal places.");
	});

	it("should display a prefix adornment if a prefix is provided", async () => {
		await setup({ fieldDef: {
			...defaultFieldDef,
			inputSettings: { prefix: "TestPrefix" } },
		});

		expect(screen.queryByText("TestPrefix")).toBeInTheDocument();
	});

	it("should display a suffix adornment if a suffix is provided", async () => {
		await setup({ fieldDef: {
			...defaultFieldDef,
			inputSettings: { suffix: "TestSuffix" } },
		});

		expect(screen.queryByText("TestSuffix")).toBeInTheDocument();
	});

	it("should fire the on blur handler when the field loses focus", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		await user.keyboard("{Tab}");
		expect(onBlurMock).toBeCalled();
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
