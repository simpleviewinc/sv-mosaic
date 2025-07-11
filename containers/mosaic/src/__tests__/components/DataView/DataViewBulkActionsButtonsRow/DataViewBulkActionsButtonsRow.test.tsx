import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewBulkActionsButtonsRowProps } from "@root/components/DataView/DataViewBulkActionsButtonsRow";

import DataViewBulkActionsButtonsRow from "@root/components/DataView/DataViewBulkActionsButtonsRow";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

const bulkActions: DataViewBulkActionsButtonsRowProps["bulkActions"] = [{ name: "action1", label: "Action 1", intent: "secondary", variant: "contained" }, { name: "action2", label: "Action 2", intent: "secondary", variant: "contained" }];
const checked: DataViewBulkActionsButtonsRowProps["checked"] = [false, true];
const data: DataViewBulkActionsButtonsRowProps["data"] = [{ id: "abc123" }, { id: "def456" }];

async function setup(props: Partial<DataViewBulkActionsButtonsRowProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewBulkActionsButtonsRow
			bulkActions={bulkActions}
			checked={checked}
			checkedAllPages={false}
			data={data}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view bulk actions button row", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should invoke the on click handler with the checked items if the checked all pages prop is false", async () => {
		const onClickMock = vi.fn();

		const { user } = await setup({ bulkActions: [{ ...bulkActions[0], onClick: onClickMock }] });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);

		expect(onClickMock).toHaveBeenCalledWith({
			data: [{ id: "def456" }],
		});
	});

	it("should invoke the on click handler with the checked items if the checked all pages prop is false", async () => {
		const onClickMock = vi.fn();

		const { user } = await setup({ bulkActions: [{ ...bulkActions[0], onClick: onClickMock }] });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);

		expect(onClickMock).toHaveBeenCalledWith({
			data: [{ id: "def456" }],
		});
	});

	it("should invoke the on all click handler if the checked all pages prop is true", async () => {
		const onAllClickMock = vi.fn();

		const { user } = await setup({ checkedAllPages: true, bulkActions: [{ ...bulkActions[0], onAllClick: onAllClickMock }] });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);

		expect(onAllClickMock).toHaveBeenCalled();
	});
});
