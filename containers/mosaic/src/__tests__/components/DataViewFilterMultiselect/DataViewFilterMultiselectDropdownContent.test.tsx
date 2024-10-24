import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterMultiselectDropdownContentProps } from "@root/components/DataViewFilterMultiselect";

import { DataViewFilterMultiselectDropdownContent } from "@root/components/DataViewFilterMultiselect";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterMultiselectDropdownContentProps> = {}) {
	const getOptionsMock = props.getOptions || vi.fn<DataViewFilterMultiselectDropdownContentProps["getOptions"]>(() => ({ docs: [], hasMore: false }));
	const onApplyMock = props.onApply || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterMultiselectDropdownContent
			comparison="in"
			getOptions={getOptionsMock}
			onApply={onApplyMock}
			isOpen
			selected={[]}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view multiselect dropdown content", async () => {
		await setup({
			selected: [{ value: "option1", label: "Option 1" }],
		});

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTER_MULTI_CONTENT)).toBeInTheDocument();
		expect(screen.queryByPlaceholderText("Keyword...")).toBeInTheDocument();
		expect(screen.queryByText("Selected Options")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Option 1" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Clear" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Apply" })).toBeInTheDocument();
	});

	it("should render a select box with the active comparison selected if a valid comparison is provided", async () => {
		await setup({
			comparisons: [{ value: "in", label: "In" }],
		});

		expect(screen.queryByRole("button", { name: "In" })).toBeInTheDocument();
	});

	it("should disable the list of checkboxes if there is a select limit and it has been reached", async () => {
		await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
			selectLimit: 1,
		});

		const checkbox = screen.queryByRole("checkbox");

		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toBeDisabled();
	});

	it("should render the checkboxes unchecked if either the exists or not exists comparison is used", async () => {
		await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }] }),
			comparison: "exists",
			comparisons: [{ value: "exists", label: "Exists" }, { value: "not_exists", label: "Not Exists" }],
		});

		const checkbox = screen.queryByRole("checkbox");
		const options = screen.queryByTestId(testIds.DATA_VIEW_FILTER_MULTI_OPTIONS);

		expect(checkbox).toBeInTheDocument();
		expect(options).toBeInTheDocument();
		expect(checkbox).not.toBeChecked();
		expect(options).toHaveClass("disabled");
	});

	it("should reset the selected, comparison, keyword and list of chips in state when the clear button is clicked", async () => {
		const { user } = await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
			comparison: "not_in",
			comparisons: [{ value: "in", label: "In" }, { value: "not_in", label: "Not In" }],
		});

		const checkbox = screen.queryByLabelText("Option 1");
		const comparison = screen.queryByRole("button", { name: "Not In" });
		const selectedOption = screen.queryByRole("button", { name: "Option 1" });
		const clear = screen.queryByRole("button", { name: "Clear" });
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toBeChecked();
		expect(comparison).toBeInTheDocument();
		expect(selectedOption).toBeInTheDocument();
		expect(clear).toBeInTheDocument();

		await user.click(clear);

		expect(checkbox).not.toBeChecked();
		expect(comparison).toHaveTextContent("In");
		expect(selectedOption).not.toBeInTheDocument();
	});

	it("should fire the on apply handler with correct parameters with a comparison that requires options", async () => {
		const onApplyMock = vi.fn();

		const { user } = await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
			onApply: onApplyMock,
		});

		const apply = screen.queryByRole("button", { name: "Apply" });
		const option1 = screen.queryByLabelText("Option 1");
		const option2 = screen.queryByLabelText("Option 2");

		expect(apply).toBeInTheDocument();
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();

		await user.click(option1);
		await user.click(option2);
		await user.click(apply);

		expect(onApplyMock).toBeCalledWith({
			comparison: "in",
			value: ["option2"],
		});
	});

	it("should fire the on apply handler with correct parameters with a comparison that requires no options", async () => {
		const onApplyMock = vi.fn();

		const { user } = await setup({
			comparison: "exists",
			comparisons: [{ value: "exists", label: "Exists" }],
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
			onApply: onApplyMock,
		});

		const apply = screen.queryByRole("button", { name: "Apply" });
		const option1 = screen.queryByLabelText("Option 1");
		const option2 = screen.queryByLabelText("Option 2");

		expect(apply).toBeInTheDocument();
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();

		await user.click(option1);
		await user.click(option2);
		await user.click(apply);

		expect(onApplyMock).toBeCalledWith({
			comparison: "exists",
			value: [],
		});
	});

	it("should remove chips from the list of selected options when the chip delete button is clicked", async () => {
		const { user } = await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
		});

		const optionCheckbox = screen.queryByLabelText("Option 1");
		const optionChip = screen.queryByRole("button", { name: "Option 1" });
		expect(optionCheckbox).toBeInTheDocument();
		expect(optionCheckbox).toBeChecked();
		expect(optionChip).toBeInTheDocument();
		const deleteIcon = within(optionChip).queryByTestId(testIds.CHIP_DELETE_ICON);
		expect(deleteIcon).toBeInTheDocument();
		await user.click(deleteIcon);
		expect(optionCheckbox).not.toBeChecked();
		expect(optionChip).not.toBeInTheDocument();
	});

	it("should fire the on change handler if provided when chips are deleted", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }],
			onChange: onChangeMock,
		});

		const option = screen.queryByRole("button", { name: "Option 1" });
		expect(option).toBeInTheDocument();
		const deleteIcon = within(option).queryByTestId(testIds.CHIP_DELETE_ICON);
		expect(deleteIcon).toBeInTheDocument();
		await user.click(deleteIcon);
		expect(onChangeMock).toBeCalledWith([{ value: "option2", label: "Option 2" }]);
	});

	it("should fire the on change handler if provided when option checkboxes are toggled", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [],
			onChange: onChangeMock,
		});

		const option = screen.queryByLabelText("Option 1");
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith([{ value: "option1", label: "Option 1" }]);
		onChangeMock.mockClear();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith([]);
	});

	it("should fire the get options handler with the correct limit, state and keyword when load more is clicked", async () => {
		const getOptionsMock = vi.fn<DataViewFilterMultiselectDropdownContentProps["getOptions"]>(({ skip }) => {
			if (!skip) {
				return {
					docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }],
					hasMore: true,
				};
			}

			return {
				docs: [{ value: "option3", label: "Option 3" }, { value: "option4", label: "Option 4" }],
				hasMore: false,
			};
		});

		const { user } = await setup({
			limit: 2,
			getOptions: getOptionsMock,
		});

		getOptionsMock.mockClear();

		const loadMore = screen.queryByRole("button", { name: "Load more..." });
		expect(loadMore).toBeInTheDocument();
		expect(screen.queryAllByRole("checkbox")).toHaveLength(2);
		await user.click(loadMore);
		expect(getOptionsMock).toBeCalledWith({
			keyword: undefined,
			limit: 2,
			skip: 2,
		});
		expect(screen.queryAllByRole("checkbox")).toHaveLength(4);
	});

	it("should debounce the get options handler with the correct limit, state and keyword when the keyword is changed", async () => {
		const getOptionsMock = vi.fn<DataViewFilterMultiselectDropdownContentProps["getOptions"]>(({ keyword }) => {
			if (!keyword) {
				return {
					docs: [{ value: "option1", label: "Option 1" }],
					hasMore: true,
				};
			}

			return {
				docs: [{ value: "option2", label: "Option 2" }],
				hasMore: false,
			};
		});

		const { user } = await setup({
			getOptions: getOptionsMock,
		});

		getOptionsMock.mockClear();

		const keyword = screen.queryByPlaceholderText("Keyword...");
		expect(screen.queryByLabelText("Option 1")).toBeInTheDocument();
		expect(screen.queryByLabelText("Option 2")).toBeNull();
		expect(keyword).toBeInTheDocument();
		await user.type(keyword, "My Query");
		// The keyword value is debounced in an awkward way.
		// TODO: fix this.
		await act(async () => await new Promise((resolve) => setTimeout(() => resolve(null), 300)));
		expect(getOptionsMock).toBeCalledWith({
			keyword: "My Query",
			limit: 25,
			skip: 0,
		});
		expect(screen.queryByLabelText("Option 1")).toBeNull();
		expect(screen.queryByLabelText("Option 2")).toBeInTheDocument();
	});

	it("should fire get options handler with an undefined keyword when the keyword is an empty string", async () => {
		const getOptionsMock = vi.fn<DataViewFilterMultiselectDropdownContentProps["getOptions"]>(() => ({ docs: [], hasMore: false }));

		const { user } = await setup({
			getOptions: getOptionsMock,
		});

		getOptionsMock.mockClear();

		const keyword = screen.queryByPlaceholderText("Keyword...");
		expect(keyword).toBeInTheDocument();
		await user.type(keyword, " [Backspace]");
		// The keyword value is debounced in an awkward way.
		// TODO: fix this.
		await act(async () => await new Promise((resolve) => setTimeout(() => resolve(null), 300)));
		expect(getOptionsMock).toBeCalledWith({
			keyword: undefined,
			limit: 25,
			skip: 0,
		});
	});

	it("should fire the create new option handler and add the resolved value as a checkbox option", async () => {
		const createNewOptionMock = vi.fn<DataViewFilterMultiselectDropdownContentProps["createNewOption"]>(async (value) => ({
			value: value.toLocaleLowerCase().replace(/ /g, "_"),
			label: value.toLocaleUpperCase(),
		}));

		const { user } = await setup({ createNewOption: createNewOptionMock });

		expect(screen.queryByRole("button", { name: "Create" })).toBeNull();
		const keyword = screen.queryByPlaceholderText("Keyword...");
		expect(keyword).toBeInTheDocument();
		await user.type(keyword, "My Option");
		// The keyword value is debounced in an awkward way.
		// TODO: fix this.
		await act(async () => await new Promise((resolve) => setTimeout(() => resolve(null), 300)));
		const create = screen.queryByRole("button", { name: "Create" });
		expect(create).toBeInTheDocument();
		await user.click(create);
		const option = screen.queryByLabelText("MY OPTION");
		expect(option).toBeInTheDocument();
		expect(option).toHaveAttribute("value", "my_option");
	});

	it("should update comparison and clear out any selected items if the exists or not exists comparisons are selected", async () => {
		const { user } = await setup({
			comparisons: [{ value: "in", label: "In" }, { value: "exists", label: "Exists" }],
			comparison: "in",
			getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			selected: [{ value: "option1", label: "Option 1" }],
		});

		const option = screen.queryByLabelText("Option 1");
		const comparison = screen.queryByRole("button", { name: "In" });
		expect(option).toBeInTheDocument();
		expect(option).toBeChecked();
		expect(comparison).toBeInTheDocument();
		await user.click(comparison);
		const exists = screen.queryByRole("menuitem", { name: "Exists" });
		expect(exists).toBeInTheDocument();
		await user.click(exists);
		expect(comparison).toHaveTextContent("Exists");
		expect(option).not.toBeChecked();
		await user.click(comparison);
		const inComparison = screen.queryByRole("menuitem", { name: "In" });
		expect(inComparison).toBeInTheDocument();
		await user.click(inComparison);
		expect(comparison).toHaveTextContent("In");
	});
});
