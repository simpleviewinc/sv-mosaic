import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { DatePickerProps } from "@root/components/Field/FormFieldDate/DatePicker";
import type { FieldDefBase, DateFieldInputSettings } from "@root/components";

import DatePicker from "@root/components/Field/FormFieldDate/DatePicker";

const defaultFieldDef: FieldDefBase<"date", DateFieldInputSettings> = {
	name: "date",
	type: "date",
};

async function setup(props: Partial<DatePickerProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(() => render(
		<DatePicker
			fieldDef={defaultFieldDef}
			onChange={onChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a datepicker field", async () => {
		await setup();

		expect(screen.queryByRole("textbox")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Choose date" })).toBeInTheDocument();
	});

	it("should render input with a focus styled border when the calendar is open", async () => {
		// An error "A props object containing a "key" prop is being spread into JSX" is logged
		// but there's not much we can do about it because it comes from the MUI internals.
		vi.spyOn(console, "error").mockImplementation(() => null);

		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Choose date" });
		expect(button).toBeInTheDocument();
		await user.click(button);

		// TODO check styles after migrating to emoticon
	});

	it("should fire the on blur handler when the date picker is closed", async () => {
		const onBlurMock = vi.fn();

		const { user } = await setup({ onBlur: onBlurMock });

		const button = screen.queryByRole("button", { name: "Choose date" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		await user.keyboard("{Escape}");
		expect(onBlurMock).toBeCalled();
	});
});
