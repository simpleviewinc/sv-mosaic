import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterMultiselectProps } from "@root/components/DataViewFilterMultiselect";

import DataViewFilterMultiselect from "@root/components/DataViewFilterMultiselect";
import testIds from "@root/utils/testIds";

function getArgsProp(args: Partial<DataViewFilterMultiselectProps["args"]> = {}): DataViewFilterMultiselectProps["args"] {
	const getOptionsMock = args.getOptions || vi.fn<DataViewFilterMultiselectProps["args"]["getOptions"]>(() => ({
		docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }],
		hasMore: false,
	}));
	const getSelectedMock = args.getSelected || vi.fn(() => []);

	return {
		getOptions: getOptionsMock,
		getSelected: getSelectedMock,
	};
}

async function setup(props: Partial<DataViewFilterMultiselectProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterMultiselect
			args={getArgsProp()}
			data={{}}
			label="Filter Multiselect"
			onChange={onChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view multiselect filter button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Multiselect" })).toBeInTheDocument();
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(dropdown).not.toBeInTheDocument();
	});

	it("should fire the on apply handler if the popover is submitted with items checked", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const option1 = screen.queryByRole("checkbox", { name: "Option 1" });
		const option2 = screen.queryByRole("checkbox", { name: "Option 2" });
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(option1).toBeInTheDocument();
		expect(option2).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.click(option1);
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			comparison: "in",
			value: ["option1"],
		});
	});

	it("should fire the on apply handler if the popover is submitted with exists comparison", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			args: {
				...getArgsProp(),
				comparisons: ["exists", "not_exists"],
			},
			data: {
				comparison: "exists",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			comparison: "exists",
			value: [],
		});
	});

	it("should fire the on apply handler if the popover is submitted with not exists comparison", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
			args: {
				...getArgsProp(),
				comparisons: ["exists", "not_exists"],
			},
			data: {
				comparison: "exists",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const comparison = screen.queryByRole("button", { name: "Comparison Selector" });
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		expect(comparison).toBeInTheDocument();
		await user.click(comparison);
		const notExists = screen.queryByRole("menuitem", { name: "Not Exists" });
		expect(notExists).toBeInTheDocument();
		await user.click(notExists);
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			comparison: "not_exists",
			value: [],
		});
	});

	it("should fire the on apply handler with an undefined parameter if there are no checkboxes selected and the comparison requires them", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({ onChange: onChangeMock });

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should render the correct description of the filter when the exists comparison is used", async () => {
		await setup({
			args: {
				...getArgsProp(),
				comparisons: ["exists"],
			},
			data: {
				comparison: "exists",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Multiselect|EXISTS");
	});

	it("should render the correct description of the filter when the not exists comparison is used", async () => {
		await setup({
			args: {
				...getArgsProp(),
				comparisons: ["not_exists"],
			},
			data: {
				comparison: "not_exists",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Multiselect|NOT EXISTS");
	});

	it("should render the correct description of the filter when the in comparison is used", async () => {
		await setup({
			args: {
				...getArgsProp(),
				comparisons: ["in"],
				getSelected: () => [{ value: "option1", label: "Option 1" }],
			},
			data: {
				comparison: "in",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Multiselect|Option 1");
	});

	it("should render the correct description of the filter when the not in comparison is used", async () => {
		await setup({
			args: {
				...getArgsProp(),
				comparisons: ["not_in"],
				getSelected: () => [{ value: "option1", label: "Option 1" }],
			},
			data: {
				comparison: "not_in",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Multiselect|Not In - Option 1");
	});

	it("should render the correct description of the filter when the all comparison is used", async () => {
		await setup({
			args: {
				...getArgsProp(),
				comparisons: ["all"],
				getSelected: () => [{ value: "option1", label: "Option 1" }],
			},
			data: {
				comparison: "all",
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Multiselect" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Multiselect|All - Option 1");
	});
});
