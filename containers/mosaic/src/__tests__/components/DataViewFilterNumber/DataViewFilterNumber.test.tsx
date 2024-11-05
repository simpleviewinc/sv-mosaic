import { render, screen } from "@testing-library/react";
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
		expect(button).toHaveTextContent("Filter Number|5 or less");
	});

	it("should render the correct text if a minimum is provided but a maximum is not", async () => {
		await setup({ data: { min: 3 } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Number|3 or greater");
	});

	it("should render the correct text if both a minimum and a maximum are provided", async () => {
		await setup({ data: { min: 3, max: 5 } });

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Number|Between 3 and 5");
	});

	it("should display the filter popover when clicked and hide it again when escape is pressed", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button", { name: "Filter: Filter Number" });

		expect(button).toBeInTheDocument();
		await user.click(button);
		const dropdown = screen.queryByTestId(testIds.DATA_VIEW_FILTERS_DROPDOWN);
		expect(dropdown).toBeInTheDocument();
		await user.keyboard("{Escape}");
		expect(dropdown).not.toBeInTheDocument();
	});

	it("should not throw an error if data is not provided", async () => {
		await expect(new Promise((resolve, reject) => setup({ data: undefined }).then(resolve).catch(reject)))
			.resolves
			.not
			.toThrow();
	});
});
