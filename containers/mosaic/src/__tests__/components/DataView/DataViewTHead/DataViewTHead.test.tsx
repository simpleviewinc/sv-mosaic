import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTHeadProps } from "@root/components/DataView/DataViewTHead";

import DataViewTHead from "@root/components/DataView/DataViewTHead";
import userEvent from "@testing-library/user-event";

const columns: DataViewTHeadProps["columns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const data: DataViewTHeadProps["data"] = [{ id: "abc123" }, { id: "def456" }];

async function setup(props: Partial<DataViewTHeadProps> = {}) {
	const renderResult = await act(() => render(
		<table>
			<DataViewTHead
				columns={columns}
				hasActions={true}
				data={data}
				{...props}
			/>
		</table>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view table head", async () => {
		await setup();

		expect(screen.queryByText("DataView.actions")).toBeInTheDocument();
		expect(screen.queryByText("Column 1")).toBeInTheDocument();
		expect(screen.queryByText("Column 2")).toBeInTheDocument();
		expect(screen.queryAllByRole("columnheader")).toHaveLength(3);
	});

	it("should render the data view table head without the actions column if there are no actions", async () => {
		await setup({ hasActions: false });

		expect(screen.queryByText("DataView.actions")).not.toBeInTheDocument();
	});

	it("should render an extra table heading cell if an on reorder handler has been provided", async () => {
		const onReorderMock = vi.fn();

		await setup({ onReorder: onReorderMock });

		expect(screen.queryAllByRole("columnheader")).toHaveLength(4);
	});

	it("should render a check-all table header cell containing a checkbox if an on check all handler is provided", async () => {
		const onCheckAllClickMock = vi.fn();

		await setup({ onCheckAllClick: onCheckAllClickMock });

		expect(screen.queryAllByRole("columnheader")).toHaveLength(4);
		expect(screen.queryByRole("checkbox")).toBeInTheDocument();
	});

	it("should render a check-all table header cell that spans all columns when any items are checked and there are no bulk actions", async () => {
		const onCheckAllClickMock = vi.fn();

		await setup({ onCheckAllClick: onCheckAllClickMock, bulkActions: [], anyChecked: true });

		const columnHeader = screen.queryByRole<HTMLTableCellElement>("columnheader");
		expect(columnHeader).toBeInTheDocument();
		expect(columnHeader.colSpan).toBe(4);
	});
});
