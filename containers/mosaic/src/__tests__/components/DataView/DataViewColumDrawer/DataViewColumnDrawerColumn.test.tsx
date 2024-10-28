import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewColumnDrawerColumnProps } from "@root/components/DataView/DataViewColumDrawer";

import DataViewColumnDrawerColumn from "@root/components/DataView/DataViewColumDrawer/DataViewColumnDrawerColumn";
import userEvent from "@testing-library/user-event";

const allColumns: DataViewColumnDrawerColumnProps["allColumns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];

async function setup(props: Partial<DataViewColumnDrawerColumnProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewColumnDrawerColumn
			allColumns={allColumns}
			name="column1"
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view column drawer column", async () => {
		await setup();

		expect(screen.queryByText("Column 1")).toBeInTheDocument();
	});

	it("should throw an error if the name of the column is not found amongst the list of all columns", async () => {
		vi.spyOn(console, "error").mockImplementation(() => {});

		expect(() => setup({ name: "column3" }))
			.rejects
			.toThrow("Column \"column3\" not found in column list: column1, column2");
	});
});
