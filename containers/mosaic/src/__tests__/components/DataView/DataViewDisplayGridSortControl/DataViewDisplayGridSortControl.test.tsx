import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewDisplayGridSortControlProps } from "@root/components/DataView/DataViewDisplayGridSortControl";

import DataViewDisplayGridSortControl from "@root/components/DataView/DataViewDisplayGridSortControl";
import userEvent from "@testing-library/user-event";
import testIds from "@root/utils/testIds";

const columns: DataViewDisplayGridSortControlProps["columns"] = [{ name: "column1", label: "Column 1", sortable: true }, { name: "column2", label: "Column 2", sortable: true }];
const sort: DataViewDisplayGridSortControlProps["sort"] = { dir: "asc", name: "column1" };

async function setup(props: Partial<DataViewDisplayGridSortControlProps> = {}) {
	const onSortChangeMock = props.onSortChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewDisplayGridSortControl
			columns={columns}
			onSortChange={onSortChangeMock}
			sort={sort}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view column control with sort ascending", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Column 1" })).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.DATA_VIEW_SORT_ASC)).toBeInTheDocument();
	});

	it("should render the data view column control with sort descending", async () => {
		await setup({ sort: { ...sort, dir: "desc" } });

		expect(screen.queryByRole("button", { name: "Column 1" })).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.DATA_VIEW_SORT_DESC)).toBeInTheDocument();
	});

	it("should invoke the sort change handler when the sort column is changed", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({ onSortChange: onSortChangeMock });

		const button = screen.queryByRole("button", { name: "Column 1" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const column2 = screen.queryByRole("menuitem", { name: "Column 2" });
		expect(column2).toBeInTheDocument();
		await user.click(column2);

		expect(onSortChangeMock).toBeCalledWith({
			name: "column2",
			dir: "asc",
		});
	});

	it("should invoke the sort change handler when the sort direction is changed to descending", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({ onSortChange: onSortChangeMock });

		const button = screen.queryByRole("button", { name: "Sort Direction" });
		expect(button).toBeInTheDocument();
		await user.click(button);

		expect(onSortChangeMock).toBeCalledWith({
			name: "column1",
			dir: "desc",
		});
	});

	it("should invoke the sort change handler when the sort direction is changed to ascending", async () => {
		const onSortChangeMock = vi.fn();

		const { user } = await setup({ onSortChange: onSortChangeMock, sort: { ...sort, dir: "desc" } });

		const button = screen.queryByRole("button", { name: "Sort Direction" });
		expect(button).toBeInTheDocument();
		await user.click(button);

		expect(onSortChangeMock).toBeCalledWith({
			name: "column1",
			dir: "asc",
		});
	});
});
