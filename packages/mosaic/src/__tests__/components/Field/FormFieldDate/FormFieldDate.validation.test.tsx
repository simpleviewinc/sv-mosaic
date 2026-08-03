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

const requiredDateFields: FieldDef[] = [{
	name: "date",
	type: "date",
	label: "Date",
	required: true,
}];

function RequiredDateForm() {
	const controller = useForm();

	return (
		<>
			<pre data-testid="errors">{JSON.stringify(controller.state.errors)}</pre>
			<Form {...controller} fields={requiredDateFields} title="Test" />
		</>
	);
}

async function tabOutOfDatePicker(user: ReturnType<typeof userEvent.setup>) {
	// Empty fields have no clear button: sections → open calendar → next control.
	await user.tab();
	await user.tab();
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

	it("should fire onBlur when tabbing out through the open button", async () => {
		const onBlurMock = vi.fn();
		const user = userEvent.setup();

		render(
			<>
				<FormFieldDateWithBlur onBlur={onBlurMock} />
				<input data-testid="after" />
			</>,
		);

		await user.click(screen.getAllByRole("spinbutton")[0]);
		await tabOutOfDatePicker(user);

		await waitFor(() => {
			expect(onBlurMock).toHaveBeenCalled();
		});
		expect(screen.getByTestId("after")).toHaveFocus();
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

	it("should validate required date field when tabbing out through the open button", async () => {
		const user = userEvent.setup();
		render(
			<>
				<RequiredDateForm />
				<input data-testid="after" />
			</>,
		);

		await user.click(screen.getAllByRole("spinbutton")[0]);
		await tabOutOfDatePicker(user);

		await waitFor(() => {
			expect(screen.getByTestId("errors").textContent).not.toBe("{}");
		});
		expect(screen.getByTestId("after")).toHaveFocus();
	});
});

const requiredDateTimeFields: FieldDef[] = [{
	name: "requiredDateTime",
	type: "date",
	label: "Required Single Date Calendar",
	required: true,
	inputSettings: {
		showTime: true,
	},
}];

function RequiredDateTimeForm() {
	const controller = useForm();

	return (
		<>
			<pre data-testid="errors">{JSON.stringify(controller.state.errors)}</pre>
			<Form {...controller} fields={requiredDateTimeFields} title="Test" />
		</>
	);
}

describe("FormFieldDate showTime required validation timing", () => {
	it("should validate only the date subfield when tabbing from date to time", async () => {
		const user = userEvent.setup();
		render(<RequiredDateTimeForm />);

		await user.click(screen.getAllByRole("spinbutton")[0]);
		await user.tab(); // date open
		await user.tab(); // time sections

		await waitFor(() => {
			const errors = screen.getByTestId("errors").textContent;
			expect(errors).toContain("requiredDateTime.date");
			expect(errors).not.toContain("requiredDateTime.time");
		});
	});

	it("should validate only the time subfield when tabbing from time to date", async () => {
		const user = userEvent.setup();
		render(<RequiredDateTimeForm />);

		await user.click(screen.getByRole("spinbutton", { name: "Hours" }));
		await user.tab({ shift: true }); // back to date open
		await user.tab({ shift: true }); // into date sections

		await waitFor(() => {
			const errors = screen.getByTestId("errors").textContent;
			expect(errors).toContain("requiredDateTime.time");
			expect(errors).not.toContain("requiredDateTime.date");
		});
	});

	it("should validate each subfield after tabbing forward through both", async () => {
		const user = userEvent.setup();
		render(
			<>
				<RequiredDateTimeForm />
				<input data-testid="after" />
			</>,
		);

		await user.click(screen.getAllByRole("spinbutton")[0]);
		await user.tab(); // date open
		await user.tab(); // time sections
		await user.tab(); // time open
		await user.tab(); // leave

		await waitFor(() => {
			const errors = screen.getByTestId("errors").textContent;
			expect(errors).toContain("requiredDateTime.date");
			expect(errors).toContain("requiredDateTime.time");
		});
		expect(screen.getByTestId("after")).toHaveFocus();
	});
});
