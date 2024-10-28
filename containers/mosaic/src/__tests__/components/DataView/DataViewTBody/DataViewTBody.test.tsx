import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewTBodyProps } from "@root/components/DataView/DataViewTBody";

import DataViewTBody from "@root/components/DataView/DataViewTBody";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

const columns: DataViewTBodyProps["columns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const data: DataViewTBodyProps["data"] = [{ id: "abc123", column1: "Column 1A", column2: "Column 2A" }, { id: "def456", column1: "Column 1B", column2: "Column 2B" }];
const transformedData: DataViewTBodyProps["transformedData"] = [{ id: "abc123", column1: "Column 1A", column2: "Column 2A" }, { id: "def456", column1: "Column 1B", column2: "Column 2B" }];

async function setup(props: Partial<DataViewTBodyProps> = {}) {
	const renderResult = await act(() => render(
		<table>
			<DataViewTBody
				columns={columns}
				data={data}
				transformedData={transformedData}
				hasActions={false}
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
	it("should render the data view table body", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_TBODY)).toBeInTheDocument();
	});

	it("should invoke the checkbox click handler with the row index if the handler is provided", async () => {
		const onCheckboxClickMock = vi.fn();

		const { user } = await setup({ onCheckboxClick: onCheckboxClickMock });

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(2);
		await user.click(checkboxes[0]);
		expect(onCheckboxClickMock).toBeCalledWith(0);
	});

	it("should render rows with checked checkboxes if the corresponding boolean is true in the checked property", async () => {
		const onCheckboxClickMock = vi.fn();

		await setup({ checked: [true, false], onCheckboxClick: onCheckboxClickMock });

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(2);
		expect(checkboxes[0]).toBeChecked();
		expect(checkboxes[1]).not.toBeChecked();
	});
});
