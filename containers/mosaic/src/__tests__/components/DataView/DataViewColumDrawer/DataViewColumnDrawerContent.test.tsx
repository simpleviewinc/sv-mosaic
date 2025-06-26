import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewColumnDrawerContentProps } from "@root/components/DataView/DataViewColumDrawer";

import DataViewColumnDrawerContent from "@root/components/DataView/DataViewColumDrawer/DataViewColumnDrawerContent";
import userEvent from "@testing-library/user-event";

const allColumns: DataViewColumnDrawerContentProps["allColumns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const columns: DataViewColumnDrawerContentProps["columns"] = [{ name: "column1", label: "Column 1" }];

async function setup(props: Partial<DataViewColumnDrawerContentProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();
	const onCloseMock = props.onClose || vi.fn();

	const renderResult = await act(() => render(
		<DataViewColumnDrawerContent
			allColumns={allColumns}
			columns={columns}
			onChange={onChangeMock}
			onClose={onCloseMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view column drawer content", async () => {
		await setup();

		expect(screen.queryByRole("heading", { name: "DataView.column_settings" })).toBeInTheDocument();
	});

	it("should invoke the change handler with the correct parameters", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const checkbox = screen.queryAllByRole("checkbox");
		const submit = screen.queryByRole("button", { name: "Apply" });

		expect(checkbox).toHaveLength(2);
		expect(submit).toBeInTheDocument();

		await user.click(checkbox[1]);
		await user.click(submit);

		expect(onChangeMock).toBeCalledWith(["column1", "column2"]);
	});

	it("should filter the columns based on the keyword provided", async () => {
		const { user } = await setup();

		const keywordInput = screen.getByRole("textbox", { name: "Keyword..." });
		const checkbox = screen.queryAllByRole("checkbox");

		expect(checkbox).toHaveLength(2);

		await user.type(keywordInput, "Column 1");

		expect(screen.queryAllByRole("checkbox")).toHaveLength(1);
		expect(screen.queryByRole("checkbox", { name: "Column 1" })).toBeInTheDocument();
		expect(screen.queryByRole("checkbox", { name: "Column 2" })).not.toBeInTheDocument();
	});

	it("should give a muted warning if no columns match the given keyword", async () => {
		const { user } = await setup();

		const keywordInput = screen.getByRole("textbox", { name: "Keyword..." });

		await user.type(keywordInput, "non-existing-column");

		expect(screen.queryByText("No columns to display")).toBeInTheDocument();
	});

	it("should give a muted warning if no columns are available", async () => {
		await setup({ allColumns: [], columns: [] });

		expect(screen.queryByText("No columns to display")).toBeInTheDocument();
	});
});
