import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewPagerPopoverProps } from "@root/components/DataView/DataViewPagerPopover";
import type { ButtonPopoverContextProps } from "@root/components";

import DataViewPagerPopover from "@root/components/DataView/DataViewPagerPopover";
import { ButtonPopoverContext } from "@root/components";

async function setup(props: Partial<DataViewPagerPopoverProps & ButtonPopoverContextProps> = {}) {
	const onSkipChangeMock = props.onSkipChange || vi.fn();
	const onCloseMock = props.onClose || vi.fn();

	const renderResult = await act(async () => await render(
		<ButtonPopoverContext.Provider value={{ onClose: onCloseMock }}>
			<DataViewPagerPopover
				currentPage={1}
				limit={10}
				onSkipChange={onSkipChangeMock}
				totalPages={25}
				{...props}
			/>
		</ButtonPopoverContext.Provider>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the data view pager popover", async () => {
		await setup();

		expect(screen.queryByText("Page")).toBeInTheDocument();
		expect(screen.queryByRole("textbox")).toBeInTheDocument();
		expect(screen.queryByText("of 25")).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Go" })).toBeInTheDocument();
		expect(screen.queryByRole("button", { name: "Cancel" })).toBeInTheDocument();
	});

	it("should invoke the on skip change handler with the correct value when a number is entered and go is clicked", async () => {
		const onSkipChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({ onSkipChange: onSkipChangeMock, onClose: onCloseMock });

		const input = screen.queryByRole("textbox");
		const button = screen.queryByRole("button", { name: "Go" });

		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();

		await user.clear(input);
		await user.type(input, "5");
		await user.click(button);

		expect(onSkipChangeMock).toBeCalledWith({ skip: 40 });
		expect(onCloseMock).toBeCalled();
	});

	it("should invoke the on skip change handler with the correct value when a number is entered the enter key is pressed", async () => {
		const onSkipChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({ onSkipChange: onSkipChangeMock, onClose: onCloseMock });

		const input = screen.queryByRole("textbox");
		expect(input).toBeInTheDocument();

		await user.clear(input);
		await user.type(input, "5");
		await user.keyboard("{Enter}");

		expect(onSkipChangeMock).toBeCalledWith({ skip: 40 });
		expect(onCloseMock).toBeCalled();
	});

	it("should do nothing on submission if the value entered is more than the total number of pages", async () => {
		const onSkipChangeMock = vi.fn();
		const onCloseMock = vi.fn();

		const { user } = await setup({ onSkipChange: onSkipChangeMock, onClose: onCloseMock });

		const input = screen.queryByRole("textbox");
		const button = screen.queryByRole("button", { name: "Go" });

		expect(input).toBeInTheDocument();
		expect(button).toBeInTheDocument();

		await user.type(input, "26");
		await user.click(button);

		expect(screen.queryByText("Number must be less than or equal to 25")).toBeInTheDocument();
		expect(onSkipChangeMock).not.toBeCalled();
		expect(onCloseMock).not.toBeCalled();
	});
});
