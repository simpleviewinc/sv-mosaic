import { render, screen, waitFor, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterTextProps } from "@root/components/DataViewFilterText";

import DataViewFilterText from "@root/components/DataViewFilterText";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterTextProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterText
			args={{}}
			data={{}}
			label="Filter Text"
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
	it("should render the data view text filter button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Text" })).toBeInTheDocument();
	});

	it("should throw if the comparison default provided is not in the list of valid comparisons", async () => {
		vi.spyOn(console, "error").mockImplementation(() => null);

		expect(() => setup({ args: { comparisonDefault: "Foo" } }))
			.rejects
			.toThrow("The selected comparison is not a valid comparison");
	});

	it("should use the comparison given by data if provided", async () => {
		await setup({ args: { comparisons: [] }, data: { comparison: "exists" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Text:exists");
	});

	it("should use the default comparison it exists in the list of comparisons provided", async () => {
		await setup({ args: { comparisons: ["exists"], comparisonDefault: "exists" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Text:exists");
	});

	it("should use first comparison in the list of comparisons if no default is provided", async () => {
		await setup({ args: { comparisons: ["exists"] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Text:exists");
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		await waitFor(() => expect(dropdown).not.toBeInTheDocument());
	});

	it("should display the correct text if the exists comparison is used", async () => {
		await setup({ args: { comparisons: ["exists"] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Text:exists");
	});

	it("should display the correct text if the not exists comparison is used", async () => {
		await setup({ args: { comparisons: ["not_exists"] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Text:does not exist");
	});

	it("should display the correct text if there is no value, regardless of comparison", async () => {
		await setup({ args: { comparisons: ["contains"] } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toBeNull();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toBeNull();
	});

	it("should display the correct text if the equals comparison is used and there is a value", async () => {
		await setup({ args: { comparisons: ["equals"] }, data: { value: "Query" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("is");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("Query");
	});

	it("should display the correct text if the not equals comparison is used and there is a value", async () => {
		await setup({ args: { comparisons: ["not_equals"] }, data: { value: "Query" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("is not");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("Query");
	});

	it("should display the correct text if the contains comparison is used and there is a value", async () => {
		await setup({ args: { comparisons: ["contains"] }, data: { value: "Query" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("contains");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("Query");
	});

	it("should display the correct text if the not contains comparison is used and there is a value", async () => {
		await setup({ args: { comparisons: ["not_contains"] }, data: { value: "Query" } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Text" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("does not contain");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("Query");
	});
});
