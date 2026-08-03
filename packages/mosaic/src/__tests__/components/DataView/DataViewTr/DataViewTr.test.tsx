import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTrProps } from "@root/components/DataView/DataViewTr";

import DataViewTr from "@root/components/DataView/DataViewTr";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

const primaryActions: DataViewTrProps["primaryActions"] = [{ name: "primary1", label: "Primary 1", intent: "secondary", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", intent: "secondary", variant: "contained", onClick: vi.fn() }];
const additionalActions: DataViewTrProps["additionalActions"] = [{ name: "additional1", label: "Additional 1", onClick: vi.fn() }, { name: "additional2", label: "Additional 2", onClick: vi.fn() }];
const columns: DataViewTrProps["columns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const originalRowData: DataViewTrProps["originalRowData"] = { id: "abc123", column1: "My Column 1", column2: "My Column 2" };
const row: DataViewTrProps["row"] = { id: "abc123", column1: "My Column 1", column2: "My Column 2" };

async function setup(props: Partial<DataViewTrProps> = {}) {
	const renderResult = await act(() => render(
		<table>
			<tbody>
				<DataViewTr
					checked={false}
					columns={columns}
					hasActions={false}
					originalRowData={originalRowData}
					row={row}
					{...props}
				/>
			</tbody>
		</table>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view table row", async () => {
		await setup();

		expect(screen.queryByRole("row")).toBeInTheDocument();
		expect(screen.queryAllByRole("cell")).toHaveLength(2);
	});

	it("should render the row with an additional class name when checked", async () => {
		await setup({ checked: true });

		const row = screen.queryByRole("row");

		expect(row).toBeInTheDocument();
		expect(row).toHaveClass("checked");
	});

	it("should render the row with an additional cell for dragging when reorder handler is provided", async () => {
		const onReorderMock = vi.fn();

		await setup({ onReorder: onReorderMock });

		expect(screen.queryAllByRole("cell")).toHaveLength(3);
		expect(screen.queryByTestId(testIds.DATA_VIEW_CELL_DRAG)).toBeInTheDocument();
	});

	it("should render the row with an additional cell for a checkbox if a checkbox click handler is provided", async () => {
		const onCheckbocClickMock = vi.fn();

		await setup({ onCheckboxClick: onCheckbocClickMock });

		expect(screen.queryAllByRole("cell")).toHaveLength(3);
		expect(screen.queryByTestId(testIds.DATA_VIEW_CELL_CHECK)).toBeInTheDocument();
		expect(screen.queryByRole("checkbox")).toBeInTheDocument();
	});

	it("should render the row with an additional cell containing a button row if the data view has actions", async () => {
		await setup({ hasActions: true, primaryActions, additionalActions });

		expect(screen.queryAllByRole("cell")).toHaveLength(3);
		expect(screen.queryAllByRole("button")).toHaveLength(3);
	});
});
