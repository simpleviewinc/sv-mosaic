import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import DataViewFilters from "@root/components/DataView/DataViewFilters";
import DataViewFilterText from "@root/components/DataViewFilterText";
import DataViewFilterMultiselect from "@root/components/DataViewFilterMultiselect";
import DataViewFilterDate from "@root/components/DataViewFilterDate";
import DataViewFilterSingleSelect from "@root/components/DataViewFilterSingleSelect";

afterEach(cleanup);

const filters = [
	{
		name: "keyword",
		label: "Keyword",
		component: DataViewFilterText,
		column: "title",
		onChange: () => undefined,
	},
	{
		name: "categories",
		label: "Categories",
		component: DataViewFilterMultiselect,
		args: {},
		column: "categories_ids",
		onChange: () => undefined,
	},
	{
		name: "single_select_category",
		label: "Single Select Category",
		component: DataViewFilterSingleSelect,
		args: {},
		column: "categories_ids",
		onChange: () => undefined,
	},
	{
		name: "categories_with_comparisons",
		label: "Categories with Comparisons",
		component: DataViewFilterMultiselect,
		args: {
			comparisons: ["in", "not_in", "all", "exists", "not_exists"],
		},
		column: "categories_ids",
		onChange: () => undefined,
	},
	{
		name: "title",
		label: "Title",
		component: DataViewFilterText,
		onChange: () => undefined,
	},
	{
		name: "created",
		label: "Created",
		component: DataViewFilterDate,
		onChange: () => undefined,
	},
	{
		name: "updated",
		label: "Updated",
		component: DataViewFilterDate,
		onChange: () => undefined,
	},
	{
		name: "title_with_comparisons",
		label: "Title with Comparisons",
		component: DataViewFilterText,
		column: "title",
		args: {
			comparisons: ["equals", "not_equals", "contains", "not_contains", "exists", "not_exists"],
		},
		onChange: () => undefined,
	},
];

const activeFilters = ["updated", "title", "keyword"];

describe("DataViewFilters", () => {
	it("Should display the active filters in the order passed by the developer", async () => {
		render(
			<DataViewFilters
				activeFilters={activeFilters}
				filters={filters}
				filter={{}}
				onActiveFiltersChange={jest.fn}
			/>,
		);

		const buttons = await screen.findAllByRole("button");
		const updatedIndex = buttons.findIndex(button => button.textContent === "Updated");
		const titleIndex = buttons.findIndex(button => button.textContent === "Title");
		const keywordIndex = buttons.findIndex(button => button.textContent === "Keyword");

		const realOrder = [];
		for (let i = 0; i < buttons.length; i++) {
			if (i === updatedIndex)
				realOrder.push(buttons[updatedIndex].textContent.toLowerCase());
			if (i === titleIndex)
				realOrder.push(buttons[titleIndex].textContent.toLowerCase());
			if (i === keywordIndex)
				realOrder.push(buttons[keywordIndex].textContent.toLowerCase());
		}

		expect(realOrder).toEqual(activeFilters);
	});
});
