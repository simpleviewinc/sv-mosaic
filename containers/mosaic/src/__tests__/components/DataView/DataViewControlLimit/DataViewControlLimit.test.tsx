import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewControlLimitProps } from "@root/components/DataView/DataViewLimit";

import DataViewControlLimit from "@root/components/DataView/DataViewLimit";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewControlLimitProps> = {}) {
	const onLimitChangeMock = props.onLimitChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewControlLimit
			limit={10}
			onLimitChange={onLimitChangeMock}
			options={[10, 20, 30]}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view limit selection button", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_LIMIT_CONTROL)).toBeInTheDocument();
	});

	it("should list all of the options provided", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "10" })).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "20" })).toBeInTheDocument();
		expect(screen.queryByRole("menuitem", { name: "30" })).toBeInTheDocument();
	});

	it("should render the currently selected limit with a specific class", async () => {
		const { user } = await setup();

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		const limit10 = screen.queryByRole("menuitem", { name: "10" });
		expect(limit10).toBeInTheDocument();
		expect(limit10).toHaveClass("Mui-selected");
	});

	it("should invoke the on limit change handler with correct value if provided when menu item is selected", async () => {
		const onLimitChangeMock = vi.fn();

		const { user } = await setup({ onLimitChange: onLimitChangeMock });

		const button = screen.queryByRole("button");
		expect(button).toBeInTheDocument();
		await user.click(button);
		expect(screen.queryByRole("menu")).toBeInTheDocument();
		const limit20 = screen.queryByRole("menuitem", { name: "20" });
		expect(limit20).toBeInTheDocument();
		await user.click(limit20);
		expect(onLimitChangeMock).toBeCalledWith({ limit: 20 });
	});
});
