import { render, screen, waitFor, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewFilterNumberProps } from "@root/components/DataViewFilterNumber";

import DataViewFilterNumber from "@root/components/DataViewFilterNumber";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewFilterNumberProps> = {}) {
	const onChangeMock = props.onChange || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewFilterNumber
			args={{}}
			data={{}}
			label="Filter Number"
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
	it("should render the data view number filter button", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Number" })).toBeInTheDocument();
	});

	it("should render the correct text if a maximum is provided but a minimum is not", async () => {
		await setup({ data: { max: 5 } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("or less");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("5");
	});

	it("should render the correct text if a minimum is provided but a maximum is not", async () => {
		await setup({ data: { min: 3 } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_OPERATOR)).toHaveTextContent("or greater");
		expect(within(button).queryByTestId(testIds.DATA_VIEW_FILTER_VALUE)).toHaveTextContent("3");
	});

	it("should render the correct text if both a minimum and a maximum are provided", async () => {
		await setup({ data: { min: 3, max: 5 } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });
		expect(button).toBeInTheDocument();
		const operators = within(button).queryAllByTestId(testIds.DATA_VIEW_FILTER_OPERATOR);
		expect(operators).toHaveLength(2);
		expect(operators[0]).toHaveTextContent("between");
		expect(operators[1]).toHaveTextContent("and");
		const values = within(button).queryAllByTestId(testIds.DATA_VIEW_FILTER_VALUE);
		expect(values).toHaveLength(2);
		expect(values[0]).toHaveTextContent("3");
		expect(values[1]).toHaveTextContent("5");
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		await waitFor(() => expect(dropdown).not.toBeInTheDocument());
	});

	it("should not throw an error if data is not provided", async () => {
		await expect(new Promise((resolve, reject) => setup({ data: undefined }).then(resolve).catch(reject)))
			.resolves
			.not
			.toThrow();
	});
});
