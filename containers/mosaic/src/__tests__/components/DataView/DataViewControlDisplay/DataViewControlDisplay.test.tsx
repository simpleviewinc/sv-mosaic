import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewControlDisplayProps } from "@root/components/DataView/DataViewControlDisplay";

import DataViewControlDisplay from "@root/components/DataView/DataViewControlDisplay";
import userEvent from "@testing-library/user-event";
import { DataViewDisplayList, DataViewDisplayGrid } from "@root/components/DataView/DataViewDisplays";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewControlDisplayProps> = {}) {
	const onDisplayChangeMock = props.onDisplayChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewControlDisplay
			display="list"
			displayOptions={[DataViewDisplayList, DataViewDisplayGrid]}
			onDisplayChange={onDisplayChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view display selection button", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_CONTROL)).toBeInTheDocument();
	});

	it("should list all of the options provided", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "List" })).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "Grid" })).toBeInTheDocument();
	});

	it("should render the currently selected display with a specific class", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		const list = screen.queryByRole("menuitem", { name: "List" });
		expect(list).toBeInTheDocument();
		expect(list).toHaveClass("Mui-selected");
	});

	it("should invoke the on display change handler with correct value if provided when menu item is selected", async () => {
		const onDisplayChangeMock = vi.fn();

		const { user } = await setup({ onDisplayChange: onDisplayChangeMock });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		const grid = screen.queryByRole("menuitem", { name: "Grid" });
		expect(grid).toBeInTheDocument();
		await user.click(grid);
		expect(onDisplayChangeMock).toBeCalledWith("grid");
	});
});
