import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

		const checkbox = screen.getByRole("checkbox", { name: "Green" });
		expect(checkbox).toHaveAttribute("aria-label", "Green");
		expect(screen.getByText("Green")).toHaveAttribute("aria-hidden", "true");
	});

	it("should expose an accessible name via aria-label when no visible label text is rendered", async () => {
		await setup({ label: undefined, "aria-label": "Green" });

		expect(screen.getByRole("checkbox", { name: "Green" })).toHaveAttribute("aria-label", "Green");
		expect(screen.queryByText("Green")).not.toBeInTheDocument();
	});

	it("should leave an unnamed checkbox without a generated name when no label is provided", async () => {
		await setup({ label: undefined });

		expect(screen.getByRole("checkbox")).not.toHaveAttribute("aria-label");
	});

	it("should preserve an explicit aria-label over the visible label", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);
		await setup({ label: "Green", "aria-label": "Green swatch" });

		expect(screen.getByRole("checkbox", { name: "Green swatch" })).toHaveAttribute("aria-label", "Green swatch");
		expect(screen.getByText("Green")).toHaveAttribute("aria-hidden", "true");
		expect(warnMock).toHaveBeenCalled();
	});

	it("should preserve aria-labelledby without adding a label fallback", async () => {
		const warnMock = vi.spyOn(console, "warn").mockImplementation(() => null);
		const heading = document.createElement("span");
		heading.id = "green-heading";
		heading.textContent = "Green swatch";
		document.body.appendChild(heading);
		try {
			await setup({ label: "Green", "aria-labelledby": heading.id });

			const checkbox = screen.getByRole("checkbox", { name: "Green swatch" });
			expect(checkbox).toHaveAttribute("aria-labelledby", heading.id);
			expect(checkbox).not.toHaveAttribute("aria-label");
			expect(screen.getByText("Green")).toHaveAttribute("aria-hidden", "true");
			expect(warnMock).toHaveBeenCalled();
		} finally {
			heading.remove();
		}
	});

	it("should toggle when the visible label is clicked", async () => {
		const onChange = vi.fn((event) => {
			expect(event.target.checked).toBe(true);
		});
		await setup({ checked: false, label: "Green", onChange });

		await userEvent.click(screen.getByText("Green"));

		expect(onChange).toHaveBeenCalledOnce();
	});

	it("should keep a disabled checkbox named", async () => {
		await setup({ checked: false, disabled: true, label: "Green" });

		const checkbox = screen.getByRole("checkbox", { name: "Green" });
		expect(checkbox).toBeDisabled();
		expect(checkbox).toHaveAttribute("aria-label", "Green");
		expect(screen.getByText("Green")).toHaveAttribute("aria-hidden", "true");
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
