import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { ChipListProps } from "@root/components/ChipList";

import ChipList from "@root/components/ChipList";
import { mockOptions } from "@root/mock";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<ChipListProps> = {}) {
	const renderResult = await act(() => render(
		<ChipList
			options={mockOptions}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render chips with title", async () => {
		await setup();

		expect(screen.getByText("Dog", { exact: true })).toBeInTheDocument();
		expect(screen.getByText("Cat", { exact: true })).toBeInTheDocument();
		expect(screen.getByText("Horse", { exact: true })).toBeInTheDocument();
	});

	it("should not throw an error when chips are undefined", async () => {
		expect(() => setup({
			options: undefined,
		})).not.toThrow();
	});

	it("should fire on delete handler with reduced chips when delete icon is clicked", async () => {
		const onDeleteMock = vi.fn();
		const { user } = await setup({
			onDelete: onDeleteMock,
			options: mockOptions.slice(0, 3),
		});

		const deleteIcon = screen.getAllByTestId(testIds.CHIP_DELETE_ICON);
		expect(deleteIcon).toHaveLength(3);
		const [firstDeleteIcon] = deleteIcon;
		await user.click(firstDeleteIcon);
		expect(onDeleteMock).toBeCalledWith(mockOptions.slice(1, 3));
	});

	it("should display all chips when show more button is clicked", async () => {
		const { user } = await setup();

		expect(screen.getAllByTestId(testIds.CHIP)).toHaveLength(8);
		const showMore = screen.getByRole("button", { name: "Show More" });
		expect(showMore).toBeInTheDocument();
		await user.click(showMore);
		expect(screen.getAllByTestId(testIds.CHIP)).toHaveLength(30);
	});

	it("should display max chips when show less button is clicked", async () => {
		const { user } = await setup();

		expect(screen.getAllByTestId(testIds.CHIP)).toHaveLength(8);
		const showMore = screen.getByRole("button", { name: "Show More" });
		expect(showMore).toBeInTheDocument();
		await user.click(showMore);
		expect(screen.getAllByTestId(testIds.CHIP)).toHaveLength(30);
		const showLess = screen.getByRole("button", { name: "Show Less" });
		expect(showLess).toBeInTheDocument();
		await user.click(showLess);
		expect(screen.getAllByTestId(testIds.CHIP)).toHaveLength(8);
	});
});
