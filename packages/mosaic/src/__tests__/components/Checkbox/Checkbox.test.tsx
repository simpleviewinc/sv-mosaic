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

	it("should expose the label text as the checkbox's accessible name", async () => {
		await setup({ label: "Green" });

		expect(screen.queryByRole("checkbox", { name: "Green" })).toBeInTheDocument();
	});

	it("should expose an accessible name via aria-label when no visible label text is rendered", async () => {
		await setup({ label: undefined, "aria-label": "Green" });

		expect(screen.queryByRole("checkbox", { name: "Green" })).toBeInTheDocument();
	});

	it("should warn when both a visible label and an aria-label are provided", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);

		await setup({ label: "Green", "aria-label": "Some swatch" });

		expect(warnMock).toHaveBeenCalledWith(expect.stringContaining("takes precedence"));
	});

	it("should warn when both a visible label and an aria-labelledby are provided", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);

		await setup({ label: "Green", "aria-labelledby": "some-heading" });

		expect(warnMock).toHaveBeenCalledWith(expect.stringContaining("takes precedence"));
	});

	it("should not warn when an aria-label is provided without a visible label", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);

		await setup({ label: undefined, "aria-label": "Green" });

		expect(warnMock).not.toHaveBeenCalled();
	});
});
