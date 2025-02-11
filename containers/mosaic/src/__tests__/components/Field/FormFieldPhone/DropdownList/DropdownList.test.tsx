import { render, screen } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DropdownListProps } from "@root/components/Field/FormFieldPhone/DropdownList/DropdownListTypes";

import DropdownList from "@root/components/Field/FormFieldPhone/DropdownList/DropdownList";

async function setup(props: Partial<DropdownListProps> = {}) {
	const renderResult = await act(async () => render(
		<DropdownList
			anchorEl={globalThis.document.createElement("ul")}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the phone dropdown list", async () => {
		await setup();

		expect(screen.queryByRole("tooltip")).toBeInTheDocument();
	});
});
