import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewBulkAllBarProps } from "@root/components/DataView/DataViewBulkAllBar";

import DataViewBulkAllBar from "@root/components/DataView/DataViewBulkAllBar";

async function setup(props: Partial<DataViewBulkAllBarProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewBulkAllBar
			count={100}
			rowCount={20}
			{...props}
		/>,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should render the data view bulk all bar when all pages are not selected", async () => {
		await setup();

		expect(screen.queryByText("All 10 records on this page are selected."));
		expect(screen.queryByText("Select All 100 Records"));
	});

	it("should render the data view bulk all bar when all pages are selected", async () => {
		await setup({ checkedAllPages: true });

		expect(screen.queryByText("All 100 Records are selected"));
		expect(screen.queryByText("Clear selection"));
	});
});
