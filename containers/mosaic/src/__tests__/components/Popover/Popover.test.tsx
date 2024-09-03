import * as React from "react";
import { useState, MouseEvent } from "react";
import { render, cleanup, fireEvent, screen, waitFor } from "@testing-library/react";

// Components
import Popover from "@root/components/Popover";
import Button from "@root/components/Button";

afterEach(cleanup);

afterAll(() => {
	vi.clearAllTimers();
});

const PopoverExample = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [open, setOpen] = useState(false);

	const onClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				color="yellow"
				variant="contained"
				label="Open Popover"
				onClick={onClick}
			/>
			<Button
				color="yellow"
				variant="contained"
				label="Close Popover"
				onClick={handleClose}
			/>
			<Popover
				anchorEl={anchorEl}
				topContent={<p>Top Content</p>}
				bottomContent={<p>Bottom Content</p>}
				onClose={handleClose}
				open={open}
			/>
		</div>
	);
};

const { getByText, getByTestId, queryByText } = screen;

describe("Popover component", () => {
	beforeEach(() => {
		render(<PopoverExample />);
		fireEvent.click(getByText("Open Popover"));
	});

	it("should show the top and bottom content", () => {
		expect(getByText("Top Content")).toBeDefined();
		expect(getByText("Bottom Content")).toBeDefined();
	});

	it("shoul display the top and bottom content divider", () => {
		expect(getByTestId("bottom-content-split"));
	});

	it("should close the Popover", async () => {
		fireEvent.click(getByText("Close Popover"));

		await waitFor(() => {
			expect(queryByText("TopContent")).toBeNull();
			expect(queryByText("Bottom Content")).toBeNull();
		});
	});
});
