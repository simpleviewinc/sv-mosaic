import { render, screen } from "@testing-library/react";
import React, { act } from "react";

import type { CheckboxProps } from "@root/components/Checkbox";

import Checkbox from "@root/components/Checkbox";
import testIds from "@root/utils/testIds";

async function setup(props: Partial<CheckboxProps> = {}) {
	const renderResult = await act(() => render(
		<Checkbox
			checked
			{...props}
		/>,
	));

	return {
		...renderResult,
	};
}

describe(__dirname, () => {
	it("should render a checkbox", async () => {
		await setup();

		expect(screen.queryByRole("checkbox")).toBeInTheDocument();
	});

	it("should render a checkbox unchecked", async () => {
		await setup({ checked: false });

		expect(screen.queryByRole("checkbox")).not.toBeChecked();
	});

	it("should render a checkbox disabled", async () => {
		await setup({ disabled: true });

		expect(screen.queryByRole("checkbox")).toBeDisabled();
	});

	it("should render a checkbox with a custom classname", async () => {
		await setup({ className: "MyCheckbox" });

		expect(screen.queryByTestId(testIds.CHECKBOX_WRAPPER)).toHaveClass("MyCheckbox");
	});
});
