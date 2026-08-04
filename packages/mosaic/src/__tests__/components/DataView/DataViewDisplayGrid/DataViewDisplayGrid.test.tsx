import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewDisplayGridProps } from "@root/components/DataView/DataViewDisplayGrid";

import DataViewDisplayGrid from "@root/components/DataView/DataViewDisplayGrid";
import testIds from "@root/utils/testIds";

const columns: DataViewDisplayGridProps["columns"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2" }];
const data: DataViewDisplayGridProps["data"] = [{ id: "abc123", column1: "Column 1A", column2: "Column 2A" }, { id: "def456", column1: "Column 1B", column2: "Column 2B" }];
const primaryActions: DataViewDisplayGridProps["rowActions"][number]["primary"] = [{ name: "primary1", label: "Primary 1", intent: "secondary", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", intent: "secondary", variant: "contained", onClick: vi.fn() }];
const additionalActions: DataViewDisplayGridProps["rowActions"][number]["additional"] = [{ name: "additional1", label: "Additional 1", onClick: vi.fn() }, { name: "additional2", label: "Additional 2", onClick: vi.fn() }];
const rowActions: DataViewDisplayGridProps["rowActions"] = { id: { primary: primaryActions, additional: additionalActions } };
const gridColumnsMap = { image: "column1", primary: "column2", secondary: "column2" };

async function setup(props: Partial<DataViewDisplayGridProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewDisplayGrid
			columns={columns}
			disabled={false}
			data={data}
			rowActions={rowActions}
			sort={{ dir: "asc", name: "column1" }}
			gridColumnsMap={gridColumnsMap}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view list display", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_GRID)).toBeInTheDocument();
	});

	it("should throw if no grid column map is provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		expect(() => setup({ gridColumnsMap: undefined }))
			.rejects
			.toThrow("You must specify gridColumnsMap in order to use the grid view.");
	});

	it("should invoke the on checkbox click handler with the correct row index if it has been provided", async () => {
		const onCheckboxClickMock = vi.fn();

		const { user } = await setup({ onCheckboxClick: onCheckboxClickMock, checked: [false, false] });

		const checkboxes = screen.getAllByRole("checkbox");
		expect(checkboxes).toHaveLength(2);
		await user.click(checkboxes[0]);
		expect(onCheckboxClickMock).toHaveBeenCalledWith(0);
	});

	it("should render the bulk all bar if the show bulk all boolean is true", async () => {
		await setup({ showBulkAll: true });

		expect(screen.queryByTestId(testIds.DATA_VIEW_BULK_ALL)).toBeInTheDocument();
	});

	it("should render the grid item with a particular class if it is checked", async () => {
		await setup({ checked: [true, false] });

		const gridItems = screen.queryAllByTestId(testIds.DATA_VIEW_GRID_ITEM);
		expect(gridItems).toHaveLength(2);
		expect(gridItems[0]).toHaveClass("checked");
	});

	it("should render the grid item checkbox wrappers with a particular class if an on checked click handler is provided and any of the items are checked", async () => {
		const onCheckboxClickMock = vi.fn();

		await setup({ onCheckboxClick: onCheckboxClickMock, checked: [false, false], anyChecked: true });

		const gridItems = screen.queryAllByTestId(testIds.DATA_VIEW_GRID_ITEM_CHECK);
		expect(gridItems).toHaveLength(2);
		expect(gridItems[0]).toHaveClass("anyChecked");
		expect(gridItems[1]).toHaveClass("anyChecked");
	});
});
