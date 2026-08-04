import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DateData, FieldDefBase, MosaicFieldProps } from "@root/components";

import FormFieldTestType from "../FormFieldTestType";
import FormFieldDate from "@root/components/Field/FormFieldDate/FormFieldDate";
import testIds from "@root/utils/testIds";

const defaultFieldDef: FieldDefBase<"date"> = {
	name: "date",
	label: "Date",
	type: "date",
};

async function setup(
	props: Partial<MosaicFieldProps<"date", never, DateData>> = {},
	{ stateful = false }: { stateful?: boolean} = {},
) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<FormFieldTestType
			Component={FormFieldDate}
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
	it("should render a date field", async () => {
		await setup();

		expect(screen.queryAllByRole("spinbutton").length).toBeGreaterThan(0);
		expect(screen.queryByRole("button", { name: "Choose date" })).toBeInTheDocument();
	});

	it("should not fire the on change handler with a valid date while manual entry is incomplete", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const monthSection = screen.getByRole("spinbutton", { name: /month/i });
		await user.click(monthSection);
		await user.keyboard("1");

		// Typing a single digit leaves the date incomplete — onChange may be called
		// with null but must not be called with a complete valid Date object.
		const calledWithValidDate = onChangeMock.mock.calls.some(
			([arg]) => arg?.date instanceof Date && !isNaN(arg.date.getTime()),
		);
		expect(calledWithValidDate).toBe(false);
	});

	it("should fire the on change handler with a keyboard and a valid date if manual entry is used", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		// In the accessible structure, MUI X's paste handler accepts a full date string and
		// parses it into the sections when the pasted text is not purely letters or digits.
		const monthSection = screen.getByRole("spinbutton", { name: /month/i });
		await user.click(monthSection);
		await user.paste("01/01/2024");

		expect(onChangeMock).toHaveBeenCalledWith({
			date: new Date("2024/01/01"),
			keyboardInputValue: "01/01/2024",
			isPartiallyFilled: false,
		});
	});

	it("should fire the on change handler with no keyboard value and a valid date if the date picker is used", async () => {
		// An error "A props object containing a "key" prop is being spread into JSX" is logged
		// but there's not much we can do about it because it comes from the MUI internals.
		vi.spyOn(console, "error").mockImplementation(() => null);

		const now = new Date();

		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock });
		const open = screen.queryByRole("button", { name: "Choose date" });
		expect(open).toBeInTheDocument();
		await user.click(open);
		const first = screen.queryByText("1", { exact: true });
		expect(first).toBeInTheDocument();
		await user.click(first);
		expect(onChangeMock).toBeCalledWith({
			date: new Date(`${now.getFullYear()}/${now.getMonth() + 1}/01`),
			keyboardInputValue: undefined,
			isPartiallyFilled: false,
		});
	});

	it("should mark the field as partially filled on blur after incomplete manual entry", async () => {
		const onChangeMock = vi.fn();
		const onBlurMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock, onBlur: onBlurMock });

		const monthSection = screen.getByRole("spinbutton", { name: /month/i });
		await user.click(monthSection);
		await user.keyboard("1");

		// Move focus outside the picker. Blur is deferred with requestAnimationFrame.
		await user.click(document.body);
		await act(async () => {
			await new Promise<void>((resolve) => {
				requestAnimationFrame(() => resolve());
			});
		});

		expect(onBlurMock).toHaveBeenCalled();
		expect(onChangeMock).toHaveBeenCalledWith(
			expect.objectContaining({
				isPartiallyFilled: true,
			}),
		);
	});

	it("should render the skeleton components if skeleton is truthy", async () => {
		await setup({ skeleton: true });

		expect(screen.queryAllByRole("spinbutton").length).toBe(0);
		expect(screen.queryByRole("button", { name: "Choose date" })).not.toBeInTheDocument();
		expect(screen.queryByTestId(testIds.FORM_FIELD_SKELETON)).toBeInTheDocument();
	});
});
