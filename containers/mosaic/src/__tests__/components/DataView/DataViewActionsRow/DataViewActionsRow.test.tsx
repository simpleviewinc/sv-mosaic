import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewActionsRowProps } from "@root/components/DataView/DataViewActionsRow";

import DataViewActionsRow from "@root/components/DataView/DataViewActionsRow";
import { DataViewDisplayList, DataViewDisplayGrid } from "@root/components/DataView/DataViewDisplays";
import testIds from "@root/utils/testIds";

const bulkActions: DataViewActionsRowProps["bulkActions"] = [{ name: "action1", label: "Action 1", color: "black", variant: "contained" }, { name: "action2", label: "Action 2", color: "black", variant: "contained" }];
const activeColumnObjs: DataViewActionsRowProps["activeColumnObjs"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2" }];
const columns: DataViewActionsRowProps["columns"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2" }];
const displayOptionsFull: DataViewActionsRowProps["displayOptionsFull"] = [DataViewDisplayList, DataViewDisplayGrid];

async function setup(props: Partial<DataViewActionsRowProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewActionsRow
			activeColumnObjs={activeColumnObjs}
			bulkActions={bulkActions}
			columns={columns}
			display="list"
			displayControlEnabled={false}
			displayOptionsFull={displayOptionsFull}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view actions row", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_ACTIONS_ROW)).toBeInTheDocument();
	});

	it("should render an all items checkbox for grid displays when the on check all click handler is provided", async () => {
		const onCheckAllClickMock = vi.fn();

		const { user } = await setup({ display: "grid", onCheckAllClick: onCheckAllClickMock });

		const checkbox = screen.queryByRole("checkbox");
		expect(checkbox).toBeInTheDocument();
		await user.click(checkbox);
		expect(onCheckAllClickMock).toBeCalled();
	});

	it("should render the bulk actions button row for grid displays if any checkboxes are checked", async () => {
		await setup({ display: "grid", anyChecked: true });

		expect(screen.queryAllByTestId(testIds.BUTTON_ROW)).toHaveLength(1);
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render the data view column control for list displays if a column change handler is provided", async () => {
		const onColumnsChangeMock = vi.fn();

		await setup({ onColumnsChange: onColumnsChangeMock });

		expect(screen.queryByRole("button", { name: "DataView.columns" })).toBeInTheDocument();
	});

	it("should render the sort control for grid displays if both a sort and on sort change handler has been provided", async () => {
		const onSortChangeMock = vi.fn();

		await setup({ display: "grid", sort: { name: "column1", dir: "asc" }, onSortChange: onSortChangeMock });

		expect(screen.queryByRole("button", { name: "Column 1" })).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.DATA_VIEW_SORT_ASC)).toBeInTheDocument();
	});

	it("should render the display control if display control enabled is true", async () => {
		await setup({ displayControlEnabled: true });

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_CONTROL)).toBeInTheDocument();
	});

	it("should render the limit control if limit change handler and limit is provided", async () => {
		const onLimitChangeMock = vi.fn();

		await setup({ onLimitChange: onLimitChangeMock, limit: 10 });

		expect(screen.queryByTestId(testIds.DATA_VIEW_LIMIT_CONTROL)).toBeInTheDocument();
	});

	it("should render the pager control if skip change handler, limit, skip and count is provided", async () => {
		const onSkipChangeMock = vi.fn();

		await setup({ onSkipChange: onSkipChangeMock, limit: 10, skip: 0, count: 50 });

		expect(screen.queryByTestId(testIds.DATA_VIEW_PAGER)).toBeInTheDocument();
	});

});
