import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Form, { useForm } from "@root/components/Form";
import type { FieldDef } from "@root/components/Field";

import FormFieldDate from "@root/components/Field/FormFieldDate/FormFieldDate";

function FormFieldDateWithBlur({ onBlur }: { onBlur: () => void }) {
	return (
		<FormFieldDate
			fieldDef={{ name: "date", label: "Date", type: "date", required: true }}
			onChange={vi.fn()}
			onBlur={onBlur}
			id="date-input"
		/>
	);
}

function RequiredDateForm() {
	const controller = useForm();
	const fields: FieldDef[] = [{
		name: "date",
		type: "date",
		label: "Date",
		required: true,
	}];

	return (
		<>
			<pre data-testid="errors">{JSON.stringify(controller.state.errors)}</pre>
			<Form {...controller} fields={fields} title="Test" />
		</>
	);
}

describe("FormFieldDate validation timing", () => {
	it("should not validate required date field on focus", async () => {
		const user = userEvent.setup();
		render(<RequiredDateForm />);

		const spinbutton = screen.getAllByRole("spinbutton")[0];
		await user.click(spinbutton);

		await waitFor(() => {
			expect(screen.getByTestId("errors").textContent).toBe("{}");
		});
	});

	it("should not fire onBlur when focusing via tab", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(
			<>
				<input data-testid="before" />
				<FormFieldDateWithBlur onBlur={onBlurMock} />
			</>,
		);

		await user.click(screen.getByTestId("before"));
		await user.tab();

		await waitFor(() => {
			expect(onBlurMock).not.toHaveBeenCalled();
		});
	});

	it("should not fire onBlur when clicking spinbutton", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(<FormFieldDateWithBlur onBlur={onBlurMock} />);

		await user.click(screen.getAllByRole("spinbutton")[0]);

		expect(onBlurMock).not.toHaveBeenCalled();
	});

	it("should not fire onBlur when clicking calendar button", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(<FormFieldDateWithBlur onBlur={onBlurMock} />);

		await user.click(screen.getByRole("button", { name: "Choose date" }));

		expect(onBlurMock).not.toHaveBeenCalled();
	});

	it("should validate required date field on blur", async () => {
		const user = userEvent.setup();
		render(
			<>
				<input data-testid="outside" />
				<RequiredDateForm />
			</>,
		);

		const spinbutton = screen.getAllByRole("spinbutton")[0];
		await user.click(spinbutton);
		await user.click(screen.getByTestId("outside"));

		await waitFor(() => {
			expect(screen.getByTestId("errors").textContent).not.toBe("{}");
		});
	});
});
