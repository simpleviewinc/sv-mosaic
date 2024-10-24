import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { DataViewFiltersProps } from "@root/components/DataView/DataViewFilters";

import DataViewFilters from "@root/components/DataView/DataViewFilters";
import DataViewFilterText from "@root/components/DataViewFilterText";
import testIds from "@root/utils/testIds";

const filter: DataViewFiltersProps["filter"] = {};
const filters: DataViewFiltersProps["filters"] = [
	{
		name: "column1",
		label: "Column 1",
		component: DataViewFilterText,
		column: "column1",
		onChange: () => undefined,
	},
	{
		name: "column2",
		label: "Column 2",
		component: DataViewFilterText,
		column: "column2",
		onChange: () => undefined,
	},
];

async function setup(props: Partial<DataViewFiltersProps> = {}) {
	const onActiveFiltersChangeMock = props.onActiveFiltersChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewFilters
			filter={filter}
			filters={filters}
			onActiveFiltersChange={onActiveFiltersChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe("DataViewFilters", () => {
	it("should render data view filters bar", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTERS)).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "DataView.filters" }));
	});

	it("should render active filters in order", async () => {
		await setup({ activeFilters: ["column1", "column2"] });

		const buttons = screen.queryAllByRole("button");

		expect(buttons).toHaveLength(4);

		const column1Filter = screen.queryByRole("button", { name: "Filter: Column 1" });
		const column2Filter = screen.queryByRole("button", { name: "Filter: Column 2" });

		expect(column1Filter).toBeInTheDocument();
		expect(column1Filter).toBe(buttons[1]);
		expect(column2Filter).toBeInTheDocument();
		expect(column2Filter).toBe(buttons[2]);
	});

	it("should render a clear filters button when there are active filters provided and call filter change handlers where applicable", async () => {
		const onChangeMocks = [vi.fn(), vi.fn()];

		const { user } = await setup({
			activeFilters: ["column1", "column2"],
			filter: { column1: { value: "Query 1" } },
			filters: [
				{ ...filters[0], onChange: onChangeMocks[0] },
				{ ...filters[1], onChange: onChangeMocks[1] },
			],
		});

		const clear = screen.queryByRole("button", { name: "Clear filters" });

		expect(clear).toBeInTheDocument();
		await user.click(clear);
		expect(onChangeMocks[0]).toBeCalledWith(undefined);
		expect(onChangeMocks[1]).not.toBeCalled();
	});

	it("should open the filters popover list when the filters button is clicked and close it again", async () => {
		const { user } = await setup();

		const filters = screen.queryByRole("button", { name: "Filters" });
		expect(filters).toBeInTheDocument();
		await user.click(filters);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(dropdown).not.toBeInTheDocument();
	});

	it("should fire the on active filters change handler when filters are changed", async () => {
		const onActiveFiltersChangeMock = vi.fn();

		const { user } = await setup({ onActiveFiltersChange: onActiveFiltersChangeMock });

		const filters = screen.queryByRole("button", { name: "Filters" });
		expect(filters).toBeInTheDocument();
		await user.click(filters);
		const checkboxes = screen.queryAllByRole("checkbox");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(checkboxes).toHaveLength(2);
		expect(apply).toBeInTheDocument();
		await user.click(checkboxes[0]);
		await user.click(apply);
		expect(onActiveFiltersChangeMock).toBeCalledWith({
			activeFilters: ["column1"],
			filter: {},
		});
	});

	it("should fire the on active filters change handler clearing any filters that aren't in the active filters list", async () => {
		const onActiveFiltersChangeMock = vi.fn();

		const { user } = await setup({
			onActiveFiltersChange: onActiveFiltersChangeMock,
			activeFilters: ["column1", "column2"],
			filter: {
				column1: { value: "Query 1" },
				column2: { value: "Query 2" },
			},
		});

		const filters = screen.queryByRole("button", { name: "Filters" });
		expect(filters).toBeInTheDocument();
		await user.click(filters);
		const checkboxes = screen.queryAllByRole("checkbox");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(checkboxes).toHaveLength(2);
		expect(apply).toBeInTheDocument();
		await user.click(checkboxes[0]);
		await user.click(apply);
		expect(onActiveFiltersChangeMock).toBeCalledWith({
			activeFilters: ["column2"],
			filter: {
				column2: { value: "Query 2" },
			},
		});
	});

	it("should fire the on active filters change handler with the same filters object if the active filters haven't changed", async () => {
		const filter = {
			column1: { value: "Query 1" },
			column2: { value: "Query 2" },
		};
		const onActiveFiltersChangeMock = vi.fn<DataViewFiltersProps["onActiveFiltersChange"]>(({ filter }) => {
			expect(filter).toBe(filter);
		});

		const { user } = await setup({
			onActiveFiltersChange: onActiveFiltersChangeMock,
			activeFilters: ["column1", "column2"],
			filter,
		});

		const filters = screen.queryByRole("button", { name: "Filters" });
		expect(filters).toBeInTheDocument();
		await user.click(filters);
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onActiveFiltersChangeMock).toBeCalled();
	});

	it("should fire a filter's on change handler if the filter value is not undefined", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			activeFilters: ["column1"],
			filters: [
				{ ...filters[0], onChange: onChangeMock },
			],
		});

		const filter = screen.queryByRole("button", { name: "Filter: Column 1" });
		expect(filter).toBeInTheDocument();
		await user.click(filter);
		const input = screen.queryByPlaceholderText("Filter...");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(input).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.keyboard("My Query");
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			value: "My Query",
			comparison: "equals",
		});
	});

	it("should not fire a filter's on change handler if the filter value is undefined", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			activeFilters: ["column1"],
			filters: [
				{ ...filters[0], onChange: onChangeMock },
			],
		});

		const filter = screen.queryByRole("button", { name: "Filter: Column 1" });
		expect(filter).toBeInTheDocument();
		await user.click(filter);
		const input = screen.queryByPlaceholderText("Filter...");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(input).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).not.toBeCalled();
	});
});
