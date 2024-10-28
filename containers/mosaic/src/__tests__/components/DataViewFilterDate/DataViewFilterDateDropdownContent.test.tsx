import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterDateDropdownContentProps } from "@root/components/DataViewFilterDate";

import DataViewFilterDateDropdownContent from "@root/components/DataViewFilterDate/DataViewFilterDateDropdownContent";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterDateDropdownContentProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();
	const onCloseMock = props.onClose || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterDateDropdownContent
			onChange={onChangeMock}
			onClose={onCloseMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view date filter dropdown content", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTER_DATE_CONTENT)).toBeInTheDocument();
		expect(screen.queryByLabelText("From")).toBeInTheDocument();
		expect(screen.queryByLabelText("To")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Clear" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Apply" })).toBeInTheDocument();
	});

	it("should populate From field value if range start date is provided", async () => {
		await setup({ rangeStart: new Date(2024, 9, 23) });

		const input = screen.queryByLabelText("From");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("10/23/2024");
	});

	it("should populate To field value if range end date is provided", async () => {
		await setup({ rangeEnd: new Date(2024, 9, 24) });

		const input = screen.queryByLabelText("To");
		expect(input).toBeInTheDocument();
		expect(input).toHaveValue("10/24/2024");
	});

	it("should render the options container if options are provided", async () => {
		await setup({ options: [{ value: "today", label: "Today" }] });

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTER_DATE_OPTIONS));
		expect(screen.queryByRole("menuitem", { name: "Today" }));
	});

	it("should render an active menu item if the selected option provided matches an item in the options provided", async () => {
		await setup({
			options: [{ value: "today", label: "Today" }, { value: "yesterday", label: "Yesterday" }],
			selectedOption: "today",
		});

		const today = screen.queryByRole("menuitem", { name: "Today" });
		const yesterday = screen.queryByRole("menuitem", { name: "Yesterday" });

		expect(today).toBeInTheDocument();
		expect(yesterday).toBeInTheDocument();

		expect(today).toHaveAttribute("aria-selected", "true");
		expect(yesterday).toHaveAttribute("aria-selected", "false");
	});

	it("should fire the on change and on close handlers when an option is selected", async () => {
		const onChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({
			options: [{ value: "today", label: "Today" }],
			onChange: onChangeMock,
			onClose: onCloseMock,
		});

		const today = screen.queryByRole("menuitem", { name: "Today" });
		expect(today).toBeInTheDocument();
		await user.click(today);
		expect(onChangeMock).toBeCalledWith({ option: "today" });
		expect(onCloseMock).toBeCalled();
	});

	it("should fire the on change and on close handlers when the form is submitted with a range values", async () => {
		const onChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			onClose: onCloseMock,
		});

		const from = screen.queryByLabelText("From");
		const to = screen.queryByLabelText("To");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(from).toBeInTheDocument();
		expect(to).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.type(from, "10/23/2024[Tab]");
		await user.type(to, "10/24/2024[Tab]");
		await user.click(apply);

		expect(onChangeMock).toBeCalledWith({
			rangeStart: new Date(2024, 9, 23, 0, 0, 0),
			rangeEnd: new Date(2024, 9, 24, 23, 59, 59),
		});
		expect(onCloseMock).toBeCalled();
	});

	it("should fire the on change and on close handlers when the form is submitted with no values", async () => {
		const onChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			onClose: onCloseMock,
		});

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);

		expect(onChangeMock).toBeCalledWith(undefined);
		expect(onCloseMock).toBeCalled();
	});

	it("should unselect the selected option and clear range start and end values when the clear button is clicked", async () => {
		const onChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			onClose: onCloseMock,
			options: [{ value: "today", label: "Today" }, { value: "yesterday", label: "Yesterday" }],
			selectedOption: "today",
			rangeStart: new Date(2024, 9, 23),
			rangeEnd: new Date(2024, 9, 24),
		});

		const from = screen.queryByLabelText("From");
		const to = screen.queryByLabelText("To");
		const option = screen.queryByRole("menuitem", { name: "Today" });
		const clear = screen.queryByRole("button", { name: "Clear" });

		expect(from).toBeInTheDocument();
		expect(to).toBeInTheDocument();
		expect(option).toBeInTheDocument();
		expect(clear).toBeInTheDocument();

		expect(from).toHaveValue("10/23/2024");
		expect(to).toHaveValue("10/24/2024");
		expect(option).toHaveAttribute("aria-selected", "true");

		await user.click(clear);

		expect(from).toHaveValue("");
		expect(to).toHaveValue("");
		expect(option).toHaveAttribute("aria-selected", "false");
	});
});
