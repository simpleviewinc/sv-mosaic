import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterSingleSelectProps } from "@root/components/DataViewFilterSingleSelect";

import DataViewFilterSingleSelect from "@root/components/DataViewFilterSingleSelect";
function getArgsProp(args: Partial<DataViewFilterSingleSelectProps["args"]> = {}): DataViewFilterSingleSelectProps["args"] {
	const getOptionsMock = args.getOptions || vi.fn<DataViewFilterSingleSelectProps["args"]["getOptions"]>(() => ({
		docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }],
		hasMore: false,
	}));
	const getSelectedMock = args.getSelected || vi.fn(() => undefined);

	return {
		getOptions: getOptionsMock,
		getSelected: getSelectedMock,
	};
}

async function setup(props: Partial<DataViewFilterSingleSelectProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterSingleSelect
			args={getArgsProp()}
			data={{ value: undefined }}
			label="Filter Single Select"
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
	it("should render the data view single select filter button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Single Select" })).toBeInTheDocument();
	});

	it("should throw an error if the filter is required but no value is provided", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		await expect(() => setup({
			args: {
				...getArgsProp(),
				required: true,
			},
		})).rejects.toThrow("Invalid use-case, a value is required but none was provided");
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(menu).not.toBeInTheDocument();
	});

	it("should correct render the text if an option is selected", async () => {
		await setup({
			args: {
				...getArgsProp(),
				getSelected: () => ({ value: "Option 1", label: "Option 1" }),
			},
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Option 1");
	});

	it("should fire the on change handler with an undefined parameter if the value is an empty string", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			args: {
				...getArgsProp(),
				getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "", label: "Option 2" }] }),
			},
			onChange: onChangeMock,
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		const option = within(menu).queryByRole("menuitem", { name: "Option 2" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with an undefined parameter if the value is undefined", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			args: {
				...getArgsProp(),
				getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: undefined, label: "Option 2" }] }),
			},
			onChange: onChangeMock,
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		const option = within(menu).queryByRole("menuitem", { name: "Option 2" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should fire the on change handler with the correct parameter when an option is selected", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			args: {
				...getArgsProp(),
				getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			},
			onChange: onChangeMock,
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		const option = within(menu).queryByRole("menuitem", { name: "Option 2" });
		expect(option).toBeInTheDocument();
		await user.click(option);
		expect(onChangeMock).toBeCalledWith({
			value: "option2",
		});
	});

	it("should render the filter menu with the correct placeholder option if the filter is not required", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			args: {
				...getArgsProp(),
				getOptions: () => ({ docs: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] }),
			},
			onChange: onChangeMock,
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		const placeholder = within(menu).queryByRole("menuitem", { name: "Any..." });
		expect(placeholder).toBeInTheDocument();
		await user.click(placeholder);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should not render the filter menu placeholder if the filter is required", async () => {
		const { user } = await setup({
			args: {
				...getArgsProp(),
				required: true,
			},
			data: { value: "option1" },
		});

		const button = screen.queryByRole("button", { name: "Filter: Filter Single Select" });
		expect(button).toBeInTheDocument();
		await user.click(button);
		const menu = screen.queryByRole("menu");
		expect(menu).toBeInTheDocument();
		const placeholder = within(menu).queryByRole("menuitem", { name: "Any..." });
		expect(placeholder).toBeNull();
	});
});
