import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTHeadProps } from "@root/components/DataView/DataViewTHead";

import DataViewTHead from "@root/components/DataView/DataViewTHead";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

const bulkActions: DataViewTHeadProps["bulkActions"] = [{ name: "action1", label: "Action 1", color: "black", variant: "contained" }, { name: "action2", label: "Action 2", color: "black", variant: "contained" }];
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

	it("should render a SwitchRightIcon icon in the table header cell for columns sorted ascending", async () => {
		await setup({
			columns: [...columns, { name: "column3", label: "Column 3", sortable: true }],
			sort: {
				dir: "asc",
				name: "column3",
			},
		});

		const colHeader = screen.queryByRole("columnheader", { name: "Column 3" });

		expect(colHeader).toBeInTheDocument();
		expect(within(colHeader).queryByTestId("SwitchRightIcon")).toBeInTheDocument();
	});

	it("should render a SwitchLeftIcon icon in the table header cell for columns sorted descending", async () => {
		await setup({
			columns: [...columns, { name: "column3", label: "Column 3", sortable: true }],
			sort: {
				dir: "desc",
				name: "column3",
			},
		});

		const colHeader = screen.queryByRole("columnheader", { name: "Column 3" });

		expect(colHeader).toBeInTheDocument();
		expect(within(colHeader).queryByTestId("SwitchLeftIcon")).toBeInTheDocument();
	});

	it("should fire the on sort change handler with the column name and ascending direction when an inactive column is clicked", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({
			columns: [...columns, { name: "column3", label: "Column 3", sortable: true }, { name: "column4", label: "Column 4", sortable: true }],
			sort: {
				dir: "desc",
				name: "column3",
			},
			onSortChange: onSortChangeMock,
		});

		const colHeader = screen.queryByRole("columnheader", { name: "Column 4" });
		expect(colHeader).toBeInTheDocument();
		const colHeaderInner = within(colHeader).queryByTestId(testIds.DATA_VIEW_TH_INNER);
		expect(colHeaderInner).toBeInTheDocument();
		await user.click(colHeaderInner);
		expect(onSortChangeMock).toBeCalledWith({
			name: "column4",
			dir: "asc",
		});
	});

	it("should fire the on sort change handler with the column name and ascending direction when an descending column is clicked", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({
			columns: [...columns, { name: "column3", label: "Column 3", sortable: true }],
			sort: {
				dir: "desc",
				name: "column3",
			},
			onSortChange: onSortChangeMock,
		});

		const colHeader = screen.queryByRole("columnheader", { name: "Column 3" });
		expect(colHeader).toBeInTheDocument();
		const colHeaderInner = within(colHeader).queryByTestId(testIds.DATA_VIEW_TH_INNER);
		expect(colHeaderInner).toBeInTheDocument();
		await user.click(colHeaderInner);
		expect(onSortChangeMock).toBeCalledWith({
			name: "column3",
			dir: "asc",
		});
	});

	it("should fire the on sort change handler with the column name and descending direction when an asecnding column is clicked", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({
			columns: [...columns, { name: "column3", label: "Column 3", sortable: true }],
			sort: {
				dir: "asc",
				name: "column3",
			},
			onSortChange: onSortChangeMock,
		});

		const colHeader = screen.queryByRole("columnheader", { name: "Column 3" });
		expect(colHeader).toBeInTheDocument();
		const colHeaderInner = within(colHeader).queryByTestId(testIds.DATA_VIEW_TH_INNER);
		expect(colHeaderInner).toBeInTheDocument();
		await user.click(colHeaderInner);
		expect(onSortChangeMock).toBeCalledWith({
			name: "column3",
			dir: "desc",
		});
	});

	it("should render a bulk actions row if bulk actions are provided and any rows are checked", async () => {
		await setup({ bulkActions, anyChecked: true });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
	});

	it("should render a bulk actions check all pages row if show bulk all is provided", async () => {
		await setup({ showBulkAll: true });

		expect(screen.queryByTestId(testIds.DATA_VIEW_BULK_ALL)).toBeInTheDocument();
	});
});
