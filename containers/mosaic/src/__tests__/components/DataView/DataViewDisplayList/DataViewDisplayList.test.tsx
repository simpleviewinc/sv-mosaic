import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewDisplayListProps } from "@root/components/DataView/DataViewDisplayList";

import DataViewDisplayList from "@root/components/DataView/DataViewDisplayList";
import testIds from "@root/utils/testIds";

const activeColumnObjs: DataViewDisplayListProps["activeColumnObjs"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2" }];
const columns: DataViewDisplayListProps["columns"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2" }];
const data: DataViewDisplayListProps["data"] = [{ id: "abc123", column1: "Column 1A", column2: "Column 2A" }, { id: "def456", column1: "Column 1B", column2: "Column 2B" }];
const primaryActions: DataViewDisplayListProps["rowActions"][number]["primary"] = [{ name: "primary1", label: "Primary 1", color: "black", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", color: "black", variant: "contained", onClick: vi.fn() }];
const additionalActions: DataViewDisplayListProps["rowActions"][number]["additional"] = [{ name: "additional1", label: "Additional 1", onClick: vi.fn() }, { name: "additional2", label: "Additional 2", onClick: vi.fn() }];
const rowActions: DataViewDisplayListProps["rowActions"] = { id: { primary: primaryActions, additional: additionalActions } };

async function setup(props: Partial<DataViewDisplayListProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewDisplayList
			activeColumnObjs={activeColumnObjs}
			columns={columns}
			data={data}
			rowActions={rowActions}
			sort={{ dir: "asc", name: "column1" }}
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

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_LIST)).toBeInTheDocument();
	});
});
