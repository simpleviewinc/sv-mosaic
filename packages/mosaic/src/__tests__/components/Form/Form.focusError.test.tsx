import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import type { FieldDef } from "@root/components/Field";
import Form, { useForm } from "@root/components/Form";
import { validateEmail } from "@root/utils/form";

const fields: FieldDef[] = [
	{
		name: "required",
		label: "Required",
		type: "text",
		required: true,
	},
	{
		name: "email",
		label: "Email",
		type: "text",
		validators: [validateEmail],
	},
];

function ErrorFocusForm() {
	const controller = useForm();

	return (
		<>
			<Form {...controller} fields={fields} title="Error focus" />
			<button type="button" onClick={() => void controller.methods.submitForm()}>Submit</button>
			<input aria-label="Outside" />
		</>
	);
}

const options = [
	{ label: "Cat", value: "cat" },
	{ label: "Dog", value: "dog" },
];

function FieldsForm({ fields }: { fields: FieldDef[] }) {
	const controller = useForm();

	return (
		<>
			<Form {...controller} fields={fields} title="Error focus" />
			<button type="button" onClick={() => void controller.methods.submitForm()}>Submit</button>
		</>
	);
}

function CustomField() {
	return <input aria-label="Custom" />;
}

describe("Form error focus", () => {
	it("focuses the first invalid field for each failed submission", async () => {
		const user = userEvent.setup();
		const scrollIntoView = vi.spyOn(HTMLElement.prototype, "scrollIntoView");
		render(<ErrorFocusForm />);

		await user.click(screen.getByRole("button", { name: "Submit" }));
		await waitFor(() => expect(screen.getByRole("textbox", { name: /Required/ })).toHaveFocus());
		expect(scrollIntoView).toHaveBeenCalled();

		await user.type(screen.getByRole("textbox", { name: /Required/ }), "ok");
		await user.type(screen.getByRole("textbox", { name: /Email/ }), "bad");
		await user.click(screen.getByRole("button", { name: "Submit" }));
		await waitFor(() => expect(screen.getByRole("textbox", { name: /Email/ })).toHaveFocus());

		await user.click(screen.getByRole("textbox", { name: /Outside/ }));
		await user.click(screen.getByRole("button", { name: "Submit" }));
		await waitFor(() => expect(screen.getByRole("textbox", { name: /Email/ })).toHaveFocus());
	});

	it("does not restore error focus when later validation updates errors", async () => {
		const user = userEvent.setup();
		render(<ErrorFocusForm />);

		await user.click(screen.getByRole("button", { name: "Submit" }));
		await waitFor(() => expect(screen.getByRole("textbox", { name: /Required/ })).toHaveFocus());

		const email = screen.getByRole("textbox", { name: /Email/ });
		await user.type(email, "bad");
		const outside = screen.getByRole("textbox", { name: /Outside/ });
		await user.click(outside);
		await waitFor(() => expect(email).toHaveAttribute("aria-invalid", "true"));
		expect(outside).toHaveFocus();
	});

	it("does not request error focus for a valid submission", async () => {
		const user = userEvent.setup();
		render(<ErrorFocusForm />);

		await user.type(screen.getByRole("textbox", { name: /Required/ }), "ok");
		await user.type(screen.getByRole("textbox", { name: /Email/ }), "valid@example.com");
		const submit = screen.getByRole("button", { name: "Submit" });
		await user.click(submit);

		expect(submit).toHaveFocus();
	});

	it.each([
		["checkbox", "checkbox"],
		["radio", "radio"],
	] as const)("focuses the first option of an invalid %s field", async (type, role) => {
		const user = userEvent.setup();
		render(
			<FieldsForm
				fields={[{ name: "pets", label: "Pets", type, required: true, inputSettings: { options } } as FieldDef]}
			/>,
		);

		await user.click(screen.getByRole("button", { name: "Submit" }));
		await waitFor(() => expect(screen.getByRole(role, { name: "Cat" })).toHaveFocus());
	});

	it("does not throw when the first invalid field is a custom field", async () => {
		const user = userEvent.setup();
		render(<FieldsForm fields={[{ name: "custom", label: "Custom", type: CustomField, required: true }]} />);

		const submit = screen.getByRole("button", { name: "Submit" });
		await user.click(submit);
		await act(() => new Promise(resolve => window.requestAnimationFrame(resolve)));

		expect(screen.getByRole("textbox", { name: "Custom" })).toBeInTheDocument();
		expect(submit).toHaveFocus();
	});
});
