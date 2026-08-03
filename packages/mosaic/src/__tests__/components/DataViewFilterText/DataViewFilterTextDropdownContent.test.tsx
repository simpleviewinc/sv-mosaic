import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterTextDropdownContentProps } from "@root/components/DataViewFilterText";

import DataViewFilterTextDropdownContent from "@root/components/DataViewFilterText/DataViewFilterTextDropdownContent";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterTextDropdownContentProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();
	const onCloseMock = props.onClose || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterTextDropdownContent
			comparison="equals"
			onChange={onChangeMock}
			onClose={onCloseMock}
			value=""
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view text dropdown content", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_FILTER_TEXT_CONTENT)).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Clear" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Apply" })).toBeInTheDocument();
	});

	it("should render the comparisons menu button if the comparison provided is in the list of comparisons provided", async () => {
		await setup({ comparison: "exists", comparisons: [{ value: "exists", label: "Exists" }] });

		expect(screen.queryByRole("button", { name: "Exists" })).toBeInTheDocument();
	});

	it("should dispatch the on apply handler with no value if the comparison is exists or not exists", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			comparison: "equals",
			comparisons: [{ value: "equals", label: "Equals" }, { value: "exists", label: "Exists" }],
			onChange: onChangeMock,
		});

		const input = screen.queryByRole("textbox");
		const comparison = screen.queryByRole("button", { name: "Equals" });
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(input).toBeInTheDocument();
		expect(comparison).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.type(input, "My Query");
		await user.click(comparison);
		const exists = screen.queryByRole("menuitem", { name: "Exists" });
		expect(exists).toBeInTheDocument();
		await user.click(exists);
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			comparison: "exists",
			value: undefined,
		});
	});

	it("should dispatch the on apply handler with value and comparison if comparison warrants a value", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			comparison: "equals",
			comparisons: [{ value: "equals", label: "Equals" }],
			onChange: onChangeMock,
		});

		const input = screen.queryByRole("textbox");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(input).toBeInTheDocument();
		expect(apply).toBeInTheDocument();
		await user.type(input, "My Query");
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith({
			comparison: "equals",
			value: "My Query",
		});
	});

	it("should dispatch the on apply handler with undefined if the value is an empty string", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			comparison: "equals",
			comparisons: [{ value: "equals", label: "Equals" }],
			onChange: onChangeMock,
		});

		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should dispatch the on apply handler with undefined if the value is white space only", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			comparison: "equals",
			comparisons: [{ value: "equals", label: "Equals" }],
			onChange: onChangeMock,
		});

		const input = screen.queryByRole("textbox");
		const apply = screen.queryByRole("button", { name: "Apply" });
		expect(apply).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		await user.type(input, "    ");
		await user.click(apply);
		expect(onChangeMock).toBeCalledWith(undefined);
	});

	it("should reset the state comparison and value when the clear button is clicked", async () => {

		const { user } = await setup({
			comparison: "equals",
			comparisons: [{ value: "equals", label: "Equals" }, { value: "not_equals", label: "Does not equal" }],
		});

		const input = screen.queryByRole("textbox");
		const clear = screen.queryByRole("button", { name: "Clear" });
		const comparison = screen.queryByRole("button", { name: "Equals" });
		expect(clear).toBeInTheDocument();
		expect(input).toBeInTheDocument();
		expect(comparison).toBeInTheDocument();
		await user.type(input, "My Query");
		await user.click(comparison);
		const notEqual = screen.queryByRole("menuitem", { name: "Does not equal" });
		expect(notEqual).toBeInTheDocument();
		await user.click(notEqual);
		expect(input).toHaveValue("My Query");
		expect(comparison).toHaveTextContent("Does not equal");
		await user.click(clear);
		expect(input).toHaveValue("");
		expect(comparison).toHaveTextContent("Equals");
	});

	it("should fire the on apply handler if the enter key is pressed when the input field has focus", async () => {
		const onChangeMock = vi.fn();

		const { user } = await setup({
			onChange: onChangeMock,
		});

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
		await user.click(input);
		expect(input).toHaveFocus();
		await user.keyboard("{Enter}");
		expect(onChangeMock).toBeCalled();
	});

	it("should display the query text field if comparison is contains", async () => {
		await setup({ comparison: "contains" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("should display the query text field if comparison is equals", async () => {
		await setup({ comparison: "equals" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("should display the query text field if comparison is not contains", async () => {
		await setup({ comparison: "not_contains" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("should display the query text field if comparison is not equals", async () => {
		await setup({ comparison: "not_equals" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("should not display the query text field if comparison is exists", async () => {
		await setup({ comparison: "exists" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeNull();
	});

	it("should not display the query text field if comparison is not exists", async () => {
		await setup({ comparison: "not_exists" });

		const input = screen.queryByRole("textbox");
		expect(input).toBeNull();
	});
});
