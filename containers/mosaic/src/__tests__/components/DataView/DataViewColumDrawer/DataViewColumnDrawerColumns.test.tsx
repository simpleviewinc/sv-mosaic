import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewColumnDrawerColumnsProps } from "@root/components/DataView/DataViewColumDrawer";

import DataViewColumnDrawerColumns from "@root/components/DataView/DataViewColumDrawer/DataViewColumnDrawerColumns";
import userEvent from "@testing-library/user-event";

const allColumns: DataViewColumnDrawerColumnsProps["allColumns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const activeColumns: DataViewColumnDrawerColumnsProps["activeColumns"] = ["column1", "column2"];

async function setup(props: Partial<DataViewColumnDrawerColumnsProps> = {}) {
	const onReorderMock = props.onReorder || vi.fn();

	const renderResult = await act(() => render(
		<DataViewColumnDrawerColumns
			allColumns={allColumns}
			activeColumns={activeColumns}
			onReorder={onReorderMock}
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
		expect(screen.queryByText("Column 2")).toBeInTheDocument();
	});
});
