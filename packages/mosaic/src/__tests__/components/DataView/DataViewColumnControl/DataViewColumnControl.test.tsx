import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewColumnControlProps } from "@root/components/DataView/DataViewColumnControl";

import DataViewColumnControl from "@root/components/DataView/DataViewColumnControl";
import userEvent from "@testing-library/user-event";

const allColumns: DataViewColumnControlProps["allColumns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const columns: DataViewColumnControlProps["columns"] = [{ name: "column1", label: "Column 1" }];

async function setup(props: Partial<DataViewColumnControlProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewColumnControl
			allColumns={allColumns}
			columns={columns}
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
	it("should render the data view column control", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "DataView.columns" })).toBeInTheDocument();
	});

	it("should toggle the column drawer when the gear button is clicked", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "DataView.columns" });
		expect(button).toBeInTheDocument();
		expect(screen.queryByText("DataView.column_settings")).not.toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByText("DataView.column_settings")).toBeInTheDocument();
	});
});
