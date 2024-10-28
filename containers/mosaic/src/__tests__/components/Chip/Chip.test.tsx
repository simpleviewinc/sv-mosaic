import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import type { ChipsProps } from "@root/components/Chip";

import Chip from "@root/components/Chip";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<ChipsProps> = {}) {
	const renderResult = await act(() => render(
		<Chip
			label="My Chip"
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a chip with title", async () => {
		await setup();

		const chip = screen.queryByText("My Chip");

		expect(chip).toBeInTheDocument();
		expect(chip.parentNode).toHaveAttribute("title", "My Chip");
	});

	it("should render a deletable chip", async () => {
		const onDeleteMock = vi.fn();

		await setup({ onDelete: onDeleteMock });

		expect(screen.queryByText("My Chip")).toBeInTheDocument();
		expect(screen.queryByTestId(testIds.CHIP_DELETE_ICON)).toBeInTheDocument();

		// TODO: assert background colour when we've migrated to emotion
	});

	it("should render the correct background for a deletable disabled chip", async () => {
		const onDeleteMock = vi.fn();

		await setup({ onDelete: onDeleteMock, disabled: true });

		// TODO: assert background colour when we've migrated to emotion
	});

	it("should render the correct background for a selected chip", async () => {
		await setup({ selected: true });

		// TODO: assert background colour when we've migrated to emotion
	});

	it("should render the correct background for a clickable chip", async () => {
		const onClickMock = vi.fn();

		await setup({ onClick: onClickMock });

		// TODO: assert background colour when we've migrated to emotion
	});

	it("should render the correct background for a selected, clickable chip", async () => {
		const onClickMock = vi.fn();

		await setup({ selected: true, onClick: onClickMock });

		// TODO: assert background colour when we've migrated to emotion
	});

	it("should render the correct background for a selected, disabled chip", async () => {
		await setup({ selected: true, disabled: true });

		// TODO: assert background colour when we've migrated to emotion
	});
});
