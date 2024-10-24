import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewTitleBarProps } from "@root/components/DataView/DataViewTitleBar";

import DataViewTitleBar from "@root/components/DataView/DataViewTitleBar";
import testIds from "@root/utils/testIds";
import { DataViewFilterText } from "@root/components";

const buttons: DataViewTitleBarProps["buttons"] = [{ name: "titleButton1", label: "Title Button 1", color: "black", variant: "contained", onClick: vi.fn() }, { name: "titleButton2", label: "Title Button 2", color: "black", variant: "contained", onClick: vi.fn() }];
const filters: DataViewTitleBarProps["filters"] = [{ name: "myFilter", label: "Keyword", component: DataViewFilterText, onChange: vi.fn() }];

async function setup(props: Partial<DataViewTitleBarProps> = {}) {
	const renderResult = await act(() => render(
		<DataViewTitleBar
			title="My DataView Title"
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

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render a button row with buttons if button definitions have been provided", async () => {
		await setup({ buttons });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryAllByRole("button")).toHaveLength(2);
	});

	it("should render buttons as disabled if they are not already if the disabled boolean is true", async () => {
		await setup({ buttons, disabled: true });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Title Button 1" })).toBeDisabled();
		expect(screen.queryByRole("button", { name: "Title Button 2" })).toBeDisabled();
	});

	it("should render buttons enabled by their definition if no disabled boolean is provided", async () => {
		await setup({ buttons: [buttons[0], { ...buttons[1], disabled: true }] });

		expect(screen.queryByTestId(testIds.BUTTON_ROW)).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Title Button 1" })).not.toBeDisabled();
		expect(screen.queryByRole("button", { name: "Title Button 2" })).toBeDisabled();
	});

	it("should render the view controls if a current view is provided", async () => {
		await setup({ currentView: { label: "My View", value: "myView" } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_VIEW_CONTROL)).toBeInTheDocument();
	});

	it("should render the view controls if an on view save handler is provided", async () => {
		await setup({ currentView: { label: "My View", value: "myView" } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_VIEW_CONTROL)).toBeInTheDocument();
	});

	it("should render the view controls if an on view save as handler is provided", async () => {
		await setup({ currentView: { label: "My View", value: "myView" } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_VIEW_CONTROL)).toBeInTheDocument();
	});

	it("should render the view controls if an on view list handler is provided", async () => {
		await setup({ currentView: { label: "My View", value: "myView" } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_VIEW_CONTROL)).toBeInTheDocument();
	});

	it("should render the filters if a list of filters has been provided", async () => {
		await setup({ filters });

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTERS)).toBeInTheDocument();
	});
});
