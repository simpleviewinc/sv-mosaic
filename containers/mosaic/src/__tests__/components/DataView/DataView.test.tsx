import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { DataViewProps } from "@root/components/DataView";

import DataView from "@root/components/DataView";
import userEvent from "@testing-library/user-event";
import { DataViewFilterText } from "@root/components";
import testIds from "@root/utils/testIds";

const buttons: DataViewProps["buttons"] = [{ name: "titleButton1", label: "Title Button 1", color: "black", variant: "contained", onClick: vi.fn() }, { name: "titleButton2", label: "Title Button 2", color: "black", variant: "contained", onClick: vi.fn() }];
const columns: DataViewProps["columns"] = [{ name: "column1", label: "Column 1" }, { name: "column2", label: "Column 2" }];
const data: DataViewProps["data"] = [{ id: "abc123", column1: "Column 1A", column2: "Column 2A" }, { id: "def456", column1: "Column 1B", column2: "Column 2B" }];
const bulkActions: DataViewProps["bulkActions"] = [{ name: "action1", label: "Action 1", color: "black", variant: "contained" }];
const primaryActions: DataViewProps["primaryActions"] = [{ name: "primary1", label: "Primary 1", color: "black", variant: "contained", onClick: vi.fn() }, { name: "primary2", label: "Primary 2", color: "black", variant: "contained", onClick: vi.fn() }];
const additionalActions: DataViewProps["additionalActions"] = [{ name: "additional1", label: "Additional 1", onClick: vi.fn() }, { name: "additional2", label: "Additional 2", onClick: vi.fn() }];

const filters = [
	{
		name: "column1",
		label: "Column 1",
		component: DataViewFilterText,
		column: "column1",
		onChange: () => undefined,
	},
	{
		name: "column2",
		label: "Column 2",
		component: DataViewFilterText,
		column: "column2",
		onChange: () => undefined,
	},
];

async function setup(props: Partial<DataViewProps> = {}) {
	const renderResult = await act(() => render(
		<DataView
			columns={columns}
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
	it("should render the data view", async () => {
		await setup();

		expect(screen.queryByRole("columnheader", { name: "Column 1" })).toBeInTheDocument();
		expect(screen.queryByRole("columnheader", { name: "Column 2" })).toBeInTheDocument();
		expect(screen.queryAllByLabelText("Column 1")).toHaveLength(2);
		expect(screen.queryAllByLabelText("Column 2")).toHaveLength(2);
	});

	it("should throw an error if a provided active filter is not recognised as a valid filter", async () => {
		vi.spyOn(console, "error").mockImplementation(() => {});

		await expect(() => setup({
			filters,
			activeFilters: ["column1", "keyowrd"],
			filter: { keyword: { value: "Test", comparison: "equals" } },
		})).rejects.toThrow("Active filter \"keyowrd\" is not a valid filter.");
	});

	it("should render the provided no results text if there is no data to display", async () => {
		await setup({ data: [], noResults: "Nothing here.." });

		expect(screen.queryByText("Nothing here..")).toBeInTheDocument();
	});

	it("should render the provided no results component if there is no data to display", async () => {
		await setup({ data: [], noResults: <button type="button">Take me home</button> });

		expect(screen.queryByRole("button", { name: "Take me home" })).toBeInTheDocument();
	});

	it("should enable the display control if there are display change handler and display options provided", async () => {
		const onDisplayChangeMock = vi.fn();

		await setup({ onDisplayChange: onDisplayChangeMock, displayOptions: ["grid", "list"] });

		expect(screen.queryByTestId(testIds.DATA_VIEW_DISPLAY_CONTROL)).toBeInTheDocument();
	});

	it("should fire the on all click handler when a bulk action is clicked if checked all pages is true", async () => {
		const onAllClickMock = vi.fn();

		const { user } = await setup({
			bulkActions: [{ ...bulkActions[0], onAllClick: onAllClickMock }],
			checked: [true, true],
			checkedAllPages: true,
			onCheckChange: () => null,
		});

		const button = screen.queryByRole("button", { name: "Action 1" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(onAllClickMock).toHaveBeenCalled();
	});

	it("should fire the on click handler when a bulk action is clicked if some rows are checked", async () => {
		const onClickMock = vi.fn();

		const { user } = await setup({
			bulkActions: [{ ...bulkActions[0], onClick: onClickMock }],
			checked: [true, true],
			onCheckChange: vi.fn(),
		});

		const button = screen.queryByRole("button", { name: "Action 1" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(onClickMock).toHaveBeenCalled();
	});

	it("should fire the check change handlers with correct parameters if the check all checkbox is checked", async () => {
		const onCheckChangeMock = vi.fn();
		const onCheckAllPagesChangeMock = vi.fn();

		const { user } = await setup({
			checked: [false, false],
			checkedAllPages: false,
			onCheckChange: onCheckChangeMock,
			onCheckAllPagesChange: onCheckAllPagesChangeMock,
		});

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(3);

		const [checkAll] = checkboxes;
		await user.click(checkAll);
		expect(onCheckChangeMock).toBeCalledWith([true, true]);
		expect(onCheckAllPagesChangeMock).toBeCalledWith(false);
	});

	it("should fire the check change handlers with correct parameters if a row's checkbox is checked", async () => {
		const onCheckChangeMock = vi.fn();
		const onCheckAllPagesChangeMock = vi.fn();

		const { user } = await setup({
			checked: [false, false],
			checkedAllPages: false,
			onCheckChange: onCheckChangeMock,
			onCheckAllPagesChange: onCheckAllPagesChangeMock,
		});

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(3);

		const [, rowCheckbox] = checkboxes;
		await user.click(rowCheckbox);
		expect(onCheckChangeMock).toBeCalledWith([true, false]);
		expect(onCheckAllPagesChangeMock).toBeCalledWith(false);
	});

	it("should fire the check change handlers with a correct parameter if all pages are checked", async () => {
		const onCheckChangeMock = vi.fn();
		const onCheckAllPagesChangeMock = vi.fn();

		const { user } = await setup({
			bulkActions: [{ ...bulkActions[0], onClick: vi.fn(), onAllClick: vi.fn() }],
			checked: [true, true],
			checkedAllPages: false,
			onCheckChange: onCheckChangeMock,
			onCheckAllPagesChange: onCheckAllPagesChangeMock,
			count: 5,
		});

		const button = screen.queryByRole("button", { name: "Select All 5 Records" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(onCheckChangeMock).toBeCalledWith([true, true]);
		expect(onCheckAllPagesChangeMock).toBeCalledWith(true);
	});

	it("should fire the check change handlers with a correct parameter if all pages checks are cleared", async () => {
		const onCheckChangeMock = vi.fn();
		const onCheckAllPagesChangeMock = vi.fn();

		const { user } = await setup({
			bulkActions: [{ ...bulkActions[0], onClick: vi.fn(), onAllClick: vi.fn() }],
			checked: [true, true],
			checkedAllPages: true,
			onCheckChange: onCheckChangeMock,
			onCheckAllPagesChange: onCheckAllPagesChangeMock,
			count: 5,
		});

		const button = screen.queryByRole("button", { name: "Clear Selection" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(onCheckChangeMock).toBeCalledWith([false, false]);
		expect(onCheckAllPagesChangeMock).toBeCalledWith(false);
	});

	it("should scroll to the top of the dataview if the limit is changed", async () => {
		Element.prototype.scrollTo = vi.fn();

		const { rerender } = await setup();

		act(() => rerender(
			<DataView
				columns={columns}
				data={data}
				limit={10}
			/>,
		));

		expect(Element.prototype.scrollTo).toBeCalledTimes(2);
	});

	it("should scroll to the top of the dataview if the skip is changed", async () => {
		Element.prototype.scrollTo = vi.fn();

		const { rerender } = await setup();

		act(() => rerender(
			<DataView
				columns={columns}
				data={data}
				skip={10}
			/>,
		));

		expect(Element.prototype.scrollTo).toBeCalledTimes(2);
	});

	it("should scroll to the top of the dataview if the display is changed", async () => {
		Element.prototype.scrollTo = vi.fn();

		const { rerender } = await setup();

		act(() => rerender(
			<DataView
				columns={columns}
				data={data}
				display="grid"
				gridColumnsMap={{ image: null, secondary: null, primary: null }}
			/>,
		));

		expect(Element.prototype.scrollTo).toBeCalledTimes(2);
	});

	it("should throw if an unknown view option is provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => {});

		expect(() => setup({ displayOptions: ["unknown"] }))
			.rejects
			.toThrow("Unknown view option");
	});

	it("should throw if the display provided is not in the list of available displays", async () => {
		vi.spyOn(console, "error").mockImplementation(() => {});

		expect(() => setup({ displayOptions: ["list", "grid"], display: "unknown" }))
			.rejects
			.toThrow("Display 'unknown' is not valid in the passed displayOptions.");
	});

	it("should throw if any of the active columns provided is not in the columns list provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => {});

		expect(() => setup({ activeColumns: ["unknown"] }))
			.rejects
			.toThrow("Active column \"unknown\" is not defined in the columns list.");
	});

	it("should make non-shown primary actions invisible and disabled for list displays", async () => {
		await setup({
			primaryActions: [{
				...primaryActions[0],
				show: ({ row }) => row.id === "abc123",
			}],
		});

		const buttons = screen.queryAllByRole("button", { name: "Primary 1" });
		expect(buttons).toHaveLength(2);
		expect(buttons[0]).not.toBeDisabled();
		expect(buttons[1]).toBeDisabled();

		// TODO: assert visibility when we've migrated to emotion
	});

	it("should not render non-shown primary actions for grid displays", async () => {
		await setup({
			primaryActions: [{
				...primaryActions[0],
				show: ({ row }) => row.id === "abc123",
			}],
			display: "grid",
			gridColumnsMap: { image: null, primary: null, secondary: null },
		});

		const button = screen.queryByRole("button", { name: "Primary 1" });
		expect(button).toBeInTheDocument();
	});

	it("should not render non-shown additional actions", async () => {
		const { user } = await setup({
			additionalActions: [
				{
					...additionalActions[0],
					show: ({ row }) => row.id === "abc123",
				},
				additionalActions[1],
			],
		});

		const menuButtons = screen.queryAllByRole("button", { name: "More actions" });
		expect(menuButtons).toHaveLength(2);
		const [row1Menu, row2Menu] = menuButtons;
		await user.click(row1Menu);
		expect(screen.queryByRole("menuitem", { name: "Additional 1" })).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "Additional 2" })).toBeInTheDocument();
		await user.keyboard("{Esc}");
		await user.click(row2Menu);
		expect(screen.queryByRole("menuitem", { name: "Additional 1" })).not.toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "Additional 2" })).toBeInTheDocument();
	});

	it("should render a busy attribute if the loading prop is provided and is true", async () => {
		await setup({ loading: true });

		const dataView = screen.queryByTestId(testIds.DATA_VIEW);

		expect(dataView).toBeInTheDocument();
		expect(dataView).toHaveAttribute("aria-busy", "true");
	});

	it("should render the data view with a sticky class if the sticky prop is provided and is true", async () => {
		await setup({ sticky: true });

		const dataView = screen.queryByTestId(testIds.DATA_VIEW);

		expect(dataView).toBeInTheDocument();
		expect(dataView).toHaveClass("sticky");

		// TODO: assert sticky position when we've migrated to emotion
	});

	it("should render the title bar if there is a title provided", async () => {
		await setup({ title: "My DataView" });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there are buttons provided", async () => {
		await setup({ buttons });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there are filters provided", async () => {
		await setup({ filters });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there is a current view provided", async () => {
		await setup({ currentView: { value: "myView", label: "My View" } });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there is an on view list handler provided", async () => {
		await setup({ onViewList: vi.fn() });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there is an on view save handler provided", async () => {
		await setup({ onViewSave: vi.fn() });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar if there is an on view save as handler provided", async () => {
		await setup({ onViewSaveAs: vi.fn() });

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).toBeInTheDocument();
	});

	it("should render the title bar there is nothing to render within it", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_TITLE_BAR)).not.toBeInTheDocument();
	});
});
