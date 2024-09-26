import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewPagerProps } from "@root/components/DataView/DataViewPager";

import DataViewPager from "@root/components/DataView/DataViewPager";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<DataViewPagerProps> = {}) {
	const onSkipChangeMock = props.onSkipChange || vi.fn();

	const renderResult = await act(() => render(
		<DataViewPager
			count={100}
			limit={10}
			skip={0}
			onSkipChange={onSkipChangeMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view pager", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.DATA_VIEW_PAGER)).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "1 - 10 of 100" }));
		expect(screen.queryByRole("button", { name: "Previous Page" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Next Page" })).toBeInTheDocument();
	});

	it("should render previous button disabled if the first page is being displayed", async () => {
		await setup();

		const previous = screen.queryByRole("button", { name: "Previous Page" });

		expect(previous).toBeInTheDocument();
		expect(previous).toBeDisabled();
	});

	it("should render next button disabled if the last page is being displayed", async () => {
		await setup({ skip: 90 });

		const next = screen.queryByRole("button", { name: "Next Page" });

		expect(next).toBeInTheDocument();
		expect(next).toBeDisabled();
	});

	it("should invoke the on skip change handler with a skip number decreased by the limit when previous is clicked", async () => {
		const onSkipChangeMock = vi.fn();

		const { user } = await setup({ skip: 90, onSkipChange: onSkipChangeMock });

		const previous = screen.queryByRole("button", { name: "Previous Page" });

		expect(previous).toBeInTheDocument();
		await user.click(previous);

		expect(onSkipChangeMock).toBeCalledWith({ skip: 80 });
	});

	it("should invoke the on skip change handler with a skip number increased by the limit when next is clicked", async () => {
		const onSkipChangeMock = vi.fn();

		const { user } = await setup({ onSkipChange: onSkipChangeMock });

		const next = screen.queryByRole("button", { name: "Next Page" });

		expect(next).toBeInTheDocument();
		await user.click(next);

		expect(onSkipChangeMock).toBeCalledWith({ skip: 10 });
	});

	it("should render the data view pager if the total number of pages provided is 0", async () => {
		setup({ count: 0 });

		expect(screen.queryByTestId(testIds.DATA_VIEW_PAGER)).not.toBeInTheDocument();
	});
});
