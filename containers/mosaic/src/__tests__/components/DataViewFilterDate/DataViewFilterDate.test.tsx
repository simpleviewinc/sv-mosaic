import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterDateProps } from "@root/components/DataViewFilterDate";

import DataViewFilterDate from "@root/components/DataViewFilterDate";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterDateProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewFilterDate
			args={{}}
			data={{}}
			label="Filter Date"
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
	it("should render the data view date filter button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Date" })).toBeInTheDocument();
	});

	it("should render the correct text if the start and end dates provided are the same day", async () => {
		await setup({ data: { rangeStart: new Date(2024, 10, 23), rangeEnd: new Date(2024, 10, 23) } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date|11/23/2024");
	});

	it("should render the correct text if the start and end dates provided are on different days", async () => {
		await setup({ data: { rangeStart: new Date(2024, 10, 23), rangeEnd: new Date(2024, 10, 24) } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date|11/23/2024 - 11/24/2024");
	});

	it("should render the correct text if a start date is provided but an end date is not", async () => {
		await setup({ data: { rangeStart: new Date(2024, 10, 23) } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date|from 11/23/2024");
	});

	it("should render the correct text if an end date is provided but a start date is not", async () => {
		await setup({ data: { rangeEnd: new Date(2024, 10, 24) } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date|to 11/24/2024");
	});

	it("should render the correct text if an option is provided", async () => {
		await setup({ data: { option: "today" }, args: { options: [{ value: "today", label: "Today" }] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date|Today");
	});

	it("should only render the label if no data is provided", async () => {
		await setup({ data: undefined });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date");
	});

	it("should onyl render the label if the option provided in data is not located in the list of options provided in args", async () => {
		await setup({ data: { option: "yesterday" }, args: { options: [{ value: "today", label: "Today" }] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Date");
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Date" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(dropdown).not.toBeInTheDocument();
	});
});
