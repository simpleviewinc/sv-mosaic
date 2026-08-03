import { render, screen, within } from "@testing-library/react";
import React, { act } from "react";
import userEvent from "@testing-library/user-event";

import type { DataViewPrimaryFilterProps } from "@root/components/DataViewPrimaryFilter";

import DataViewPrimaryFilter from "@root/components/DataViewPrimaryFilter";

async function setup(props: Partial<DataViewPrimaryFilterProps> = {}) {
	const onClickMock = props.onClick || vi.fn();

	const renderResult = await act(async () => render(
		<DataViewPrimaryFilter
			label="Filter Primary"
			onClick={onClickMock}
			{...props}
		/>,
	));

	return {
		...renderResult,
		user: userEvent.setup(),
	};
}

describe(__dirname, () => {
	it("should render the primary filter content", async () => {
		await setup();

		expect(screen.queryByRole("button", { name: "Filter: Filter Primary" })).toBeInTheDocument();
	});

	it("should render the value alongside the label if provided", async () => {
		await setup({ parts: [{ type: "term", label: "My Query" }] });

		const button = screen.queryByRole("button", { name: "Filter: Filter Primary" });
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent("Filter Primary:My Query");
	});

	it("should render additional multiselect option count indicator if there is more than one option selected", async () => {
		await setup({ parts: [{ type: "term", label: "Option 1" }], multiselect: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }] });

		const button = screen.queryByRole("button", { name: "Filter: Filter Primary" });
		expect(button).toBeInTheDocument();
		expect(within(button).queryByText("+1")).toBeInTheDocument();
	});

	it("should list the additional multiselect options in a tooltip when the indicator is hovered", async () => {
		const { user } = await setup({ parts: [{ type: "term", label: "Option 1" }], multiselect: [{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }, { value: "option3", label: "Option 3" }] });

		const button = screen.queryByRole("button", { name: "Filter: Filter Primary" });
		expect(button).toBeInTheDocument();
		const additional = within(button).queryByText("+2");
		expect(additional).toBeInTheDocument();
		await user.hover(additional);
		const tooltip = screen.queryByRole("tooltip");
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveTextContent("Option 2, Option 3");
	});
});
