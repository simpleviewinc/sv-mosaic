import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { DatePickerProps } from "@root/components/Field/FormFieldDate/DatePicker";
import type { FieldDefBase, DateFieldInputSettings } from "@root/components";

import DatePicker from "@root/components/Field/FormFieldDate/DatePicker";

const defaultFieldDef: FieldDefBase<"date", DateFieldInputSettings> = {
	name: "date",
	label: "Date",
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

		expect(screen.queryAllByRole("spinbutton").length).toBeGreaterThan(0);
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

	it("should keep the selected date after choosing from the calendar", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		const onChangeMock = vi.fn();
		const { user } = await setup({ onChange: onChangeMock });

		await user.click(screen.getByRole("button", { name: "Choose date" }));
		await user.click(screen.getByRole("gridcell", { name: "15" }));

		const selectedCalls = onChangeMock.mock.calls.filter(([date]) => (
			date instanceof Date && date.getDate() === 15
		));
		expect(selectedCalls.length).toBeGreaterThan(0);

		const lastCall = onChangeMock.mock.calls.at(-1);
		expect(lastCall?.[0]).toBeInstanceOf(Date);
		expect((lastCall?.[0] as Date).getDate()).toBe(15);
	});

	it("should restore keyboard focus to the day grid after choosing a year", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		const { user } = await setup({
			value: new Date(2024, 0, 15),
		});

		await user.click(screen.getByRole("button", { name: /^Choose date/ }));

		const viewButton = screen.getByRole("button", { name: /switch to year view/ });
		viewButton.focus();
		await user.keyboard("{Enter}");

		await waitFor(() => expect(screen.getByRole("radio", { name: "2024" })).toHaveFocus());
		await user.keyboard("{ArrowRight} ");

		await waitFor(() => expect(document.activeElement).toHaveAttribute("role", "gridcell"));
		const focusedDay = document.activeElement as HTMLElement;

		await user.keyboard("{ArrowRight}");
		expect(document.activeElement).not.toBe(focusedDay);
		expect(document.activeElement).toHaveAttribute("role", "gridcell");
	});

	it("should restore focus to MUI's valid day when the selected year reaches a date boundary", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		const { user } = await setup({
			fieldDef: {
				...defaultFieldDef,
				inputSettings: {
					minDate: new Date(2025, 0, 10),
					maxDate: new Date(2026, 0, 20),
				},
			},
			value: new Date(2025, 0, 25),
		});

		await user.click(screen.getByRole("button", { name: /^Choose date/ }));

		const viewButton = screen.getByRole("button", { name: /switch to year view/ });
		viewButton.focus();
		await user.keyboard("{Enter}");

		await waitFor(() => expect(screen.getByRole("radio", { name: "2025" })).toHaveFocus());
		await user.keyboard("{ArrowRight} ");

		await waitFor(() => expect(screen.getByRole("gridcell", { name: "20" })).toHaveFocus());
		await user.keyboard("{ArrowRight}");
		expect(screen.getByRole("gridcell", { name: "20" })).toHaveFocus();
	});
});
