import * as React from "react";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";

// Components
import IconButton from "./IconButton";

// Material UI
import MoreVertIcon from "@mui/icons-material/MoreVert";

afterEach(cleanup);

const { getByRole, getByText, getByTestId, queryByTitle } = screen;

describe("IconButton component", () => {
	it("should render icon button and fire onClick callback", async () => {
		const handleClick = jest.fn();
		render(
			<IconButton
				disabled={false}
				tooltipText='Tooltip text'
				icon={MoreVertIcon}
				onClick={handleClick}
			/>
		);
		const button = getByRole("button");
		const icon = getByTestId("icon-button-test");
	
		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(icon).toBeDefined();

		expect(handleClick).toHaveBeenCalled();

		fireEvent.mouseOver(icon);
		await waitFor(() => getByText("Tooltip text"));
	});
});

describe("Disabled IconButton component", () => {
	const handleClick = jest.fn();
	beforeEach(() => {
		render(
			<IconButton
				disabled={true}
				tooltipText='Tooltip text'
				icon={MoreVertIcon}
				onClick={handleClick}
			/>
		);
	});

	it("should not fire onClick callback", () => {
		const button = getByRole("button");

		fireEvent.click(button);

		expect(button).toBeDefined();
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("should not show the tooltip", () => {
		const tooltip = queryByTitle("Tooltip text");

		expect(tooltip).toBe(null);
	});
});
