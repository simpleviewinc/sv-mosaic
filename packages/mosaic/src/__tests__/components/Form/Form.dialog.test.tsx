import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Form, { useForm } from "@root/components/Form";

function TestForm({ handleDialogClose }: { handleDialogClose: (leave: boolean) => void }) {
	const controller = useForm();

	return (
		<Form
			{...controller}
			title="Test Form"
			fields={[]}
			dialogOpen
			handleDialogClose={handleDialogClose}
		/>
	);
}

describe("Form unsaved changes dialog", () => {
	it("treats Escape as cancel", async () => {
		const handleDialogClose = vi.fn();
		const user = userEvent.setup();
		render(<TestForm handleDialogClose={handleDialogClose} />);

		expect(screen.getByRole("dialog")).toBeInTheDocument();
		await user.keyboard("{Escape}");

		expect(handleDialogClose).toHaveBeenCalledWith(false);
	});
});
