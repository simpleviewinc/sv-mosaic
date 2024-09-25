import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { act } from "react";

import { ContentFieldTooltip } from "@root/components/Content/ContentFieldTooltip";
import testIds from "@root/utils/testIds";

async function setup() {
	const renderResult = await act(() => render(
		<ContentFieldTooltip
			tooltip="My Tooltip"
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render a tooltip icon", async () => {
		await setup();

		expect(screen.queryByTestId(testIds.CONTENT_TOOLTIP_ICON)).toBeInTheDocument();
	});

	it("should show a tooltip when the tooltip icon is hovered", async () => {
		const { user } = await setup();

		const icon = screen.queryByTestId(testIds.CONTENT_TOOLTIP_ICON);
		await user.hover(icon);
		expect(screen.queryByRole("tooltip")).toBeInTheDocument();
		await user.unhover(icon);
		expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
	});
});
